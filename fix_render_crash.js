const fs = require('fs');

let html = fs.readFileSync('c:/Users/aayus/OneDrive/Desktop/My personal cv website/index.html', 'utf8');

// Find the start of Music Player logic
const startIdx = html.indexOf('  /* Music Player */');
// Find the end of Screensaver Logic (which ends with `resetIdle();`)
const endStr = '  resetIdle();\n';
const endIdx = html.indexOf(endStr, startIdx) + endStr.length;

if (startIdx !== -1 && html.indexOf(endStr) !== -1) {
  const extractedLogic = html.substring(startIdx, endIdx);
  
  // Remove it from render()
  html = html.substring(0, startIdx) + html.substring(endIdx);
  
  // Now inject it into DOMContentLoaded
  const domLoadedStr = 'document.addEventListener("DOMContentLoaded", () => {\n';
  html = html.replace(domLoadedStr, domLoadedStr + extractedLogic);
  
  fs.writeFileSync('c:/Users/aayus/OneDrive/Desktop/My personal cv website/index.html', html);
  console.log("Moved logic out of render() into DOMContentLoaded successfully.");
} else {
  console.log("Could not find logic blocks.");
}
