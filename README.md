# Sathvika Raapelli - 3D Portfolio

A modern, interactive 3D portfolio website built with React, Vite, and Three.js.

## Features

- 🎨 Clean beige/cream design matching the reference screenshots
- 🎭 Interactive 3D characters and scenes using Three.js
- 📱 Fully responsive design
- ✨ Smooth animations and transitions
- 🚀 Built with React + Vite for optimal performance

## Sections

1. **Home** - Hero section with 3D female character
2. **About** - Introduction with animated 3D geometric shapes
3. **Skills** - Technical skills organized by category
4. **Projects** - Featured projects including AgroLync, Synthesia Music Player, and BI Dashboard
5. **Experience** - Timeline of internships and work experience
6. **Certifications** - Professional certifications and workshops
7. **Contact** - Contact form with 3D character illustration

## Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Technologies Used

- **React** - UI library
- **Vite** - Build tool
- **Three.js** - 3D graphics
- **@react-three/fiber** - React renderer for Three.js
- **@react-three/drei** - Useful helpers for react-three-fiber

## Customization

### Colors
Edit the CSS variables in `src/App.css`:
```css
:root {
  --bg-primary: #f5f1e8;
  --bg-secondary: #ebe5d9;
  --bg-card: #ffffff;
  --accent-orange: #ff8c42;
  --accent-blue: #4a90e2;
  --accent-purple: #8b5cf6;
}
```

### Content
Update your information in `src/App.jsx`:
- Projects array
- Experience array
- Skills object
- Certifications array
- Contact information

### 3D Scenes
Modify the 3D components in `src/App.jsx`:
- `FemaleCharacter()` - Hero section character
- `AboutScene()` - About section animation
- `ProjectsScene()` - Projects section cards
- `ContactScene()` - Contact section character

## Deployment

### Netlify
```bash
npm run build
# Deploy the 'dist' folder
```

### Vercel
```bash
npm run build
# Deploy the 'dist' folder
```

### GitHub Pages
```bash
npm run build
# Push 'dist' folder to gh-pages branch
```

## License

MIT License - feel free to use this template for your own portfolio!

## Author

**Sathvika Raapelli**
- Email: sathvikaraapelli09@gmail.com
- LinkedIn: [linkedin.com/in/sathvikaraapelli](https://linkedin.com/in/sathvikaraapelli)
- GitHub: [github.com/sathvika139](https://github.com/sathvika139)
