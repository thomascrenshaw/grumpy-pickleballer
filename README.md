# grumpypickleballer.com

The sincere site. One of three doors into the same guy:

| Site | Who's talking | Voice |
|---|---|---|
| **grumpypickleballer.com** | **Tom, for real** | **Sincere, a little cranky, all heart** |
| doyouevendinkbro.com | Tom, in costume | Supremely confident, always wrong |
| howcanyounothavefunplayingpickleball.com | Kristen, watching | Fond, wry, affectionate |

## Why this exists

A field guide for playing smart rec pickleball without wrecking your body. Warm up without hurting your knees, move so the court does the work, keep your head right, and actually get better. Written by a guy about a year into the game who won't stop playing.

The whole philosophy fits on a paddle: the score is information, not identity. Play the person, not your ego. Take another one. Tap the paddle, mean it.

## Voice

- People: only stated people get names or gendered pronouns (Tyson McGuffin, the scout, the Grumpy Pickleballer, Sonya, Kristen). Everyone else is "they" and "someone I play with," so the crew can't work out who it is.
- Rules of thumb, not laws. Say "generally" or "usually" and leave room for the exceptions a coach would raise.

- First person, conversational, a little cranky, never mean.
- Organize what Tom actually said. Don't invent opinions for him.
- Humble by disclaimer, not by title: "this is *my* routine, about a year in, yours might look nothing like it."
- The profanity on Why You Play is load-bearing. Leave it.
- **Cite facts.** Anything that's a fact rather than Tom's opinion (a rule, a measurement, a date) gets a numbered citation that jumps to a Sources list at the bottom of the page. Markup: `<sup class="cite"><a href="#src-1" id="cite-1">1</a></sup>` in the text, and `<section class="sources">` with an `<ol>` of `<li id="src-1">… <a class="back" href="#cite-1">↩</a></li>` just above the footer. The styles live in `nav.js`. Prefer the primary source (the rulebook itself) over a summary site.
- The mirror image of the bro site: every sincere tip here has a scout version there. If a line here starts sounding like the scout, it's on the wrong site.

## Design

- Palette: warm paper `#eceadf`, ink `#1c2321`, kitchen orange `#c9843f`, pickleball green `#9bc24a`.
- Mobile first. Static HTML/CSS/SVG. No build step, no GIFs.
- Mascot: **Mr. PBSF** (Pickle Ball Stick Figure). Green pickleball body with holes, tiny head, stick limbs.

### Mr. PBSF drawing rules

- **Side view:** one arm, one leg (the legs overlap). Exception: the walking lunge, where the stagger separates them.
- **Front view:** two arms, two legs.
- The hole pattern is defined once as `#pholes` in a hidden `<defs>` and reused on every body with `<use>`.

### Animation system (warmup.html)

- All timing comes from one `:root` block: `--swing-speed: 1.7s`, `--swing-range: 55deg`, `--circle-speed: 1.7s`.
- One technique per kind of motion: continuous rotate for swings and arm circles, `translateX` for shuffles, rotate for the torso, and a two-frame opacity toggle for calf raises, squats, and lunges.
- `prefers-reduced-motion` is respected.

## Pages

| File | What it is |
|---|---|
| `index.html` | Hub with a featured sayings card and quote-led tiles, grouped: Before you play, Positioning, Playing the game, The paddle, The head game, Getting better, Advanced |
| `warmup.html` | Animated 6–8 min dynamic warm-up with knee-friendly and full versions. `?solo=<move>[,<move>]` shows just those figures (that's what the Watch popups load) |
| `knee-foot-routine.html` | Bottom-to-top, slow-to-fast joint routine. Not medical advice. Warm-up rows have a Watch button that pops the matching animation up in a dialog |
| `positioning-basics.html` | Six diagrammed doubles fundamentals |
| `strategy-the-rope.html` | Move with your partner like you're tied together |
| `strategy-the-reset.html` | The attrition shot. Get it over once more, let them miss |
| `strategy-stacking.html` | Under Advanced. Stacking on the return and the serve at even and odd scores (R and L, no names), four diagrams, third-shot options |
| `sayings.html` | Things I Say on the Court: thirteen sayings (newest: "There is no sorry in pickleball"), each opening into origin, meaning, and the principle behind it. Featured at the top of the hub |
| `grips.html` | Continental to western, a tappable bevel diagram, and which grip Tom uses where |
| `nav.js` | The one list of sections and pages. Adds the section link to each page's top bar and the "You might also like" block, and holds the UPDATES list behind What's New. New page? Add it here, to the hub, and one line to UPDATES |
| `round-robin.html` | Tools: round robin generator (popcorn, rotating partners, fixed partners), fair sit-outs, tap-to-swap, copy for the group chat. **Mid-session:** Start on the round being played locks it and everything before; Out/Back on a player (late, leaving, sitting a stretch) and any other change rebuild only the rounds after it, sharing sit-outs by rounds actually present; adding a round never touches existing ones; Previous shuffle undoes the last reshuffle; Start over clears it all. Removing a player who has already played is blocked (use Out). **Partner requests** (popcorn and rotating): pick a pair, how many games together, spread out or at the end, and optional opponents; the pair partners only in those games and is tagged "Requested" instead of counted as a repeat. Saves the roster and schedule in the visitor's browser under `gp_roundrobin` (same `gp_` naming as `gp_lastVisit`). Saved data is per device: a roster set up at home won't be on your phone at the court. **Session links:** `round-robin#play=Tom,Lee,Diane%20C` sets who's playing and adds only new names to the roster (matches any capitalization; a bare first name matches one saved "First X"; two candidates = asks; a repeated name = flags it). Names sit after the `#`, so they never reach the server, and the `#` is cleared after loading. Claude builds these from any Pickleheads session Tom can see (organizer, co-host, or player): first name plus last initial ("Rob M"); two letters of the last name when two people in the session would otherwise match ("Diane Co" / "Diane Ca"). Never a full last name. A possible same person (Rob M vs. Robert M, Tom C vs. Thomas C, Rob M vs. Rob Mo, Tom vs. Tom C) is flagged with Same person / Different buttons; there's no nickname list, and nothing merges without a tap. Public since Oct 31 (survived its first real session): indexed, in `sitemap.xml`, with a how-to guide, FAQ, and WebApplication + FAQPage structured data aimed at "pickleball round robin generator" and "Pickleheads alternative" searches. **Scores (v1.13):** optional score boxes under each court (`R.score[court] = [left, right]`, either side can be blank). Partial scores are fine for timed days; nothing checks for 11. Each court shows "to 11", or "to 7" when anyone sits that round. A round with any score counts as played (`lockedFrom()` includes it), so no reshuffle, Out or Remove ever rebuilds it, and its Reshuffle button disappears. Stats table adds PF, PA and +/− for the session (games with both scores only), in roster order: no ranking, no awards. "Closest game" and "Longest round" notes above the table. Round length comes from Start taps (`R.t`, set on Start, cleared on undo); a round shows "18 min" once the next one is started. Start over asks for a second tap when scores exist and clears them. Scores never go in view-only links or copy text. **Version:** shown at the bottom of the page ("Round Robin v1.13"); bump it with the comment on line 1 so "wrong file" is the first thing ruled out. **Skill balance (v1.12):** optional levels per player: 1 Newer, 2 Getting there, 3 Steady (untagged), 4 Strong, saved by name in `S.levels[group]` with groups Crew and Fast (`S.group`), so one person can be a 4 in the crew game and a 3 in the fast game. Scored inside `arrange`/`arrangeTeams` via `skillCost`: +5000 when a 1+1 team faces a team with a 4, +1500 per 4+4 team, +3 × the gap in team totals. Popcorn gets 400 tries when levels are on. "Tough draw" tag + summary count on the organizer's screen when rule 1 or 2 can't be met (in Fixed partners only rule 1, since you chose the teams). Never in copy text or view-only links. Keeping Strong players apart costs repeat partners (8 players with 2 Strong: 2 repeats minimum). **Share view-only link:** button by Copy. The whole schedule rides in the link after `#view=` (`1/type/now/sent-time/round-count/names/rounds`; each player is one character from 0-9A-Za-z, a round is its courts' four players in a row, then `-sitting`, then `-out`). A snapshot, not live: a reshuffle or an Out means a new link. Viewers see the rounds read-only with a "Find me" picker (remembered as `gp_rr_me`); opening one never reads or writes `gp_roundrobin`, so the organizer can open their own link safely. A link cut short by a messaging app shows "looks cut off." On phones it opens the share sheet; on a computer it copies. **Remove from lineup:** the last choice in each player dropdown. Everyone below moves up and the count drops by one; in Fixed partners the last player (the sub, if any) fills the gap instead, so the other teams stay together. Blocked once that player has played or sat a round (use Out). **Partner request + hand swaps:** pairing the requested pair by hand in a round makes it one of their games (`S.req.at` keeps the list); if that's more than requested, their nearest unplayed game is reshuffled without them. Splitting them by hand frees that round. New shuffle and Reshuffle keep those rounds; changing the pair, games or When starts the placement fresh. **Home-screen app:** added from Safari's Share → Add to Home Screen, it opens full screen as "Round Robin" with the grumpy pickle icon (`/apple-touch-icon.png` at the site root, which iPhone also checks on its own for every page; bump the `?v=` on the page's link when the icon changes). No web manifest: on iPhone it can override the touch icon and leave a letter icon instead. A Refresh button shows in the top bar only there, since home-screen apps have no reload; it's safe because everything is saved on the device. An icon or name change only shows after deleting the home-screen icon and adding it again |
| `whats-new.html` | The full What's New log, grouped by month. Filled in by nav.js from UPDATES |
| `pre-snap-read.html` | Returning serve like a quarterback reads a defense: formation, snap, call, conditions, knowing your crew |
| `who-gets-the-lob.html` | Generally, the opposite side calls it and gets it and the lobbed player switches, with an exceptions note. Two court diagrams: the lob and getting pulled wide |
| `communication.html` | Talk to Your Partner: the one-word calls and how to use them |
| `finding-your-paddle.html` | The best paddle is the one that works for you; how to try before you buy |
| `weighting.html` | Where to add weight and what it changes, with a tappable paddle diagram and a three-question quiz |
| `why-you-play.html` | The ethos: who you are on the court and how you treat people |
| `mental-game.html` | In-match technique: the serve routine as a kit, the silent head |
| `game-within-the-game.html` | The head game: fumbling the ball, the second chase during the routine, "BALL ON!", even the pros play it (reps). Notes footnote credits Sonya (first name only) for the term |
| `line-calls.html` | Playing the Game: if you think it was out, it was in; partners disagree, it's in; call it the best you can; don't play line judge from 29 or 44 feet away. Rulebook aside, now cited: four numbered footnotes (USA Pickleball 2026 rulebook, Rules 8.A, 8.D, 8.H, 3.A) with a Sources list at the bottom. Also "An out call comes from one of three places" (it was out; it was in and they erred; it was in and they want the point) and the rule of thumb that one call isn't worth the lost pickleball time, except for an egregious repeat offender. Rec-game framing, not tournament |
| `lose-like-a-winner.html` | Sportsmanship in Playing the Game: don't slam it just because you can, lose like a winner, same posture every game |
| `getting-better.html` | The learning ladder, the ATP, luck cuts both ways |
| `_template.html` | Starting point for new pages. Noindexed and redirected away |

## What's New

Every change worth telling people about is one line in the `UPDATES` list near the top of `nav.js`, newest first:

```
["page-slug", "2026-10-14", "new", "One short line about what changed."],
```

Use `"new"` for a new page and `"updated"` for a change to an existing one. That one line drives four things:

- **The hub strip:** the latest three entries, under the intro.
- **Since your last visit:** returning visitors see "N new things since your last visit" instead. Their last visit date is kept only in their own browser (localStorage). Nothing is sent anywhere.
- **Tile badges:** a New or Updated pill on the hub tile for 30 days (`BADGE_DAYS`), or longer for someone who hasn't been back since.
- **whats-new.html:** the full log, grouped by month.

Skip typo fixes and wording tweaks. Add a line when a regular would want to go look.


## Rants already on the site

Tom's rules of pickleball that already have a home. Check here before writing a new page; a new rant often belongs on an existing one.

- **Warm up, don't wreck your knees.** Never static-stretch a cold knee. → Dynamic Warm-Up, Knee & Foot Routine
- **Let the court do the work.** The serving team starts on defense; the middle usually goes to the forehand. → Positioning Basics
- **Move like you're tied together.** → The Rope
- **Get it over once more and let them miss.** → The Reset
- **Read the return like a quarterback.** → The Pre-Snap Read
- **Who gets the lob:** generally, the other side calls it and gets it, and the lobbed player switches. → Who Gets the Lob
- **Talk to your partner.** Mine, Yours, Switch, Stay, Out, Bounce. Advanced: the wide dink, edge line to edge line. → Talk to Your Partner
- **If you think it was out, it was in.** Partners disagree, it's in. Call it the best you can. Don't play line judge from 29 or 44 feet away. → Line Calls
- **Don't slam it just because you can.** Lose like a winner, same posture every game. → Lose Like a Winner
- **The best paddle is the one that works for you.** Try before you buy. → Finding Your Paddle, Grips, Weighting
- **The score is information, not identity.** Play the person, not your ego. Playing down is a gift. Take another one (net, long or wide). Tap the paddle, mean it. → Why You Play
- **The ritual and the silent head.** Close your eyes, wait for the sound. → The Mental Game
- **Fumble it, kick it, chase it, BALL ON!** Even the pros play it. → The Game Within the Game
- **Every step of learning a shot is the hardest part.** Luck cuts both ways. → Getting Better
- **Stacking**, for when you're ready. → Stacking
- **The one-liners** live on the sayings page. → Things I Say on the Court

### Ranted, not posted yet

- **Low tennis slices and spinny serves:** the grumpy version waits until Tom is less grumpy. (The scout's version is live as Case Files 05 and 06.)
- **Sayings in the parking lot:** "A routine isn't a routine if you don't do it regularly." "Nice serve." "You!" (and the matching fix on Talk to Your Partner). "Played harder at 0–7 than 0–1." "Brains are pretty fast."
- **Deep dives:** Take another one, Luck cuts both ways, The silent head.

## To do

- **Round Robin, next:** Tom sorts nice-to-haves from must-haves. Candidates: a live-updating version (the snapshot share link is built: Share view-only link) (needs a small Cloudflare store, names on a server, sessions auto-delete after a few hours); scores and standings; a generic public version without the grumpy branding. Pickleheads MCP can't send messages, so it can't post rounds.
- **Team Match (new Tools page, Tom's decisions Nov 11):** MLP-style, 8 players = two teams of 4, no gender rules (at 2.5–3.5 it doesn't matter; teams, not genders). Teams set by hand, with an auto-create button (skill levels) and Round Robin's tap-to-swap editing. Games: a round robin of doubles between the two teams on 2 courts, then a singles tiebreaker if tied, structured on the day (skinny singles is an option); first version just records "singles, 21–7", optionally who played. Reuse score boxes, session links, view-only links, version stamp. Trial the format with the crew first; league play (12–16 players, multiple sessions) later if people like it.
- **Round Robin, later:** a "goes by" note per name, kept on the device, so Pickleheads names (Helena C) load as the name people use (Linka). Mid-game scores for comeback stats (probably too much).

- **Blendering (Tom's term, Oct 24):** moving your opponents around so much they don't remember which side they started the point on. A search found no prior use. Candidate saying ("Blender them") with the real tactic: side to side, hit where they just left; ties to Who Gets the Lob (switches). Scout option: claims he invented it, then blenders himself and serves from the wrong side.
- **Banked line (Point Break, modified):** "Pickleball is the source. It can change your life. Swear to Mr. PBSF." Home TBD: maybe the Mr. PBSF introduction, or merch.

- **Weighting, My build:** update as the hybrid test on the elongated paddle settles.
- **Sayings:** only Tom's own lines go on the sayings page and in hub tile quotes. Add new ones as they come up at the court.

- **Warm-up video slots:** footage drops in when it exists.
- **Parked, on purpose:** leg-length consistency across figures, tap-to-open benefits on warm-up moves.
- **Grips:** confirm whether the over-the-shoulder shift is a true overhead or a high forehand put-away, then settle the aside.
- **Maybe:** a pickleball journey blog. If it happens, Astro can pass these pages through untouched.

## Tom's to-do

- **Sayings:** review the "what I mean" and "why I think it works" text (Claude wrote most of it), and add "Brains are pretty fast."
- **Deep dives:** Take another one, Luck cuts both ways, The silent head.
- **Mr. PBSF:** leg-length consistency across figures, tap-to-open benefits on warm-up moves. Also give him a proper introduction somewhere on the site, so readers know who the stick figure is.
- **Mascot cleanup:** a human-drawn vector version of the grumpy pickle (fixes the headband knot covering the P, the hands, and the stray holes) before it goes on anything for sale.

## SEO

- Every indexable page has a keyword-first title, a meta description, a canonical URL, and Open Graph tags. The preview image is `img/og.png`.
- `sitemap.xml` lists the twenty-two indexable pages. `robots.txt` points to it.
- Canonical URLs have no `.html` because Cloudflare Pages drops the extension.
- When Stacking is written: remove its `noindex`, add it to `sitemap.xml`.

## Deploy

Cloudflare Pages, connected to this repo. Framework preset: None. Build command: empty. Output directory: root. Push to `main` and it redeploys.

`_redirects` keeps this README and the template off the public site.

Local preview: run `./pages` in this folder.
