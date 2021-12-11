const blackKeysArray = ["s", "d", "g", "h", "j"];
const whiteKeysArray = ["z", "x", "c", "v", "b", "n", "m"];
const keys = document.querySelectorAll(".key");
const blackKeys = document.querySelectorAll(".key.black");
const whiteKeys = document.querySelectorAll(".key.white");

document.addEventListener("keydown", (event) => {
  if (event.repeat) {
    return;
  }
  const keyPressed = event.key;
  const blackKeyIndex = blackKeysArray.indexOf(keyPressed);
  const whiteKeyIndex = whiteKeysArray.indexOf(keyPressed);

  if (blackKeyIndex > -1) {
    playKey(blackKeys[blackKeyIndex]);
  }
  if (whiteKeyIndex > -1) {
    playKey(whiteKeys[whiteKeyIndex]);
  }
});

keys.forEach((key) => {
  key.addEventListener("click", () => {
    playKey(key);
  });
});

function playKey(key) {
  const noteSound = document.getElementById(key.dataset.note);
  noteSound.currentTime = 0;
  noteSound.play();
  key.classList.add("active");
  noteSound.addEventListener("ended", () => key.classList.remove("active"));
}
