$(function () {
  $(".menu__btn").on("click", function () {
    $(".nav").addClass("menu-shown");
  });

  $(".close-btn-mobile").on("click", function () {
    $(".nav").removeClass("menu-shown");
  });
});

// const popupLinks = document.querySelectorAll(".popup-link");
// const body = document.querySelectorAll("body");
// const lockPadding = document.querySelectorAll(".lock-padding");

// let unlock = true;

// const timeout = 800;

// if (popupLinks.length > 0) {
//   for (let index = 0; index < popupLinks.length; index++) {
//     const popupLinks = popupLinks[index];
//     popupLink.addEventListener("click", function (e) {
//       const popupName = popupLink.getAttribute("href").replace("#", "");
//       const curentPopup = document.getElementById(popupName);
//       popupOpen(curentPopup);
//       e.preventDefault();
//     });
//   }
// }
