// Slider
let slideItem = document.querySelectorAll(".item");
let next = document.querySelector(".next");
let prev = document.querySelector(".prev");
let totalslider = slideItem.length;
let index = 0;

next.onclick = function () {
  nextItem("next");
};

prev.onclick = function () {
  nextItem("prev");
};

function nextItem(direction) {
  if (direction == "next") {
    index++;
    if (index == slideItem.length) {
      index = 0;
    }
  } else {
    if (index == 0) {
      index = slideItem.length - 1;
    } else {
      index--;
    }
  }

  for (let i = 0; i < slideItem.length; i++) {
    slideItem[i].classList.remove("active");
  }

  slideItem[index].classList.add("active");

  setTimeout(nextItem, 7000)
}
