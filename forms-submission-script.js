const GetQuoteFormBtn = document.getElementById("show-quote-form-btn");
const quoteFormMain = document.getElementById("quote-form-container");
quoteFormMain.style.display = "none";
const contactFormMain = document.getElementById("contact-form-hideOn");
const formPrivacyContent = document.getElementById(
  "from-pricvay-content-ShowOn"
);

console.log(GetQuoteFormBtn, quoteFormMain);
GetQuoteFormBtn.addEventListener("click", () => {
  GetQuoteFormBtn.style.display = "none";
  quoteFormMain.style.display = "block";

  if (contactFormMain) contactFormMain.style.display = "none";
  if (formPrivacyContent) formPrivacyContent.style.display = "none";
});
