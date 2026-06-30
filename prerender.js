const fs = require('fs');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;

const html = fs.readFileSync('index.html', 'utf8');

const dom = new JSDOM(html, { runScripts: "dangerously" });
dom.window.localStorage = { getItem: () => null, setItem: () => {} };

setTimeout(() => {
  try {
    dom.window.LANG = "en";
    dom.window.render();
    dom.window.document.body.classList.remove('menu-open');
    const newHtml = dom.serialize();
    fs.writeFileSync('index.html', newHtml);
    console.log("Pre-rendered successfully.");
  } catch (e) {
    console.error("Render failed:", e);
  }
  process.exit(0);
}, 500);