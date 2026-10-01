/* nav.js — the one place the site's sections and pages are listed.
   Adds a section link to each page's top bar and a "You might also like" block above the footer.
   Pages still work without it: the top bar's "Grumpy Pickleballer" link is plain HTML. */
(function () {
  var SECTIONS = [
    { id: "before-you-play", name: "Before you play", pages: [
      ["warmup", "Dynamic Warm-Up"], ["knee-foot-routine", "Knee & Foot Routine"] ] },
    { id: "positioning", name: "Positioning", pages: [
      ["positioning-basics", "Positioning Basics"], ["strategy-the-rope", "The Rope"], ["strategy-the-reset", "The Reset"] ] },
    { id: "playing-the-game", name: "Playing the game", pages: [
      ["pre-snap-read", "The Pre-Snap Read"], ["who-gets-the-lob", "Who Gets the Lob"], ["communication", "Talk to Your Partner"] ] },
    { id: "the-paddle", name: "The paddle", pages: [
      ["grips", "Grips"], ["finding-your-paddle", "Finding Your Paddle"], ["weighting", "Weighting"] ] },
    { id: "the-head-game", name: "The head game", pages: [
      ["why-you-play", "Why You Play"], ["mental-game", "The Mental Game"] ] },
    { id: "getting-better", name: "Getting better", pages: [
      ["getting-better", "Getting Better"] ] },
    { id: "advanced", name: "Advanced", pages: [
      ["strategy-stacking", "Stacking"] ] }
  ];
  // Cross-section picks for pages whose section has no siblings (or that sit outside the sections).
  var RELATED = {
    "getting-better": ["mental-game", "grips", "sayings"],
    "strategy-stacking": ["positioning-basics", "communication"],
    "sayings": ["why-you-play", "mental-game", "getting-better"]
  };
  var EXTRA = { "sayings": "Things I Say on the Court" };

  var slug = (location.pathname.split("/").pop() || "index").replace(/\.html$/, "") || "index";
  if (slug === "index" || slug.charAt(0) === "_") return;

  var title = {}, sectionOf = {};
  SECTIONS.forEach(function (s) { s.pages.forEach(function (p) { title[p[0]] = p[1]; sectionOf[p[0]] = s; }); });
  for (var k in EXTRA) title[k] = EXTRA[k];

  var sec = sectionOf[slug];
  var picks = sec ? sec.pages.map(function (p) { return p[0]; }).filter(function (p) { return p !== slug; }) : [];
  if (!picks.length && RELATED[slug]) picks = RELATED[slug];
  picks = picks.slice(0, 3);

  var css = document.createElement("style");
  css.textContent =
    ".topbar{flex-wrap:wrap;row-gap:2px;}.topbar>*{white-space:nowrap;}" +
    ".topbar a.sec{color:var(--muted);font-weight:600;text-decoration:none;}" +
    ".mightlike{margin:30px 0 0;padding-top:16px;border-top:1px solid var(--hair);}" +
    ".mightlike h2{font-size:15px;text-transform:uppercase;letter-spacing:2px;color:var(--muted);margin:0 0 10px;font-weight:700;}" +
    ".mightlike .ml{display:grid;grid-template-columns:1fr;gap:8px;}" +
    "@media(min-width:560px){.mightlike .ml{grid-template-columns:1fr 1fr;}}" +
    ".mightlike a{display:block;background:var(--paper);border:1px solid var(--hair);border-radius:10px;padding:12px 14px;" +
    "color:var(--ink);text-decoration:none;font-weight:800;font-size:17px;}" +
    ".mightlike a:active{border-color:var(--kitchen);}" +
    ".mightlike a.all{background:transparent;border:none;padding:6px 2px;font-size:15px;color:var(--kitchen);}";
  document.head.appendChild(css);

  var crumb = document.querySelector(".topbar .crumb");
  if (sec && crumb) {
    var a = document.createElement("a");
    a.className = "sec"; a.href = "index.html#" + sec.id; a.textContent = "/ " + sec.name;
    crumb.parentNode.insertBefore(a, crumb);
  }

  var foot = document.querySelector(".sheet .foot");
  if (picks.length && foot) {
    var box = document.createElement("nav");
    box.className = "mightlike"; box.setAttribute("aria-label", "You might also like");
    var h = document.createElement("h2"); h.textContent = "You might also like"; box.appendChild(h);
    var grid = document.createElement("div"); grid.className = "ml";
    picks.forEach(function (p) {
      if (!title[p]) return;
      var l = document.createElement("a"); l.href = p + ".html"; l.textContent = title[p] + " \u2192"; grid.appendChild(l);
    });
    box.appendChild(grid);
    var all = document.createElement("a"); all.className = "all"; all.href = "index.html"; all.textContent = "Everything on the site \u2192";
    box.appendChild(all);
    foot.parentNode.insertBefore(box, foot);
  }
})();
