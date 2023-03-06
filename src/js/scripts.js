document.addEventListener("click", filterClicks);
let worksDropdown = document.querySelector("#works-dropdown");
let pictureDiv = document.querySelector("#picture-div");
let contentDiv = document.querySelector("#content");
let leftArrow = document.querySelector(".arrow-left");
let rightArrow = document.querySelector(".arrow-right");
let mainLine = document.querySelector(".main-line");
let dropdownOpen = false;

//When Works is Clicked
//Opacity and visibility changes for Works Dropdown
//Z-Index changes for Content Divs
//On close delayed by CSS transition time of .25s
function filterClicks(e) {
  if (e.target.matches("#works-button")) {
    dropdownOpen = !dropdownOpen;
    e.preventDefault();
    worksDropdown.classList.toggle("works-dropdown-open");
    worksDropdown.classList.toggle("works-dropdown-close");
    if (!dropdownOpen) {
      setTimeout(() => {
        pictureDiv.classList.toggle("move-to-back");
        contentDiv.classList.toggle("move-to-back");
      }, 250);
    } else {
      pictureDiv.classList.toggle("move-to-back");
      contentDiv.classList.toggle("move-to-back");
    }
  }
}

//If we're on a Works page, show arrow navigation
if (document.querySelector(".works")) {
  leftArrow.classList.toggle("hide");
  rightArrow.classList.toggle("hide");
  mainLine.classList.toggle("hide");
}
