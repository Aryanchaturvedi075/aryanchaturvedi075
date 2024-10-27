// This script controls both SVG animations
const greetings = [
  { text: "Hello there, I'm Aryan!", lang: "en" },
  { text: "नमस्ते, मैं अर्यन हूं!", lang: "hi" },
  { text: "¡Hola, soy Aryan!", lang: "es" },
  { text: "こんにちは、私は Aryan です!", lang: "ja" },
  { text: "Bonjour, je suis Aryan!", lang: "fr" },
  { text: "Ciao, sono Aryan!", lang: "it" },
  { text: "你好，我是 Aryan!", lang: "zh"},
  { text: "Hallo, ich bin Aryan!", lang: "de" }
];

let currentIndex = 0;

function updateGreeting() {
  const svgs = document.querySelectorAll('svg');
  svgs.forEach(svg => {
    const textElement = svg.querySelector('#dynamic-text');
    if (textElement) {
      textElement.textContent = greetings[currentIndex].text;
    }
  });
  currentIndex = (currentIndex + 1) % greetings.length;
}

// Update text every 5 seconds (matching the animation duration)
setInterval(updateGreeting, 5000);
// Initial update
updateGreeting();
