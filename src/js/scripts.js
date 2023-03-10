document.addEventListener("click", filterClicks);
let worksDropdown = document.querySelector("#works-dropdown");
let leftArrow = document.querySelector(".arrow-left");
let rightArrow = document.querySelector(".arrow-right");
let mainLine = document.querySelector(".content-line");
let openCommand = false;
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
//Opacity and Visibility changes for Works Dropdown
//On open, hide is removed (almost) immediately.
//On close, display: none is delayed by CSS transition time of .25s
function toggleWorks(e) {
  e.preventDefault();

  openCommand = !openCommand;

  if (openCommand) {
    worksDropdown.classList.remove("hide");
    setTimeout(() => {
      worksDropdown.classList.remove("close");
      worksDropdown.classList.add("open");
    }, 1);
  } else if (!openCommand) {
    worksDropdown.classList.remove("open");
    worksDropdown.classList.add("close");
    setTimeout(() => {
      worksDropdown.classList.add("hide");
    }, animTime);
  }
}
