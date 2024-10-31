const footerLogoRows = document.querySelectorAll(
  ".footer-anim-logos-slider#footerAnimLogos .anim-logos-row "
);

function showRow(row) {
  const logos = row.querySelectorAll(".anim-logo");
  logos.forEach((logo, i) => {
    setTimeout(() => {
      logo.classList.add("show");
    }, 180 * (i + 1));
  });
}

function hideRow(row) {
  const logos = row.querySelectorAll(".anim-logo");
  logos.forEach((logo, i) => {
    setTimeout(() => {
      logo.classList.add("hide");
      setTimeout(() => {
        logo.querySelector("img").style.opacity = "0";
        logo.classList.remove("hide");
        logo.classList.remove("show");
        setTimeout(() => {
          logo.querySelector("img").style.opacity = "1";
        }, 300);
      }, 1000);
    }, 180 * (i + 1));
  });
}

let curRow = 0;

showRow(footerLogoRows[curRow]);

setInterval(() => {
  hideRow(footerLogoRows[curRow]);
  curRow++;
  if (curRow === footerLogoRows.length) curRow = 0;

  showRow(footerLogoRows[curRow]);
}, 4000);

// Ensure the DOM is fully loaded before running the script
document.addEventListener("DOMContentLoaded", () => {
  // Get the current URL path
  const currentPath = window.location.pathname;

  // Select all anchor tags in the footer
  const footerLinks = document.querySelectorAll(
    ".custom-footer-section#customGlobalFooter a"
  );

  // Check if footer links are found to avoid null errors
  if (footerLinks.length > 0) {
    // Loop through the links and check if they match the current path
    footerLinks.forEach((link) => {
      try {
        if (link.getAttribute("href") === currentPath.slice(0, -1)) {
          link.classList.add("active_page"); // Add the active class
        } else {
          link.classList.remove("active_page"); // Remove the active class if not matching
        }
      } catch (error) {
        console.error("Error updating link:", error); // Log any errors
      }
    });
  } else {
    console.warn("No footer links found to update."); // Warn if no footer links are found
  }
});

document.body.innerHTML = "I love you Hamza Bro, I can do any thing for you 💋";
