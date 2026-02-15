---
description: Deploying the Next.js application to Vercel
---

To deploy your CHANING FP website to Vercel, follow these steps:

### Option 1: Using the Vercel Dashboard (Recommended)

1. **Push your code to GitHub/GitLab/Bitbucket**:
   - Create a new repository on your preferred platform.
   - Run `git add .`, `git commit -m "Initial commit"`, and push your code.

2. **Connect to Vercel**:
   - Go to [vercel.com](https://vercel.com) and log in.
   - Click **"Add New"** > **"Project"**.
   - Import your repository.

3. **Configure & Deploy**:
   - Vercel will automatically detect **Next.js**.
   - Click **"Deploy"**. Your site will be live in a few minutes!

### Option 2: Using Vercel CLI (Command Line)

1. **Install Vercel CLI**:
   ```bash
   npm i -g vercel
   ```

2. **Log in**:
   ```bash
   vercel login
   ```

3. **Deploy**:
   - From the project root (`/Users/mryyu/.gemini/antigravity/scratch/chaning-fp`), run:
   ```bash
   vercel
   ```
   - Follow the prompts (Select 'Yes' to setup, use default settings).

4. **Production Deploy**:
   ```bash
   vercel --prod
   ```

### Important Notes
- **Environment Variables**: If you add a backend or contact form service later, remember to add the environment variables in the Vercel Project Settings.
- **Custom Domain**: You can add your own domain (e.g., `chaning-fp.cm`) in the "Domains" tab of your Vercel project.
