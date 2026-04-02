# Quick Start Guide - Local Testing

Get your site running locally in 3 minutes for testing before GoDaddy deployment.

## 🚀 Start Development Server (Instant)

```bash
# From project root:
npm install   # Only needed once
npm run dev
```

**Expected Output:**
```
✓ Compiled successfully
Ready - available at http://localhost:3000
```

**Open in Browser:** http://localhost:3000

---

## 🧪 Test All Pages

| Page | URL | What to Check |
|------|-----|---------------|
| Home | http://localhost:3000 | Hero section, profile image, expertise grid |
| About | http://localhost:3000/about | Personal identity cards, dark theme |
| Experience | http://localhost:3000/experience | Timeline, 4 companies, expertise grid |
| Projects | http://localhost:3000/projects | 7 projects across 3 categories |
| Music | http://localhost:3000/music | Guitar journey, teaching, philosophy |
| Travel | http://localhost:3000/travel | 3 experiences, essence section |
| Contact | http://localhost:3000/contact | Form, WhatsApp, LinkedIn, Newsletter |

---

## 🔍 What to Verify

### Visual
- [ ] Dark theme colors consistent (dark blue, cyan accents)
- [ ] Text readable on dark background
- [ ] Images load correctly
- [ ] Layout responsive on mobile (use DevTools)
- [ ] Links clickable and navigating properly

### Functional
- [ ] Contact form doesn't error
- [ ] External links work (WhatsApp, LinkedIn)
- [ ] LetsLearnBanking button redirects correctly
- [ ] Navigation between pages smooth
- [ ] Pressing back button works

### Performance
- [ ] Pages load fast (<1 second)
- [ ] No console errors (F12 → Console tab)
- [ ] No slow warnings in Dev Tools
- [ ] Images optimized (no large JPGs)

---

## 🔧 Build for Production (Test Before Deploying)

```bash
# Build optimized production bundle
npm run build

# Test production build locally
npm start

# Visit http://localhost:3000
```

This is exactly what GoDaddy will run after you upload the ZIP.

---

## 📱 Test on Mobile

### Using Same Computer
```bash
# Find your computer IP:
# Mac/Linux: ifconfig | grep "inet " | grep -v 127.0.0.1
# Windows: ipconfig | find "IPv4"
# Result: 192.168.x.x

# Then visit on mobile: http://192.168.x.x:3000
```

### Using Phone Hotspot
Tether phone to computer, test as above.

---

## 🙋 Common Issues During Testing

### "Port 3000 already in use"
```bash
# Kill the process on port 3000
npx kill-port 3000

# Or use different port
npm run dev -- -p 3001
```

### "Cannot find module"
```bash
# Try again:
rm -rf node_modules
npm install
npm run dev
```

### "Images not loading"
```bash
# Ensure profile photo exists:
cp /path/to/your/photo.jpg public/profile.jpg

# Or use a placeholder:
curl -o public/profile.jpg https://via.placeholder.com/400
```

### "Contact form errors"
- Check browser console (F12)
- Make sure environment variables are set in .env.local
- Verify ContactForm.tsx hasn't been modified

---

## 🛑 Stop & Clean Up

```bash
# Stop dev server:
# Press Ctrl+C in terminal

# Clear cache:
rm -rf .next
npm run dev  # Restart clean
```

---

## ✅ Ready to Deploy?

After testing locally, you're ready for GoDaddy:

1. Run `npm run build` one more time
2. Follow [DEPLOYMENT_GODADDY.md](DEPLOYMENT_GODADDY.md) steps
3. Upload ZIP to GoDaddy
4. Configure environment variables
5. Start application
6. Test on domain

---

## 📊 Performance Tips

Optimize before deploying:

```bash
# Check bundle size
npm run build

# Analyze in detail (optional)
npm install -g next
npm run build --analyze
```

**Expected Production Metrics:**
- Bundle size: ~80-100KB gzipped
- First load: <1.5s
- Navigation: <300ms
- Lighthouse: 90+

---

## 🐞 Debug Mode

Enable verbose logging:

```bash
# Development with debug output
DEBUG=* npm run dev

# Production build with verbose output
npm run build --verbose
npm start
```

Check console output for detailed compilation and runtime info.

---

**Happy testing!** 🎉

Once you're satisfied with local testing, proceed to [DEPLOYMENT_GODADDY.md](DEPLOYMENT_GODADDY.md) for production deployment.
