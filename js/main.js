// js/main.js

const menuBtn = document.getElementById("menuBtn");
const mainNav = document.getElementById("mainNav");

if (menuBtn && mainNav) {

  menuBtn.addEventListener("click", () => {
    mainNav.classList.toggle("open");
  });

}

document.querySelectorAll("#mainNav a").forEach(link => {

  link.addEventListener("click", () => {

    if (mainNav) {
      mainNav.classList.remove("open");
    }

  });

});


/* CONCRETE CALCULATOR */

const calcForm = document.getElementById("calcForm");

if (calcForm) {

  calcForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const length =
      parseFloat(document.getElementById("length").value);

    const width =
      parseFloat(document.getElementById("width").value);

    const depth =
      parseFloat(document.getElementById("depth").value);

    if (
      !length ||
      !width ||
      !depth ||
      length <= 0 ||
      width <= 0 ||
      depth <= 0
    ) {

      return;

    }

    /*
      Cubic yards:
      Length(ft) × Width(ft) × Depth(ft) ÷ 27

      Depth is entered in inches,
      so inches are converted to feet.
    */

    const cubicYards =
      (length * width * (depth / 12)) / 27;

    /*
      Adds 10% planning allowance.
    */

    const suggested =
      Math.ceil(cubicYards * 1.10 * 10) / 10;

    const result =
      document.getElementById("calcResult");

    result.innerHTML = `
      Estimated volume:
      <strong>${cubicYards.toFixed(2)} yd³</strong>
      <br>
      Suggested planning quantity (+10%):
      <strong>${suggested.toFixed(1)} yd³</strong>
    `;

  });

}


/* QUOTE FORM */

const quoteForm =
  document.getElementById("quoteForm");

if (quoteForm) {

  quoteForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const formData =
      new FormData(quoteForm);

    const name =
      formData.get("name") || "Customer";

    const status =
      document.getElementById("quoteStatus");

    status.textContent =
      `Thank you, ${name}. Your request has been prepared. Please call 218-257-2697 to confirm availability and pricing.`;

    quoteForm.reset();

  });

}


/* CURRENT YEAR */

const copyright =
  document.getElementById("copyright");

if (copyright) {

  copyright.textContent =
    `© ${new Date().getFullYear()} Smyrna Ready Mix & More. All rights reserved.`;

}


/* HEADER SHADOW */

window.addEventListener("scroll", () => {

  const header =
    document.querySelector(".nav-wrap");

  if (!header) return;

  if (window.scrollY > 20) {

    header.style.boxShadow =
      "0 8px 30px rgba(7,26,58,.12)";

  } else {

    header.style.boxShadow =
      "0 5px 25px rgba(7,26,58,.06)";

  }

});