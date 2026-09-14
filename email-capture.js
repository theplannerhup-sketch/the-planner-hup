/* =========================================================
   THE PLANNER HUP — EMAIL CAPTURE GATE
   Feature 1: Freemium model with email capture

   WHAT THIS DOES
   Wraps any "download" action so the visitor must submit a
   valid email first. Once submitted, the email is remembered
   in this browser (localStorage) so they are never asked again
   on that device.

   HOW TO USE ON hangul-practice-sheet-generator.html
   (same pattern for every other free-tool page):

   1. In <head>, add:
        <link rel="stylesheet" href="email-capture.css">

   2. Right before </body>, paste the modal markup from
      email-capture-modal.html, then load this file:
        <script src="email-capture.js"></script>

   3. Change the existing download button from:

        <button onclick="downloadAsPDF('sheet-preview','hangul-practice-sheet')">
            Download as PDF
        </button>

      to:

        <button onclick="PlannerHupEmailGate.requireEmail(function () {
            downloadAsPDF('sheet-preview', 'hangul-practice-sheet');
        })">
            Download as PDF
        </button>

   That's it — the original downloadAsPDF() function in the page
   does not need to change at all.
   ========================================================= */

(function (window, document) {
    'use strict';

    var STORAGE_KEY = 'plannerhup_subscriber_email';
    var pendingCallback = null;

    function getModal() {
        return document.getElementById('emailGateModal');
    }

    function isSubscribed() {
        try {
            return !!localStorage.getItem(STORAGE_KEY);
        } catch (e) {
            return false; // e.g. private browsing mode blocking storage
        }
    }

    function openModal() {
        var modal = getModal();
        if (!modal) {
            // Modal markup missing from this page — don't block the download,
            // just warn in the console so it's easy to spot during setup.
            console.warn('[EmailGate] Modal markup not found on this page. Paste email-capture-modal.html.');
            if (pendingCallback) { pendingCallback(); pendingCallback = null; }
            return;
        }
        modal.classList.add('is-open');
        document.body.style.overflow = 'hidden';

        var input = document.getElementById('emailGateInput');
        if (input) { input.value = ''; input.focus(); }

        var errorEl = document.getElementById('emailGateError');
        if (errorEl) errorEl.textContent = '';
    }

    function closeModal() {
        var modal = getModal();
        if (modal) modal.classList.remove('is-open');
        document.body.style.overflow = '';
    }

    // Public entry point: gate any download/action behind an email.
    function requireEmail(callback) {
        if (isSubscribed()) {
            callback();
            return;
        }
        pendingCallback = callback;
        openModal();
    }

    function isValidEmail(value) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    }

    /* ---------------------------------------------------------
       PLACEHOLDER — CONNECT MAILCHIMP OR CONVERTKIT HERE
       This is the only function you need to edit later.
       Keep it resolving quickly (or on a timeout) so a slow
       or failed API call never blocks the visitor's download.
    --------------------------------------------------------- */
    function saveEmailToProvider(email) {
        return new Promise(function (resolve) {

            /* ---- OPTION A: Mailchimp -----------------------------------
               Mailchimp's API key cannot be safely called from client-side
               JS (it would be exposed to everyone). Send the email to a
               small serverless function (Cloudflare Worker / Netlify
               Function / Vercel Function) that you control, and have that
               function call Mailchimp's API with your secret key.

            fetch('https://your-serverless-endpoint.example.com/subscribe', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    email: email,
                    tags: ['free-tool-download']
                })
            })
            .then(function (res) { resolve(res.ok); })
            .catch(function () { resolve(false); });

            ------------------------------------------------------------- */

            /* ---- OPTION B: ConvertKit -----------------------------------
               ConvertKit's Forms API accepts direct client-side POSTs using
               a public API key + your Form ID, so it can go straight here
               without a backend.

            fetch('https://api.convertkit.com/v3/forms/YOUR_FORM_ID/subscribe', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    api_key: 'YOUR_CONVERTKIT_PUBLIC_API_KEY',
                    email: email
                })
            })
            .then(function (res) { resolve(res.ok); })
            .catch(function () { resolve(false); });

            -------------------------------------------------------------- */

            // TEMPORARY fallback until an API above is wired up:
            console.log('[EmailGate] Captured email (not yet sent to an ESP):', email);
            resolve(true);
        });
    }

    function handleSubmit(event) {
        event.preventDefault();

        var input = document.getElementById('emailGateInput');
        var errorEl = document.getElementById('emailGateError');
        var submitBtn = document.getElementById('emailGateSubmit');
        var email = (input && input.value || '').trim();

        if (!isValidEmail(email)) {
            if (errorEl) errorEl.textContent = 'Please enter a valid email address.';
            return;
        }

        if (submitBtn) {
            submitBtn.disabled = true;
            submitBtn.textContent = 'Sending...';
        }

        saveEmailToProvider(email).then(function () {
            try { localStorage.setItem(STORAGE_KEY, email); } catch (e) { /* ignore storage errors */ }

            if (typeof gtag === 'function') {
                gtag('event', 'email_captured', { event_category: 'lead_generation' });
            }

            if (submitBtn) {
                submitBtn.disabled = false;
                submitBtn.textContent = 'Unlock My Download →';
            }

            closeModal();

            if (pendingCallback) {
                var cb = pendingCallback;
                pendingCallback = null;
                cb();
            }
        });
    }

    document.addEventListener('DOMContentLoaded', function () {
        var form = document.getElementById('emailGateForm');
        var closeBtn = document.getElementById('emailGateClose');
        var overlay = document.getElementById('emailGateModal');

        if (form) form.addEventListener('submit', handleSubmit);
        if (closeBtn) closeBtn.addEventListener('click', closeModal);
        if (overlay) {
            overlay.addEventListener('click', function (e) {
                if (e.target === overlay) closeModal();
            });
        }
    });

    // Expose the public API used by download buttons across the site.
    window.PlannerHupEmailGate = {
        requireEmail: requireEmail,
        isSubscribed: isSubscribed
    };

})(window, document);
