# Setup Instructions

Follow these steps to get your Next.js application running:

## 1. Install Dependencies

```bash
npm install
```

This will install all required dependencies:
- Next.js 15
- React 19
- Tailwind CSS 3.4
- ESLint
- PostCSS & Autoprefixer
- Bundle Analyzer

## 2. Run Development Server

```bash
npm run dev
```

Your application will be available at [http://localhost:3000](http://localhost:3000)

## 3. Build for Production

```bash
npm run build
npm run start
```

## 4. Analyze Bundle Size

```bash
npm run analyze
```

This will create a visual report of your bundle size.

## 5. Lint Your Code

```bash
npm run lint
```

## Docker Setup (Optional)

### Build Docker Image

```bash
docker build -t vyomara .
```

### Run Container

```bash
docker run -p 3000:3000 vyomara
```

## Configuration

### Environment Variables

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### Tailwind CSS

Tailwind is already configured. To add custom styles, edit:
- `tailwind.config.js` - for theme customization
- `app/globals.css` - for global styles

### Next.js Config

Production optimizations are enabled in `next.config.js`:
- Standalone output
- Image optimization
- Security headers
- Bundle analyzer

## Project Structure

```
vyomara/
├── app/                    # Next.js App Router
│   ├── layout.js          # Root layout
│   ├── page.js            # Home page
│   ├── globals.css        # Global styles
│   ├── error.js           # Error boundary
│   ├── not-found.js       # 404 page
│   └── loading.js         # Loading state
├── components/            # Reusable components
│   └── ui/               # UI components
├── lib/                  # Utility functions
├── public/               # Static assets
├── middleware.js         # Edge middleware
├── next.config.js        # Next.js config
├── tailwind.config.js    # Tailwind config
└── package.json          # Dependencies
```

## Next Steps

1. ✅ Install dependencies: `npm install`
2. ✅ Run dev server: `npm run dev`
3. ✅ Customize your app in `app/page.js`
4. ✅ Add components in `components/` directory
5. ✅ Configure environment variables in `.env.local`
6. ✅ Deploy to Vercel or your preferred platform

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import repository in Vercel
3. Deploy automatically

### Docker

```bash
docker build -t vyomara .
docker run -p 3000:3000 vyomara
```

### Other Platforms

Most platforms support Next.js. Check their documentation for deployment instructions.

## Troubleshooting

### Port Already in Use

```bash
# Kill process on port 3000 (Unix/Mac)
lsof -ti:3000 | xargs kill -9

# Or use a different port
PORT=3001 npm run dev
```

### Module Not Found

```bash
# Clear cache and reinstall
rm -rf node_modules .next
npm install
```

### Build Errors

```bash
# Check for linting errors
npm run lint

# Clear Next.js cache
rm -rf .next
npm run build
```

## Support

For issues or questions, please open an issue on GitHub or contact support.

---

Happy coding! 🚀


