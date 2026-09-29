# Ease Pharma — Marketing Site

Cloud pharmacy POS and management system for Pakistani pharmacies.
Built with **Vite + React + Tailwind CSS v4**.

## Quick start

```bash
npm install
npm run dev          # dev server at http://localhost:5173
npm run build        # production build → dist/
npm run build:single # single self-contained index.html → dist-single/
```

---

## Editing content

**All copy, prices and links live in [`src/content.js`](src/content.js)** — no React knowledge needed.

### Links

```js
export const links = {
  demo:      'https://calendly.com/easepharma/demo',  // booking link
  whatsapp:  'https://wa.me/923XXXXXXXXX',             // WhatsApp CTA
  signIn:    'https://app.easepharma.store/pos',
  migration: 'https://form.easepharma.store/migrate',
  playStore: 'https://play.google.com/...',
  appStore:  'https://apps.apple.com/...',
}
```

### Pricing plans

Each plan object:

| Field      | Type    | Purpose                          |
|------------|---------|----------------------------------|
| `name`     | string  | Plan display name                |
| `price`    | string  | e.g. `'Rs 4,500'` or `'Custom'` |
| `period`   | string  | e.g. `'/month'` (leave `''` for custom) |
| `blurb`    | string  | One-sentence description         |
| `features` | array   | Bullet list of features          |
| `cta`      | string  | Button label                     |
| `featured` | boolean | Set `true` on the highlighted plan |

### FAQs

Array of `{ q, a }` objects in `src/content.js`. Add, remove or reorder freely.

---

## Swapping mockups for real screenshots

Every product UI is built in code inside `src/components/`. To replace a mockup with a real screenshot:

1. Drop the image in `public/screenshots/`
2. In the relevant component, replace the JSX mockup with:
   ```jsx
   <img src="/screenshots/your-file.png" alt="Ease Pharma POS" className="screen w-full" />
   ```

The `.screen` CSS class applies the correct shadow and border-radius automatically.

---

## Brand colours

| Token            | Hex       | Usage                            |
|------------------|-----------|----------------------------------|
| `--color-ox`     | `#600010` | CTAs, highlights, chart lines    |
| `--color-aub`    | `#1A012C` | Headings, dark sections, footer  |
| `--color-ice`    | `#F7FCFF` | Alternate section backgrounds    |
| `--color-paper`  | `#FFFFFF` | White sections                   |
| `--color-ok`     | `#15803d` | Success / paid states only       |
| `--color-warn`   | `#b45309` | Expiry amber only                |

All defined in `src/index.css` inside `@theme {}`.

---

## Project structure

```
src/
  content.js          ← All editable copy, prices and links
  index.css           ← Design system (Tailwind v4 @theme + custom CSS)
  App.jsx             ← Section order
  components/
    Nav.jsx           ← Sticky navigation
    Hero.jsx          ← Hero + compliance strip
    PosMockup.jsx     ← Animated POS register
    Counter.jsx       ← Keyboard billing section
    Stock.jsx         ← Expiry risk dashboard
    Compliance.jsx    ← Receipt mockup + compliance cards
    Zento.jsx         ← AI copilot (dark section)
    Patients.jsx      ← Patient Khata section
    Insights.jsx      ← Profit + hours charts
    Migration.jsx     ← 5-step switch guide
    Mobile.jsx        ← Mobile app section
    Pricing.jsx       ← Pricing plans
    Faq.jsx           ← FAQ accordion
    Closing.jsx       ← Final CTA + footer
    Logo.jsx          ← Brand logo
    Qr.jsx            ← Illustrative QR pattern
  hooks/
    useInView.js      ← Scroll-triggered animation hook
```

---

A product of **EaseZen Solutions, Islamabad**.
