(function () {
  "use strict";

  var NOTES = window.NOTES || [];
  var bySlug = {};
  NOTES.forEach(function (n, i) { n.index = i; bySlug[n.slug] = n; });

  var $ = function (id) { return document.getElementById(id); };
  var docEl = $("doc"), navEl = $("nav"), tocEl = $("toc"), pagerEl = $("pager"), searchEl = $("search");
  var query = "";
  var current = null;

  // ---------- Theme ----------
  function readTheme() { try { return localStorage.getItem("theme"); } catch (e) { return null; } }
  function saveTheme(t) { try { localStorage.setItem("theme", t); } catch (e) {} }
  var saved = readTheme();
  if (saved) document.documentElement.setAttribute("data-theme", saved);
  $("themeBtn").addEventListener("click", function () {
    var isDark = document.documentElement.getAttribute("data-theme") === "dark" ||
      (!document.documentElement.getAttribute("data-theme") && matchMedia("(prefers-color-scheme: dark)").matches);
    var next = isDark ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    saveTheme(next);
  });

  // ---------- Mobile menu ----------
  function setMenu(open) {
    document.body.classList.toggle("nav-open", open);
    $("menuBtn").setAttribute("aria-expanded", String(open));
  }
  $("menuBtn").addEventListener("click", function () { setMenu(!document.body.classList.contains("nav-open")); });
  $("scrim").addEventListener("click", function () { setMenu(false); });

  // ---------- Markdown rendering ----------
  var slugCounts = {};
  function slugify(text) {
    var base = text.toLowerCase()
      .replace(/<[^>]+>/g, "")
      .replace(/&[a-z#0-9]+;/g, "")
      .replace(/[^\p{L}\p{N}\s-]/gu, "")
      .trim().replace(/\s+/g, "-");
    if (!base) base = "section";
    var n = slugCounts[base] || 0;
    slugCounts[base] = n + 1;
    return n ? base + "-" + n : base;
  }

  // Turn links between notes (e.g. "ch05-....md#part-a") into in-site routes.
  function rewriteHref(href) {
    if (!href) return href;
    var m = href.match(/^(?:\.\/)?([\w-]+)\.md(?:#(.*))?$/);
    if (m && bySlug[m[1]]) return "#/" + m[1] + (m[2] ? "/" + m[2] : "");
    if (href.charAt(0) === "#" && current) return "#/" + current.slug + "/" + href.slice(1);
    return href;
  }

  var renderer = new marked.Renderer();
  renderer.heading = function (text, level, raw) {
    var id = slugify(raw);
    var anchor = level > 1 && level < 4 ? '<a class="heading-anchor" href="#/' + current.slug + "/" + id + '" aria-label="Link to section">#</a>' : "";
    return "<h" + level + ' id="' + id + '">' + text + anchor + "</h" + level + ">\n";
  };
  renderer.link = function (href, title, text) {
    var out = rewriteHref(href);
    var external = /^https?:/.test(out);
    return '<a href="' + out + '"' + (title ? ' title="' + title + '"' : "") +
      (external ? ' target="_blank" rel="noopener"' : "") + ">" + text + "</a>";
  };
  renderer.table = function (header, body) {
    return '<div class="table-wrap"><table><thead>' + header + "</thead><tbody>" + body + "</tbody></table></div>\n";
  };
  marked.use({ renderer: renderer, gfm: true });

  // ---------- Navigation ----------
  function countHits(note, q) {
    if (!q) return 0;
    var hay = note.md.toLowerCase(), n = 0, i = 0;
    while ((i = hay.indexOf(q, i)) !== -1) { n++; i += q.length; }
    return n;
  }

  function renderNav() {
    var q = query.toLowerCase();
    var html = "";
    NOTES.forEach(function (n) {
      var hits = countHits(n, q);
      if (q && !hits && n.label.toLowerCase().indexOf(q) === -1) return;
      html += '<a class="nav-item' + (current && current.slug === n.slug ? " active" : "") + '" href="#/' + n.slug + '">' +
        '<span class="tag">' + (n.tag || "") + "</span><span>" + n.label + "</span>" +
        (q ? '<span class="hits">' + hits + "</span>" : "") + "</a>";
    });
    navEl.innerHTML = html || '<div class="nav-empty">No matches</div>';
  }

  searchEl.addEventListener("input", function () {
    query = searchEl.value.trim();
    renderNav();
    if (current) highlight();
  });

  // ---------- Search highlight ----------
  function clearMarks() {
    docEl.querySelectorAll("mark").forEach(function (m) {
      m.replaceWith(document.createTextNode(m.textContent));
    });
    docEl.normalize();
  }
  function highlight() {
    clearMarks();
    var q = query.toLowerCase();
    if (q.length < 2) return null;
    var walker = document.createTreeWalker(docEl, NodeFilter.SHOW_TEXT, null);
    var nodes = [], node;
    while ((node = walker.nextNode())) {
      if (node.nodeValue.toLowerCase().indexOf(q) !== -1) nodes.push(node);
    }
    var first = null;
    nodes.forEach(function (t) {
      var text = t.nodeValue, lower = text.toLowerCase(), frag = document.createDocumentFragment(), pos = 0, i;
      while ((i = lower.indexOf(q, pos)) !== -1) {
        frag.appendChild(document.createTextNode(text.slice(pos, i)));
        var mark = document.createElement("mark");
        mark.textContent = text.slice(i, i + q.length);
        frag.appendChild(mark);
        if (!first) first = mark;
        pos = i + q.length;
      }
      frag.appendChild(document.createTextNode(text.slice(pos)));
      t.parentNode.replaceChild(frag, t);
    });
    return first;
  }

  // ---------- Table of contents ----------
  var tocObserver = null;
  function renderToc() {
    var heads = docEl.querySelectorAll("h2");
    if (heads.length < 2) { tocEl.innerHTML = ""; return; }
    var html = '<div class="toc-title">On this page</div>';
    heads.forEach(function (h) {
      var label = h.cloneNode(true);
      var a = label.querySelector(".heading-anchor");
      if (a) a.remove();
      html += '<a href="#/' + current.slug + "/" + h.id + '" data-id="' + h.id + '">' + label.textContent + "</a>";
    });
    tocEl.innerHTML = html;

    if (tocObserver) tocObserver.disconnect();
    if (!("IntersectionObserver" in window)) return;
    tocObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        tocEl.querySelectorAll("a").forEach(function (a) { a.classList.toggle("active", a.dataset.id === e.target.id); });
      });
    }, { rootMargin: "-64px 0px -70% 0px" });
    heads.forEach(function (h) { tocObserver.observe(h); });
  }

  // ---------- Pager ----------
  function renderPager() {
    var prev = NOTES[current.index - 1], next = NOTES[current.index + 1], html = "";
    if (prev) html += '<a class="prev" href="#/' + prev.slug + '"><span class="dir">← Previous</span>' + prev.label + "</a>";
    if (next) html += '<a class="next" href="#/' + next.slug + '"><span class="dir">Next →</span>' + next.label + "</a>";
    pagerEl.innerHTML = html;
  }

  // ---------- Router ----------
  function parseHash() {
    var h = decodeURIComponent(location.hash.replace(/^#\/?/, ""));
    var parts = h.split("/");
    return { slug: parts[0] || "README", anchor: parts.slice(1).join("/") };
  }

  function route() {
    var r = parseHash();
    var note = bySlug[r.slug] || NOTES[0];
    if (!note) { docEl.innerHTML = "<p>No notes found. Run <code>python3 build.py</code>.</p>"; return; }

    if (!current || current.slug !== note.slug) {
      current = note;
      slugCounts = {};
      docEl.innerHTML = marked.parse(note.md);
      document.title = note.label + " · Scrum PM Notes";
      renderToc();
      renderPager();
    }
    renderNav();
    setMenu(false);

    var firstHit = highlight();
    var target = r.anchor && document.getElementById(r.anchor);
    if (target) target.scrollIntoView();
    else if (firstHit) firstHit.scrollIntoView({ block: "center" });
    else window.scrollTo(0, 0);
  }

  window.addEventListener("hashchange", route);

  // ---------- Back to top ----------
  var toTop = $("toTop");
  window.addEventListener("scroll", function () { toTop.classList.toggle("show", window.scrollY > 800); }, { passive: true });
  toTop.addEventListener("click", function () { window.scrollTo({ top: 0, behavior: "smooth" }); });

  // "/" focuses search
  document.addEventListener("keydown", function (e) {
    if (e.key === "/" && document.activeElement !== searchEl) { e.preventDefault(); searchEl.focus(); }
    if (e.key === "Escape") { setMenu(false); searchEl.blur(); }
  });

  route();
})();
