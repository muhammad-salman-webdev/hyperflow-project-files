const prevButton = document.querySelector(".c-s-s-navigations .prev");
const nextButton = document.querySelector(".c-s-s-navigations .next");

const SocialSwiperRes = new Swiper(".c-s-s-swiper", {
  // Optional parameters
  loop: false,
  effect: "fade", // Enables fade effect

  //   speed: 400,
  // If we need pagination
  pagination: {
    el: ".c-s-s-pagination",
    clickable: true, // Optional, makes pagination bullets clickable
  },

  // Navigation arrows
  navigation: {
    nextEl: ".c-s-s-navigations .next",
    prevEl: ".c-s-s-navigations .prev",
  },

  // Fade effect configuration
  fadeEffect: {
    crossFade: true, // Smooth fade transition
  },

  on: {
    // Pass the swiper instance to updateButtonState after initialization
    init: function (SocialSwiperRes) {
      updateButtonState(SocialSwiperRes);
    },
    // Update button states when the slide changes
    slideChange: function (SocialSwiperRes) {
      updateButtonState(SocialSwiperRes);
    },
  },
});

// Function to update button states based on current slide
function updateButtonState(swiper) {
  // Disable "prev" button if on the first slide
  if (swiper.isBeginning) {
    prevButton.classList.add("swiper-button-disabled");
    prevButton.disabled = true;
  } else {
    prevButton.classList.remove("swiper-button-disabled");
    prevButton.disabled = false;
  }

  // Disable "next" button if on the last slide
  if (swiper.isEnd) {
    nextButton.classList.add("swiper-button-disabled");
    nextButton.disabled = true;
  } else {
    nextButton.classList.remove("swiper-button-disabled");
    nextButton.disabled = false;
  }
}

// Adding slide numbers to pagination bullets
document
  .querySelectorAll(".c-s-s-pagination > .swiper-pagination-bullet")
  .forEach((item, i) => {
    item.innerHTML = i + 1;
  });
//
const cSsVideoElem = document.querySelector(
  ".c-s-s-video-slide-main[data-video-elem] > video"
);
const cSsPlayPauseBtn = document.querySelector(
  ".c-s-s-video-slide-main[data-video-elem] .video-btn"
);

cSsPlayPauseBtn.addEventListener("click", () => {
  if (cSsVideoElem.classList.contains("playing")) {
    cSsVideoElem.pause();
  } else {
    cSsVideoElem.play();
  }
  cSsVideoElem.classList.toggle("playing");
  cSsPlayPauseBtn.classList.toggle("fa-pause");
  cSsPlayPauseBtn.classList.toggle("fa-play");
});

nextButton.addEventListener("click", () => {
  if (cSsVideoElem.classList.contains("playing")) {
    cSsPlayPauseBtn.click();
  }
});
