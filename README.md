# Vyomara - Production Ready Next.js Application

A production-ready Next.js 15 application built with JavaScript and Tailwind CSS, following modern best practices.

## 🚀 Features

- **Next.js 15** - Latest stable version with React Compiler
- **React 19** - Latest React features and performance improvements
- **JavaScript** - Clean, modern ES6+ JavaScript
- **Tailwind CSS 3.4** - Utility-first CSS with JIT compilation
- **Production Optimized** - Standalone output, image optimization, bundle analysis
- **Security First** - Security headers, CSP, and best practices
- **SEO Ready** - Complete metadata, Open Graph, Twitter cards
- **Error Handling** - Error boundaries and 404 pages
- **Performance** - Optimized builds, lazy loading, code splitting
- **Developer Experience** - ESLint, hot reload, fast refresh

## 📋 Prerequisites

- Node.js 20.0.0 or higher
- npm 10.0.0 or higher

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd vyomara
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run analyze` - Analyze bundle size

## 🏗️ Project Structure

```
vyomara/
├── app/                    # Next.js App Router
│   ├── layout.js          # Root layout with metadata
│   ├── page.js            # Home page
│   ├── globals.css        # Global styles
│   ├── error.js           # Error boundary
│   ├── not-found.js       # 404 page
│   └── loading.js         # Loading state
├── components/            # Reusable components
│   └── README.md         # Component guidelines
├── public/               # Static assets
├── middleware.js         # Edge middleware
├── next.config.js        # Next.js configuration
├── tailwind.config.js    # Tailwind configuration
├── postcss.config.mjs    # PostCSS configuration
└── package.json          # Dependencies

```

## 🚢 Production Deployment

### Build for Production

```bash
npm run build
npm run start
```

### Docker Deployment

```bash
# Build Docker image
docker build -t vyomara .

# Run container
docker run -p 3000:3000 vyomara
```

### Vercel Deployment

1. Push your code to GitHub
2. Import your repository in Vercel
3. Vercel will auto-detect Next.js and deploy

### Environment Variables

Create a `.env.local` file for local development:

```env
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

For production, set environment variables in your hosting platform.

## ⚙️ Configuration

### Next.js Config

Production optimizations include:
- Standalone output for Docker
- Image optimization (AVIF, WebP)
- Security headers
- Bundle analyzer
- React Compiler enabled

### Tailwind Config

Configured with:
- Content paths for purging
- Custom theme extensions
- JIT compilation

## 🔒 Security Features

- Content Security Policy (CSP)
- Strict Transport Security (HSTS)
- X-Frame-Options
- X-Content-Type-Options
- X-XSS-Protection
- Referrer Policy
- Powered by header removed

## 📊 Performance Optimizations

- Image optimization with Next.js Image component
- Automatic code splitting
- Lazy loading
- Tree shaking
- Minification
- Compression
- Bundle analysis

## 🧪 Testing

```bash
# Run linting
npm run lint

# Analyze bundle size
npm run analyze
```

## 📝 Code Quality

- ESLint configuration
- Prettier (recommended)
- Git hooks (recommended)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Vercel for hosting and deployment platform
- Tailwind CSS for the utility-first CSS framework
- React team for the incredible library

## 📞 Support

For support, email support@vyomara.app or open an issue in the repository.

---

Built with ❤️ using Next.js and Tailwind CSS
