const player = document.querySelector(".player");
const video = player.querySelector(".viewer");
const progress = player.querySelector(".progress");
const progressBar = player.querySelector(".progress__filled");
const toggle = player.querySelector(".toggle");
const skipButton = player.querySelectorAll("[data-skip]");
const ranges = player.querySelectorAll(".player__slider");

let isMouseDown = false;

function togglePlay() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

function updateButton() {
  const icon = this.paused ? "Play" : "Pause";
  console.log(icon);
  toggle.textContent = icon;
}

function skip() {
  console.log(this.dataset.skip);
  video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate() {
  video[this.name] = this.value;
}

function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}

console.log(progress);

video.addEventListener("click", togglePlay);
video.addEventListener("play", updateButton);
video.addEventListener("pause", updateButton);
video.addEventListener("timeupdate", handleProgress);
progress.addEventListener("click", scrub);
progress.addEventListener("mousemove", (e) => isMouseDown && scrub(e));
progress.addEventListener("mousedown", () => (isMouseDown = true));
progress.addEventListener("mouseup", () => (isMouseDown = false));

toggle.addEventListener("click", togglePlay);
skipButton.forEach((button) => button.addEventListener("click", skip));
ranges.forEach((range) => {
  range.addEventListener("change", handleRangeUpdate);
  range.addEventListener("mousemove", handleRangeUpdate);
});
