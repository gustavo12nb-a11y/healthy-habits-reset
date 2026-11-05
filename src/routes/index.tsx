import { createFileRoute } from "@tanstack/react-router";
import "../sales-page.css";
import cover from "@/assets/cover-mockup.png.asset.json";
import grocery from "@/assets/sample-grocery-list.png.asset.json";
import tracker from "@/assets/sample-habit-tracker.png.asset.json";
import plate from "@/assets/sample-balanced-plate-guide.png.asset.json";

const TITLE = "The 4-Week Healthy Habits Reset | Printable Wellness Workbook";
const DESC =
  "A simple 28-day printable wellness workbook with meal planning pages, habit trackers, grocery lists and practical guides.";

// Replace these with your real checkout URLs.
const STARTER_CHECKOUT_URL = "PASTE_STARTER_CHECKOUT_URL_HERE";
const COMPLETE_CHECKOUT_URL = "PASTE_COMPLETE_CHECKOUT_URL_HERE";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "theme-color", content: "#f6f5ee" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:image", content: cover.url },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: cover.url },
    ],
  }),
  component: Index,
});

const included = [
  ["Four-Week Roadmap", "A simple overview, personal goals worksheet, and weekly planning pages."],
  ["Meal Planning Pages", "Four weekly meal planners with space to organize your own meals."],
  ["Shopping Lists", "Four grocery lists to make shopping and pantry checks easier."],
  ["Habit Trackers", "Four weekly trackers to record habits that matter to your routine."],
  ["Weekly Reflections", "Space to notice what worked, what felt difficult, and what to try next."],
  ["Print-Friendly Formats", "Two PDF sizes: A4 (210 × 297 mm) and US Letter (8.5 × 11 in)."],
];

const faqs = [
  ["How will I receive the workbook?", "This is a digital product. After checkout, use the download link provided by the payment platform to access your PDF files. No physical item will be shipped."],
  ["Which paper sizes are included?", "Both A4 (210 × 297 mm) and US Letter (8.5 × 11 inches) PDF versions are included."],
  ["Can I edit the pages on my computer?", "The files are designed as printable PDFs. They are not editable Canva templates, although you can write on printed pages or use a PDF annotation app."],
  ["Is this a personalized diet or workout plan?", "No. It is a general planning and educational workbook. It does not provide individualized nutrition, medical, or exercise advice."],
  ["Can I share the files with friends or clients?", "The purchase is for personal use only. Please do not resell, redistribute, share, or claim the pages as your own."],
  ["What if I need help with my order?", "Contact the seller through the support channel shown on your order confirmation. Add your customer support email or contact link before publishing this page."],
];

function Brand() {
  return (
    <div className="brand">
      <span className="brand-mark">✓</span>HEALTHY HABITS RESET
    </div>
  );
}

function Index() {
  return (
    <div className="hh">
      <header className="topbar">
        <div className="container topbar-inner">
          <Brand />
          <a className="top-link" href="#pricing">Choose your workbook ↓</a>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="container hero-grid">
            <div>
              <span className="eyebrow">A printable 28-day wellness workbook</span>
              <h1>
                Make room for healthier habits—<em>one week at a time.</em>
              </h1>
              <p className="subhead">
                A simple, practical guide to help you plan meals, organize groceries, track everyday habits, and make space for movement. No complicated rules. Just a little more structure for your routine.
              </p>
              <div className="cta-row">
                <a className="btn btn-primary" href="#pricing">Explore the workbook</a>
                <a className="btn btn-secondary" href="#inside">See sample pages</a>
              </div>
              <p className="micro">Instant digital download · A4 + US Letter PDFs · Print at home</p>
            </div>
            <div className="hero-art">
              <img src={cover.url} alt="The 4-Week Healthy Habits Reset printable workbook and sample pages" />
              <div className="float-note">42 pages in the Complete Bundle</div>
            </div>
          </div>
        </section>

        <div className="trustbar">
          <div className="container trust-items">
            <span>Meal planning</span><span>Habit tracking</span><span>Everyday movement</span><span>Print at home</span>
          </div>
        </div>

        <section id="inside">
          <div className="container">
            <p className="section-kicker">A look inside</p>
            <h2 className="section-title">Useful pages you can actually put to work.</h2>
            <p className="section-intro">Preview real pages from the workbook. Print the full set or choose the pages that fit your week.</p>
            <div className="samples">
              {[
                [grocery.url, "Sample weekly grocery shopping list page", "Weekly Grocery Lists", "Organize produce, protein foods, pantry staples, and the extras you need."],
                [tracker.url, "Sample weekly habit tracker page", "Daily Habit Tracking", "Choose a few realistic habits and mark the days you practice them."],
                [plate.url, "Sample flexible balanced plate visual guide", "Flexible Food Guidance", "A simple visual starting point for building balanced meals in a way that suits you."],
              ].map(([src, alt, h, p]) => (
                <article className="sample-card" key={h}>
                  <img src={src} alt={alt} />
                  <div className="sample-copy"><h3>{h}</h3><p>{p}</p></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="included">
          <div className="container">
            <p className="section-kicker">What is included</p>
            <h2 className="section-title">A clear structure for all four weeks.</h2>
            <p className="section-intro">Pick the level of support that feels right. Both options are printable PDF downloads for personal use.</p>
            <div className="included-grid">
              {included.map(([t, d], i) => (
                <div className="included-item" key={t}>
                  <div className="included-icon">{String(i + 1).padStart(2, "0")}</div>
                  <div><strong>{t}</strong><p>{d}</p></div>
                </div>
              ))}
            </div>
            <div className="bundle-note">
              <strong>Included in the Complete Bundle:</strong> 12 meal inspiration cards, a flexible balanced-plate guide, pantry checklist, eating-out guide, movement menu, sleep &amp; stress check-in, and non-scale progress tracker.
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <p className="section-kicker">Extra support</p>
            <h2 className="section-title">The Complete Bundle adds practical bonus guides.</h2>
            <p className="section-intro">Small references to help you make everyday choices with more confidence and less guesswork.</p>
            <div className="bonus-grid">
              <article className="bonus"><small>Bonus 01</small><h3>12 Meal Inspiration Cards</h3><p>Flexible ideas to help you think of simple meal combinations.</p></article>
              <article className="bonus"><small>Bonus 02</small><h3>Everyday Wellness Guides</h3><p>Quick references for movement, eating out, pantry basics, and balanced plates.</p></article>
              <article className="bonus"><small>Bonus 03</small><h3>Personal Progress Check-Ins</h3><p>Track consistency and reflect on sleep, stress, and non-scale progress.</p></article>
            </div>
          </div>
        </section>

        <section className="pricing" id="pricing">
          <div className="container">
            <p className="section-kicker">Choose your download</p>
            <h2 className="section-title">Start with the pages you need.</h2>
            <p className="section-intro">One-time purchase. Instant digital access after checkout. No subscription.</p>
            <div className="price-grid">
              <article className="price-card">
                <h3>Starter Kit</h3>
                <div className="price">$6.99</div>
                <p className="price-desc">24 printable pages</p>
                <ul>
                  <li>Personal goals and 4-week roadmap</li><li>4 weekly planning sheets</li><li>4 weekly meal planners</li><li>4 grocery shopping lists</li><li>4 habit trackers</li><li>4 weekly reflection sheets</li><li>A4 and US Letter PDF files</li>
                </ul>
                <a className="btn btn-secondary" href={STARTER_CHECKOUT_URL}>Get the Starter Kit</a>
              </article>
              <article className="price-card featured">
                <span className="popular">Best value</span>
                <h3>Complete Bundle</h3>
                <div className="price">$12.99</div>
                <p className="price-desc">42 printable pages</p>
                <ul>
                  <li>Everything in the Starter Kit</li><li>12 meal inspiration cards</li><li>Flexible balanced-plate visual guide</li><li>Pantry and eating-out guides</li><li>Low-pressure movement menu</li><li>Sleep &amp; stress check-in</li><li>Non-scale progress tracker</li><li>A4 and US Letter PDF files</li>
                </ul>
                <a className="btn btn-primary" href={COMPLETE_CHECKOUT_URL}>Get the Complete Bundle</a>
              </article>
            </div>
            <p className="price-foot">Secure checkout will be provided by the seller's selected payment platform. Checkout links have not been added yet.</p>
          </div>
        </section>

        <section>
          <div className="container">
            <div className="guarantee-wrap">
              <div className="guarantee-icon">✓</div>
              <div>
                <h2>7-Day Money-Back Guarantee</h2>
                <p>Try the workbook for yourself. If it is not the right fit, contact the seller within 7 days of purchase to request a refund. The final refund process will follow the checkout provider's terms and applicable consumer rules.</p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <p className="section-kicker">Questions</p>
            <h2 className="section-title">Good to know before you download.</h2>
            <div className="faq">
              {faqs.map(([q, a]) => (
                <details key={q}><summary>{q}</summary><p>{a}</p></details>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container">
          <div className="footer-inner">
            <div>
              <Brand />
              <p>A practical printable workbook for planning meals, tracking everyday habits, and building a routine that feels manageable.</p>
            </div>
            <div className="footer-links">
              <a href="#inside">What's inside</a><a href="#pricing">Pricing</a><a href="#">Contact seller</a>
            </div>
          </div>
          <div className="copyright">© 2026 Healthy Habits Reset. Personal-use digital download. Educational and organizational content only; not medical, nutrition, or exercise advice.</div>
        </div>
      </footer>
    </div>
  );
}
