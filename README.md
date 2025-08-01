# E-commerce Website

A modern e-commerce website built with React, TypeScript, Vite, and Tailwind CSS.

## Features

- Modern React with TypeScript
- Responsive design with Tailwind CSS
- Fast development with Vite
- State management with Zustand
- Smooth scrolling navigation
- Beautiful UI components

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

## Deployment

This project is configured to automatically deploy to GitHub Pages. The deployment process:

1. **Automatic Deployment**: Every push to the `main` branch triggers an automatic build and deployment
2. **GitHub Actions**: Uses GitHub Actions workflow to build and deploy the site
3. **Live Site**: Your site will be available at `https://yourusername.github.io/e-commerce-website/`

### Manual Deployment Steps

If you need to deploy manually:

1. Build the project:
```bash
npm run build
```

2. The built files will be in the `dist/` directory
3. Deploy the contents of the `dist/` directory to your web server

## Project Structure

```
├── src/                 # Source code
├── public/             # Static assets
├── dist/               # Build output (generated)
├── .github/workflows/  # GitHub Actions workflows
├── package.json        # Dependencies and scripts
└── vite.config.ts      # Vite configuration
```

## Technologies Used

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling framework
- **Zustand** - State management
- **React Router** - Client-side routing
- **Lucide React** - Icon library

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Commit and push to the branch
5. Create a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).
