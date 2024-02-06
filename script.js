// JavaScript code here
const button = document.getElementById('showMessageBtn');
const message = document.getElementById('message');
const fireworks = document.getElementById('fireworks');
const hearts = document.getElementById('hearts');
const firstButton = document.getElementById('firstButton');
const secondButton = document.getElementById('secondButton');

button.addEventListener('click', () => {
  button.style.display = 'none'; // Hide the button
  message.textContent = 'Bom loves Noynha very much na rak fan mak mak EiEi';
  setTimeout(() => {
    fireworks.style.display = 'block'; // Show fireworks
    hearts.style.display = 'block'; // Show hearts
    setTimeout(() => {
      fireworks.style.display = 'none'; // Hide fireworks after 5 seconds
      hearts.style.display = 'none'; // Hide hearts after 5 seconds
      message.textContent = 'หมูหน่ารักบอมไหม';
      firstButton.style.display = 'inline-block'; // Show first button
      secondButton.style.display = 'inline-block'; // Show second button
    }, 5000);
  }, 1000);
});

firstButton.addEventListener('click', () => {
  message.textContent = 'อัยย้ะๆ';
});

secondButton.addEventListener('click', () => {
  message.textContent = 'ละมึง ค ไร .';
  setTimeout(() => {
    gradualMessage('อูยหยอกๆ', 300);
  }, 3000);
});

function gradualMessage(text, interval) {
  let index = 0;
  const timer = setInterval(() => {
    if (index <= text.length) {
      message.textContent = text.slice(0, index);
      index++;
    } else {
      clearInterval(timer);
    }
  }, interval);
}
