const fs = require('fs');

let html = fs.readFileSync('c:/Users/aayus/OneDrive/Desktop/My personal cv website/index.html', 'utf8');

const jsSnippet = `
  /* Screensaver Logic */
  const ss = document.createElement('div');
  ss.id = 'screensaver';
  ss.innerHTML = \`
    <svg width="160" height="160" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" style="image-rendering: pixelated;">
      <style>
        .v-vapour { fill: var(--paper); opacity: 0; }
        .v-cup { fill: var(--paper); }
        .v-bg { fill: var(--ink); }
        .v-blush { fill: var(--accent); }
        @keyframes floatUp {
          0% { transform: translateY(0); opacity: 0; }
          20% { opacity: 0.6; }
          80% { opacity: 0.6; }
          100% { transform: translateY(-4px); opacity: 0; }
        }
        .v1 { animation: floatUp 2s infinite linear; }
        .v2 { animation: floatUp 2.4s infinite linear 0.8s; }
        .v3 { animation: floatUp 2.2s infinite linear 0.4s; }
      </style>
      <path class="v-vapour v1" d="M11 8h2v2h-2z M11 4h2v2h-2z" />
      <path class="v-vapour v2" d="M15 6h2v2h-2z M15 2h2v2h-2z" />
      <path class="v-vapour v3" d="M19 9h2v2h-2z M19 5h2v2h-2z" />
      <path class="v-cup" d="M24 16h4v2h-4z M26 18h2v4h-2z M24 22h4v2h-4z" />
      <path class="v-cup" d="M8 12h16v12H8z" />
      <path class="v-cup" d="M10 24h12v2H10z" />
      <path class="v-cup" d="M12 26h8v2h-8z" />
      <path class="v-bg" d="M10 12h12v2H10z" />
      <path class="v-bg" d="M12 18h2v2h-2z M18 18h2v2h-2z M15 20h2v2h-2z" />
      <path class="v-blush" d="M10 20h2v2h-2z M20 20h2v2h-2z" />
    </svg>
    <div class="ss-text">taking a break...</div>
  \`;
  document.body.appendChild(ss);

  let idleTimer;
  const IDLE_TIME = 120000; // 2 minutes

  const resetIdle = () => {
    if (ss.classList.contains('active')) {
      ss.classList.remove('active');
    }
    clearTimeout(idleTimer);
    idleTimer = setTimeout(() => {
      ss.classList.add('active');
    }, IDLE_TIME);
  };

  ['mousemove', 'mousedown', 'keydown', 'scroll', 'touchstart'].forEach(evt => {
    window.addEventListener(evt, resetIdle, { passive: true });
  });
  resetIdle();
`;

// Insert the code directly below the music player logic
html = html.replace('isPlaying = !isPlaying;\n  });', 'isPlaying = !isPlaying;\n  });\n' + jsSnippet);

fs.writeFileSync('c:/Users/aayus/OneDrive/Desktop/My personal cv website/index.html', html);
console.log("Screensaver JS injected successfully!");
