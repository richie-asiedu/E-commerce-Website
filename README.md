# E-commerce Website

A modern, responsive e-commerce website built with React, TypeScript, Vite, and Tailwind CSS.

## Features

- 🛍️ Product catalog with filtering and search
- 🎨 Modern, responsive design
- ⚡ Fast performance with Vite
- 📱 Mobile-first approach
- 🎯 TypeScript for better development experience
- 🎨 Tailwind CSS for styling

## Tech Stack

- **Frontend**: React 19, TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **State Management**: Zustand
- **Routing**: React Router DOM

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/e-commerce-website.git
cd e-commerce-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run deploy` - Deploy to GitHub Pages

## Deployment

This project is configured for deployment to GitHub Pages. The deployment process is automated using GitHub Actions.

### Manual Deployment

1. Build the project:
```bash
npm run build
```

2. Deploy to GitHub Pages:
```bash
npm run deploy
```

### Automatic Deployment

The project includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) that automatically builds and deploys the website to GitHub Pages whenever changes are pushed to the main branch.

### GitHub Pages Setup

1. Go to your repository settings on GitHub
2. Navigate to "Pages" in the sidebar
3. Set the source to "Deploy from a branch"
4. Select the `gh-pages` branch
5. Save the settings

Your website will be available at: `https://yourusername.github.io/e-commerce-website`

## Project Structure

```
src/
├── components/     # Reusable UI components
├── pages/         # Page components
├── assets/        # Static assets (images, icons)
├── data/          # Static data (products, etc.)
└── App.tsx        # Main application component
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Commit and push to your branch
5. Create a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).
