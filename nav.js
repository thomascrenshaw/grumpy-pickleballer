/* nav.js — the one place the site's sections, pages and updates are listed.
   - Every page: a section link in the top bar and a "You might also like" block above the footer.
   - Hub (index.html): a "What's new" strip, plus New / Updated badges on the tiles.
   - whats-new.html: the full log.
   Pages still work without it: the top bar's "Grumpy Pickleballer" link is plain HTML. */
(function () {
  var SECTIONS = [
    { id: "before-you-play", name: "Before you play", pages: [
      ["warmup", "Dynamic Warm-Up"], ["knee-foot-routine", "Knee & Foot Routine"] ] },
    { id: "positioning", name: "Positioning", pages: [
      ["positioning-basics", "Positioning Basics"], ["strategy-the-rope", "The Rope"], ["strategy-the-reset", "The Reset"] ] },
    { id: "playing-the-game", name: "Playing the game", pages: [
      ["pre-snap-read", "The Pre-Snap Read"], ["who-gets-the-lob", "Who Gets the Lob"], ["communication", "Talk to Your Partner"], ["lose-like-a-winner", "Lose Like a Winner"] ] },
    { id: "the-paddle", name: "The paddle", pages: [
      ["grips", "Grips"], ["finding-your-paddle", "Finding Your Paddle"], ["weighting", "Weighting"] ] },
    { id: "the-head-game", name: "The head game", pages: [
      ["why-you-play", "Why You Play"], ["mental-game", "The Mental Game"], ["game-within-the-game", "The Game Within the Game"] ] },
    { id: "getting-better", name: "Getting better", pages: [
      ["getting-better", "Getting Better"] ] },
    { id: "advanced", name: "Advanced", pages: [
      ["strategy-stacking", "Stacking"] ] }
  ];

  /* WHAT'S NEW — add one line per change, newest first:
       ["page-slug", "YYYY-MM-DD", "new" | "updated", "One short line about what changed."]
     That's all. The hub strip, the tile badges, the What's New page and
     "since your last visit" are all built from this list. */
  var UPDATES = [
    ["game-within-the-game", "2026-10-15", "new",     "Fumble it, kick it, chase it, hear “BALL ON!” Even the pros play it."],
    ["lose-like-a-winner",   "2026-10-15", "new",     "Don't slam it just because you can, and keep your head up when you lose."],
    ["knee-foot-routine",    "2026-10-10", "updated", "Watch buttons: Mr. PBSF, who has no knees, demonstrates the warm-up moves."],
    ["warmup",               "2026-10-10", "updated", "Torso rotations reattached to the legs. Mr. PBSF now has a disclaimer."],
    ["strategy-stacking",    "2026-09-30", "new",     "The full stacking guide: serve and return, even and odd scores, four diagrams."],
    ["positioning-basics",   "2026-09-30", "updated", "Why the serving team starts on defense, with two new diagrams."],
    ["mental-game",          "2026-09-30", "updated", "Under all the paddle taps and breaths, the actual ritual."],
    ["why-you-play",         "2026-09-30", "updated", "Why a 7–2 blowout was a lot closer than it looked."],
    ["who-gets-the-lob",     "2026-09-30", "new",     "Who calls it, who gets it, who switches, and the exceptions."],
    ["communication",        "2026-09-30", "new",     "Mine, Yours, Switch, Stay, Out, Bounce: the calls that save points."],
    ["finding-your-paddle",  "2026-09-30", "new",     "The best paddle is the one that works for you. How to try before you buy."],
    ["weighting",            "2026-09-30", "new",     "Where to add weight and what it changes, with a quiz to find your spot."],
    ["sayings",              "2026-09-29", "new",     "Things I say on the court, and why I actually believe them."],
    ["pre-snap-read",        "2026-09-29", "new",     "Returning serve like a quarterback reads a defense."],
    ["getting-better",       "2026-09-29", "updated", "The five steps of learning a shot. Every one is the hardest part."],
    ["grips",                "2026-09-27", "new",     "Continental to western, and which grip goes with which shot."]
  ];
  var BADGE_DAYS = 30;   // how long a tile keeps its New / Updated badge
  var STRIP_COUNT = 3;   // how many entries the hub strip shows

  var RELATED = {
    "getting-better": ["mental-game", "grips", "sayings"],
    "strategy-stacking": ["positioning-basics", "communication"],
    "sayings": ["why-you-play", "mental-game", "getting-better"],
    "whats-new": ["sayings", "getting-better", "warmup"]
  };
  var EXTRA = { "sayings": "Things I Say on the Court", "whats-new": "What's New" };

  var slug = (location.pathname.split("/").pop() || "index").replace(/\.html$/, "") || "index";
  if (slug.charAt(0) === "_") return;

  var title = {}, sectionOf = {};
  SECTIONS.forEach(function (s) { s.pages.forEach(function (p) { title[p[0]] = p[1]; sectionOf[p[0]] = s; }); });
  for (var k in EXTRA) title[k] = EXTRA[k];

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
    ".mightlike a.all{background:transparent;border:none;padding:6px 2px;font-size:15px;color:var(--kitchen);}" +
    /* what's new */
    ".wn{background:var(--paper);border:1px solid var(--hair);border-radius:12px;padding:14px 16px 12px;margin:16px 0 4px;}" +
    ".wn h2{font-size:15px;text-transform:uppercase;letter-spacing:2px;color:var(--muted);margin:0 0 8px;font-weight:700;}" +
    ".wn ul{list-style:none;margin:0;padding:0;}" +
    ".wn li{border-top:1px solid var(--hair);padding:9px 0;}" +
    ".wn li:first-child{border-top:none;padding-top:2px;}" +
    ".wn .when{display:block;font-size:13px;color:var(--muted);margin-bottom:2px;}" +
    ".wn a.what{color:var(--ink);font-weight:800;font-size:16.5px;text-decoration:none;}" +
    ".wn .note{display:block;font-size:15px;color:var(--muted);line-height:1.45;margin-top:2px;}" +
    ".wn .fresh{background:#fff;border-radius:8px;margin:2px -8px;padding:9px 8px;border-top-color:transparent;}" +
    ".wn a.more{display:inline-block;margin-top:6px;color:var(--kitchen);font-weight:700;font-size:15px;text-decoration:none;}" +
    ".pill{display:inline-block;font-size:11.5px;font-weight:800;letter-spacing:1px;text-transform:uppercase;border-radius:999px;padding:2px 8px;margin-right:6px;vertical-align:1px;}" +
    ".pill.new{background:var(--kitchen);color:#fff;}" +
    ".pill.updated{background:#fff;color:#8a5a22;border:1.5px solid var(--kitchen);}" +
    "a.feature .pill.new{background:var(--kitchen);color:#fff;}" +
    ".wnlog h2{font-size:18.5px;margin:26px 0 8px;font-weight:800;}" +
    ".wnlog ul{list-style:none;margin:0;padding:0;background:var(--paper);border:1px solid var(--hair);border-radius:10px;}" +
    ".wnlog li{padding:12px 14px;border-top:1px solid var(--hair);}" +
    ".wnlog li:first-child{border-top:none;}" +
    ".wnlog .when{display:block;font-size:13px;color:var(--muted);margin-bottom:2px;}" +
    ".wnlog a{color:var(--ink);font-weight:800;font-size:17px;}" +
    ".wnlog .note{display:block;font-size:15.5px;color:var(--muted);line-height:1.5;margin-top:3px;}";
  document.head.appendChild(css);

  /* ---------- updates helpers ---------- */
  var MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  var MONTHS_LONG = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  function day(s) { var p = s.split("-"); return new Date(+p[0], +p[1] - 1, +p[2]); }
  function short(s) { var d = day(s); return MONTHS[d.getMonth()] + " " + d.getDate(); }
  function el(tag, cls, text) { var e = document.createElement(tag); if (cls) e.className = cls; if (text != null) e.textContent = text; return e; }
  function pill(kind) { return el("span", "pill " + kind, kind === "new" ? "New" : "Updated"); }
  var today = new Date(); today.setHours(0, 0, 0, 0);
  function ageDays(s) { return Math.round((today - day(s)) / 86400000); }

  /* the visitor's previous visit, kept only in their own browser */
  /* The previous visit's date is held for the whole browsing session, so the
     "since your last visit" list doesn't vanish the moment they click a page and come back. */
  var lastVisit = null;
  try {
    var held = sessionStorage.getItem("gp_prevVisit");
    if (held === null) {
      held = localStorage.getItem("gp_lastVisit") || "";
      sessionStorage.setItem("gp_prevVisit", held);
    }
    lastVisit = held || null;
    var iso = today.getFullYear() + "-" + ("0" + (today.getMonth() + 1)).slice(-2) + "-" + ("0" + today.getDate()).slice(-2);
    localStorage.setItem("gp_lastVisit", iso);
  } catch (e) { lastVisit = null; }
  function sinceLast(u) { return lastVisit && u[1] > lastVisit; }

  function entry(u, cls) {
    var li = el("li", cls || "");
    li.appendChild(el("span", "when", short(u[1])));
    li.appendChild(pill(u[2]));
    var a = el("a", "what", title[u[0]] || u[0]); a.href = u[0] + ".html"; li.appendChild(a);
    li.appendChild(el("span", "note", u[3]));
    return li;
  }

  /* ---------- hub ---------- */
  if (slug === "index") {
    var box = document.getElementById("whatsnew");
    if (box) {
      var fresh = UPDATES.filter(sinceLast);
      var shown = fresh.length ? fresh.slice(0, STRIP_COUNT) : UPDATES.slice(0, STRIP_COUNT);
      var head = fresh.length
        ? fresh.length + " new since your last visit"
        : "What's new";
      box.appendChild(el("h2", "", head));
      var ul = el("ul");
      shown.forEach(function (u) { ul.appendChild(entry(u, fresh.length ? "fresh" : "")); });
      box.appendChild(ul);
      var more = el("a", "more", fresh.length > STRIP_COUNT
        ? "See all " + fresh.length + ", and everything before →"
        : "See everything that's changed →"); more.href = "whats-new.html";
      box.appendChild(more);
      box.hidden = false;
    }
    var seen = {};
    UPDATES.forEach(function (u) {
      if (seen[u[0]]) return; seen[u[0]] = true;
      if (ageDays(u[1]) > BADGE_DAYS && !sinceLast(u)) return;
      var t = document.querySelector('a.tile[href="' + u[0] + '.html"], a.feature[href="' + u[0] + '.html"]');
      var spot = t && t.querySelector(".t, .kick");
      if (spot && !t.querySelector(".pill")) spot.insertBefore(pill(u[2]), spot.firstChild);
    });
    return;
  }

  /* ---------- the full log ---------- */
  if (slug === "whats-new") {
    var log = document.getElementById("whatsnew-all");
    if (log) {
      var curMonth = "", list = null;
      UPDATES.forEach(function (u) {
        var d = day(u[1]), m = MONTHS_LONG[d.getMonth()] + " " + d.getFullYear();
        if (m !== curMonth) { curMonth = m; log.appendChild(el("h2", "", m)); list = el("ul"); log.appendChild(list); }
        list.appendChild(entry(u));
      });
    }
  }

  /* ---------- every other page ---------- */
  var sec = sectionOf[slug];
  var picks = sec ? sec.pages.map(function (p) { return p[0]; }).filter(function (p) { return p !== slug; }) : [];
  if (!picks.length && RELATED[slug]) picks = RELATED[slug];
  picks = picks.slice(0, 3);

  var crumb = document.querySelector(".topbar .crumb");
  if (sec && crumb) {
    var a = document.createElement("a");
    a.className = "sec"; a.href = "index.html#" + sec.id; a.textContent = "/ " + sec.name;
    crumb.parentNode.insertBefore(a, crumb);
  }

  var foot = document.querySelector(".sheet .foot");
  if (picks.length && foot) {
    var nav = document.createElement("nav");
    nav.className = "mightlike"; nav.setAttribute("aria-label", "You might also like");
    nav.appendChild(el("h2", "", "You might also like"));
    var grid = el("div", "ml");
    picks.forEach(function (p) {
      if (!title[p]) return;
      var l = el("a", "", title[p] + " →"); l.href = p + ".html"; grid.appendChild(l);
    });
    nav.appendChild(grid);
    var all = el("a", "all", "Everything on the site →"); all.href = "index.html";
    nav.appendChild(all);
    foot.parentNode.insertBefore(nav, foot);
  }
})();
