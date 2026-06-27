# Angelo (Enze) Ge — Personal Portfolio

A narrative-driven portfolio website for US college applications in **Food Science** and **Nutrition Science**. Built with pure HTML, CSS, and JavaScript — no frameworks, instant Vercel deployment, easy to customize.

---

## File Structure

```
├── index.html                          Main page (all content)
├── style.css                           Styles + Light/Dark mode variables
├── script.js                           Theme toggle, tabs, animations
├── assets/
│   ├── images/
│   │   ├── PersonalPhoto.jpeg          Your headshot (Hero section)
│   │   ├── ANOVA.png                   Two-Way ANOVA chart
│   │   ├── OLS.png                     OLS regression chart
│   │   ├── blue-food.jpg               Blue Food activity photo (optional)
│   │   └── vegetarian-society.jpg      Vegetarian Society photo (optional)
│   └── documents/
│       ├── 龙井茶叶科学实验 -Angelo.docx   Full research paper
│       └── 20260408.pdf                    Research materials PDF
└── README.md                           This file
```

---

## Local Preview

```bash
cd "/Users/angelo/Desktop/Angelo Portfolio"
python3 -m http.server 8080
```

Open [http://localhost:8080](http://localhost:8080)

---

## How to Customize

### 1. Edit Text Content

Open `index.html` and search for these sections:

| Section | What to edit |
|---------|-------------|
| **Hero** | Tagline, intro paragraph (lines under `.hero-title` and `.hero-desc`) |
| **About** | Personal story in `.about-story`, value cards in `.values-grid` |
| **Research** | Project title, findings, methodology — all inside `#research` |
| **Impact → Blue Food** | Replace `[Your role...]`, `[Start year...]`, `[Describe...]`, `[Quantify...]` |
| **Impact → Vegetarian Studies Society** | Same placeholder pattern |
| **Blog** | Edit titles, dates, snippets inside `.blog-card` elements |
| **Footer** | Email, GitHub, LinkedIn links |

### 2. Replace Images

Drop files into `assets/images/` with these exact names:

| File | Used in |
|------|---------|
| `PersonalPhoto.jpeg` | Hero section portrait |
| `ANOVA.png` | Research → ANOVA chart |
| `OLS.png` | Research → Regression chart |
| `blue-food.jpg` | Impact → Blue Food card |
| `vegetarian-society.jpg` | Impact → Vegetarian Society card |

If your photo has a different filename, update the `src` in `index.html`:

```html
<img src="assets/images/YOUR_FILENAME.jpg" ...>
```

### 3. Add Research Documents

Place your files in `assets/documents/`:

```
assets/documents/龙井茶叶科学实验 -Angelo.docx
assets/documents/20260408.pdf
```

The download buttons in the Research section link to these files automatically.

### 4. Add New Blog Posts

Copy an existing `.blog-card` block in `index.html` and update:

```html
<article class="blog-card">
  <time datetime="2026-04-01">April 1, 2026</time>
  <h3>Your Article Title</h3>
  <p>Your article snippet (2-3 sentences)...</p>
  <a href="#" class="blog-read-more">Read More <span aria-hidden="true">→</span></a>
</article>
```

To link to a full article page later, change `href="#"` to your article URL.

### 5. Update Contact Info

In the footer section of `index.html`:

```html
<a href="mailto:your.real.email@school.edu">your.real.email@school.edu</a>
<a href="https://github.com/yourusername">GitHub</a>
<a href="https://linkedin.com/in/yourprofile">LinkedIn</a>
```

### 6. Dark Mode

The sun/moon toggle in the header switches between light and dark themes. The user's preference is saved in `localStorage` and persists across visits.

To change colors, edit the CSS variables at the top of `style.css`:

```css
/* Light mode */
[data-theme="light"] {
  --bg: #F4F4F2;
  --accent: #2C5E43;
  ...
}

/* Dark mode */
[data-theme="dark"] {
  --bg: #121614;
  --accent: #4E9F6D;
  ...
}
```

---

## Deploy to GitHub

```bash
cd "/Users/angelo/Desktop/Angelo Portfolio"

git init
git add .
git commit -m "Initial portfolio website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/angelo-portfolio.git
git push -u origin main
```

Replace `YOUR_USERNAME` with your GitHub username.

---

## Deploy to Vercel (Instant & Free)

### Option A: Import from GitHub (Recommended)

1. Push code to GitHub (see above)
2. Go to [vercel.com](https://vercel.com) → Sign in with GitHub
3. Click **Add New → Project**
4. Select your repository
5. Vercel auto-detects static HTML — **no build settings needed**
6. Click **Deploy**
7. Live at `https://your-project.vercel.app`

### Option B: Vercel CLI

```bash
npm i -g vercel
cd "/Users/angelo/Desktop/Angelo Portfolio"
vercel
```

### Custom Domain

Vercel Dashboard → **Settings → Domains** → Add your domain.

---

## Updating After Deployment

```bash
git add .
git commit -m "Update portfolio content"
git push
```

Vercel redeploys automatically on every push to `main`.

---

## Features

- **Light / Dark mode** with animated toggle and localStorage persistence
- **Interactive research data** — tabbed views (Overview, Sensory, Polyphenols, Card View)
- **Scroll animations** — fade-in on section reveal
- **Fully responsive** — desktop, tablet, and mobile
- **Zero dependencies** — no npm, no build step, no framework

Good luck with your applications, Angelo! 🍵
