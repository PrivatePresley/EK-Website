document.addEventListener("click", filterClicks);
let worksDropdown = document.querySelector("#works-dropdown");
let pictureDiv = document.querySelector("#picture-div");
let contentDiv = document.querySelector("#content");
let leftArrow = document.querySelector(".arrow-left");
let rightArrow = document.querySelector(".arrow-right");
let mainLine = document.querySelector(".main-line");
let dropdownOpen = false;
let animTime = 250;

function filterClicks(e) {
  if (e.target.matches("#works-button")) {
    toggleWorks(e);
  } else if (e.target.matches("a.works-link")) {
    delayLink(e);
  }
}

//If we're on a Works page, show arrow navigation
if (document.querySelector(".works")) {
  if (leftArrow) {
    leftArrow.classList.toggle("hide");
  }
  if (rightArrow) {
    rightArrow.classList.toggle("hide");
  }
  mainLine.classList.toggle("hide");
}

//When works link is clicked delay by CSS transition time
//of .25s
function delayLink(e) {
  toggleWorks(e);
  const myLink = `${e.target.href}`;
  setTimeout(() => {
    window.location = myLink;
  }, animTime);
}

//When Works is Clicked
//Opacity and visibility changes for Works Dropdown
//Z-Index changes for Content Divs
//On close delayed by CSS transition time of .25s
function toggleWorks(e) {
  dropdownOpen = !dropdownOpen;
  if (e) {
    e.preventDefault();
  }
  worksDropdown.classList.toggle("works-dropdown-open");
  worksDropdown.classList.toggle("works-dropdown-close");
  if (!dropdownOpen) {
    setTimeout(() => {
      pictureDiv.classList.toggle("move-to-back");
      contentDiv.classList.toggle("move-to-back");
    }, animTime);
  } else {
    pictureDiv.classList.toggle("move-to-back");
    contentDiv.classList.toggle("move-to-back");
  }
}
