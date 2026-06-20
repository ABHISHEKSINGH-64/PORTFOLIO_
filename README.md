# Abhishek Singh | AI & Data Science Portfolio

A premium, highly interactive developer portfolio website designed for Abhishek Singh, showcasing skills, education, and full-stack web and artificial intelligence output. 

Built with **React**, **Vite**, **Tailwind CSS**, and **Framer Motion** utilizing modern design aesthetics (glassmorphism, smooth micro-interactions, dark/light theme switching, and interactive mouse-following spotlights).

---

## 🚀 Tech Stack

- **Frontend Core**: React 18+ (Vite Bundler)
- **Styling & Theme**: Tailwind CSS v3, Vanilla CSS, CSS Variables
- **Animations**: Framer Motion, Tailwind Keyframe Animations
- **Icons**: React Icons (`react-icons`), Lucide React (`lucide-react`)
- **State Management**: React Context API (Theme Mode Synchronization)

---

## 📁 Workspace Folder Structure

```
Resume/
├── public/
│   ├── favicon.svg       # Favicon asset
│   └── resume.pdf        # Downloadable Resume placeholder
├── src/
│   ├── assets/           # Media assets and visual elements
│   ├── components/       # Reusable layout UI components
│   │   ├── Badge.jsx     # Tech tags & badges
│   │   ├── Button.jsx    # Animated action buttons
│   │   ├── Card.jsx      # Glassmorphic spotlight cards
│   │   └── Navbar.jsx    # Glass floating navigation bar
│   ├── context/
│   │   └── ThemeContext.jsx # Light/Dark theme configuration
│   ├── sections/         # Portfolio page sections
│   │   ├── Hero.jsx      # Home section with typing text & graphics
│   │   ├── About.jsx     # Credentials & digital ID card
│   │   ├── Skills.jsx    # Categorized skills search index
│   │   ├── Projects.jsx  # Blood Bank & Mana Seva showcase
│   │   ├── Education.jsx # Vertical timeline records
│   │   ├── GithubStats.jsx # Git Commit Activity Grid
│   │   ├── LearningJourney.jsx # 2025-2029 curriculum roadmap
│   │   ├── Contact.jsx   # Client-side validated email form
│   │   └── Footer.jsx    # Trademark branding & social anchors
│   ├── App.css           # App overrides placeholder
│   ├── App.jsx           # Main orchestrator linking all pages
│   ├── index.css         # Tailwind inputs and premium mesh definitions
│   └── main.jsx          # App renderer hook
├── index.html            # Primary entry HTML with Google Fonts
├── package.json          # Node dependencies catalog
├── postcss.config.js     # PostCSS styling parser config
├── tailwind.config.js    # Customized Tailwind variables and themes
└── vite.config.js        # Vite bundler parameters
```

---

## 💻 Local Setup & Development

### 1. Prerequisites
Ensure you have [Node.js](https://nodejs.org/) installed (v18.0.0 or higher is recommended).

### 2. Installation
Clone or navigate to the repository directory and run:
```bash
npm install
```

### 3. Run Development Server
Start the local server with hot-reload enabled:
```bash
npm run dev
```
Open your browser and navigate to: [http://localhost:5173](http://localhost:5173)

### 4. Production Build
Compile the application into optimized, static files:
```bash
npm run build
```
Verify the output locally using:
```bash
npm run preview
```

---

## ⚡ Deployment Instructions for Vercel

The portfolio is fully optimized for static deployment on **Vercel** with zero-configuration needed.

### Option A: Deployment via Vercel GitHub Integration (Recommended)
1. Commit and push the code workspace to your personal GitHub repository (e.g., `https://github.com/ABHISHEKSINGH-64/portfolio`).
2. Log in to [Vercel](https://vercel.com).
3. Click **Add New** > **Project**.
4. Import your GitHub repository.
5. In the configuration dashboard, verify that Vercel auto-detects:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
6. Click **Deploy**. Vercel will build and launch your site, providing a live URL.

### Option B: Deployment via Vercel CLI
If you prefer deploying directly from the command line:
1. Install the Vercel CLI globally:
   ```bash
   npm install -g vercel
   ```
2. Navigate to the root directory (`Resume/`) and run:
   ```bash
   vercel
   ```
3. Follow the CLI login prompts and project setup guides:
   - Link to existing project? **No**
   - Project Name: **portfolio**
   - Directory: `./`
   - Modify default settings? **No**
4. For production launch, deploy using:
    ```bash
    vercel --prod
    ```

---

## ⚙️ Environment Variables Setup

To save contact submissions to MongoDB and receive email notifications on Gmail, configure the following variables inside your Vercel Project Dashboard (under Settings > Environment Variables) or in your local `.env` file:

| Variable | Description | Value / Template |
| --- | --- | --- |
| `MONGODB_URI` | MongoDB Connection String | `mongodb+srv://abhisherajput64_db_user:xQpeqgIsu7hkp0Ro@portfolio.6umpyi4.mongodb.net/portfolio?retryWrites=true&w=majority` |
| `GMAIL_USER` | Your Gmail address | `abhishek.singh1570@gmail.com` |
| `GMAIL_PASS` | Gmail App Password | *Generate an App Password from Google Accounts settings* |
| `NOTIFICATION_EMAIL` | Inbox to receive messages | `abhishek.singh1570@gmail.com` (Usually same as `GMAIL_USER`) |

> [!NOTE]
> To generate a **Gmail App Password**:
> 1. Go to your [Google Account settings](https://myaccount.google.com/).
> 2. Enable **2-Step Verification** under Security.
> 3. Search for **App Passwords** and generate a new password for "Mail".
> 4. Copy the generated 16-character code (without spaces) and paste it as `GMAIL_PASS`.

---

## 🎨 Customizing Details
- **Profile Details**: Adjust details inside [About.jsx](file:///c:/Users/hazar/OneDrive/Desktop/Resume/src/sections/About.jsx).
- **Projects**: To add more projects, update the array inside [Projects.jsx](file:///c:/Users/hazar/OneDrive/Desktop/Resume/src/sections/Projects.jsx).
- **Resume File**: Simply replace the placeholder file located at `/public/resume.pdf` with your actual PDF resume.
