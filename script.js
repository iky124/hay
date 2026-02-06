// Array pesan cinta untuk slideshow
const messages = [
  "Aku udah lama suka sama kamu. Setiap hari aku mikirin kamu, bahkan saat tidur. Kamu bikin hidupku lebih indah. Mau gak jadi pacarku? 💖",
  "Kamu itu seperti bintang di malam hari, bikin dunia aku lebih terang. Aku gak bisa hidup tanpa senyum kamu. Say yes, please! 😍",
  "Setiap detik aku mikirin kamu, setiap napas aku sebut nama kamu. Kamu adalah cinta sejati aku. Jadi pacarku yuk! 💕",
  "Aku bucin banget sama kamu. Kamu cantik, baik, dan sempurna. Aku janji bakal jagain kamu selamanya. Mau ya? ❤️",
];

let messageIndex = 0;
const messageElement = document.getElementById("message");

// Fungsi slideshow pesan
function changeMessage() {
  messageElement.style.opacity = 0;
  setTimeout(() => {
    messageIndex = (messageIndex + 1) % messages.length;
    messageElement.textContent = messages[messageIndex];
    messageElement.style.opacity = 1;
  }, 1000);
}

// Jalankan slideshow setiap 5 detik
setInterval(changeMessage, 5000);

// Fungsi respons tombol
function respondYes() {
  alert("Yay! Aku seneng banget! Kamu sekarang pacar aku! 😍💖");
  createFallingHearts();
}

function respondThink() {
  alert("Aku bakal terus PDKT sampai kamu bilang ya! Aku gak akan nyerah! 😘");
  createFallingHearts();
}

// Fungsi buat hati jatuh
function createFallingHearts() {
  const container = document.getElementById("falling-hearts");
  for (let i = 0; i < 10; i++) {
    const heart = document.createElement("div");
    heart.className = "falling-heart";
    heart.textContent = "💖";
    heart.style.left = Math.random() * 100 + "%";
    heart.style.animationDelay = Math.random() * 2 + "s";
    container.appendChild(heart);
    setTimeout(() => heart.remove(), 5000);
  }
}

// Fungsi suara sederhana (nada cinta)
function playSound() {
  const audioContext = new (window.AudioContext || window.webkitAudioContext)();
  const oscillator = audioContext.createOscillator();
  const gainNode = audioContext.createGain();

  oscillator.connect(gainNode);
  gainNode.connect(audioContext.destination);

  oscillator.frequency.setValueAtTime(523.25, audioContext.currentTime); // Nada C
  oscillator.type = "sine";

  gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
  gainNode.gain.exponentialRampToValueAtTime(
    0.01,
    audioContext.currentTime + 0.5,
  );

  oscillator.start(audioContext.currentTime);
  oscillator.stop(audioContext.currentTime + 0.5);
}

// Jalankan animasi hati jatuh otomatis setiap 10 detik
setInterval(createFallingHearts, 10000);
