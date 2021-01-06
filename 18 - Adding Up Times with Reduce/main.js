const timeNodes = [...document.querySelectorAll('[data-time]')];

const seconds = timeNodes
  .map(node => node.dataset.time)
  .map(timeCode => {
    const [mins, secs] = timeCode.split(':').map(parseFloat);
    return mins * 60 + secs;
  })
  .reduce((sum, time) => sum + time);
console.log(seconds);

let secondsLeft = seconds;
const hours = Math.floor(seconds / 3600);
secondsLeft %= 3600;
const minutes = Math.floor(secondsLeft / 60);
secondsLeft %= 60;

console.log(hours, minutes, secondsLeft);
