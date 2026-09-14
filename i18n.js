/**
 * i18n.js
 * -----------------------------------------------------------------------
 * Lightweight client-side translation engine. No dependencies, no paid
 * plugins. Load this AFTER i18n-translations.js.
 *
 * HOW IT WORKS
 * 1. On load, decide the language: localStorage choice > browser language > 'en'.
 * 2. Walk the DOM for elements tagged with data-i18n="section.key" and
 *    replace their text (or innerHTML, or an attribute) with the match.
 * 3. Expose setLanguage(lang) so the switcher buttons can call it.
 *
 * HOW TO TAG YOUR HTML
 *   <h1 data-i18n="hero.heading">Free Hangul Practice Sheets</h1>
 *   <p  data-i18n="hero.description">...</p>
 *   <button data-i18n="hero.ctaPrimary">Download Now</button>
 *
 * For attributes (placeholder, title, alt, content) instead of text:
 *   <input data-i18n-attr="placeholder" data-i18n="form.emailPlaceholder">
 *   <meta name="description" data-i18n-attr="content" data-i18n="meta.description">
 *
 * If a string legitimately contains HTML (bold tags etc.), opt in with:
 *   <p data-i18n="hero.richText" data-i18n-html="true">...</p>
 * -----------------------------------------------------------------------
 */

(function () {
  "use strict";

  const STORAGE_KEY = "site_lang";
  const DEFAULT_LANG = "en";
  const SUPPORTED_LANGS = ["en", "id"];

  /**
   * STEP 1: SMART AUTO-DETECTION
   * Priority: saved user choice > browser language > default ('en').
   */
  function detectLanguage() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved && SUPPORTED_LANGS.includes(saved)) {
      return saved;
    }

    // navigator.language e.g. "id", "id-ID", "en-US"
    const browserLang = (navigator.language || navigator.userLanguage || "")
      .toLowerCase();

    if (browserLang.startsWith("id")) {
      return "id";
    }

    return DEFAULT_LANG;
  }

  /**
   * Resolve a dot-notation key like "hero.heading" against the
   * translations object for the given language.
   */
  function resolveKey(lang, key) {
    const parts = key.split(".");
    let node = window.translations[lang];
    for (const part of parts) {
      if (node == null) return null;
      node = node[part];
    }
    return node;
  }

  /**
   * STEP 2: APPLY TRANSLATIONS TO THE DOM
   */
  function applyLanguage(lang) {
    if (!SUPPORTED_LANGS.includes(lang)) lang = DEFAULT_LANG;

    document.documentElement.setAttribute("lang", lang);

    // Translate every tagged element
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      const value = resolveKey(lang, key);
      if (value == null) {
        console.warn(`[i18n] Missing translation for key: "${key}" (${lang})`);
        return;
      }

      const attr = el.getAttribute("data-i18n-attr");
      const isHtml = el.getAttribute("data-i18n-html") === "true";

      if (attr) {
        el.setAttribute(attr, value);
      } else if (isHtml) {
        el.innerHTML = value;
      } else {
        el.textContent = value;
      }
    });

    // Update <title> and meta description directly (common enough to special-case)
    const meta = window.translations[lang].meta;
    if (meta) {
      if (meta.title) document.title = meta.title;
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc && meta.description) metaDesc.setAttribute("content", meta.description);
    }

    // Update switcher UI active states
    document.querySelectorAll("[data-lang-option]").forEach((btn) => {
      btn.classList.toggle("active", btn.getAttribute("data-lang-option") === lang);
      btn.setAttribute("aria-pressed", btn.getAttribute("data-lang-option") === lang);
    });

    // SEO NOTE:
    // A client-side switch like this does NOT create a second crawlable
    // URL, so it cannot be reflected by <link rel="alternate" hreflang="..">
    // tags on its own — hreflang must point to real, separately-servable
    // URLs (e.g. yoursite.github.io/ and yoursite.github.io/id/).
    // See the hreflang comment block in the HTML <head> below for the
    // minimum setup needed to make the Indonesian version indexable.
  }

  /**
   * STEP 3: PERSISTENCE
   * Called by the language switcher buttons/dropdown.
   */
  function setLanguage(lang) {
    if (!SUPPORTED_LANGS.includes(lang)) return;
    localStorage.setItem(STORAGE_KEY, lang);
    applyLanguage(lang);
  }

  // Expose for switcher markup (onclick="setLanguage('id')") and console debugging
  window.setLanguage = setLanguage;

  // Boot on DOM ready
  document.addEventListener("DOMContentLoaded", () => {
    const lang = detectLanguage();
    applyLanguage(lang);
  });
})();
