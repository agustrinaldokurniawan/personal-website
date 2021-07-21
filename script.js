const baseUrl = window.location.href;
function showSkill(id) {
  var show = document.getElementById(id).style.display;
  if (show) {
    document.getElementById(id).style.display = "";
    document.getElementById(`${id}-icon`).src =
      "assets/icons/akar-icons_chevron-down-1.png";
  } else {
    document.getElementById(id).style.display = "flex";
    document.getElementById(`${id}-icon`).src =
      "assets/icons/akar-icons_chevron-down.png";
  }
}

function contactMe() {
  window.open("mailto:agustkurniawan010899@gmail.com");
}

function openMenu() {
  document.getElementById("sidenav").style.width = "250px";
}

function closeMenu() {
  document.getElementById("sidenav").style.width = "0";
}

function openLink(link) {
  var str = baseUrl.split("#");
  window.location.href = `${str[0]}${link}`;
}
