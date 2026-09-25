/**
 * The Planner Hup — Chat Assistant Backend
 * Deploy this as a Cloudflare Worker (free tier).
 * It keeps your Anthropic API key secret and safely calls Claude on behalf of your website's chat widget.
 *
 * SETUP:
 * 1. Create a free Cloudflare account: https://dash.cloudflare.com/sign-up
 * 2. Go to Workers & Pages → Create → Create Worker
 * 3. Paste this whole file into the editor, replacing the default code
 * 4. Go to Settings → Variables → add a secret named ANTHROPIC_API_KEY with your Anthropic API key
 * 5. Deploy. Copy the worker's URL (looks like https://your-worker-name.your-subdomain.workers.dev)
 * 6. Paste that URL into WORKER_URL in chat-widget.js
 */

// Paste your product catalog here (contents of products.json), or fetch it from your site at runtime.
const PRODUCTS = /* PRODUCTS_JSON_PLACEHOLDER */ {};

// General info about the store, beyond just products — used to answer FAQ/about/policy questions.
const SITE_INFO = {
  store_name: "The Planner Hup",
  founder_and_ceo: "Sania (pen name for novels: Sania Intazar) — she founded and runs The Planner Hup, and is also the author of the Urdu novel and Islamic books sold on the site.",
  what_the_site_sells: "Digital planners, stationery, Korean-learning books, Islamic books, and an original Urdu novel — printable and digital, instant download.",
  contact_email: "theplannerhup@gmail.com",
  whatsapp_number: "+92 343 4457596",
  policies: "Privacy Policy, Terms & Conditions, and Refund & Return Policy pages are all available on the site (linked in the footer).",
  other_pages: "The site also has a Blog (planner/study/book tips), a Free Tools page (GPA calculator, habit tracker generator, etc.), free downloadable planners and guides, a Gift-a-Planner page, Bundles & Offers, and a Customer Reviews section.",
  install_app: "Visitors can install The Planner Hup as an app on their phone/desktop using the install button in the navbar.",
};

const SYSTEM_PROMPT = `You are "Yue", the friendly chat assistant for "${SITE_INFO.store_name}", an online store selling digital planners, books, and Urdu novels.

GENERAL SITE INFO (JSON): ${JSON.stringify(SITE_INFO)}

PRODUCT CATALOG (JSON): ${JSON.stringify(PRODUCTS)}

Your job:
- Introduce yourself as Yue if asked your name.
- If asked who made/built/owns the website, or who is behind it, say Sania made this website and is the CEO of The Planner Hup.
- Help visitors find the right planner, book, or novel based on what they're interested in (e.g. student life, Islamic reading, learning Korean, journaling, Urdu fiction).
- Recommend specific products from the catalog above by name, with a short reason why it fits what they asked for, and mention the price.
- Answer general questions about the store using GENERAL SITE INFO above (contact info, policies, free tools, blog, bundles, etc.) — don't just talk about products.
- If they seem ready to buy or say things like "I want to buy this" / "haan lena hai" / "kaise order karun", tell them to click "Add to Cart" on the product page, or message on WhatsApp, and mention the bundle offer (buy 2, get 10% off with code BUNDLE10) if relevant.
- Once a user confirms they've bought or are buying something, warmly thank them and ask them to share The Planner Hup website with friends or on social media — this is important, always do this after a purchase is confirmed.
- Keep replies short, warm, and conversational — a few sentences, not long essays.
- Never invent products, prices, or policies that aren't in the info above.`;

export default {
  async fetch(request, env) {
    // Handle CORS preflight
    if (request.method === "OPTIONS") {
      return new Response(null, { headers: corsHeaders() });
    }

    if (request.method !== "POST") {
      return new Response("Method not allowed", { status: 405, headers: corsHeaders() });
    }

    try {
      const body = await request.json();
      const messages = body.messages; // [{role: "user"|"assistant", content: "..."}]

      if (!Array.isArray(messages) || messages.length === 0) {
        return jsonResponse({ error: "No messages provided" }, 400);
      }

      const apiResponse = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": env.ANTHROPIC_API_KEY,
          "anthropic-version": "2023-06-01",
        },
        body: JSON.stringify({
          model: "claude-sonnet-4-6",
          max_tokens: 500,
          system: SYSTEM_PROMPT,
          messages: messages,
        }),
      });

      const data = await apiResponse.json();

      if (!apiResponse.ok) {
        return jsonResponse({ error: data.error?.message || "API error" }, apiResponse.status);
      }

      const textBlock = data.content?.find((c) => c.type === "text");
      const reply = textBlock ? textBlock.text : "Sorry, I couldn't generate a response.";

      return jsonResponse({ reply });
    } catch (err) {
      return jsonResponse({ error: err.message }, 500);
    }
  },
};

function corsHeaders() {
  return {
    "Access-Control-Allow-Origin": "*", // For tighter security, replace * with your site's exact URL
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };
}

function jsonResponse(obj, status = 200) {
  return new Response(JSON.stringify(obj), {
    status,
    headers: { "Content-Type": "application/json", ...corsHeaders() },
  });
}
