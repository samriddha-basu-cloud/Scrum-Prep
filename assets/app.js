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
  $("kbdHint").textContent = isMac ? "⌘K" : "Ctrl K";
  document.querySelectorAll(".palette-foot kbd").forEach(function (k) { if (k.textContent === "⌘K") k.textContent = isMac ? "⌘K" : "Ctrl K"; });

  function esc(s) { return String(s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); }
  function norm(s) { return String(s).toLowerCase().replace(/[^\p{L}\p{N}]+/gu, ""); }
  function store(key, val) { try { if (val === undefined) return localStorage.getItem(key); localStorage.setItem(key, val); } catch (e) { return null; } }
  function plain(md) {
    return md.replace(/```[\s\S]*?```/g, " ").replace(/[*_`>#|]/g, " ").replace(/\[([^\]]*)\]\([^)]*\)/g, "$1").replace(/\s+/g, " ");
  }

  // ---------------------------------------------------------------------------
  // Progress (chapters marked as done)
  // ---------------------------------------------------------------------------
  var done = {};
  try { (JSON.parse(store("done") || "[]")).forEach(function (s) { done[s] = true; }); } catch (e) {}
  function saveDone() { store("done", JSON.stringify(Object.keys(done))); }
  function toggleDone(slug) { if (done[slug]) delete done[slug]; else done[slug] = true; saveDone(); renderNav(); }

  // ---------------------------------------------------------------------------
  // Theme and self-test
  // ---------------------------------------------------------------------------
  $("themeBtn").addEventListener("click", function () {
    var next = document.documentElement.getAttribute("data-theme") === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", next);
    store("theme", next);
  });
  var selfBtn = $("selfTestBtn");
  function syncSelfTest() { selfBtn.setAttribute("aria-pressed", String(document.documentElement.classList.contains("selftest"))); }
  selfBtn.addEventListener("click", function () {
    var on = document.documentElement.classList.toggle("selftest");
    store("selftest", on ? "1" : "0");
    viewEl.querySelectorAll(".qa.open").forEach(function (q) { q.classList.remove("open"); });
    syncSelfTest();
  });
  syncSelfTest();

  // ---------------------------------------------------------------------------
  // Mobile menu
  // ---------------------------------------------------------------------------
  function setMenu(open) { document.body.classList.toggle("nav-open", open); $("menuBtn").setAttribute("aria-expanded", String(open)); }
  $("menuBtn").addEventListener("click", function () { setMenu(!document.body.classList.contains("nav-open")); });
  $("scrim").addEventListener("click", function () { setMenu(false); });

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
  renderer.heading = function (text, level, raw) {
    var id = slugify(raw);
    var anchor = level > 1 && level < 4 ? '<a class="heading-anchor" href="#/' + renderingSlug + "/" + id + '" aria-label="Link to section">#</a>' : "";
    return "<h" + level + ' id="' + id + '">' + text + anchor + "</h" + level + ">\n";
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
      c.querySelectorAll(".heading-anchor, .pill, .src").forEach(function (x) { x.remove(); });
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
  function navLink(href, tag, label, slug) {
    var active = currentRoute === href.slice(2);
    var cls = "nav-item" + (active ? " active" : "") + (slug && done[slug] ? " done" : "");
    return '<a class="' + cls + '" href="' + href + '"><span class="tag">' + esc(tag || "") + '</span><span class="label">' + esc(label) + "</span>" +
      (slug ? '<span class="done-dot" title="' + (done[slug] ? "Done" : "Not done yet") + '"></span>' : "") + "</a>";
  }
  function renderNav() {
    var html = "";
    GROUPS.forEach(function (g) {
      html += '<div class="nav-group"><div class="nav-group-title">' + g[1] + "</div>";
      if (g[0] === "start") html += navLink("#/home", "⌂", "Home");
      NOTES.filter(function (n) { return n.group === g[0]; }).forEach(function (n) { html += navLink("#/" + n.slug, n.tag, n.label, n.slug); });
      if (g[0] === "practice") html += navLink("#/flashcards", "↻", "Flashcards");
      html += "</div>";
    });
    navEl.innerHTML = html;
    var total = NOTES.length, d = NOTES.filter(function (n) { return done[n.slug]; }).length;
    $("sideProgress").innerHTML = "Progress " + d + "/" + total + ' read<div class="bar"><i style="width:' + Math.round((d / total) * 100) + '%"></i></div>';
  }

  // ---------------------------------------------------------------------------
  // Views
  // ---------------------------------------------------------------------------
  function readMins(md) { return Math.max(1, Math.round(plain(md).split(" ").length / 220)); }

  function viewHome() {
    var chapters = NOTES.filter(function (n) { return n.group === "chapters"; });
    var qaTotal = 0;
    NOTES.forEach(function (n) { qaTotal += renderNote(n).qa; });
    var hy = HIGH_YIELD.map(function (h) {
      var href = "#/" + h.slug + (h.a ? "/" + encodeURIComponent(h.a) : "");
      return '<a class="card hy-card" href="' + href + '"><span class="k">TOPIC ' + h.n + '</span><span class="t">' + esc(h.t) + '</span><span class="d">' + esc(h.d) +
        '</span><span class="foot"><span>' + esc(bySlug[h.slug] ? bySlug[h.slug].label : "") + "</span><span>→</span></span></a>";
    }).join("");
    var ch = chapters.map(function (n) {
      return '<a class="card' + (done[n.slug] ? " done" : "") + '" href="#/' + n.slug + '"><span class="k">CH ' + esc(n.tag) + '</span><span class="t">' + esc(n.label) +
        '</span><span class="foot"><span>' + readMins(n.md) + ' min read</span><span class="chk">' + (done[n.slug] ? "✓ done" : "") + "</span></span></a>";
    }).join("");
    var practice = [
      ["#/rapid-revision", "REVISE", "Rapid Revision", "Every list, number and formula on one page."],
      ["#/presentation-topics-qna", "Q&A", "14 Presentation Topics", "Planned questions with model answers."],
      ["#/quiz-bank-from-answer-keys", "QUIZ", "Quiz Bank", "Faculty one-word, true/false and match items."],
      ["#/glossary", "A–Z", "Glossary", GLOSSARY.length + " definitions, searchable."],
      ["#/flashcards", "CARDS", "Flashcards", "Flip through every definition."]
    ].map(function (p) {
      return '<a class="card" href="' + p[0] + '"><span class="k">' + p[1] + '</span><span class="t">' + p[2] + '</span><span class="d">' + p[3] + "</span></a>";
    }).join("");

    viewEl.innerHTML =
      '<section class="hero"><span class="eyebrow">MBA OM · Semester III</span>' +
      '<h1>Scrum Project<br><span class="grad-text">Management</span></h1>' +
      "<p>Exam notes built from your faculty slides and answer keys, with diagrams, definitions and self-test Q&amp;A for every chapter.</p>" +
      '<div class="hero-actions"><a class="btn primary" href="#/' + chapters[0].slug + '">Start reading →</a>' +
      '<a class="btn" href="#/rapid-revision">Rapid revision</a><a class="btn" href="#/flashcards">Flashcards</a></div>' +
      '<div class="stats"><div class="stat"><b>' + chapters.length + '</b><span>Chapters</span></div><div class="stat"><b>' + GLOSSARY.length +
      '</b><span>Definitions</span></div><div class="stat"><b>' + qaTotal + '</b><span>Q&amp;A cards</span></div><div class="stat"><b>14</b><span>Presentation topics</span></div></div></section>' +
      '<div class="section-title"><h2>High-yield for the exam</h2><span>your important topics</span></div><div class="cards">' + hy + "</div>" +
      '<div class="section-title"><h2>Chapters</h2><span>' + Object.keys(done).filter(function (s) { return bySlug[s] && bySlug[s].group === "chapters"; }).length + "/" + chapters.length + ' done</span></div><div class="cards">' + ch + "</div>" +
      '<div class="section-title"><h2>Practice</h2><span>test yourself</span></div><div class="cards">' + practice + "</div>";
    document.title = "Scrum Prep · Scrum Project Management notes";
    return { wide: true };
  }

  function viewNote(note) {
    var r = renderNote(note);
    var isChapter = note.group === "chapters";
    var meta = '<div class="doc-meta">' + (note.tag ? '<span class="tag-chip">' + (isChapter ? "CH " : "") + esc(note.tag) + "</span>" : "") +
      "<span>" + readMins(note.md) + " min read</span>" + (r.qa ? "<span>· " + r.qa + " Q&amp;A</span>" : "") +
      '<button class="done-btn' + (done[note.slug] ? " on" : "") + '" id="doneBtn" type="button">' + (done[note.slug] ? "✓ Done" : "Mark as done") + "</button></div>";
    viewEl.innerHTML = meta + '<article class="doc">' + r.html + "</article>";
    $("doneBtn").addEventListener("click", function () {
      toggleDone(note.slug);
      this.classList.toggle("on", !!done[note.slug]);
      this.textContent = done[note.slug] ? "✓ Done" : "Mark as done";
    });
    document.title = note.label + " · Scrum Prep";
    renderToc(r.heads, note.slug);
    renderPager(note);
    return { wide: false };
  }

  function viewGlossary(note) {
    var intro = note.md.split("\n").slice(1).find(function (l) { return l.trim() && !/^#/.test(l); }) || "";
    var letters = [];
    GLOSSARY.forEach(function (g) { if (letters.indexOf(g.letter) === -1) letters.push(g.letter); });
    viewEl.innerHTML =
      '<div class="doc-meta"><span class="tag-chip">A–Z</span><span>' + GLOSSARY.length + ' terms</span><a class="done-btn" href="#/flashcards">Study as flashcards →</a></div>' +
      '<article class="doc"><h1>' + esc(note.title) + "</h1><p>" + marked.parseInline(intro) + "</p></article>" +
      '<div class="gl-tools"><input class="gl-search" id="glSearch" type="search" placeholder="Filter ' + GLOSSARY.length + ' terms…" autocomplete="off">' +
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
      '<div class="fc-wrap"><div class="doc"><h1>Flashcards</h1><p style="color:var(--text-2)">Every glossary definition as a card. Click or press <kbd>Space</kbd> to flip, <kbd>←</kbd> <kbd>→</kbd> to move.</p></div>' +
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
      var box = document.createElement("div");
      box.innerHTML = marked.parseInline(g.def);
      $("fcDef").innerHTML = box.innerHTML;
      $("fcSrc").innerHTML = g.src ? TOKEN_HTML[g.src] : "";
      $("fcCount").textContent = "Card " + (fc.i + 1) + " / " + fc.order.length;
      $("fcLetter").textContent = "Section " + g.letter;
      $("fcTally").textContent = Object.keys(fc.seen).length + " of " + GLOSSARY.length + " cards seen this session";
    }
    function move(d) { fc.i = (fc.i + d + fc.order.length) % fc.order.length; fc.flipped = false; draw(); }
    function flip() { fc.flipped = !fc.flipped; $("fc").classList.toggle("flipped", fc.flipped); }
    $("fc").addEventListener("click", flip);
    $("fcFlip").addEventListener("click", flip);
    $("fcPrev").addEventListener("click", function () { move(-1); });
    $("fcNext").addEventListener("click", function () { move(1); });
    $("fcShuffle").addEventListener("click", function () {
      for (var k = fc.order.length - 1; k > 0; k--) { var j = Math.floor(Math.random() * (k + 1)); var t = fc.order[k]; fc.order[k] = fc.order[j]; fc.order[j] = t; }
      fc.i = 0; fc.flipped = false; draw();
    });
    fc.keys = function (e) {
      if (e.key === " " || e.key === "Enter") { e.preventDefault(); flip(); }
      else if (e.key === "ArrowRight") move(1);
      else if (e.key === "ArrowLeft") move(-1);
    };
    draw();
    document.title = "Flashcards · Scrum Prep";
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
    if (prev) html += '<a class="prev" href="#/' + prev.slug + '"><span class="dir">← Previous</span>' + esc(prev.label) + "</a>";
    if (next) html += '<a class="next" href="#/' + next.slug + '"><span class="dir">Next →</span>' + esc(next.label) + "</a>";
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
  var pendingHighlight = "";
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
    fc.keys = null;
    tocEl.innerHTML = ""; pagerEl.innerHTML = "";
    if (r.slug === "home" || r.slug === "") { currentRoute = "home"; res = viewHome(); }
    else if (r.slug === "flashcards") { currentRoute = "flashcards"; res = viewFlashcards(); }
    else if (r.slug === "glossary" && bySlug.glossary) { currentRoute = "glossary"; res = viewGlossary(bySlug.glossary); }
    else if (bySlug[r.slug]) { currentRoute = r.slug; res = viewNote(bySlug[r.slug]); }
    else { currentRoute = "home"; res = viewHome(); }
    layoutEl.classList.toggle("wide", !!res.wide);
    if (lastSlug !== currentRoute) { viewEl.classList.remove("view-enter"); void viewEl.offsetWidth; viewEl.classList.add("view-enter"); }
    lastSlug = currentRoute;
    renderNav();
    setMenu(false);

    var firstHit = pendingHighlight ? highlight(viewEl, pendingHighlight) : null;
    pendingHighlight = "";
    var target = findAnchor(r.anchor);
    if (target) target.scrollIntoView();
    else if (firstHit) firstHit.scrollIntoView({ block: "center" });
    else window.scrollTo(0, 0);
    onScroll();
  }
  window.addEventListener("hashchange", route);

  viewEl.addEventListener("click", function (e) {
    var b = e.target.closest(".qa-reveal");
    if (b) b.closest(".qa").classList.add("open");
  });

  // ---------------------------------------------------------------------------
  // Command palette
  // ---------------------------------------------------------------------------
  var palette = $("palette"), pInput = $("paletteInput"), pResults = $("paletteResults"), pItems = [], pSel = 0;
  var INDEX = null;
  function buildIndex() {
    INDEX = { pages: [], sections: [], terms: [], lines: [] };
    INDEX.pages.push({ href: "#/home", k: "HOME", t: "Home", s: "Dashboard" });
    INDEX.pages.push({ href: "#/flashcards", k: "CARDS", t: "Flashcards", s: "Flip through every definition" });
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
    palette.hidden = false; pInput.value = ""; pSel = 0; drawPalette();
    setTimeout(function () { pInput.focus(); }, 0);
  }
  function closePalette() { palette.hidden = true; }
  function choose(it) {
    if (!it) return;
    closePalette();
    if (it.hl) pendingHighlight = it.hl;
    if (location.hash === it.href) route(); else location.hash = it.href;
  }
  $("paletteBtn").addEventListener("click", openPalette);
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

  document.addEventListener("keydown", function (e) {
    var typing = /INPUT|TEXTAREA/.test(document.activeElement.tagName);
    if ((e.key === "k" || e.key === "K") && (e.metaKey || e.ctrlKey)) { e.preventDefault(); palette.hidden ? openPalette() : closePalette(); return; }
    if (e.key === "Escape") { if (!palette.hidden) closePalette(); setMenu(false); return; }
    if (typing || !palette.hidden) return;
    if (e.key === "/") { e.preventDefault(); openPalette(); return; }
    if (fc.keys) fc.keys(e);
  });

  // ---------------------------------------------------------------------------
  // Scroll: progress bar and back-to-top
  // ---------------------------------------------------------------------------
  var bar = $("progress"), toTop = $("toTop");
  function onScroll() {
    var h = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.width = (h > 0 ? (window.scrollY / h) * 100 : 0) + "%";
    toTop.classList.toggle("show", window.scrollY > 900);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  toTop.addEventListener("click", function () { window.scrollTo({ top: 0, behavior: "smooth" }); });

  route();
})();
