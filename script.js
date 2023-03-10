var typed = new Typed(".auto-type", {
  strings: ["Lamarr Olive"],
  typeSpeed: 150,
  backSpeed: 150,
  loop: false,
});
let menuIsOn = false;
let menuIcon = document.getElementById("menuIcon");
let sidePanel = document.querySelectorAll("#sidePanel div");
menuIcon.onclick = function () {
  if (!menuIsOn) {
    for (let i = 0; i < sidePanel.length; i++) {
      sidePanel[i].style.transition = "all " + (i * 5) / 10 + "s";
      sidePanel[i].style.opacity = "1";
      sidePanel[i].style.transform = "none";
    }
    menuIsOn = true;
  } else {
    for (let i = 0; i < sidePanel.length; i++) {
      sidePanel[i].style.transition = "all " + (i * 5) / 10 + "s";
      sidePanel[i].style.opacity = "0";
      sidePanel[i].style.transform = "translateY(100px)";
    }
    menuIsOn = false;
  }
};
window.addEventListener("load", function () {
  this.document.getElementById("backHome").click = true;
});
