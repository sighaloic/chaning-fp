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

### Mises à Jour (MAJ)

L'un des plus grands avantages de Vercel est le **Déploiement Continu**. Voici comment mettre à jour votre site :

1. **Modifiez votre code** localement dans votre éditeur.
2. **Envoyez les changements vers GitHub** :
   ```bash
   git add .
   git commit -m "Description de vos modifications"
   git push origin main
   ```
3. **Automatique** : Dès que vous faites le `push`, Vercel détecte le changement, lance un nouveau "Build" et met à jour votre site en ligne en quelques secondes.

> [!TIP]
> Vous pouvez suivre l'avancement du déploiement en temps réel sur votre tableau de bord Vercel dans l'onglet **"Deployments"**.
