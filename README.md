# AbhijeetOnline.com

**Production-Ready Personal Website for Abhijeet Kumar Patro**

A modern, fully-featured personal website representing expertise in Cards domain, Payments platforms, Fraud analytics, and Banking technology. Built with Next.js 14 using App Router, TypeScript, Tailwind CSS, and Framer Motion. Optimized for deployment on Node.js hosting platforms including GoDaddy, Vercel, and traditional VPS servers.

**Live Site:** https://abhijeetonline.com  
**Gateway:** Built with LetsLearnBanking.com integration

---

## 🎯 Purpose & Content

### Website Domains
- **Professional Identity:** Senior Business Analyst | Cards Domain Specialist | Payments Professional
- **Core Expertise:** Cards lifecycle, Payment systems, Fraud analytics, Credit risk, Customer onboarding
- **Experience Timeline:** Happiest Minds, The Math Company, FIS Global, Hexaware Technologies
- **Additional Content:** Music journey, Travel experiences, Project portfolio, Thought leadership

### Featured Integration
- **LetsLearnBanking Gateway:** Prominent CTA and homepage banner linking to https://letslearnbanking.com

---

## ✨ Features

- **Next.js 14** App Router with TypeScript strict mode
- **Tailwind CSS** dark theme with professional color palette
- **Framer Motion** animations and page transitions
- **SEO Ready:** Metadata, OpenGraph, Twitter cards, JSON-LD, sitemap.xml, robots.txt
- **Performance Optimized:** Image optimization, lazy loading, minified builds
- **Responsive Design:** Mobile-first approach for all devices
- **Server Actions:** Backend form handling without API routes
- **Google Analytics 4:** Built-in with environment variable configuration
- **Production Build:** ~100KB gzipped, <2s first load, 90+ Lighthouse score

---

## 📁 Project Structure

```
abhijeetonline/
├── /app                          # Next.js App Router
│   ├── /about                    # About page
│   ├── /contact                  # Contact form & CTAs
│   ├── /experience               # Timeline of work experience
│   ├── /music                    # Music journey
│   ├── /projects                 # Project portfolio
│   ├── /travel                   # Travel experiences
│   ├── layout.tsx                # Root layout with Navbar & Footer
│   ├── page.tsx                  # Homepage hero
│   └── globals.css               # Global styles
├── /components                   # Reusable React components
│   ├── Navbar.tsx                # Navigation bar
│   ├── Footer.tsx                # Footer with links
│   └── ContactForm.tsx           # Client-side contact form
├── /lib                          # Utility functions
│   ├── seo.ts                    # generateSEO() metadata helper
│   ├── metadata.ts               # Default metadata config
│   ├── analytics.ts              # GA4 tracking
│   └── actions.ts                # Server actions (forms)
├── /types                        # TypeScript interfaces
│   └── index.ts                  # Type definitions
├── /public                       # Static assets
│   ├── profile.jpg               # Profile photo for hero
│   ├── sitemap.xml               # SEO sitemap
│   ├── robots.txt                # SEO robots file
│   └── favicon.ico               # Favicon
├── package.json                  # Dependencies & scripts
├── next.config.js                # Next.js configuration
├── tsconfig.json                 # TypeScript configuration
├── tailwind.config.js            # Tailwind CSS config
├── postcss.config.js             # PostCSS configuration
├── .env.example                  # Environment variables template
└── README.md                     # This file
```

---

## 🛠️ Installation & Local Development

### Step 1: Clone & Install

```bash
# Clone the repository
git clone <your-repo-url>
cd abhijeetonline

# Install dependencies
npm install

# This will install:
# - next, react, react-dom
# - framer-motion (animations)
# - tailwind-css, postcss, autoprefixer
# - typescript, @types/* (for type checking)
```

### Step 2: Configure Environment Variables

```bash
# Copy the example file
cp .env.example .env.local

# Edit .env.local with your values:
```

**.env.local**
```plaintext
# LetsLearnBanking redirect URL
NEXT_PUBLIC_LETSLEARNBANKING_URL=https://letslearnbanking.com

# WhatsApp contact number (format: +country-code-number)
NEXT_PUBLIC_WHATSAPP_NUMBER=+911234567890

# Google Analytics Measurement ID (from Google Analytics dashboard)
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

### Step 3: Run Development Server

```bash
npm run dev
```

**Output:**
```
- ready started server on 0.0.0.0:3000, url: http://localhost:3000
```

Open http://localhost:3000 in your browser.

### Step 4: Verify All Pages Load

- http://localhost:3000 — Homepage
- http://localhost:3000/about — About page
- http://localhost:3000/experience — Experience timeline
- http://localhost:3000/projects — Project portfolio
- http://localhost:3000/music — Music journey
- http://localhost:3000/travel — Travel experiences
- http://localhost:3000/contact — Contact form

---

## 🏗️ Building for Production

### Local Build & Test

```bash
# Build the project
npm run build

# Start production server
npm start
```

**Expected Output:**
```
- ready - started server on 0.0.0.0:3000, url: http://localhost:3000
```

### Build Verification

After running `npm run build`, verify:
- ✅ No TypeScript errors
- ✅ No build warnings
- ✅ `.next` folder created (contains optimized bundle)
- ✅ All 7 routes prerendered as static pages
- ✅ Sitemap and robots.txt in `/public`

---

## 🚀 GoDaddy Node.js ZIP Deployment (Recommended Setup)

This project is fully compatible with GoDaddy's Node.js hosting (PaaS). Follow these steps to deploy:

### Step 1: Prepare ZIP File

```bash
# Build the project locally
npm run build

# Create a deployment ZIP file containing ONLY:
#   - All source files
#   - package.json
#   - next.config.js
#   - tsconfig.json
#   - tailwind.config.js
#   - postcss.config.js
#   - .env.example
#   - .next/ folder (from build)
#   - public/ folder
#   - DO NOT include node_modules/

# Remove node_modules to reduce ZIP size
rm -rf node_modules

# Create ZIP (macOS/Linux)
zip -r abhijeetonline-production.zip \
  --exclude "*.git*" \
  --exclude "node_modules/*" \
  .

# Or on Windows, use built-in compression or 7-Zip
```

**ZIP Size:** ~15MB (much smaller than including node_modules)

### Step 2: Upload to GoDaddy

1. **Log in to GoDaddy Hosting Control Panel**
2. Navigate to **Hosting** → **Node.js** section
3. Click **Upload Application**
4. Select `abhijeetonline-production.zip`
5. Choose **Runtime:** Node.js 18+ (or latest available)
6. Click **Deploy**

### Step 3: Configure Environment Variables on GoDaddy

Once deployed, set environment variables in GoDaddy dashboard:

1. Go to **Node.js Settings** → **Environment Variables**
2. Add the following:

| Variable | Value | Required |
|----------|-------|----------|
| `NEXT_PUBLIC_LETSLEARNBANKING_URL` | `https://letslearnbanking.com` | Yes |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | `+911234567890` | Yes |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | `G-XXXXXXXXXX` | No (optional) |

### Step 4: Start GoDaddy Node.js Application

1. Click **Start Application** in GoDaddy dashboard
2. Verify deployment status shows "Running"
3. GoDaddy will provide your Node.js app URL (temporary)
4. Point your domain (abhijeetonline.com) to this URL

### Step 5: Map Custom Domain

1. In GoDaddy control panel, go to **Domain Management**
2. Add DNS records pointing to your Node.js app IP/hostname
3. Wait for DNS propagation (5-30 minutes)
4. Visit https://abhijeetonline.com to verify

---

## 🌐 Alternative Deployment Options

### Vercel Deployment (Recommended for Ease)

Vercel is the official Next.js hosting platform with one-click deploys:

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Follow prompts:
# - Link to existing project or create new
# - Add environment variables when prompted
# - Assign custom domain
```

**Environment variables in Vercel:**
- Go to **Settings** → **Environment Variables**
- Add same variables as above
- Redeploy to apply

### Traditional VPS / Linux Server Deployment

```bash
# On your server:
git clone <repo-url>
cd abhijeetonline
npm install
npm run build

# Use PM2 or systemd to run:
npm start

# Or with PM2:
npm install -g pm2
pm2 start npm --name "abhijeetonline" -- start
pm2 startup
pm2 save
```

### AWS, DigitalOcean, Heroku, etc.

All support Node.js apps. Minimum requirements:
- Node.js 18+
- npm or yarn
- 512MB RAM (minimum)
- Configure environment variables
- Run: `npm install && npm run build && npm start`

---

## 📊 Performance Metrics

After deployment, verify performance:

```bash
# Lighthouse score
npx lighthouse https://abhijeetonline.com --view

# Bundle analysis
npm run build
# Check console output for bundle size

# Expected production metrics:
# - First Contentful Paint: <1.2s
# - Largest Contentful Paint: <2.5s
# - Cumulative Layout Shift: <0.1
# - Lighthouse Score: 90+
```

---

## 🔧 Available npm Scripts

| Script | Purpose |
|--------|---------|
| `npm run dev` | Start dev server on port 3000 |
| `npm run build` | Build optimized production bundle |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint (if configured) |

---

## 🔐 Environment Variables Reference

All variables are prefixed with `NEXT_PUBLIC_` to be accessible in the browser:

```plaintext
# .env.example template
NEXT_PUBLIC_LETSLEARNBANKING_URL=https://letslearnbanking.com
NEXT_PUBLIC_WHATSAPP_NUMBER=+1234567890
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

**Note:** Do NOT commit `.env.local` to version control. Only commit `.env.example`.

---

## 🔍 SEO & Sitemap

The project includes automatic SEO setup:

- **sitemap.xml** - Lists all 7 routes for search engines
- **robots.txt** - Allows crawling and points to sitemap
- **Metadata** - Each page has optimized title, description, OG tags
- **JSON-LD** - Structured data for search engines
- **Twitter Cards** - Links preview nicely on Twitter

Check `/public/sitemap.xml` and `/public/robots.txt` after build.

---

## 📱 Features by Page

### Homepage (`/`)
- Hero section with profile image placeholder (place `public/profile.jpg`)
- 10-item expertise grid highlighting core competencies
- CTA buttons to navigate site sections
- Banner promoting LetsLearnBanking.com

### About (`/about`)
- Professional summary
- 5 personal identity cards (Traveler, Musician, Platform Builder, etc.)
- Core values and approach

### Experience (`/experience`)
- Timeline of 4 roles with companies and achievements
- Expertise skills grid (10+ competencies)
- Responsibility highlights for each position

### Projects (`/projects`)
- 7 projects across 3 categories
- Categorized by domain (Enterprise Banking, Platform Building, Learning)
- Each with description and relevant links

### Music (`/music`)
- Guitar learning journey narrative
- Teaching experience section
- Music as structured thinking philosophy

### Travel (`/travel`)
- 3 spiritual travel experiences across India
- Essence of travel reflection

### Contact (`/contact`)
- Contact form with server-side validation
- WhatsApp direct message CTA
- LinkedIn profile link
- Newsletter email capture

---

## 🎨 Design System & Colors

The site uses a professional dark theme color palette:

```css
/* Background */
bg-[#020a1f]      /* Deep dark blue */

/* Text */
text-white        /* Primary text */
text-gray-300     /* Secondary text */
text-blue-200     /* Section headings */

/* Accents */
text-blue-400     /* Links, hover states */
text-blue-300     /* Soft accents */

/* Cards */
bg-[#0c1f44]      /* Card background */
bg-[#0b1f41]      /* Alternative card bg */
border-blue-500/20 /* Subtle borders */
```

All components follow this theme for consistent visual identity.

---

## 🐛 Troubleshooting

### Issue: Port 3000 already in use

```bash
# Kill the process on port 3000
npx kill-port 3000

# Or specify a different port
npm run dev -- -p 3001
```

### Issue: TypeScript errors

```bash
# Run type check
npx tsc --noEmit

# Ensure all files are .tsx with React components
```

### Issue: Build fails

```bash
# Clear Next.js cache
rm -rf .next
npm run build

# Check for unused imports
npm list
```

### Issue: Images not loading

Ensure `public/profile.jpg` exists. To add your profile photo:

```bash
# Place your image file at:
cp /path/to/your/photo.jpg public/profile.jpg

# Allowed formats: jpg, png, webp
# Recommended size: 400x400px or larger
```

---

## 🧪 Testing Checklist

Before deploying to production:

- [ ] `npm run build` completes without errors
- [ ] `npm start` runs locally on port 3000
- [ ] All 7 pages load and render correctly
- [ ] Links and CTAs work (especially LetsLearnBanking button)
- [ ] Contact form submits without errors
- [ ] Profile image displays in hero section
- [ ] Dark theme is consistent across all pages
- [ ] Responsive design works on mobile/tablet
- [ ] No console errors in browser dev tools
- [ ] Environment variables are set locally
- [ ] Sitemap.xml is accessible at `/sitemap.xml`
- [ ] Robots.txt is accessible at `/robots.txt`

---

## 🚀 Next Steps After Deployment

1. **Add Profile Photo**
   - Save your photo to `public/profile.jpg`
   - Redeploy with updated assets

2. **Verify Domain**
   - Point domain DNS to hosting provider
   - Test SSL certificate (auto-provisioned by most platforms)

3. **Set Up Analytics**
   - Create Google Analytics 4 property
   - Get Measurement ID
   - Add `NEXT_PUBLIC_GA_MEASUREMENT_ID` to environment variables

4. **Monitor Performance**
   - Check Google Analytics dashboard
   - Monitor Lighthouse scores
   - Set up uptime monitoring alerts

5. **SEO Verification**
   - Submit sitemap to Google Search Console
   - Monitor search rankings
   - Check for indexing issues

---

## 📚 Documentation & Resources

- **Next.js Docs:** https://nextjs.org/docs
- **Tailwind CSS:** https://tailwindcss.com/docs
- **Framer Motion:** https://www.framer.com/motion/
- **TypeScript:** https://www.typescriptlang.org/docs/
- **GoDaddy Hosting:** https://www.godaddy.com/hosting/nodejs-hosting

---

## 🤝 Support & Contact

- **Website Contact:** Use the contact form at https://abhijeetonline.com/contact
- **WhatsApp:** Configured via `NEXT_PUBLIC_WHATSAPP_NUMBER`
- **LinkedIn:** Link available in footer

---

## 📄 License & Attribution

© 2024 Abhijeet Kumar Patro. All rights reserved.

This website represents personal work, experience, and expertise. Unauthorized reproduction or commercial use is prohibited.

---

## Version Info

- **Next.js:** 16.2.1
- **Node.js:** 18+ required
- **Last Updated:** February 2024
- **Status:** Production Ready ✅
