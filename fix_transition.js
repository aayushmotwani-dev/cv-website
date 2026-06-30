const fs = require('fs');

let html = fs.readFileSync('c:/Users/aayus/OneDrive/Desktop/My personal cv website/index.html', 'utf8');

// Restore startViewTransition and add is-transitioning logic
const toggleThemeLogic = `
  window.toggleTheme = () => {
    THEME = THEME === "dark" ? "light" : "dark";
    if (document.startViewTransition && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      document.documentElement.classList.add("is-transitioning");
      const transition = document.startViewTransition(update);
      transition.finished.finally(() => {
        document.documentElement.classList.remove("is-transitioning");
      });
    } else {
      update();
    }
  };
`;
html = html.replace(/window\.toggleTheme = \(\) => \{[\s\S]*?\n  \};/, toggleThemeLogic.trim());

// Add CSS to hide texture overlay during transition
const hideTextureCss = `
html.is-transitioning .texture-overlay {
  opacity: 0 !important;
  mix-blend-mode: normal !important;
}
`;
html = html.replace('</style>', hideTextureCss + '\n</style>');

fs.writeFileSync('c:/Users/aayus/OneDrive/Desktop/My personal cv website/index.html', html);
console.log("Fixed view transition performance by hiding texture during fade.");
