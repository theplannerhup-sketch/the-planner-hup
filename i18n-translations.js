/**
 * i18n-translations.js
 * -----------------------------------------------------------------------
 * Structured JSON-style translation dictionary for the Hangul practice
 * sheet site. Add new keys here as you add new UI text — never hardcode
 * user-facing strings directly in HTML once this system is wired up.
 *
 * NAMING CONVENTION: dot.notation keys, grouped by section
 * (nav.*, hero.*, features.*, cta.*, footer.*, meta.*)
 *
 * Indonesian strings below use high-search-volume local phrasing
 * (e.g. "Lembar Latihan Hangul Gratis", "Belajar Bahasa Korea untuk Pemula")
 * rather than literal machine translation, since Indonesian learners
 * commonly search those exact terms.
 * -----------------------------------------------------------------------
 */

const translations = {
  en: {
    meta: {
      title: "Free Hangul Practice Sheets | Learn Korean for Beginners",
      description:
        "Download free printable Hangul practice sheets. Perfect for beginners learning to read and write Korean — no sign-up required."
    },
    nav: {
      home: "Home",
      sheets: "Practice Sheets",
      guide: "Beginner Guide",
      about: "About",
      langLabel: "Language"
    },
    hero: {
      badge: "100% Free · No Sign-Up",
      heading: "Free Hangul Practice Sheets",
      subheading: "Learn Korean for Beginners",
      description:
        "Printable, easy-to-use worksheets to help you master the Korean alphabet — from your very first letter to full syllable blocks.",
      ctaPrimary: "Download Now",
      ctaSecondary: "See All Sheets"
    },
    features: {
      title: "Why Use Our Practice Sheets?",
      item1Title: "Beginner-Friendly",
      item1Desc: "Clear stroke order guides for every Hangul character.",
      item2Title: "Print-Ready PDFs",
      item2Desc: "Clean, ink-friendly layouts optimized for home printing.",
      item3Title: "Completely Free",
      item3Desc: "No account, no email, no hidden paywall — just download."
    },
    cta: {
      heading: "Ready to start learning Hangul?",
      button: "Get Your Free Sheet"
    },
    footer: {
      rights: "All rights reserved.",
      madeWith: "Made for Korean language learners worldwide."
    }
  },

  id: {
    meta: {
      title: "Lembar Latihan Hangul Gratis | Belajar Bahasa Korea untuk Pemula",
      description:
        "Unduh lembar latihan Hangul gratis yang bisa dicetak. Cocok untuk pemula yang ingin belajar membaca dan menulis huruf Korea — tanpa perlu daftar."
    },
    nav: {
      home: "Beranda",
      sheets: "Lembar Latihan",
      guide: "Panduan Pemula",
      about: "Tentang Kami",
      langLabel: "Bahasa"
    },
    hero: {
      badge: "100% Gratis · Tanpa Daftar",
      heading: "Lembar Latihan Hangul Gratis",
      subheading: "Belajar Bahasa Korea untuk Pemula",
      description:
        "Lembar kerja siap cetak yang mudah digunakan untuk membantu kamu menguasai huruf Korea — mulai dari huruf pertama hingga rangkaian suku kata lengkap.",
      ctaPrimary: "Unduh Sekarang",
      ctaSecondary: "Lihat Semua Lembar"
    },
    features: {
      title: "Kenapa Pakai Lembar Latihan Kami?",
      item1Title: "Ramah untuk Pemula",
      item1Desc: "Panduan urutan goresan yang jelas untuk setiap huruf Hangul.",
      item2Title: "PDF Siap Cetak",
      item2Desc: "Tata letak rapi dan hemat tinta, dioptimalkan untuk printer rumahan.",
      item3Title: "Sepenuhnya Gratis",
      item3Desc: "Tanpa akun, tanpa email, tanpa biaya tersembunyi — langsung unduh."
    },
    cta: {
      heading: "Siap mulai belajar Hangul?",
      button: "Dapatkan Lembar Gratismu"
    },
    footer: {
      rights: "Hak cipta dilindungi.",
      madeWith: "Dibuat untuk para pembelajar bahasa Korea di seluruh dunia."
    }
  }
};

// Exposed globally so i18n.js can read it (works with plain <script> tags,
// no bundler required — matches a static GitHub Pages setup).
window.translations = translations;
