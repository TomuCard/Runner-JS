const KeyButtons = document.querySelectorAll(".KeyButtons");

let KeyMap = { Jump: " ", Crouch: "control", PlayPause: "p" };

document.addEventListener("keydown", (e) => {
  if (e.key == KeyMap.Jump) vxl = -7;
  if (e.key == KeyMap.Crouch) vxr = 7;
  if (e.key == KeyMap.PlayPause) vy = -7;
});

document.addEventListener("keyup", function (e) {
  if (e.key == KeyMap.Jump) vxl = 0;
  if (e.key == KeyMap.Crouch) vxr = 0;
  if (e.key == KeyMap.PlayPause) vy = 0;
});

function press() {
  KeyButtons.forEach((e) => {
    e.innerHTML = KeyMap[e.dataset.direction].toUpperCase();
  });
}

NameKeys = ["Jump", "Crouch", "PlayPause"];

KeyButtons.forEach((e) => {
  e.addEventListener("click", function (event) {
    if (e.dataset.clicked == "false") {
      press();
      e.dataset.clicked = "true";
      e.innerHTML = "_";

      e.onkeydown =
        ("keydown",
        (KeyPressed) => {
          e.dataset.key = KeyPressed.key.toLowerCase();
          e.innerHTML = `${e.dataset.key.toUpperCase()}`;
          clicked = false;
          KeyMap[e.dataset.direction] = e.dataset.key;
          e.onkeydown = null;
          compare();
        });
    } else {
      e.dataset.clicked = "false";
      KeyButtons.forEach((n) => {
        n.onkeydown = null;
      });
      press();
    }
  });
});

function compare() {
  let duplicates = { Jump: false, Crouch: false, PlayPause: false };
  for (let i = 0; i < NameKeys.length; i++) {
    for (let n = 0; n < NameKeys.length; n++) {
      if (i != n) {
        if (KeyMap[NameKeys[i]] == KeyMap[NameKeys[n]]) {
          console.log(
            `Touches répétées :\n ${NameKeys[i]} : ${KeyMap[NameKeys[i]]}`
          );
          duplicates[`${NameKeys[i]}`] = true;
          KeyButtons[i].style.background = "#5c2b25";
        } else {
          if (duplicates[`${NameKeys[i]}`] == false) {
            KeyButtons[i].style.background = "#262828";
          }
        }
      }
    }
  }
}
