var typed = new Typed(".auto-type", {
  strings: ["Lamarr Olive"],
  typeSpeed: 150,
  backSpeed: 150,
  loop: false,
});
let menuIcon = document.getElementById("menuIcon");
let sidePanel = document.querySelectorAll("#sidePanel div");
menuIcon.onclick = function () {
  for (let i = 0; i < sidePanel.length; i++) {
    sidePanel[i].style.transition = "all " + (i * 5) / 10 + "s";
    sidePanel[i].style.opacity = "1";
    sidePanel[i].style.transform = "none";
  }
};