// //scroller to nav bar
// window.onscroll = function() {scrollFunction()};
// const navbar = document.getElementById("navbar");
// const sticky = navbar.offsetTop;
// function scrollFunction() {
// if (window.pageYOffset >= sticky) {
//     navbar.classList.add("sticky")
//     //navbar.style.backgroundColor = "green";
// } else {
//     navbar.classList.remove("sticky");
//     //navbar.style.backgroundColor = "transparent";
//   }
// }

//scroller to nav bar
// window.addEventListener('scroll', scrollFunction);
// function scrollFunction() {
//   const navbar = document.getElementById("navbar");
//   const sticky = navbar.offsetTop;
//     if (window.pageYOffset > sticky) {
//         navbar.style.backgroundColor = "#252b51";
//     } else {
//         navbar.style.backgroundColor = "transparent";
//       }
//   }

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