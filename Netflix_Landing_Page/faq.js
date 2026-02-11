document.addEventListener("DOMContentLoaded", function () {
  const faqDetails = document.querySelectorAll(".faq-container details");

  faqDetails.forEach((details) => {
    details.addEventListener("toggle", function () {
      if (details.open) {
        details.classList.add("open");
      } else {
        details.classList.remove("open");
      }
    });
  });
});
