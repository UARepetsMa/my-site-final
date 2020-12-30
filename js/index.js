//scroller to nav bar 2

window.onscroll = function() {scrollFunction()};
const navbar = document.getElementById("navbar");
const sticky = navbar.offsetTop;
function scrollFunction() {
  if (window.pageYOffset > sticky) {
      navbar.style.backgroundColor = "#252b51";
  } else {
      navbar.style.backgroundColor = "transparent";
    }
}