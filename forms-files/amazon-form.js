const form = document.getElementById("amazon-page-bottom-form");

const allInputs = form.querySelectorAll(".forminator-field");
allInputs.forEach((input) => {
  console.log(input);

  // Select the element you want to observe
  const targetElement = input;

  // Create a mutation observer
  const observer = new MutationObserver(function (mutationsList) {
    mutationsList.forEach(function (mutation) {
      if (
        mutation.type === "attributes" &&
        mutation.attributeName === "class"
      ) {
        if (targetElement.classList.contains("forminator-has_error")) {
          console.log("marggy");
          console.log(targetElement.querySelector("input"));
          console.log("------------");
          targetElement.querySelector("input").style.borderColor =
            "green !important";

          const style = `
            <style>
            
            .simlar_from .forminator-design--default .forminator-has_error .forminator-input {
    border-color: #E14942  !important;
}
            </style>
            `;
          document.body.innerHTML += style;
        }
      }
    });
  });

  // Define the configuration for the observer
  const config = {
    attributes: true, // Observe attribute changes
    attributeFilter: ["class"], // Only observe changes to the class attribute
  };

  // Start observing the target element
  observer.observe(targetElement, config);

  // To stop observing at some point, use: observer.disconnect();
});
