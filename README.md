# XCOMS AI - Automated Sales & Recruiting Calls

[![Live Demo](https://img.shields.io/badge/demo-live-green.svg)](https://magnusquest.github.io/xcoms-ai)
[![Next.js](https://img.shields.io/badge/next.js-14-black)](https://nextjs.org)
[![Tailwind CSS](https://img.shields.io/badge/tailwind-3.4-blue)](https://tailwindcss.com)
[![TypeScript](https://img.shields.io/badge/typescript-5.0-blue)](https://www.typescriptlang.org)

XCOMS AI is a modern landing page for an AI-powered robo-caller platform designed to revolutionize sales and recruiting calls. Built with Next.js, TypeScript, and Tailwind CSS, it features a responsive design with dark mode support and smooth animations.

![XCOMS AI Preview](/public/screenshots/xcoms-landing-page.png)

## Features

- 🎨 Modern, responsive design with dark mode support
- 🚀 Built with Next.js 14 and TypeScript
- 💅 Styled with Tailwind CSS
- 🔄 Animated components using Framer Motion
- 📱 Mobile-first approach
- 🎭 SVG avatars for testimonials
- 💳 Clear pricing tiers
- 🌙 Automatic dark mode detection

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

The site will be running at [http://localhost:3000](http://localhost:3000).

## Project Structure

```
src/
├── app/              # Next.js app directory
├── components/       # React components
│   ├── atoms/       # Basic components (Button)
│   └── organisms/   # Complex components (Header, Hero)
└── lib/             # Utilities and constants
    ├── constants/   # Site configuration
    ├── helpers/     # Utility functions
    └── types/       # TypeScript types
```

## Development

1. Clone the repository:

   ```bash
   git clone https://github.com/magnusquest/xcoms-ai.git
   cd xcoms-ai
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

## Deployment

This project is deployed using GitHub Pages. To deploy your own version:

1. Fork this repository
2. Update `next.config.js` with your base path
3. Run `npm run build` and `npm run export`
4. Enable GitHub Pages in your repository settings

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
