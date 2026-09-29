// Everything a non-developer may need to edit lives here.
// ⚠️ Items marked CONFIRM are placeholders — check them with the team before going live.

export const links = {
  app:       'https://app.easepharma.store/pos',
  signIn:    'https://app.easepharma.store/pos',
  demo:      '#demo',          // CONFIRM: booking link / Calendly / WhatsApp
  whatsapp:  '#demo',          // CONFIRM: e.g. https://wa.me/923XXXXXXXXX
  migration: '#demo',          // CONFIRM: "Request free assisted migration" form/link
  playStore: '#',              // CONFIRM: Google Play Store link
  appStore:  '#',              // CONFIRM: Apple App Store link
}

export const plans = [
  {
    name: 'Single Store',
    price: 'Rs 4,500',         // CONFIRM: verify final price with team
    period: '/month',
    blurb: 'One counter, everything a community pharmacy needs.',
    features: [
      'Keyboard and barcode POS with loose-tablet dispensing',
      'FEFO batches, expiry alerts and markdowns',
      'Patient Khata with credit limits',
      'Shift sessions and cash reconciliation',
      'Thermal receipts with DSL and FBR details',
      'Encrypted nightly Google Drive backup',
    ],
    cta: 'Start with one store',
  },
  {
    name: 'Pro Multi-Outlet',
    price: 'Rs 8,500',         // CONFIRM: verify final price — sourced from app subscription page
    period: '/month',
    blurb: 'For pharmacies with more than one counter or branch.',
    features: [
      'Everything in Single Store',
      'Multiple branches and stock transfers',
      'Procurement, WhatsApp orders and GRN',
      'Zento AI copilot and autopilot alerts',
      'Control Tower with 30 analytics reports',
      'WhatsApp receipts and refill reminders',
    ],
    cta: 'Choose Pro',
    featured: true,
  },
  {
    name: 'Chains & Hospitals',
    price: 'Custom',
    period: '',
    blurb: 'For chains, hospital OPD dispensaries and storehouses.',
    features: [
      'Everything in Pro',
      'Central storehouse and multi-branch rollout',
      'Assisted data migration',
      'Role-based permissions for every staff level',
      'Priority support',
    ],
    cta: 'Talk to us',
  },
]

export const faqs = [
  {
    q: 'Does it work when the internet is down?',
    a: 'Yes. The POS keeps billing offline and syncs automatically when connectivity returns. You will never lose a sale or a receipt.',
  },
  {
    q: 'How does the free migration from Candela RMS work?',
    a: 'Our team imports your stock list via a CSV upload. Columns are matched automatically. You review the preview and go live the same afternoon. Candela RMS, MediPharma, Focus, HDPOS, QuickPOS and Excel sheets are all supported.',
  },
  {
    q: 'How does FBR Tier-1 e-invoicing work?',
    a: 'Every receipt generated in Ease Pharma receives a USIN from FBR and prints an FBR QR code on the 80mm thermal slip — fully compliant with the Point of Sale Integration Rules 2020.',
  },
  {
    q: 'Which payment methods are accepted?',
    a: 'Cash, Raast QR, PayPak, 1Link, EasyPaisa and JazzCash. Your pharmacist selects the method at checkout; the receipt reflects it.',
  },
  {
    q: 'What hardware do I need?',
    a: 'Any Windows or Android PC, a standard USB or Bluetooth barcode scanner, and a 58mm or 80mm thermal printer. No proprietary hardware required.',
  },
  {
    q: 'Where is my data stored?',
    a: 'Ease Pharma encrypts and backs up your data nightly to your own Google Drive. You own the backup. We do not sell or share your data.',
  },
]
