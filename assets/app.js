(function () {
  "use strict";

  // ---------------------------------------------------------------------------
  // Data
  // ---------------------------------------------------------------------------
  var NOTES = window.NOTES || [];
  var bySlug = {};
  NOTES.forEach(function (n, i) { n.index = i; bySlug[n.slug] = n; });

  var HIGH_YIELD = [
    { n: "01", t: "Agile 4 values & 12 principles", d: "Manifesto values with examples; explain at least 6 principles.", slug: "ch02-agile-manifesto", a: "The Manifesto text and the 4 Values" },
    { n: "02", t: "Scrum cycle", d: "Sprint planning, daily scrum, sprint review, with the cycle diagram.", slug: "ch03-scrum-elements-and-terminology", a: "The Scrum cycle diagram" },
    { n: "03", t: "Retrospective stages", d: "Set the stage, gather data, generate insights, decide what to do, close.", slug: "ch07-sprint-events-and-retrospective", a: "Sprint Retrospective" },
    { n: "04", t: "Burndown & burnup charts", d: "Axes, ideal line, reading patterns, scope changes.", slug: "ch08-progress-tracking-burndown-burnup-cfd", a: "Burndown chart" },
    { n: "05", t: "Cumulative flow diagrams", d: "Bands, WIP, cycle time, bottlenecks, Little's Law.", slug: "ch08-progress-tracking-burndown-burnup-cfd", a: "Cumulative Flow Diagram" },
    { n: "06", t: "Team space & radiators", d: "Caves and commons, information radiator, task board, Kanban board.", slug: "ch05-scrum-teams-roles-team-space", a: "Team Space and High-Touch" },
    { n: "07", t: "Scrum roles", d: "Scrum Master, Product Owner, Development Team, Sponsor.", slug: "ch05-scrum-teams-roles-team-space", a: "Roles in Scrum" },
    { n: "08", t: "Traditional vs Agile", d: "Planning, customer involvement, delivery, change, plus advantages.", slug: "ch01-basics-of-project-management", a: "Traditional vs Agile Project Management" },
    { n: "09", t: "14 presentation topics", d: "Planned questions and model answers for every topic.", slug: "presentation-topics-qna", a: "" }
  ];

  // ---------------------------------------------------------------------------
  // Helpers
  // ---------------------------------------------------------------------------
  var $ = function (id) { return document.getElementById(id); };
  var viewEl = $("view"), navEl = $("nav"), tocEl = $("toc"), pagerEl = $("pager"), layoutEl = document.querySelector(".layout");
  var isMac = /Mac|iPhone|iPad/.test(navigator.platform || navigator.userAgent);
  document.querySelectorAll(".kbd-mod").forEach(function (k) { k.textContent = isMac ? "⌘K" : "Ctrl K"; });
  var root = document.documentElement;

  function esc(s) { return String(s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); }
  function norm(s) { return String(s).toLowerCase().replace(/[^\p{L}\p{N}]+/gu, ""); }
  function store(key, val) { try { if (val === undefined) return localStorage.getItem(key); localStorage.setItem(key, val); } catch (e) { return null; } }
  function plain(md) {
    return md.replace(/```[\s\S]*?```/g, " ").replace(/[*_`>#|]/g, " ").replace(/\[([^\]]*)\]\([^)]*\)/g, "$1").replace(/\s+/g, " ");
  }

  function readJSON(key, fallback) { try { var v = JSON.parse(store(key)); return v == null ? fallback : v; } catch (e) { return fallback; } }

  var toastEl = $("toast"), toastTimer = null;
  function toast(msg) {
    toastEl.textContent = msg;
    toastEl.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { toastEl.classList.remove("show"); }, 1800);
  }

  // ---------------------------------------------------------------------------
  // Progress (chapters marked as done)
  // ---------------------------------------------------------------------------
  var done = {};
  readJSON("done", []).forEach(function (s) { done[s] = true; });
  function saveDone() { store("done", JSON.stringify(Object.keys(done))); }
  function toggleDone(slug) {
    if (done[slug]) delete done[slug]; else done[slug] = true;
    saveDone(); renderNav();
    toast(done[slug] ? "Marked as done" : "Marked as not done");
  }

  // ---------------------------------------------------------------------------
  // Bookmarks: whole pages ("#/slug") or sections ("#/slug/id")
  // ---------------------------------------------------------------------------
  var bookmarks = readJSON("bookmarks", []);
  function isSaved(href) { return bookmarks.some(function (b) { return b.href === href; }); }
  function toggleBookmark(href, t, s) {
    if (isSaved(href)) bookmarks = bookmarks.filter(function (b) { return b.href !== href; });
    else bookmarks.unshift({ href: href, t: t, s: s || "" });
    store("bookmarks", JSON.stringify(bookmarks));
    syncBookmarkBtn();
    renderNav();
    toast(isSaved(href) ? "Saved to your list" : "Removed from saved");
    return isSaved(href);
  }
  var bookmarkBtn = $("bookmarkBtn"), currentPage = null;
  function syncBookmarkBtn() {
    var on = !!currentPage && isSaved(currentPage.href);
    bookmarkBtn.classList.toggle("on", on);
    bookmarkBtn.disabled = !currentPage;
    bookmarkBtn.setAttribute("aria-pressed", String(on));
    var pb = $("savePageBtn");
    if (pb) { pb.classList.toggle("on", on); pb.textContent = on ? "★ Saved" : "☆ Save"; }
  }
  function toggleCurrentPage() { if (currentPage) toggleBookmark(currentPage.href, currentPage.t, currentPage.s); }
  bookmarkBtn.addEventListener("click", toggleCurrentPage);

  // ---------------------------------------------------------------------------
  // Settings: theme, text size, self-test, focus
  // ---------------------------------------------------------------------------
  var settingsEl = $("settings"), settingsBtn = $("settingsBtn"), selfBtn = $("selfTestBtn");
  function setTheme(v) { root.setAttribute("data-theme", v); store("theme", v); syncSettings(); }
  function setSize(v) { root.setAttribute("data-size", v); store("size", v); syncSettings(); }
  function setFlag(name, on) {
    root.classList.toggle(name, on);
    store(name, on ? "1" : "0");
    if (name === "selftest") viewEl.querySelectorAll(".qa.open").forEach(function (q) { q.classList.remove("open"); });
    syncSettings();
  }
  function toggleFlag(name) {
    var on = !root.classList.contains(name);
    setFlag(name, on);
    toast((name === "selftest" ? "Self-test " : "Focus mode ") + (on ? "on" : "off"));
  }
  function syncSettings() {
    var vals = { theme: root.getAttribute("data-theme") || "dark", size: root.getAttribute("data-size") || "m" };
    settingsEl.querySelectorAll(".seg").forEach(function (seg) {
      seg.querySelectorAll("button").forEach(function (b) { b.classList.toggle("on", b.dataset.v === vals[seg.dataset.setting]); });
    });
    settingsEl.querySelectorAll(".sw").forEach(function (sw) { sw.setAttribute("aria-pressed", String(root.classList.contains(sw.dataset.toggle))); });
    selfBtn.setAttribute("aria-pressed", String(root.classList.contains("selftest")));
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", vals.theme === "light" ? "#eef1f6" : "#06080c");
  }
  function setSettings(open) {
    settingsEl.hidden = !open;
    settingsBtn.setAttribute("aria-expanded", String(open));
  }
  settingsBtn.addEventListener("click", function (e) { e.stopPropagation(); setSettings(settingsEl.hidden); });
  settingsEl.addEventListener("click", function (e) {
    var b = e.target.closest("button"); if (!b) return;
    var seg = b.closest(".seg");
    if (seg) { (seg.dataset.setting === "theme" ? setTheme : setSize)(b.dataset.v); return; }
    if (b.dataset.toggle) { toggleFlag(b.dataset.toggle); return; }
  });
  document.addEventListener("click", function (e) {
    if (!settingsEl.hidden && !settingsEl.contains(e.target) && e.target !== settingsBtn) setSettings(false);
  });
  selfBtn.addEventListener("click", function () { toggleFlag("selftest"); });
  $("resetBtn").addEventListener("click", function () {
    if (!confirm("Clear chapters marked as done, saved pages and quiz scores?")) return;
    done = {}; bookmarks = [];
    ["done", "bookmarks", "quizBest", "last"].forEach(function (k) { try { localStorage.removeItem(k); } catch (e) {} });
    setSettings(false);
    route();
    toast("Progress and bookmarks cleared");
  });
  syncSettings();

  // ---------------------------------------------------------------------------
  // Dialogs: shortcuts
  // ---------------------------------------------------------------------------
  var shortcutsEl = $("shortcuts");
  function setShortcuts(open) { shortcutsEl.hidden = !open; if (open) setSettings(false); }
  $("shortcutsBtn").addEventListener("click", function () { setShortcuts(true); });
  shortcutsEl.addEventListener("click", function (e) { if (e.target === shortcutsEl || e.target.closest("[data-close]")) setShortcuts(false); });

  // ---------------------------------------------------------------------------
  // Mobile drawer and tab bar
  // ---------------------------------------------------------------------------
  function setMenu(open) {
    document.body.classList.toggle("nav-open", open);
    $("menuBtn").setAttribute("aria-expanded", String(open));
    $("tabMenu").classList.toggle("active", open);
  }
  $("menuBtn").addEventListener("click", function () { setMenu(!document.body.classList.contains("nav-open")); });
  $("tabMenu").addEventListener("click", function () { setMenu(!document.body.classList.contains("nav-open")); });
  $("scrim").addEventListener("click", function () { setMenu(false); });
  $("nav").addEventListener("click", function (e) { if (e.target.closest("a")) setMenu(false); });
  function syncTabbar() {
    var tab = currentRoute === "home" ? "home" : currentRoute === "quiz" ? "quiz" : currentRoute === "saved" ? "saved" : "";
    document.querySelectorAll("#tabbar [data-tab]").forEach(function (t) {
      if (t.dataset.tab === "menu" || t.dataset.tab === "search") return;
      t.classList.toggle("active", t.dataset.tab === tab);
    });
  }

  // ---------------------------------------------------------------------------
  // Markdown rendering
  // ---------------------------------------------------------------------------
  var renderingSlug = "", slugCounts = {};
  function slugify(text) {
    var base = text.toLowerCase().replace(/<[^>]+>/g, "").replace(/&[a-z#0-9]+;/g, "")
      .replace(/[^\p{L}\p{N}\s-]/gu, "").trim().replace(/\s+/g, "-") || "section";
    var n = slugCounts[base] || 0;
    slugCounts[base] = n + 1;
    return n ? base + "-" + n : base;
  }
  function rewriteHref(href) {
    if (!href) return href;
    var m = href.match(/^(?:\.\/)?([\w-]+)\.md(?:#(.*))?$/);
    if (m && bySlug[m[1]]) return "#/" + m[1] + (m[2] ? "/" + m[2] : "");
    if (href.charAt(0) === "#") return "#/" + renderingSlug + "/" + href.slice(1);
    return href;
  }
  var renderer = new marked.Renderer();
  var ICON_SAVE = '<svg viewBox="0 0 24 24"><path d="M7 4h10a1 1 0 0 1 1 1v15l-6-4-6 4V5a1 1 0 0 1 1-1Z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>';
  var ICON_LINK = '<svg viewBox="0 0 24 24"><path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>';
  renderer.heading = function (text, level, raw) {
    var id = slugify(raw);
    var tools = level > 1 && level < 4 ? '<span class="h-tools"><button class="h-tool" type="button" data-act="save" data-id="' + id + '" aria-label="Save section">' + ICON_SAVE +
      '</button><button class="h-tool" type="button" data-act="copy" data-id="' + id + '" aria-label="Copy link to section">' + ICON_LINK + "</button></span>" : "";
    return "<h" + level + ' id="' + id + '">' + text + tools + "</h" + level + ">\n";
  };
  renderer.link = function (href, title, text) {
    var out = rewriteHref(href), ext = /^https?:/.test(out);
    return '<a href="' + out + '"' + (title ? ' title="' + title + '"' : "") + (ext ? ' target="_blank" rel="noopener"' : "") + ">" + text + "</a>";
  };
  renderer.table = function (header, body) {
    return '<div class="table-wrap"><table><thead>' + header + "</thead><tbody>" + body + "</tbody></table></div>\n";
  };
  marked.use({ renderer: renderer, gfm: true });

  // Replace ⭐ markers and 📘/📗 source emojis with styled chips (outside code blocks).
  var TOKEN_RE = /⭐⭐⭐|⭐⭐|⭐|📘|📗/g;
  var TOKEN_HTML = {
    "⭐⭐⭐": '<span class="pill hy">High-yield</span>',
    "⭐⭐": '<span class="pill imp">Important</span>',
    "⭐": '<span class="pill gtk">Good to know</span>',
    "📘": '<span class="src fac">Slides</span>',
    "📗": '<span class="src txt">Textbook</span>'
  };
  function decorateTokens(root) {
    var walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode: function (n) { return n.parentNode.closest("pre, code") ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT; }
    });
    var nodes = [], node;
    while ((node = walker.nextNode())) { TOKEN_RE.lastIndex = 0; if (TOKEN_RE.test(node.nodeValue)) nodes.push(node); }
    nodes.forEach(function (t) {
      var span = document.createElement("span");
      span.innerHTML = esc(t.nodeValue).replace(TOKEN_RE, function (m) { return TOKEN_HTML[m]; });
      t.replaceWith.apply(t, Array.prototype.slice.call(span.childNodes));
    });
  }

  // Turn "**Q1. …** answer…" paragraphs into question cards with collapsible answers.
  var Q_RE = /^Q(\d+(?:\.\d+)?)[.:]?\s*/;
  function buildQA(root) {
    var kids = Array.prototype.slice.call(root.children), i = 0;
    function isQ(el) {
      if (!el || el.tagName !== "P") return false;
      var f = el.firstElementChild;
      return f && f.tagName === "STRONG" && el.firstChild === f && Q_RE.test(f.textContent);
    }
    while (i < kids.length) {
      var el = kids[i];
      if (!isQ(el)) { i++; continue; }
      var strong = el.firstElementChild, num = strong.textContent.match(Q_RE)[1];
      var card = document.createElement("div");
      card.className = "qa";
      var q = document.createElement("div");
      q.className = "qa-q";
      q.innerHTML = '<span class="qa-badge">Q' + num + '</span><p></p>';
      var qp = q.querySelector("p");
      qp.innerHTML = strong.innerHTML.replace(/^\s*Q\d+(?:\.\d+)?[.:]?\s*/, "");
      var a = document.createElement("div");
      a.className = "qa-a";
      strong.remove();
      while (el.firstChild && (el.firstChild.nodeName === "BR" || (el.firstChild.nodeType === 3 && !el.firstChild.nodeValue.trim()))) el.firstChild.remove();
      if (el.textContent.trim()) a.appendChild(el.cloneNode(true));
      el.replaceWith(card);
      card.appendChild(q);
      var btn = document.createElement("button");
      btn.className = "qa-reveal";
      btn.type = "button";
      btn.textContent = "Reveal answer";
      i++;
      while (i < kids.length && !isQ(kids[i]) && !/^(H1|H2|H3|H4|HR)$/.test(kids[i].tagName)) { a.appendChild(kids[i]); i++; }
      if (a.childNodes.length) { card.appendChild(btn); card.appendChild(a); }
    }
  }

  var cache = {};
  function renderNote(note) {
    if (cache[note.slug]) return cache[note.slug];
    renderingSlug = note.slug; slugCounts = {};
    var box = document.createElement("div");
    box.innerHTML = marked.parse(note.md);
    decorateTokens(box);
    buildQA(box);
    var heads = [];
    box.querySelectorAll("h2, h3").forEach(function (h) {
      var c = h.cloneNode(true);
      c.querySelectorAll(".h-tools, .pill, .src").forEach(function (x) { x.remove(); });
      heads.push({ id: h.id, level: +h.tagName[1], text: c.textContent.replace(/\(\s*[;,]?\s*\)/g, "").replace(/\(\s*[;,]?\s+/g, "(").replace(/\s{2,}/g, " ").trim(), hy: !!h.querySelector(".pill.hy") });
    });
    var out = { html: box.innerHTML, heads: heads, qa: box.querySelectorAll(".qa").length };
    cache[note.slug] = out;
    return out;
  }

  // ---------------------------------------------------------------------------
  // Glossary data
  // ---------------------------------------------------------------------------
  var GLOSSARY = [];
  (function () {
    var g = bySlug.glossary; if (!g) return;
    var letter = "";
    g.md.split("\n").forEach(function (line) {
      var h = line.match(/^##\s+(.+)$/);
      if (h) { letter = h[1].trim(); return; }
      var m = line.match(/^- \*\*(.+?)\*\*\s*(📘|📗)?\s*:\s*(.+)$/);
      if (m) GLOSSARY.push({ term: m[1], src: m[2] || "", def: m[3], letter: letter });
    });
  })();

  // ---------------------------------------------------------------------------
  // Navigation
  // ---------------------------------------------------------------------------
  var GROUPS = [["start", "Start"], ["chapters", "Chapters"], ["practice", "Practice"]];
  var currentRoute = "";
  function navLink(href, tag, label, slug, count) {
    var active = currentRoute === href.slice(2);
    var cls = "nav-item" + (active ? " active" : "") + (slug && done[slug] ? " done" : "");
    return '<a class="' + cls + '" href="' + href + '"' + (active ? ' aria-current="page"' : "") + '><span class="tag">' + esc(tag || "") + '</span><span class="label">' + esc(label) + "</span>" +
      (count ? '<span class="count">' + count + "</span>" : "") +
      (slug ? '<span class="done-dot" title="' + (done[slug] ? "Done" : "Not done yet") + '"></span>' : "") + "</a>";
  }
  function renderNav() {
    var html = "";
    GROUPS.forEach(function (g) {
      html += '<div class="nav-group"><div class="nav-group-title">' + g[1] + "</div>";
      if (g[0] === "start") html += navLink("#/home", "⌂", "Home");
      NOTES.filter(function (n) { return n.group === g[0]; }).forEach(function (n) { html += navLink("#/" + n.slug, n.tag, n.label, n.slug); });
      if (g[0] === "practice") {
        html += navLink("#/flashcards", "↻", "Flashcards");
        html += navLink("#/quiz", "?", "Quiz mode");
        html += navLink("#/saved", "★", "Saved", null, bookmarks.length || "");
      }
      html += "</div>";
    });
    navEl.innerHTML = html;
    var total = NOTES.length, d = NOTES.filter(function (n) { return done[n.slug]; }).length, pct = Math.round((d / total) * 100);
    $("sideProgress").innerHTML = '<div class="sp-top"><span>Your progress</span><b>' + d + "/" + total + '</b></div><div class="bar"><i style="width:' + pct + '%"></i></div>';
  }

  // ---------------------------------------------------------------------------
  // Views
  // ---------------------------------------------------------------------------
  function readMins(md) { return Math.max(1, Math.round(plain(md).split(" ").length / 220)); }

  function viewHome() {
    var chapters = NOTES.filter(function (n) { return n.group === "chapters"; });
    var qaTotal = 0;
    NOTES.forEach(function (n) { qaTotal += renderNote(n).qa; });
    var doneCh = chapters.filter(function (n) { return done[n.slug]; }).length;
    var hy = HIGH_YIELD.map(function (h) {
      var href = "#/" + h.slug + (h.a ? "/" + encodeURIComponent(h.a) : "");
      return '<a class="card hy-card glass" href="' + href + '"><span class="k">TOPIC ' + h.n + '</span><span class="t">' + esc(h.t) + '</span><span class="d">' + esc(h.d) +
        '</span><span class="foot"><span>' + esc(bySlug[h.slug] ? bySlug[h.slug].label : "") + "</span><span>→</span></span></a>";
    }).join("");
    var ch = chapters.map(function (n) {
      return '<a class="card glass' + (done[n.slug] ? " done" : "") + '" href="#/' + n.slug + '"><span class="k">CH ' + esc(n.tag) + '</span><span class="t">' + esc(n.label) +
        '</span><span class="foot"><span>' + readMins(n.md) + ' min read</span><span class="chk">' + (done[n.slug] ? "✓ done" : "") + "</span></span></a>";
    }).join("");
    var practice = [
      ["#/rapid-revision", "REVISE", "Rapid Revision", "Every list, number and formula on one page."],
      ["#/quiz", "QUIZ", "Quiz mode", "10 quick multiple-choice questions from the glossary."],
      ["#/flashcards", "CARDS", "Flashcards", "Flip through every definition."],
      ["#/presentation-topics-qna", "Q&A", "14 Presentation Topics", "Planned questions with model answers."],
      ["#/quiz-bank-from-answer-keys", "BANK", "Quiz Bank", "Faculty one-word, true/false and match items."],
      ["#/glossary", "A–Z", "Glossary", GLOSSARY.length + " definitions, searchable."]
    ].map(function (p) {
      return '<a class="card glass" href="' + p[0] + '"><span class="k">' + p[1] + '</span><span class="t">' + p[2] + '</span><span class="d">' + esc(p[3]) + "</span></a>";
    }).join("");

    var last = readJSON("last", null), resume = "";
    if (last && bySlug[last.slug]) {
      resume = '<a class="resume glass" href="#/' + last.slug + '" data-resume="1"><span class="r-icon">↻</span><span><span class="r-k">Continue reading</span>' +
        '<span class="r-t">' + esc(bySlug[last.slug].label) + "</span></span><span class=\"r-go\">" + (last.p ? last.p + "%" : "") + " →</span></a>";
    }
    var best = readJSON("quizBest", null);

    viewEl.innerHTML =
      '<section class="hero"><span class="eyebrow">MBA OM · Semester III</span>' +
      '<h1>Scrum Project<br><span class="grad-text">Management</span></h1>' +
      "<p>Exam notes built from your faculty slides and answer keys, with diagrams, definitions and self-test Q&amp;A for every chapter.</p>" +
      '<div class="hero-actions"><a class="btn primary" href="#/' + chapters[0].slug + '">Start reading →</a>' +
      '<a class="btn" href="#/rapid-revision">Rapid revision</a><a class="btn" href="#/quiz">Take a quiz</a></div>' + resume +
      '<div class="stats"><div class="stat glass"><b>' + doneCh + "<small>/" + chapters.length + '</small></b><span>Chapters done</span></div><div class="stat glass"><b>' + GLOSSARY.length +
      '</b><span>Definitions</span></div><div class="stat glass"><b>' + qaTotal + '</b><span>Q&amp;A cards</span></div><div class="stat glass"><b>' + (best ? best + "<small>/10</small>" : "–") +
      "</b><span>Best quiz score</span></div></div></section>" +
      '<div class="section-title"><h2>High-yield for the exam</h2><span>your important topics</span></div><div class="cards">' + hy + "</div>" +
      '<div class="section-title"><h2>Chapters</h2><span>' + doneCh + "/" + chapters.length + ' done</span></div><div class="cards">' + ch + "</div>" +
      '<div class="section-title"><h2>Practice</h2><span>test yourself</span></div><div class="cards">' + practice + "</div>";
    document.title = "Scrum Prep · Scrum Project Management notes";
    return { wide: true };
  }

  function viewNote(note) {
    var r = renderNote(note);
    var isChapter = note.group === "chapters";
    currentPage = { href: "#/" + note.slug, t: note.label, s: note.title };
    var group = GROUPS.filter(function (g) { return g[0] === note.group; })[0];
    var meta = '<div class="doc-meta"><span class="crumbs"><a href="#/home">Home</a><span>/</span><span>' + esc(group ? group[1] : "") + "</span></span>" +
      (note.tag ? '<span class="tag-chip">' + (isChapter ? "CH " : "") + esc(note.tag) + "</span>" : "") +
      "<span>" + readMins(note.md) + " min read</span>" + (r.qa ? "<span>· " + r.qa + " Q&amp;A</span>" : "") +
      '<span class="meta-actions"><button class="pill-btn" id="savePageBtn" type="button">☆ Save</button>' +
      '<button class="pill-btn' + (done[note.slug] ? " on" : "") + '" id="doneBtn" type="button">' + (done[note.slug] ? "✓ Done" : "Mark as done") + "</button></span></div>";
    var h2 = r.heads.filter(function (h) { return h.level === 2; });
    var inlineToc = h2.length >= 2 ? '<details class="toc-inline glass"><summary>On this page · ' + h2.length + " sections</summary><nav>" + h2.map(function (h) {
      return '<a href="#/' + note.slug + "/" + h.id + '">' + esc(h.text) + "</a>";
    }).join("") + "</nav></details>" : "";
    viewEl.innerHTML = meta + inlineToc + '<article class="doc">' + r.html + "</article>";
    $("doneBtn").addEventListener("click", function () {
      toggleDone(note.slug);
      this.classList.toggle("on", !!done[note.slug]);
      this.textContent = done[note.slug] ? "✓ Done" : "Mark as done";
    });
    $("savePageBtn").addEventListener("click", toggleCurrentPage);
    viewEl.querySelectorAll('.h-tool[data-act="save"]').forEach(function (b) { b.classList.toggle("on", isSaved("#/" + note.slug + "/" + b.dataset.id)); });
    document.title = note.label + " · Scrum Prep";
    renderToc(r.heads, note.slug);
    renderPager(note);
    return { wide: false, note: note };
  }

  // Section tools inside notes: save a section, copy its link.
  viewEl.addEventListener("click", function (e) {
    var b = e.target.closest(".h-tool");
    if (!b || !currentPage) return;
    e.preventDefault();
    var slug = currentPage.href.slice(2), href = "#/" + slug + "/" + b.dataset.id, h = document.getElementById(b.dataset.id);
    var c = h.cloneNode(true);
    c.querySelectorAll(".h-tools, .pill, .src").forEach(function (x) { x.remove(); });
    var title = c.textContent.replace(/\(\s*[;,]?\s*\)/g, "").replace(/\s{2,}/g, " ").trim();
    if (b.dataset.act === "save") b.classList.toggle("on", toggleBookmark(href, title, currentPage.t));
    else {
      var url = location.href.split("#")[0] + href;
      var ok = function () { toast("Link copied"); };
      if (navigator.clipboard && window.isSecureContext) navigator.clipboard.writeText(url).then(ok, function () { prompt("Copy this link", url); });
      else prompt("Copy this link", url);
    }
  });

  function viewGlossary(note) {
    currentPage = { href: "#/glossary", t: "Glossary A–Z", s: GLOSSARY.length + " definitions" };
    var intro = note.md.split("\n").slice(1).find(function (l) { return l.trim() && !/^#/.test(l); }) || "";
    var letters = [];
    GLOSSARY.forEach(function (g) { if (letters.indexOf(g.letter) === -1) letters.push(g.letter); });
    viewEl.innerHTML =
      '<div class="doc-meta"><span class="crumbs"><a href="#/home">Home</a><span>/</span><span>Practice</span></span><span class="tag-chip">A–Z</span><span>' + GLOSSARY.length + " terms</span>" +
      '<span class="meta-actions"><a class="pill-btn" href="#/flashcards">Flashcards →</a><a class="pill-btn" href="#/quiz">Quiz →</a></span></div>' +
      '<article class="doc"><h1>' + esc(note.title) + "</h1><p>" + marked.parseInline(intro) + "</p></article>" +
      '<div class="gl-tools glass"><input class="gl-search" id="glSearch" type="search" placeholder="Filter ' + GLOSSARY.length + ' terms…" autocomplete="off">' +
      '<div class="letters" id="glLetters"><button class="on" data-l="">All</button>' + letters.map(function (l) { return '<button data-l="' + esc(l) + '">' + esc(l) + "</button>"; }).join("") + "</div></div>" +
      '<div class="gl-count" id="glCount"></div><div class="gl-grid" id="glGrid"></div>';
    decorateTokens(viewEl.querySelector(".doc"));
    var activeLetter = "", q = "";
    function draw() {
      var nq = q.toLowerCase();
      var items = GLOSSARY.filter(function (g) {
        return (!activeLetter || g.letter === activeLetter) && (!nq || (g.term + " " + g.def).toLowerCase().indexOf(nq) !== -1);
      });
      $("glCount").textContent = items.length + " of " + GLOSSARY.length + " terms";
      var box = document.createElement("div");
      box.innerHTML = items.map(function (g) {
        return '<div class="term"><h3><span>' + esc(g.term) + "</span>" + (g.src ? "<span>" + g.src + "</span>" : "") + "</h3><p>" + marked.parseInline(g.def) + "</p></div>";
      }).join("") || '<p class="gl-count">No matching terms.</p>';
      decorateTokens(box);
      $("glGrid").innerHTML = box.innerHTML;
      if (nq.length > 1) highlight($("glGrid"), nq);
    }
    $("glSearch").addEventListener("input", function () { q = this.value.trim(); draw(); });
    $("glLetters").addEventListener("click", function (e) {
      var b = e.target.closest("button"); if (!b) return;
      activeLetter = b.dataset.l;
      this.querySelectorAll("button").forEach(function (x) { x.classList.toggle("on", x === b); });
      draw();
    });
    draw();
    document.title = "Glossary · Scrum Prep";
    renderPager(note);
    return { wide: true };
  }

  var fc = { order: [], i: 0, flipped: false, seen: {} };
  function viewFlashcards() {
    if (!fc.order.length) fc.order = GLOSSARY.map(function (_, i) { return i; });
    viewEl.innerHTML =
      '<div class="center-wrap"><div class="page-head"><span class="eyebrow">Practice</span><h1>Flashcards</h1><p>Tap to flip. Swipe or use <kbd>←</kbd> <kbd>→</kbd> to move.</p></div>' +
      '<div class="fc-top"><span id="fcCount"></span><span id="fcLetter"></span></div>' +
      '<div class="fc" id="fc" tabindex="0" role="button" aria-label="Flip card"><div class="fc-inner">' +
      '<div class="fc-face fc-front"><span class="fc-hint">Term</span><div class="fc-term" id="fcTerm"></div><span class="fc-hint">tap to reveal</span></div>' +
      '<div class="fc-face fc-back"><span class="fc-hint">Definition</span><div class="fc-def" id="fcDef"></div><span id="fcSrc"></span></div></div></div>' +
      '<div class="fc-actions"><button class="btn" id="fcPrev">← Prev</button><button class="btn primary" id="fcFlip">Flip</button><button class="btn" id="fcNext">Next →</button><button class="btn" id="fcShuffle">Shuffle</button></div>' +
      '<div class="fc-tally" id="fcTally"></div></div>';
    function draw() {
      var g = GLOSSARY[fc.order[fc.i]];
      if (!g) return;
      fc.seen[fc.order[fc.i]] = true;
      $("fc").classList.toggle("flipped", fc.flipped);
      $("fcTerm").textContent = g.term;
      $("fcDef").innerHTML = marked.parseInline(g.def);
      $("fcSrc").innerHTML = g.src ? TOKEN_HTML[g.src] : "";
      $("fcCount").textContent = "Card " + (fc.i + 1) + " / " + fc.order.length;
      $("fcLetter").textContent = "Section " + g.letter;
      $("fcTally").textContent = Object.keys(fc.seen).length + " of " + GLOSSARY.length + " cards seen this session";
    }
    function move(d) { fc.i = (fc.i + d + fc.order.length) % fc.order.length; fc.flipped = false; draw(); }
    function flip() { fc.flipped = !fc.flipped; $("fc").classList.toggle("flipped", fc.flipped); }
    var card = $("fc"), sx = 0, sy = 0, swiped = false;
    card.addEventListener("touchstart", function (e) { sx = e.touches[0].clientX; sy = e.touches[0].clientY; swiped = false; }, { passive: true });
    card.addEventListener("touchend", function (e) {
      var dx = e.changedTouches[0].clientX - sx, dy = e.changedTouches[0].clientY - sy;
      if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) { swiped = true; move(dx < 0 ? 1 : -1); }
    });
    card.addEventListener("click", function () { if (swiped) { swiped = false; return; } flip(); });
    $("fcFlip").addEventListener("click", flip);
    $("fcPrev").addEventListener("click", function () { move(-1); });
    $("fcNext").addEventListener("click", function () { move(1); });
    $("fcShuffle").addEventListener("click", function () {
      shuffle(fc.order);
      fc.i = 0; fc.flipped = false; draw();
      toast("Cards shuffled");
    });
    pageKeys = function (e) {
      if (e.key === " " || e.key === "Enter") { e.preventDefault(); flip(); return true; }
      if (e.key === "ArrowRight") { move(1); return true; }
      if (e.key === "ArrowLeft") { move(-1); return true; }
    };
    draw();
    document.title = "Flashcards · Scrum Prep";
    return { wide: true };
  }

  function shuffle(a) {
    for (var k = a.length - 1; k > 0; k--) { var j = Math.floor(Math.random() * (k + 1)); var t = a[k]; a[k] = a[j]; a[j] = t; }
    return a;
  }

  // ---------------------------------------------------------------------------
  // Quiz: 10 multiple-choice questions built from the glossary
  // ---------------------------------------------------------------------------
  var QUIZ_LEN = 10, quiz = null, touchOnly = window.matchMedia && matchMedia("(hover: none)").matches;
  function plainDef(d) { return d.replace(/\*\*|__|[*_`]/g, ""); }
  function makeQuiz(mode) {
    var pool = shuffle(GLOSSARY.map(function (_, i) { return i; })).slice(0, QUIZ_LEN);
    return {
      mode: mode, i: 0, score: 0, answered: false, wrong: [],
      qs: pool.map(function (gi) {
        var others = shuffle(GLOSSARY.map(function (_, i) { return i; }).filter(function (i) { return i !== gi; })).slice(0, 3);
        var opts = shuffle([gi].concat(others));
        return { gi: gi, opts: opts, answer: opts.indexOf(gi) };
      })
    };
  }
  function viewQuiz() {
    currentPage = null;
    var best = readJSON("quizBest", null);
    if (!quiz) {
      viewEl.innerHTML = '<div class="center-wrap"><div class="page-head"><span class="eyebrow">Practice</span><h1>Quiz mode</h1>' +
        "<p>" + QUIZ_LEN + " questions drawn at random from " + GLOSSARY.length + " definitions." + (best ? " Your best so far is " + best + "/" + QUIZ_LEN + "." : "") + "</p></div>" +
        '<div class="quiz-modes"><button class="mode glass" data-mode="def"><span class="k">MODE 1</span><span class="t">Definition → Term</span><span class="d">Read the definition, pick the right term.</span></button>' +
        '<button class="mode glass" data-mode="term"><span class="k">MODE 2</span><span class="t">Term → Definition</span><span class="d">See a term, pick its definition.</span></button></div></div>';
      viewEl.querySelectorAll(".mode").forEach(function (b) {
        b.addEventListener("click", function () { quiz = makeQuiz(b.dataset.mode); drawQuiz(); });
      });
    } else drawQuiz();
    document.title = "Quiz · Scrum Prep";
    return { wide: true };
  }
  function drawQuiz() {
    if (quiz.i >= quiz.qs.length) return drawQuizResult();
    var q = quiz.qs[quiz.i], g = GLOSSARY[q.gi], byDef = quiz.mode === "def";
    var prompt = byDef ? marked.parseInline(g.def) : esc(g.term);
    viewEl.innerHTML = '<div class="center-wrap"><div class="q-card glass"><div class="q-head"><span>Question ' + (quiz.i + 1) + " of " + quiz.qs.length + "</span><span>Score " + quiz.score + "</span></div>" +
      '<div class="q-progress"><i style="width:' + (quiz.i / quiz.qs.length) * 100 + '%"></i></div>' +
      '<div class="q-prompt-k">' + (byDef ? "Which term matches this definition?" : "What does this term mean?") + '</div><div class="q-prompt">' + prompt + "</div>" +
      '<div class="q-opts">' + q.opts.map(function (oi, k) {
        var o = GLOSSARY[oi];
        return '<button class="q-opt" data-k="' + k + '"><span class="n">' + (k + 1) + "</span><span>" + (byDef ? esc(o.term) : esc(plainDef(o.def))) + "</span></button>";
      }).join("") + "</div>" +
      '<div class="q-foot"><span class="q-feedback" id="qFeedback">Pick an answer' + (touchOnly ? "." : ", or press 1–4.") + '</span><button class="btn primary" id="qNext" hidden>Next →</button></div></div>' +
      '<div class="fc-tally"><a href="#/quiz" id="qQuit">Quit quiz</a></div></div>';
    decorateTokens(viewEl.querySelector(".q-prompt"));
    quiz.answered = false;
    viewEl.querySelectorAll(".q-opt").forEach(function (b) { b.addEventListener("click", function () { answerQuiz(+b.dataset.k); }); });
    $("qNext").addEventListener("click", nextQuiz);
    $("qQuit").addEventListener("click", function (e) { e.preventDefault(); quiz = null; route(); });
  }
  function answerQuiz(k) {
    if (!quiz || quiz.answered || quiz.i >= quiz.qs.length) return;
    var q = quiz.qs[quiz.i], right = k === q.answer, opts = viewEl.querySelectorAll(".q-opt");
    quiz.answered = true;
    opts.forEach(function (b, j) { b.disabled = true; if (j === q.answer) b.classList.add("right"); else if (j === k) b.classList.add("wrong"); });
    if (right) quiz.score++; else quiz.wrong.push(q.gi);
    $("qFeedback").innerHTML = right ? '<b class="ok">Correct.</b>' : '<b class="bad">Not quite.</b> The answer is ' + esc(GLOSSARY[q.gi].term) + ".";
    var nb = $("qNext");
    nb.hidden = false;
    nb.textContent = quiz.i + 1 < quiz.qs.length ? "Next →" : "See results →";
    nb.focus({ preventScroll: true });
  }
  function nextQuiz() { if (!quiz || !quiz.answered) return; quiz.i++; drawQuiz(); window.scrollTo(0, 0); }
  function drawQuizResult() {
    var s = quiz.score, n = quiz.qs.length, best = readJSON("quizBest", 0) || 0, isBest = s > best;
    if (isBest) store("quizBest", String(s));
    var C = 2 * Math.PI * 66, off = C * (1 - s / n);
    var msg = s === n ? "Perfect score." : s >= 8 ? "Excellent, you know this well." : s >= 5 ? "Good going. Review the misses below." : "Keep at it. The glossary and flashcards will help.";
    viewEl.innerHTML = '<div class="center-wrap"><div class="q-card glass" style="text-align:center"><div class="q-prompt-k">Your score</div>' +
      '<div class="score-ring"><svg viewBox="0 0 150 150"><circle cx="75" cy="75" r="66" fill="none" stroke="var(--surface-2)" stroke-width="10"/>' +
      '<circle cx="75" cy="75" r="66" fill="none" stroke="url(#ringGrad)" stroke-width="10" stroke-linecap="round" stroke-dasharray="' + C.toFixed(1) + '" stroke-dashoffset="' + off.toFixed(1) + '"/>' +
      '<defs><linearGradient id="ringGrad" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="var(--a1)"/><stop offset="1" stop-color="var(--a2)"/></linearGradient></defs></svg><b>' + s + "/" + n + "</b></div>" +
      '<p class="q-feedback">' + msg + (isBest ? " That's a new best." : "") + "</p>" +
      '<div class="hero-actions" style="justify-content:center;margin-top:14px"><button class="btn primary" id="qAgain">Try again</button><button class="btn" id="qSwitch">Switch mode</button><a class="btn" href="#/glossary">Glossary</a></div></div>' +
      (quiz.wrong.length ? '<div class="section-title"><h2>Review your misses</h2><span>' + quiz.wrong.length + "</span></div><div class=\"review\">" + quiz.wrong.map(function (gi) {
        var g = GLOSSARY[gi];
        return '<div class="review-item"><b>' + esc(g.term) + "</b><span>" + marked.parseInline(g.def) + "</span></div>";
      }).join("") + "</div>" : "") + "</div>";
    var mode = quiz.mode;
    $("qAgain").addEventListener("click", function () { quiz = makeQuiz(mode); drawQuiz(); window.scrollTo(0, 0); });
    $("qSwitch").addEventListener("click", function () { quiz = makeQuiz(mode === "def" ? "term" : "def"); drawQuiz(); window.scrollTo(0, 0); });
    quiz.i = n;
  }

  // ---------------------------------------------------------------------------
  // Saved pages and sections
  // ---------------------------------------------------------------------------
  function viewSaved() {
    currentPage = null;
    var list = bookmarks.map(function (b, i) {
      return '<div class="saved-item glass"><a href="' + esc(b.href) + '"><span class="s-t">' + esc(b.t) + '</span><span class="s-s">' + esc(b.s) + "</span></a>" +
        '<button class="icon-btn" data-rm="' + i + '" aria-label="Remove">✕</button></div>';
    }).join("");
    viewEl.innerHTML = '<div class="center-wrap"><div class="page-head"><span class="eyebrow">Your list</span><h1>Saved</h1><p>Pages and sections you bookmarked, stored in this browser.</p></div>' +
      (list ? '<div class="saved-list">' + list + "</div>" :
        '<div class="empty glass"><b>Nothing saved yet</b>Use ☆ Save on any page, or the bookmark icon next to a section heading.</div>') + "</div>";
    viewEl.querySelectorAll("[data-rm]").forEach(function (b) {
      b.addEventListener("click", function () { var it = bookmarks[+b.dataset.rm]; toggleBookmark(it.href, it.t, it.s); viewSaved(); });
    });
    document.title = "Saved · Scrum Prep";
    return { wide: true };
  }

  // ---------------------------------------------------------------------------
  // TOC and pager
  // ---------------------------------------------------------------------------
  var tocObserver = null;
  function renderToc(heads, slug) {
    var h2 = heads.filter(function (h) { return h.level === 2; });
    if (h2.length < 2) { tocEl.innerHTML = ""; return; }
    tocEl.innerHTML = '<div class="toc-title">On this page</div>' + h2.map(function (h) {
      return '<a href="#/' + slug + "/" + h.id + '" data-id="' + h.id + '"' + (h.hy ? ' class="hy"' : "") + ">" + esc(h.text) + "</a>";
    }).join("");
    if (tocObserver) tocObserver.disconnect();
    if (!("IntersectionObserver" in window)) return;
    tocObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        tocEl.querySelectorAll("a").forEach(function (a) { a.classList.toggle("active", a.dataset.id === e.target.id); });
      });
    }, { rootMargin: "-70px 0px -70% 0px" });
    viewEl.querySelectorAll(".doc h2").forEach(function (h) { tocObserver.observe(h); });
  }
  function renderPager(note) {
    var prev = NOTES[note.index - 1], next = NOTES[note.index + 1], html = "";
    if (prev) html += '<a class="prev glass" href="#/' + prev.slug + '"><span class="dir">← Previous</span>' + esc(prev.label) + "</a>";
    if (next) html += '<a class="next glass" href="#/' + next.slug + '"><span class="dir">Next →</span>' + esc(next.label) + "</a>";
    pagerEl.innerHTML = html;
  }

  // ---------------------------------------------------------------------------
  // Highlight
  // ---------------------------------------------------------------------------
  function highlight(root, q) {
    q = q.toLowerCase();
    if (q.length < 2) return null;
    var walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null), nodes = [], node, first = null;
    while ((node = walker.nextNode())) if (node.nodeValue.toLowerCase().indexOf(q) !== -1) nodes.push(node);
    nodes.forEach(function (t) {
      var text = t.nodeValue, lower = text.toLowerCase(), frag = document.createDocumentFragment(), pos = 0, i;
      while ((i = lower.indexOf(q, pos)) !== -1) {
        frag.appendChild(document.createTextNode(text.slice(pos, i)));
        var m = document.createElement("mark"); m.textContent = text.slice(i, i + q.length); frag.appendChild(m);
        if (!first) first = m;
        pos = i + q.length;
      }
      frag.appendChild(document.createTextNode(text.slice(pos)));
      t.parentNode.replaceChild(frag, t);
    });
    return first;
  }

  // ---------------------------------------------------------------------------
  // Router
  // ---------------------------------------------------------------------------
  var pendingHighlight = "", pageKeys = null, readingNote = null;
  function parseHash() {
    var h = location.hash.replace(/^#\/?/, "");
    var i = h.indexOf("/");
    return i === -1 ? { slug: decodeURIComponent(h) || "home", anchor: "" } : { slug: decodeURIComponent(h.slice(0, i)), anchor: decodeURIComponent(h.slice(i + 1)) };
  }
  function findAnchor(anchor) {
    if (!anchor) return null;
    var el = document.getElementById(anchor);
    if (el && viewEl.contains(el)) return el;
    var n = norm(anchor), hs = viewEl.querySelectorAll(".doc h2, .doc h3");
    for (var i = 0; i < hs.length; i++) if (norm(hs[i].textContent).indexOf(n) !== -1) return hs[i];
    return null;
  }
  var lastSlug = null;
  function route() {
    var r = parseHash(), res;
    pageKeys = null; currentPage = null;
    tocEl.innerHTML = ""; pagerEl.innerHTML = "";
    if (r.slug === "home" || r.slug === "") { currentRoute = "home"; res = viewHome(); }
    else if (r.slug === "flashcards") { currentRoute = "flashcards"; res = viewFlashcards(); }
    else if (r.slug === "quiz") { currentRoute = "quiz"; res = viewQuiz(); }
    else if (r.slug === "saved") { currentRoute = "saved"; res = viewSaved(); }
    else if (r.slug === "glossary" && bySlug.glossary) { currentRoute = "glossary"; res = viewGlossary(bySlug.glossary); }
    else if (bySlug[r.slug]) { currentRoute = r.slug; res = viewNote(bySlug[r.slug]); }
    else { currentRoute = "home"; res = viewHome(); }
    readingNote = res.note || null;
    layoutEl.classList.toggle("wide", !!res.wide);
    if (lastSlug !== currentRoute) { viewEl.classList.remove("view-enter"); void viewEl.offsetWidth; viewEl.classList.add("view-enter"); }
    var sameRoute = lastSlug === currentRoute;
    lastSlug = currentRoute;
    renderNav();
    syncBookmarkBtn();
    syncTabbar();
    setMenu(false);

    var firstHit = pendingHighlight ? highlight(viewEl, pendingHighlight) : null;
    pendingHighlight = "";
    var target = findAnchor(r.anchor);
    if (target) target.scrollIntoView();
    else if (firstHit) firstHit.scrollIntoView({ block: "center" });
    else if (resumeY != null) { window.scrollTo(0, resumeY); resumeY = null; }
    else if (!sameRoute || !r.anchor) window.scrollTo(0, 0);
    onScroll();
  }
  window.addEventListener("hashchange", route);

  // "Continue reading" restores the scroll position saved for that note.
  var resumeY = null;
  viewEl.addEventListener("click", function (e) {
    var b = e.target.closest(".qa-reveal");
    if (b) { b.closest(".qa").classList.add("open"); return; }
    var res = e.target.closest("[data-resume]");
    if (res) { var last = readJSON("last", null); if (last) resumeY = last.y || 0; }
  });

  // ---------------------------------------------------------------------------
  // Command palette
  // ---------------------------------------------------------------------------
  var palette = $("palette"), pInput = $("paletteInput"), pResults = $("paletteResults"), pItems = [], pSel = 0;
  var INDEX = null;
  function buildIndex() {
    INDEX = { pages: [], sections: [], terms: [], lines: [] };
    INDEX.pages.push({ href: "#/home", k: "HOME", t: "Home", s: "Dashboard" });
    INDEX.pages.push({ href: "#/quiz", k: "QUIZ", t: "Quiz mode", s: "10 multiple-choice questions" });
    INDEX.pages.push({ href: "#/flashcards", k: "CARDS", t: "Flashcards", s: "Flip through every definition" });
    INDEX.pages.push({ href: "#/saved", k: "SAVED", t: "Saved", s: "Your bookmarked pages and sections" });
    NOTES.forEach(function (n) {
      INDEX.pages.push({ href: "#/" + n.slug, k: n.tag || "PAGE", t: n.label, s: n.title });
      renderNote(n).heads.forEach(function (h) {
        INDEX.sections.push({ href: "#/" + n.slug + "/" + h.id, k: n.tag || "§", t: h.text, s: n.label });
      });
      plain(n.md).split(/(?<=[.!?])\s+/).forEach(function (sent) { if (sent.length > 12) INDEX.lines.push({ slug: n.slug, k: n.tag || "§", text: sent, label: n.label }); });
    });
    GLOSSARY.forEach(function (g) { INDEX.terms.push({ href: "#/glossary", k: "TERM", t: g.term, s: g.def.replace(/[*_`]/g, ""), q: g.term }); });
  }
  function score(text, q) {
    var t = text.toLowerCase(), i = t.indexOf(q);
    if (i === -1) return -1;
    return (i === 0 ? 100 : 50) - Math.min(i, 40) - text.length / 100;
  }
  function searchPalette(q) {
    if (!INDEX) buildIndex();
    q = q.trim().toLowerCase();
    var groups = [];
    if (!q) {
      if (bookmarks.length) groups.push(["Saved", bookmarks.slice(0, 4).map(function (b) { return { href: b.href, k: "★", t: b.t, s: b.s }; })]);
      groups.push(["Jump to", INDEX.pages]);
      return groups;
    }
    function top(list, n, key) {
      return list.map(function (x) { return { x: x, s: score(x[key || "t"], q) }; }).filter(function (o) { return o.s >= 0; })
        .sort(function (a, b) { return b.s - a.s; }).slice(0, n).map(function (o) { return o.x; });
    }
    var pages = top(INDEX.pages, 5), sections = top(INDEX.sections, 8), terms = top(INDEX.terms, 6);
    var lines = [];
    if (q.length >= 3) {
      for (var i = 0; i < INDEX.lines.length && lines.length < 8; i++) {
        var L = INDEX.lines[i], at = L.text.toLowerCase().indexOf(q);
        if (at === -1) continue;
        var start = Math.max(0, at - 50), snip = (start ? "…" : "") + L.text.slice(start, at + q.length + 70) + (at + q.length + 70 < L.text.length ? "…" : "");
        lines.push({ href: "#/" + L.slug, k: L.k, t: snip, s: L.label, hl: q });
      }
    }
    if (pages.length) groups.push(["Pages", pages]);
    if (sections.length) groups.push(["Sections", sections]);
    if (terms.length) groups.push(["Definitions", terms.map(function (t) { return Object.assign({ hl: t.q }, t); })]);
    if (lines.length) groups.push(["In the text", lines]);
    return groups;
  }
  function hlText(s, q) {
    var e = esc(s);
    if (!q) return e;
    var i = s.toLowerCase().indexOf(q.toLowerCase());
    if (i === -1) return e;
    return esc(s.slice(0, i)) + "<mark>" + esc(s.slice(i, i + q.length)) + "</mark>" + esc(s.slice(i + q.length));
  }
  function drawPalette() {
    var q = pInput.value.trim(), groups = searchPalette(q), html = "";
    pItems = [];
    groups.forEach(function (g) {
      html += '<div class="pr-group">' + g[0] + "</div>";
      g[1].forEach(function (it) {
        var idx = pItems.length; pItems.push(it);
        html += '<a class="pr' + (idx === pSel ? " sel" : "") + '" data-i="' + idx + '" href="' + it.href + '"><span class="pr-k">' + esc(it.k) + '</span><span><span class="pr-t">' +
          hlText(it.t, q) + '</span><span class="pr-s">' + esc((it.s || "").slice(0, 140)) + "</span></span></a>";
      });
    });
    pResults.innerHTML = html || '<div class="pr-empty">No results for "' + esc(q) + '"</div>';
    var sel = pResults.querySelector(".pr.sel");
    if (sel) sel.scrollIntoView({ block: "nearest" });
  }
  function openPalette() {
    setMenu(false); setSettings(false);
    palette.hidden = false; pInput.value = ""; pSel = 0; drawPalette();
    document.body.classList.add("modal-open");
    setTimeout(function () { pInput.focus(); }, 0);
  }
  function closePalette() { palette.hidden = true; document.body.classList.remove("modal-open"); }
  function choose(it) {
    if (!it) return;
    closePalette();
    if (it.hl) pendingHighlight = it.hl;
    if (location.hash === it.href) route(); else location.hash = it.href;
  }
  $("paletteBtn").addEventListener("click", openPalette);
  $("tabSearch").addEventListener("click", openPalette);
  $("paletteClose").addEventListener("click", closePalette);
  palette.addEventListener("click", function (e) { if (e.target === palette) closePalette(); });
  pInput.addEventListener("input", function () { pSel = 0; drawPalette(); });
  pResults.addEventListener("click", function (e) {
    var a = e.target.closest(".pr"); if (!a) return;
    e.preventDefault(); choose(pItems[+a.dataset.i]);
  });
  pInput.addEventListener("keydown", function (e) {
    if (e.key === "ArrowDown") { e.preventDefault(); pSel = Math.min(pSel + 1, pItems.length - 1); drawPalette(); }
    else if (e.key === "ArrowUp") { e.preventDefault(); pSel = Math.max(pSel - 1, 0); drawPalette(); }
    else if (e.key === "Enter") { e.preventDefault(); choose(pItems[pSel]); }
  });

  // ---------------------------------------------------------------------------
  // Keyboard shortcuts
  // ---------------------------------------------------------------------------
  var gPending = 0;
  function goNote(d) {
    var n = readingNote ? NOTES[readingNote.index + d] : (d > 0 ? NOTES[0] : null);
    if (n) location.hash = "#/" + n.slug;
  }
  document.addEventListener("keydown", function (e) {
    var typing = /INPUT|TEXTAREA|SELECT/.test(document.activeElement.tagName);
    if ((e.key === "k" || e.key === "K") && (e.metaKey || e.ctrlKey)) { e.preventDefault(); palette.hidden ? openPalette() : closePalette(); return; }
    if (e.key === "Escape") {
      if (!palette.hidden) closePalette();
      setShortcuts(false); setSettings(false); setMenu(false);
      return;
    }
    if (typing || !palette.hidden || e.metaKey || e.ctrlKey || e.altKey) return;
    if (!shortcutsEl.hidden) { if (e.key === "?") setShortcuts(false); return; }
    if (pageKeys && pageKeys(e)) return;
    if (currentRoute === "quiz" && quiz) {
      if (/^[1-4]$/.test(e.key)) { answerQuiz(+e.key - 1); return; }
      if (e.key === "Enter" && quiz.answered) { e.preventDefault(); nextQuiz(); return; }
    }
    var k = e.key.toLowerCase();
    if (gPending && k === "h") { gPending = 0; location.hash = "#/home"; return; }
    gPending = 0;
    if (e.key === "/") { e.preventDefault(); openPalette(); }
    else if (e.key === "?") setShortcuts(true);
    else if (k === "j") goNote(1);
    else if (k === "k") goNote(-1);
    else if (k === "t") toggleFlag("selftest");
    else if (k === "f") toggleFlag("focus");
    else if (k === "b") toggleCurrentPage();
    else if (k === "d" && readingNote) $("doneBtn").click();
    else if (k === "g") { gPending = 1; setTimeout(function () { gPending = 0; }, 900); }
  });

  // ---------------------------------------------------------------------------
  // Scroll: progress bar, back-to-top, and remembering where you were
  // ---------------------------------------------------------------------------
  var bar = $("progress"), toTop = $("toTop"), saveTimer = null;
  function onScroll() {
    var h = document.documentElement.scrollHeight - window.innerHeight, pct = h > 0 ? window.scrollY / h : 0;
    bar.style.width = pct * 100 + "%";
    toTop.classList.toggle("show", window.scrollY > 900);
    if (readingNote && !saveTimer) {
      saveTimer = setTimeout(function () {
        saveTimer = null;
        if (readingNote) store("last", JSON.stringify({ slug: readingNote.slug, y: Math.round(window.scrollY), p: Math.round(pct * 100) }));
      }, 600);
    }
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  toTop.addEventListener("click", function () { window.scrollTo({ top: 0, behavior: "smooth" }); });

  route();
})();
