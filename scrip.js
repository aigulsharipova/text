let text = "I am a software engineer...";
let i = 0;

let speed = 100;

function type() {
  if (i < text.length) {
    document.querySelector('#par').textContent += text.charAt(i);
    
    i++;

    setTimeout(type, speed)
  }
}
type();