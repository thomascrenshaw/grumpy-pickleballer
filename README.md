# grumpypickleballer.com

The sincere site. One of three doors into the same guy:

| Site | Who's talking | Voice |
|---|---|---|
| **grumpypickleballer.com** | **Tom, for real** | **Sincere, a little cranky, all heart** |
| doyouevendinkbro.com | Tom, in costume | Supremely confident, always wrong |
| howcanyounothavefunplayingpickleball.com | Kristen, watching | Fond, wry, affectionate (not built yet) |

## Why this exists

A field guide for playing smart rec pickleball without wrecking your body. Warm up without hurting your knees, move so the court does the work, keep your head right, and actually get better. Written by a guy about a year into the game who won't stop playing.

The whole philosophy fits on a paddle: the score is information, not identity. Play the person, not your ego. Take another one. Tap the paddle, mean it.

## Voice

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
- `anim-admin.html` is the local tuning dashboard for those variables. It's a dev tool and never deploys.

## Pages

| File | What it is |
|---|---|
| `index.html` | Hub, grouped: Before you play, Positioning, The paddle, The head game, Getting better |
| `warmup.html` | Animated 6–8 min dynamic warm-up with knee-friendly and full versions |
| `knee-foot-routine.html` | Bottom-to-top, slow-to-fast joint routine. Not medical advice |
| `positioning-basics.html` | Six diagrammed doubles fundamentals |
| `strategy-the-rope.html` | Move with your partner like you're tied together |
| `strategy-the-reset.html` | The attrition shot. Get it over once more, let them miss |
| `strategy-stacking.html` | **Stub.** Noindexed until it's written |
| `grips.html` | Continental to western, a tappable bevel diagram, and which grip Tom uses where |
| `why-you-play.html` | The ethos: who you are on the court and how you treat people |
| `mental-game.html` | In-match technique: the serve routine as a kit, the silent head |
| `getting-better.html` | The learning ladder, the ATP, luck cuts both ways |
| `_template.html` | Starting point for new pages. Noindexed and redirected away |

## To do

- **Stacking:** waiting on the stacking how-to Tom wrote for Sonya.
- **Positioning, card 1:** add that the serving team has to work to reach the kitchen line together. The receiving team gets there for free.
- **Warm-up video slots:** footage drops in when it exists.
- **Parked, on purpose:** leg-length consistency across figures, tap-to-open benefits on warm-up moves, the torso floating off the legs during rotation.
- **Grips:** confirm whether the over-the-shoulder shift is a true overhead or a high forehand put-away, then settle the aside.
- **Maybe:** a pickleball journey blog. If it happens, Astro can pass these pages through untouched.

## SEO

- Every indexable page has a keyword-first title, a meta description, a canonical URL, and Open Graph tags. The preview image is `img/og.png`.
- `sitemap.xml` lists the ten indexable pages. `robots.txt` points to it.
- Canonical URLs have no `.html` because Cloudflare Pages drops the extension.
- When Stacking is written: remove its `noindex`, add it to `sitemap.xml`.

## Deploy

Cloudflare Pages, connected to this repo. Framework preset: None. Build command: empty. Output directory: root. Push to `main` and it redeploys.

`_redirects` keeps this README, the template, and the anim dashboard off the public site.

Local preview: run `pages` in this folder.
