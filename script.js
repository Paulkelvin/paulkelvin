// const hamburger = document.querySelector(".hamburger");
// const desktopNav = document.querySelector(".desktop-nav");

// hamburger.addEventListener("click", () => {
//   desktopNav.style.display =
//     desktopNav.style.display === "none" ? "flex" : "none";

//   // Toggles between open and close icons
//   hamburger.classList.toggle("active");
// });

const navLinks = document.querySelectorAll("a");

navLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const sectionId = this.getAttribute("data-section");
    const targetSection = document.getElementById(sectionId);
    targetSection.scrollIntoView({ behavior: "smooth" });
  });
});

window.onload = function () {
  // const headerHeight = document.querySelector("header").offsetHeight;
  // const heroSection = document.querySelector(".hero");
  // heroSection.style.height = `calc(100vh - ${headerHeight}px)`;
  // const section = document.querySelector("section");
  // section.style.height = `calc(100vh - ${headerHeight}px)`;
};

const textList = [
  "create automated Web Solutions",
  "build responsive and optimised websites",
];

let currentTextIndex = 0;

function changeText() {
  const spanElement = document.querySelector(".changing-text");

  // Fade out the current text
  spanElement.classList.add("fade-out");

  setTimeout(() => {
    currentTextIndex = (currentTextIndex + 1) % textList.length;

    spanElement.textContent = textList[currentTextIndex];

    // Remove the fade-out class to show the new text
    spanElement.classList.remove("fade-out");
  }, 300);
}

setInterval(changeText, 3000);

const viewMoreLinks = document.querySelectorAll(".toggle-text");

viewMoreLinks.forEach((viewMoreLink) => {
  viewMoreLink.addEventListener("click", (e) => {
    e.preventDefault();

    const parent = viewMoreLink.parentElement;
    const moreText = parent.querySelector(".more");

    if (getComputedStyle(moreText).display === "none") {
      moreText.style.display = "inline";
      viewMoreLink.textContent = "view less";
    } else {
      moreText.style.display = "none";
      viewMoreLink.textContent = "view more";
    }
  });
});
