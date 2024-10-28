// This script controls both SVG animations
const greetings = [
  { text: "Hello there, I'm Aryan!", lang: "en" },
  { text: "नमस्ते, मैं अर्यन हूं!", lang: "hi" },
  { text: "¡Hola, soy Aryan!", lang: "es" },
  { text: "こんにちは、私は Aryan です!", lang: "ja" },
  { text: "Bonjour, je suis Aryan!", lang: "fr" },
  { text: "Ciao, sono Aryan!", lang: "it" },
  { text: "你好，我是 Aryan!", lang: "zh" },
  { text: "Hallo, ich bin Aryan!", lang: "de" }
  ];

  let index = 0;
  const tspanElement = document.getElementById('dynamic-text');
  tspanElement.textContent = greetings[0].text;
  tspanElement.setAttribute('xml:lang', greetings[0].lang);

  // Listen for animation iterations      
  document.querySelector('.greeting').addEventListener('animationiteration', () => { 
      index = ++index % greetings.length;
      tspanElement.textContent = greetings[index].text;
      tspanElement.setAttribute('xml:lang', greetings[index].lang);
  });
