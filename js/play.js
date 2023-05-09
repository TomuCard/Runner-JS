const MapsButton = document.querySelector("btn_maps");
const ImportedMapsButton = document.querySelector("btn_imported");
const navigation = document.querySelector("#mapslist");

btn_maps.addEventListener("click", toggleNav);

function toggleNav() {
  btn_maps.classList.toggle("active");
  navigation.classList.toggle("active");
}
