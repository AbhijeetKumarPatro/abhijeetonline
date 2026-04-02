# GoDaddy Node.js Deployment Guide

**Project:** abhijeetonline.com  
**Status:** ✅ Production Ready  
**Build Version:** Next.js 16.2.1  
**Environment:** Node.js 18+ (GoDaddy PaaS)

---

## 📋 Pre-Deployment Checklist

### Local Verification (✅ Completed)
- [x] npm install succeeds without errors
- [x] npm run build creates optimized bundle
- [x] npm start runs on port 3000
- [x] All 7 pages prerender as static
- [x] TypeScript compilation succeeds
- [x] Dark theme applied consistently
- [x] Sitemap.xml generated
- [x] robots.txt configured
- [x] All dependencies declared in package.json
- [x] .env.example includes all variables

### Pre-Upload Actions

#### Step 1: Create GoDaddy Node.js App (If Not Exists)
1. Log into GoDaddy Hosting Control Panel
2. Navigate to **Hosting** → **Node.js**
3. Click **Create Application**
4. Choose:
   - **Runtime:** Node.js 18.x or 20.x (latest available)
   - **Region:** Closest to your users
5. Wait for app creation (2-5 minutes)

#### Step 2: Prepare ZIP File for Upload

```bash
# From project root directory:

# 1. Build the project
npm run build

# 2. Remove node_modules (critical for ZIP size)
rm -rf node_modules

# 3. Create ZIP file (exclude system files)
zip -r abhijeetonline-production.zip \
  --exclude "*.git*" \
  --exclude ".next/cache/*" \
  --exclude ".env.local" \
  --exclude "node_modules/*" \
  .

# Expected ZIP size: 15-20MB
```

**On Windows (using built-in compression):**
1. Select all project files (Ctrl+A)
2. Right-click → Send to → Compressed (zipped) folder
3. Name it: `abhijeetonline-production.zip`

**On Windows (using 7-Zip):**
```powershell
# Install 7-Zip or use Windows Settings Compression
# Or: 7z a abhijeetonline-production.zip . -x "node_modules" ".git" ".env.local"
```

#### Step 3: Upload ZIP to GoDaddy

1. In GoDaddy control panel, go to **Hosting** → **Node.js** → Your App
2. Click **Upload Application**
3. Select `abhijeetonline-production.zip`
4. Click **Upload**
5. Wait for extraction (shows "Uploading..." → "Uploaded")
6. GoDaddy automatically runs:
   ```
   npm install
   npm run build (if defined)
   npm start
   ```

#### Step 4: Configure Environment Variables

Once uploaded, GoDaddy dashboard will show your app. Click **Environment Variables**:

| Variable Name | Value | Required |
|---|---|---|
| `NEXT_PUBLIC_LETSLEARNBANKING_URL` | `https://letslearnbanking.com` | ✅ Yes |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | `+911234567890` (your number) | ✅ Yes |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | `G-XXXXXXXXXX` (from GA dashboard) | ⚠️ Optional |

**Instructions:**
1. Click **Environment Variables** button
2. Click **Add Variable**
3. Enter key and value
4. Click **Save**
5. Repeat for each variable
6. **IMPORTANT:** Restart application after adding variables

#### Step 5: Start Application

1. Click **Start Application** button in GoDaddy dashboard
2. Monitor status:
   - 🟡 Starting... (1-2 minutes)
   - 🟢 Running (success!)
3. GoDaddy provides temporary URL: `https://app-XXXXX.cloudapp.net`
4. Test in browser - should load homepage

---

## 🌐 Domain Configuration

### Option A: GoDaddy Domains (Recommended)

If your domain is registered with GoDaddy:

1. Go to **Domains** → **your-domain.com** → **DNS**
2. Locate your Node.js app hostname (from GoDaddy Node.js dashboard)
3. Add CNAME record:
   - **Name:** `www` (or `@` for root)
   - **Value:** Your GoDaddy app hostname
4. Wait 5-30 minutes for DNS propagation
5. Visit `https://abhijeetonline.com` in browser

### Option B: External Domain Provider

If domain is elsewhere (Namecheap, Google Domains, etc.):

1. Get your GoDaddy Node.js app IP address
2. Log into your domain registrar
3. Update DNS A record:
   - **Name:** `@` (root domain)
   - **Value:** GoDaddy app IP
4. Create CNAME for www:
   - **Name:** `www`
   - **Value:** `abhijeetonline.com`
5. Or ask GoDaddy support for proper DNS configuration

### Option C: Use GoDaddy Managed Domain

1. Provide abhijeetonline.com to GoDaddy during app creation
2. GoDaddy automatically configures DNS
3. Auto-generates SSL certificate via Let's Encrypt

---

## 🔐 SSL/HTTPS Setup

GoDaddy provides **free SSL certificates**:

1. Go to **Hosting** → **Node.js** → **Security**
2. Click **Generate Free SSL Certificate**
3. Wait 5-10 minutes
4. Certificate auto-applies to your domain
5. HTTPS automatically enforces in Next.js

---

## ✅ Post-Deployment Testing

Once running, verify all functionality:

### 1. Test Homepage
```
https://abhijeetonline.com
```
- [ ] Hero section loads
- [ ] Profile image displays (if added to /public/profile.jpg)
- [ ] LetsLearnBanking banner visible
- [ ] Dark theme colors correct
- [ ] Expertise grid displays

### 2. Test Navigation
```
https://abhijeetonline.com/about
https://abhijeetonline.com/experience
https://abhijeetonline.com/projects
https://abhijeetonline.com/music
https://abhijeetonline.com/travel
https://abhijeetonline.com/contact
```
- [ ] All pages load without 404 errors
- [ ] Navigation links work
- [ ] Dark theme consistent across pages

### 3. Test Contact Form
```
https://abhijeetonline.com/contact
```
- [ ] Form fields load
- [ ] Form submission works
- [ ] WhatsApp CTA button works
- [ ] LinkedIn link redirects correctly

### 4. Test SEO
```
https://abhijeetonline.com/sitemap.xml
https://abhijeetonline.com/robots.txt
```
- [ ] Both files accessible
- [ ] Sitemap lists 7 routes
- [ ] robots.txt allows crawling

### 5. Browser Console
- [ ] No JavaScript errors
- [ ] Google Analytics fires (if GA_ID provided)
- [ ] Responsive design works on mobile

### 6. Website Analyzers
```
https://www.gtmetrix.com
https://web.dev/measure
https://www.webpagetest.org
```
- [ ] Lighthouse score 85+
- [ ] Load time < 2 seconds
- [ ] No critical issues

---

## 🐛 Troubleshooting

### Issue: Application won't start
```
Error: Command failed: npm start
```
**Solution:**
1. Check Environment Variables are set
2. Verify package.json has `"start": "next start"`
3. Check logs in GoDaddy dashboard
4. Ensure Node.js version is 18+

### Issue: "Cannot find module 'next'"
```
Error: Cannot find module '/app/node_modules/next'
```
**Solution:**
1. Ensure node_modules was removed before ZIP
2. GoDaddy should auto-run `npm install` after upload
3. Check if npm install succeeded in logs

### Issue: Environment variables not working
**Solution:**
1. Variables must start with `NEXT_PUBLIC_` to be accessible in browser
2. Restart application after adding variables (important!)
3. Rebuild if using server-side variables
4. Clear browser cache (hard refresh: Ctrl+Shift+R)

### Issue: Images not loading
**Solution:**
1. Ensure `/public/profile.jpg` exists in ZIP
2. Use full URLs for external images
3. Next.js Image component requires dimensions (already configured)

### Issue: Domain not resolving
**Solution:**
1. Wait 24 hours for DNS propagation
2. Verify DNS records configured correctly
3. Flush DNS cache:
   - **Mac:** `sudo dscacheutil -flushcache`
   - **Windows:** `ipconfig /flushdns`
   - **Linux:** `sudo systemctl restart nscd`

### Issue: GoDaddy app stuck in "Starting"
**Solution:**
1. Stop application
2. Wait 2 minutes
3. Restart application
4. Check logs for errors
5. Contact GoDaddy support if persists

---

## 📊 Monitoring & Maintenance

### Daily Checks
- [ ] Site loads without errors
- [ ] Response time < 2 seconds
- [ ] No 404 errors in logs

### Weekly Checks
- [ ] Google Analytics tracking fires
- [ ] Contact form submissions work
- [ ] All external links functional

### Monthly Checks
- [ ] Update dependencies: `npm update`
- [ ] Check Lighthouse scores
- [ ] Review error logs
- [ ] Test on mobile devices
- [ ] Verify SSL certificate valid (auto-renews)

### Updating Site Content

To update pages post-deployment:

1. **Local Edits:**
   ```bash
   # Edit files locally
   npm run build
   rm -rf node_modules
   zip -r abhijeetonline-production.zip . --exclude "node_modules/*" ".git*"
   ```

2. **Upload Updated ZIP:**
   - Stop current application
   - Upload new ZIP
   - Start application
   - Verify changes

Alternative: Use **Git integration** if available (auto-deploys on git push)

---

## 🔄 Continuous Deployment (Optional)

If using GitHub:

1. **Connect GitHub to GoDaddy:**
   - GoDaddy → Node.js app → **Git Integration**
   - Authorize GitHub account
   - Select repository

2. **Auto-Deploy on Push:**
   - Each push to `main` branch triggers build
   - GoDaddy auto-downloads, installs, builds, starts
   - No manual ZIP uploads needed

3. **GitHub Workflow (Optional):**
   ```yaml
   # .github/workflows/deploy.yml
   name: Deploy to GoDaddy
   on:
     push:
       branches: [main]
   jobs:
     deploy:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v2
         - name: Deploy
           run: npm run build
   ```

---

## 📞 GoDaddy Support Resources

- **Help Center:** https://www.godaddy.com/help
- **Node.js Hosting Guide:** https://www.godaddy.com/help/managed-nodejs-app-experience
- **Support Chat:** Available 24/7 in GoDaddy account
- **Phone Support:** +1-480-505-8877

---

## ✅ Final Deployment Checklist

- [ ] Local build succeeds (npm run build)
- [ ] ZIP created without node_modules
- [ ] GoDaddy Node.js app created
- [ ] ZIP uploaded to GoDaddy
- [ ] Environment variables configured
- [ ] Application started successfully
- [ ] Domain DNS configured
- [ ] Homepage loads on domain
- [ ] All 7 pages accessible
- [ ] Contact form working
- [ ] Sitemap.xml accessible
- [ ] robots.txt configured
- [ ] HTTPS working
- [ ] Lighthouse score checked
- [ ] GitHub repo uploaded (optional)

---

## 🎉 Next Steps

1. **Add Profile Photo**
   ```bash
   # Add image to public/profile.jpg
   # Recommended: 400x400px, optimized JPG
   ```

2. **Update WhatsApp Number**
   - Edit NEXT_PUBLIC_WHATSAPP_NUMBER environment variable
   - Format: +country-code-number

3. **Set Up Google Analytics**
   - Create GA4 property at https://analytics.google.com
   - Copy Measurement ID (format: G-XXXXXXXXXX)
   - Add to environment variables
   - Wait 24 hours for data collection

4. **Monitor & Optimize**
   - Check Lighthouse scores monthly
   - Monitor page load times
   - Track user engagement in Analytics
   - Update content regularly

---

## 📝 Important Notes

- **Keep .env.example updated** with variable names (values are secrets)
- **Never commit .env.local** to version control
- **Always remove node_modules** before creating ZIP
- **Restart app after env variable changes** for changes to take effect
- **SSL certificate auto-renews** - no manual action needed
- **DNS propagation takes time** - don't refresh repeatedly

---

## Support & Documentation

- **Next.js Docs:** https://nextjs.org/docs
- **Node.js Best Practices:** https://nodejs.org/en/docs/guides/
- **GoDaddy Node.js Docs:** https://www.godaddy.com/help/managed-nodejs-app-experience

---

**You are ready to deploy!** 🚀

Good luck with your launch. If you encounter issues:
1. Check this guide first
2. Review GoDaddy logs
3. Contact GoDaddy support
4. Reference Next.js documentation
