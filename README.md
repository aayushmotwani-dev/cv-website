# Aayush Motwani - Personal Portfolio & CV Website

Welcome to the repository for my personal CV and portfolio website. This is a highly interactive, single-page web application designed to showcase my academic background, professional experience, projects, and skills.

## 🚀 Live Demo

**[View the live site here](https://cv-website-taupe.vercel.app/)** *(Replace with actual Vercel URL if different)*

## ✨ Features

- **Modern & Minimalist Design**: Built with a focus on clean typography, precise spacing, and smooth micro-interactions.
- **Tri-Theme System**:
  - 📄 **Paper**: A clean, light mode with high readability.
  - 🖋️ **Ink**: A sleek, dark mode with reduced eye strain.
  - 👾 **8-Bit**: A fun, retro-inspired mode with pixelated fonts and CRT-style scanlines.
- **Bilingual Support (EN/DE)**: Seamlessly toggle between English and German translations for all content.
- **Interactive Screensaver**: A WebGL/Three.js-powered interactive 3D screensaver that activates after a period of inactivity.
- **Background Music Player**: Integrated lo-fi BGM with a custom toggle for a more immersive browsing experience.
- **Responsive Layout**: Carefully tuned for all device sizes, featuring a custom mobile navigation overlay and optimized touch-based dimming interactions.

## 🛠️ Tech Stack

This project was built intentionally without heavy frameworks to ensure lightning-fast load times and complete control over the DOM.

- **HTML5**: Semantic structure and accessibility.
- **CSS3**: Vanilla CSS with custom properties (variables), Flexbox/Grid layouts, and modern pseudo-classes (e.g., `:has()`, `:target`).
- **JavaScript (Vanilla)**: For theme switching, language toggling, scroll progress tracking, and interactive states.
- **Three.js**: Used for rendering the interactive 3D screensaver.
- **Hosting**: Deployed seamlessly via [Vercel](https://vercel.com).

## 📂 Project Structure

- `index.html`: The core file containing all structure, inline styles, and logic.
- `bgm.mp3`: Background music track.
- `texture.png` & `render.png`: Assets used for the UI and screensaver.
- `press-start-2p.woff2`: Custom pixel font for the 8-Bit mode.

## ⚙️ Development

To run this project locally, you don't need any complex build tools. Simply clone the repository and serve it using any local HTTP server.

```bash
# Clone the repository
git clone https://github.com/aayushmotwani-dev/cv-website.git

# Navigate into the project
cd cv-website

# Serve using Python 3
python -m http.server 8000

# Or using Node.js (http-server)
npx http-server
```

Then, open `http://localhost:8000` in your browser.

## 📝 License

This project is open-source and available under the [MIT License](LICENSE). Feel free to use the layout as inspiration for your own portfolio!
