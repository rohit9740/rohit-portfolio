# Rohit's Portfolio — Setup

## 1. Add your photo
Copy your profile photo to:
```
public/rohit.jpg
```

## 2. Run locally
```bash
cd C:\Users\Rahul\rohit-portfolio
npm run dev
```
Open http://localhost:3000

## 3. Build for production
```bash
npm run build
npm start
```

## 4. Deploy (recommended: Vercel)
```bash
npm install -g vercel
vercel
```
Follow the prompts — it auto-detects Next.js.

## Customizing content
All content is hardcoded in the components:
- `components/Hero.tsx` — typewriter roles, stats
- `components/About.tsx` — bio, fun facts, highlights
- `components/Experience.tsx` — jobs, education
- `components/Skills.tsx` — skill levels (0-100)
- `components/Testimonials.tsx` — quotes, certifications
- `components/Contact.tsx` — contact links

## Color palette
| Name | Hex |
|------|-----|
| Neon Green (primary) | `#00FF87` |
| Neon Pink | `#FF006E` |
| Purple | `#8338EC` |
| Yellow | `#FFBE0B` |
| Blue | `#3A86FF` |
| Orange | `#FB5607` |

Change colors in `tailwind.config.ts` and `app/globals.css`.
