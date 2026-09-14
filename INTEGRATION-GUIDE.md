# The Planner Hup — Premium Storefront Upgrade

I pulled your live repo (`theplannerhup-sketch/the-planner-hup`) before writing this,
so everything below matches your real files, not a generic template. One heads-up:
your site has already grown into a full multi-page store — this upgrade builds on
top of that, it doesn't replace it.

## Files in this delivery

| File | Purpose |
|---|---|
| `email-capture.css` | Styles for the email-gate popup (Feature 1) |
| `email-capture-modal.html` | The popup's HTML — paste once per free-tool page |
| `email-capture.js` | Popup logic + Mailchimp/ConvertKit placeholder |
| `premium-store.css` | Styles for the storefront grid + iPad mockup frames (Features 2 & 3) |
| `premium-store-section.html` | The 3-card "Premium Digital Planners" section |
| `premium-store.js` | Loads the Gumroad overlay script + click tracking |
| `nav-update-snippet.html` | Nav changes to separate Free Tools vs Premium (Feature 4) |

## Step 1 — Email capture on free tools

Target files: `hangul-practice-sheet-generator.html`, `habit-tracker-generator.html`,
`gpa-calculator.html`, `reading-pace-calculator.html`.

1. In `<head>`, add:
   ```html
   <link rel="stylesheet" href="email-capture.css">
   ```
2. Paste the contents of `email-capture-modal.html` right before `</body>`.
3. Right after it, add:
   ```html
   <script src="email-capture.js"></script>
   ```
4. Find the existing download button. On the Hangul generator it's:
   ```html
   <button onclick="downloadAsPDF('sheet-preview', 'hangul-practice-sheet')">Download as PDF</button>
   ```
   Change the `onclick` to wrap the same call:
   ```html
   <button onclick="PlannerHupEmailGate.requireEmail(function () {
       downloadAsPDF('sheet-preview', 'hangul-practice-sheet');
   })">Download as PDF</button>
   ```
   The original `downloadAsPDF()` function doesn't change — this just gates the click.
5. Once you have a Mailchimp or ConvertKit account, open `email-capture.js` and fill in
   **one** of the two commented-out `fetch()` blocks inside `saveEmailToProvider()`.
   Mailchimp needs a small serverless proxy (its API key can't live in browser JS);
   ConvertKit's Forms API can be called directly from the browser.

## Step 2 — Premium Store section

Target file: `index.html`.

1. In `<head>`, add:
   ```html
   <link rel="stylesheet" href="premium-store.css">
   ```
2. Paste `premium-store-section.html` right after the products section closes —
   directly after the `</section>` that follows `id="products"` (just before the
   "WHY THE PLANNER HUP?" section starts).
3. Before `</body>`, add:
   ```html
   <script src="premium-store.js"></script>
   ```
4. Swap in your real products:
   - Replace each `https://GUMROAD_USERNAME.gumroad.com/l/PRODUCT_ID?wanted=true`
     with the real link from your Gumroad product's **Share** page.
   - Replace each mockup `<img src="images/PASTE-...">` with an actual iPad/tablet
     mockup image of that planner. Until you add one, a soft pastel placeholder box
     shows automatically (no broken-image icon).
   - Edit the title, description and price text for each card.

   **Prefer Payhip instead of Gumroad?** Each product card in
   `premium-store-section.html` has a commented-out Payhip version of the button
   right below the Gumroad one — swap which one is active, and in `premium-store.js`
   switch the loader from `loadGumroadOverlay()` to the commented-out `loadPayhipEmbed()`.

## Step 3 — Navigation split

Apply the patterns in `nav-update-snippet.html`:
- **A)** `index.html`'s main nav — add the "✨ Premium Planners" pill link after "Free Tools".
- **B)** Every tool page's simpler header nav (Hangul generator, habit tracker, etc.) —
  same pill link, plus a "← All Free Tools" link back to the hub.
- **C)** `tools.html` — a banner at the top nudging free-tool users toward the premium store.

## Notes on what's already there

- Your header nav already links to `tools.html` ("Free Tools") — I only *added* the
  Premium counterpart rather than restructuring the whole nav.
- `index.html` already has cart/checkout UI (`openCart()`, WhatsApp order flow). The
  Gumroad overlay buttons are independent of that — they open Gumroad's own popup
  checkout, so premium products don't need to go through your existing cart at all.
- Colors, fonts and border-radius values throughout the new CSS reuse your existing
  `:root` variables from `style.css` (`--rose`, `--cream`, `--brown`, etc.), so the new
  section should look native rather than bolted on.
