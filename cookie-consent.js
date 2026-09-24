/* ==========================================================
   The Planner Hup — Cookie Consent Banner
   Include this ONE file on every page (right before </body>):
   <script src="cookie-consent.js"></script>

   What it does:
   - Shows a small banner at the bottom of the page on first visit
   - Remembers the visitor's choice in localStorage (key: "plannerHupCookieConsent")
   - Blocks Google Analytics (gtag) from tracking until the visitor
     accepts — if they decline, no analytics cookies are set
   - Never shows the banner again once a choice has been made
   ========================================================== */

(function () {
    var CONSENT_KEY = 'plannerHupCookieConsent';

    function getConsent() {
        try {
            return localStorage.getItem(CONSENT_KEY);
        } catch (e) {
            return null;
        }
    }

    function setConsent(value) {
        try {
            localStorage.setItem(CONSENT_KEY, value);
        } catch (e) {}
    }

    function enableAnalytics() {
        // Tell Google Analytics it's OK to store cookies now
        if (typeof gtag === 'function') {
            gtag('consent', 'update', {
                'analytics_storage': 'granted'
            });
        }
    }

    function disableAnalytics() {
        if (typeof gtag === 'function') {
            gtag('consent', 'update', {
                'analytics_storage': 'denied'
            });
        }
    }

    function injectStyles() {
        var style = document.createElement('style');
        style.textContent = `
            #cookieConsentBanner {
                position: fixed;
                left: 0;
                right: 0;
                bottom: 0;
                z-index: 99999;
                background: #432b37;
                color: #fdeef3;
                padding: 18px 20px;
                display: flex;
                flex-wrap: wrap;
                align-items: center;
                justify-content: center;
                gap: 16px;
                font-family: Arial, sans-serif;
                box-shadow: 0 -6px 24px rgba(0,0,0,0.18);
            }
            #cookieConsentBanner p {
                margin: 0;
                font-size: 13.5px;
                line-height: 1.6;
                max-width: 560px;
                color: #fdeef3;
            }
            #cookieConsentBanner a {
                color: #f3c7dc;
                text-decoration: underline;
                font-weight: 700;
            }
            #cookieConsentBanner .cc-buttons {
                display: flex;
                gap: 10px;
                flex-shrink: 0;
            }
            #cookieConsentBanner button {
                border: none;
                border-radius: 24px;
                padding: 10px 20px;
                font-size: 13px;
                font-weight: 700;
                cursor: pointer;
            }
            #cookieConsentBanner .cc-accept {
                background: #b85b82;
                color: #fff;
            }
            #cookieConsentBanner .cc-accept:hover {
                background: #a24d71;
            }
            #cookieConsentBanner .cc-decline {
                background: transparent;
                color: #fdeef3;
                border: 1.5px solid #f3c7dc;
            }
            #cookieConsentBanner .cc-decline:hover {
                background: rgba(255,255,255,0.08);
            }
            @media (max-width: 600px) {
                #cookieConsentBanner {
                    flex-direction: column;
                    text-align: center;
                }
            }
        `;
        document.head.appendChild(style);
    }

    function showBanner() {
        injectStyles();

        var banner = document.createElement('div');
        banner.id = 'cookieConsentBanner';
        banner.innerHTML =
            '<p>We use cookies to understand how visitors use The Planner Hup and to improve your experience. ' +
            'Read our <a href="privacy-policy.html">Privacy Policy</a> to learn more.</p>' +
            '<div class="cc-buttons">' +
            '<button type="button" class="cc-decline" id="cookieDeclineBtn">Decline</button>' +
            '<button type="button" class="cc-accept" id="cookieAcceptBtn">Accept</button>' +
            '</div>';

        document.body.appendChild(banner);

        document.getElementById('cookieAcceptBtn').addEventListener('click', function () {
            setConsent('accepted');
            enableAnalytics();
            banner.remove();
        });

        document.getElementById('cookieDeclineBtn').addEventListener('click', function () {
            setConsent('declined');
            disableAnalytics();
            banner.remove();
        });
    }

    function init() {
        var consent = getConsent();

        if (consent === 'accepted') {
            enableAnalytics();
            return;
        }
        if (consent === 'declined') {
            disableAnalytics();
            return;
        }

        // No choice made yet — default analytics to denied until they choose,
        // then show the banner
        disableAnalytics();

        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', showBanner);
        } else {
            showBanner();
        }
    }

    init();
})();
