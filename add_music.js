const fs = require('fs');

let html = fs.readFileSync('c:/Users/aayus/OneDrive/Desktop/My personal cv website/index.html', 'utf8');

// 1. Add CSS
const css = `
/* Music Toggle */
.music-toggle {
  position: fixed;
  bottom: 2rem;
  left: 2rem;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background: var(--surface);
  color: var(--ink);
  border: 1px solid var(--ink);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 999;
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), background 0.3s, color 0.3s;
}
.music-toggle:hover {
  transform: scale(1.1);
  background: var(--ink);
  color: var(--paper);
}
.music-toggle svg {
  width: 1.2rem;
  height: 1.2rem;
}
@media (max-width: 768px) {
  .music-toggle {
    bottom: 1rem;
    left: 1rem;
    width: 2.5rem;
    height: 2.5rem;
  }
}
`;
html = html.replace('</style>', css + '\n</style>');

// 2. Add HTML
const htmlSnippet = `
<!-- Background Music -->
<audio id="bgm" loop preload="none">
  <source src="bgm.mp3" type="audio/mpeg">
</audio>
<button id="musicToggle" class="music-toggle" aria-label="Play Music">
  <svg class="icon-play" viewBox="0 0 24 24" fill="currentColor">
    <path d="M8 5v14l11-7z"/>
  </svg>
  <svg class="icon-pause" viewBox="0 0 24 24" fill="currentColor" style="display:none;">
    <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
  </svg>
</button>

<script src="prerender.js"></script>
`;
// We will insert before the closing body tag
html = html.replace('</body>', htmlSnippet + '\n</body>');

// 3. Add JS
const js = `
  /* Music Player */
  const bgm = $("bgm");
  const musicToggle = $("musicToggle");
  const iconPlay = musicToggle.querySelector(".icon-play");
  const iconPause = musicToggle.querySelector(".icon-pause");
  let isPlaying = false;

  musicToggle.addEventListener("click", () => {
    if (isPlaying) {
      bgm.pause();
      iconPlay.style.display = "block";
      iconPause.style.display = "none";
    } else {
      bgm.play().catch(e => console.error("Audio play failed:", e));
      iconPlay.style.display = "none";
      iconPause.style.display = "block";
    }
    isPlaying = !isPlaying;
  });
`;
// Insert at the end of the init() function before closing brace
html = html.replace(/initObservers\(\);\s*\}/, 'initObservers();\n' + js + '\n  }');

fs.writeFileSync('c:/Users/aayus/OneDrive/Desktop/My personal cv website/index.html', html);
console.log("Music toggle added successfully.");
