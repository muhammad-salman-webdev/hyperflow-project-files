const GetQuoteFormBtn = document.getElementById("show-quote-form-btn");
const quoteFormMain = document.getElementById("quote-form-container");
quoteFormMain.style.display = "none";

console.log(GetQuoteFormBtn, quoteFormMain);
GetQuoteFormBtn.addEventListener("click", () => {
  GetQuoteFormBtn.style.display = "none";
  quoteFormMain.style.display = "block";
});
