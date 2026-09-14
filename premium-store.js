/* =========================================================
   THE PLANNER HUP — PREMIUM STORE INTEGRATION
   Feature 2: Gumroad overlay (popup) checkout

   HOW IT WORKS
   Gumroad's own script (gumroad.js) automatically turns any
   <a class="gumroad-button" href="...?wanted=true"> into a
   popup checkout overlay — no custom checkout code needed.
   This file just (a) loads that script once, safely, and
   (b) sends a Google Analytics event whenever a Buy Now
   button is clicked, so you can see conversion data later.

   SETUP
   1. Add this file before </body>, after premium-store-section.html:
        <script src="premium-store.js"></script>

   2. In premium-store-section.html, replace every
        https://GUMROAD_USERNAME.gumroad.com/l/PRODUCT_ID?wanted=true
      with your real Gumroad product link (find it on your
      Gumroad product's "Share" page).
   ========================================================= */

(function (window, document) {
    'use strict';

    function loadGumroadOverlay() {
        if (document.querySelector('script[src*="gumroad.com/js/gumroad.js"]')) return;
        var script = document.createElement('script');
        script.src = 'https://gumroad.com/js/gumroad.js';
        script.async = true;
        document.body.appendChild(script);
    }

    /* ---------------------------------------------------------
       PAYHIP ALTERNATIVE (use instead of Gumroad, not alongside)
       If you prefer Payhip over Gumroad:
         1. Delete the loadGumroadOverlay() call below.
         2. Uncomment loadPayhipEmbed() and call it instead.
         3. In premium-store-section.html, use the
            .payhip-buy-button markup (already included, commented
            out, on Product 3) instead of .gumroad-button.
    --------------------------------------------------------- */
    // function loadPayhipEmbed() {
    //     if (document.querySelector('script[src*="payhip.com/payhip.js"]')) return;
    //     var script = document.createElement('script');
    //     script.src = 'https://payhip.com/payhip.js';
    //     script.async = true;
    //     document.body.appendChild(script);
    // }

    function trackBuyClick(productId) {
        if (typeof gtag === 'function') {
            gtag('event', 'buy_now_click', {
                event_category: 'ecommerce',
                event_label: productId
            });
        }
        // Not returning false here on purpose — we want the
        // Gumroad overlay link to still fire normally.
    }

    document.addEventListener('DOMContentLoaded', function () {
        loadGumroadOverlay();
        // loadPayhipEmbed(); // use this line instead if switching to Payhip
    });

    window.PlannerHupStore = {
        trackBuyClick: trackBuyClick
    };

})(window, document);
