/**
 * resources.js
 * -----------------------------------------------------------------------
 * Handles the "Preview before download" modal for PDF resource cards.
 * Works with plain <script> tags, no build step needed.
 *
 * HOW IT'S WIRED (see resources-demo.html):
 *   <button class="btn-preview" onclick="openPdfPreview('pdfs/x.pdf','Title')">Preview</button>
 *   <a class="btn-download" href="pdfs/x.pdf" download>Download</a>
 * -----------------------------------------------------------------------
 */

(function () {
  "use strict";

  function ensureModal() {
    if (document.getElementById("pdfModalOverlay")) return;

    const overlay = document.createElement("div");
    overlay.id = "pdfModalOverlay";
    overlay.className = "pdf-modal-overlay";
    overlay.innerHTML = `
      <div class="pdf-modal" role="dialog" aria-modal="true" aria-labelledby="pdfModalTitle">
        <div class="pdf-modal__header">
          <span class="pdf-modal__title" id="pdfModalTitle">Preview</span>
          <button class="pdf-modal__close" aria-label="Close preview" onclick="closePdfPreview()">&times;</button>
        </div>
        <div class="pdf-modal__body">
          <iframe id="pdfModalFrame" src="" title="PDF preview"></iframe>
        </div>
        <div class="pdf-modal__footer">
          <a id="pdfModalDownload" href="#" download>Download this PDF</a>
        </div>
      </div>
    `;
    document.body.appendChild(overlay);

    // Close when clicking the dark backdrop (not the modal itself)
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) closePdfPreview();
    });

    // Close on Escape key
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closePdfPreview();
    });
  }

  window.openPdfPreview = function (pdfUrl, title) {
    ensureModal();
    document.getElementById("pdfModalTitle").textContent = title || "Preview";
    document.getElementById("pdfModalFrame").src = pdfUrl;
    document.getElementById("pdfModalDownload").href = pdfUrl;
    document.getElementById("pdfModalOverlay").classList.add("open");
    document.body.style.overflow = "hidden"; // lock background scroll
  };

  window.closePdfPreview = function () {
    const overlay = document.getElementById("pdfModalOverlay");
    if (!overlay) return;
    overlay.classList.remove("open");
    document.getElementById("pdfModalFrame").src = ""; // stop loading/playing
    document.body.style.overflow = "";
  };
})();
