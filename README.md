# Professor Nazim Choudhury - Academic Website

A clean, minimal academic website built with React and Tailwind CSS.

## Features

- **Minimal Design**: Clean, professional layout with monochrome color palette
- **Responsive**: Works perfectly on all devices
- **Fast**: Built with Vite for optimal performance
- **Accessible**: Proper semantic HTML and keyboard navigation
- **GitHub Pages Ready**: Easily deployable to GitHub Pages

## Structure

- **Home**: Combined biography and research philosophy
- **Research**: Publications, research areas, student research, and collaborations
- **Teaching**: Courses, teaching philosophy, and achievements
- **Contact**: Professional contact information and collaboration opportunities

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment to GitHub Pages

1. Build the project: `npm run build`
2. The `dist` folder contains the deployable files
3. Upload to your GitHub repository
4. Enable GitHub Pages in repository settings
5. Set source to the `dist` folder or deploy from `gh-pages` branch

## Content Management

The website is designed for easy content updates:

- Edit content in the respective page components (`src/pages/`)
- Update contact information in `src/pages/Contact.jsx`
- Modify research publications in `src/pages/Research.jsx`
- Update course information in `src/pages/Teaching.jsx`

## Customization

- Colors: Modify the Tailwind config for different color schemes
- Typography: Update font families in `tailwind.config.js`
- Layout: Adjust spacing and sizing in component files
- Logo: Replace the simple "NC" logo in the navigation component

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers
- Graceful degradation for older browsers