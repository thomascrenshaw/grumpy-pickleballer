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
| `sayings.html` | Things I Say on the Court: ten sayings, each opening into origin, meaning, and the principle behind it. Featured at the top of the hub |
| `grips.html` | Continental to western, a tappable bevel diagram, and which grip Tom uses where |
| `nav.js` | The one list of sections and pages. Adds the section link to each page's top bar and the "You might also like" block, and holds the UPDATES list behind What's New. New page? Add it here, to the hub, and one line to UPDATES |
| `whats-new.html` | The full What's New log, grouped by month. Filled in by nav.js from UPDATES |
| `pre-snap-read.html` | Returning serve like a quarterback reads a defense: formation, snap, call, conditions, knowing your crew |
| `who-gets-the-lob.html` | Generally, the opposite side calls it and gets it and the lobbed player switches, with an exceptions note. Two court diagrams: the lob and getting pulled wide |
| `communication.html` | Talk to Your Partner: the one-word calls and how to use them |
| `finding-your-paddle.html` | The best paddle is the one that works for you; how to try before you buy |
| `weighting.html` | Where to add weight and what it changes, with a tappable paddle diagram and a three-question quiz |
| `why-you-play.html` | The ethos: who you are on the court and how you treat people |
| `mental-game.html` | In-match technique: the serve routine as a kit, the silent head |
| `game-within-the-game.html` | The head game: fumbling the ball, the second chase during the routine, "BALL ON!", even the pros play it (reps) |
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


## To do

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
- `sitemap.xml` lists the twenty indexable pages. `robots.txt` points to it.
- Canonical URLs have no `.html` because Cloudflare Pages drops the extension.
- When Stacking is written: remove its `noindex`, add it to `sitemap.xml`.

## Deploy

Cloudflare Pages, connected to this repo. Framework preset: None. Build command: empty. Output directory: root. Push to `main` and it redeploys.

`_redirects` keeps this README and the template off the public site.

Local preview: run `./pages` in this folder.
