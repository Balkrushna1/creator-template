# Creator Template

A modern single-page web application built with React, TypeScript, and Vite. This application features smooth animations, a contact form, and is optimized for Vercel deployment.

## Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **Backend**: Express 5, Node.js
- **Styling**: Tailwind CSS, shadcn/ui components
- **Animations**: Framer Motion
- **State Management**: TanStack Query

## Features

- Single-page application with smooth scrolling navigation
- Contact form with client-side validation
- Responsive design with Tailwind CSS
- Modern UI components from shadcn/ui
- Smooth animations and transitions with Framer Motion

## Prerequisites

Before you begin, ensure you have installed:

- **Node.js** 18.x or higher
- **npm** or **yarn**

## Getting Started

### 1. Clone the Repository

```bash
git clone <your-repository-url>
cd creator-template
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the Development Server

```bash
npm run dev
```

The application will start on `http://localhost:5000` (or the port specified in your environment).

## Available Scripts

- **`npm run dev`** - Start the development server with hot reload
- **`npm run build`** - Build the application for production
- **`npm run start`** - Start the production server (requires build first)
- **`npm run check`** - Run TypeScript type checking

## Project Structure

```
creator-template/
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── pages/         # Page components
│   │   ├── hooks/         # Custom React hooks
│   │   └── lib/           # Utility functions
│   └── index.html         # HTML entry point
├── server/                # Backend Express application
│   ├── index.ts           # Server entry point
│   ├── routes.ts          # API routes
│   ├── db.ts              # Database connection
│   └── static.ts          # Static file serving
├── shared/                # Shared code between client and server
│   ├── schema.ts          # Database schema
│   └── routes.ts          # Route definitions
└── package.json           # Dependencies and scripts
```

## Deploying to Vercel

### Prerequisites for Vercel Deployment

1. A [Vercel account](https://vercel.com/signup)
2. [Vercel CLI](https://vercel.com/cli) installed (optional but recommended)

### Step 1: Deploy Using Vercel CLI (Recommended)

Install Vercel CLI globally (if not already installed):

```bash
npm install -g vercel
```

Login to Vercel:

```bash
vercel login
```

Deploy to Vercel:

```bash
vercel
```

Follow the prompts:

- **Set up and deploy**: Yes
- **Which scope**: Choose your account/team
- **Link to existing project**: No (for first deployment)
- **Project name**: creator-template (or your preferred name)
- **Directory**: `./` (root)
- **Override settings**: No

For production deployment:

```bash
vercel --prod
```

### Step 2: Deploy Using GitHub (Alternative Method)

1. Push your code to a GitHub repository
2. Go to [Vercel Dashboard](https://vercel.com/new)
3. Click **Import Project**
4. Select your GitHub repository
5. Configure project:
   - **Framework Preset**: Other
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist/public`
   - **Install Command**: `npm install`
6. Click **Deploy**

### Important Notes for Vercel Deployment

- Vercel automatically handles the build process using the `build` script in `package.json`
- The Express server runs as a serverless function on Vercel
- Static files are served from the `dist/public` directory

### Verifying Deployment

Once deployed, Vercel will provide you with a URL (e.g., `https://your-app.vercel.app`). Visit the URL to verify:

1. The application loads correctly
2. Navigation works smoothly
3. The contact form submits successfully and shows the success message

## Development Tips

- The app uses Vite for fast hot module replacement during development
- Path aliases are configured: `@/` for client source, `@shared/` for shared code
- The contact form shows a success message on submission (no backend storage)
- This is a demonstration project showcasing modern React development

## Troubleshooting

### Build Errors

If the build fails:

1. Run `npm run check` to check for TypeScript errors
2. Clear node_modules and reinstall: `rm -rf node_modules && npm install`
3. Check for missing environment variables

### Deployment Issues on Vercel

1. Check the deployment logs in Vercel dashboard
2. Verify the build command completes successfully
3. Ensure all dependencies are properly installed

## Support

For issues or questions:

1. Check the [Vercel documentation](https://vercel.com/docs)
2. Review the [Vite documentation](https://vitejs.dev)
3. Check the project's issue tracker

## License

MIT
