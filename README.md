# Azim Tax & Accounting Website

This is a simple, professional, and mobile-responsive static website for Azim Tax & Accounting, a bookkeeping and tax preparation firm in Durham Region, Ontario. The website is built with pure HTML, CSS, and JavaScript, with no frameworks or build steps.

## Features

- **Single-Page Design:** Easy to navigate with smooth scrolling.
- **Responsive:** Looks great on all devices, from mobile phones to desktop computers.
- **SEO Optimized:** Includes meta tags, schema.org markup, and a sitemap for better search engine ranking.
- **Blog Section:** Features informative articles to attract and engage potential clients.
- **Lightweight and Fast:** Built without heavy frameworks for quick loading times.

## How to Deploy to GitHub Pages

Deploying this website to GitHub Pages is a straightforward process.

### Step 1: Create a new GitHub Repository

1.  Go to [GitHub](https://github.com) and create a new repository.
2.  Name the repository `<your-username>.github.io` if you want it to be your main GitHub Pages site, or give it any other name (e.g., `azim-tax-website`).

### Step 2: Push the code to the repository

1.  Initialize a git repository in the `azim-tax-website` directory:
    ```bash
    git init
    ```
2.  Add all the files to the repository:
    ```bash
    git add .
    ```
3.  Commit the files:
    ```bash
    git commit -m "Initial commit"
    ```
4.  Add the GitHub repository as a remote:
    ```bash
    git remote add origin https://github.com/<your-username>/<your-repo-name>.git
    ```
5.  Push the code to the `main` branch:
    ```bash
    git push -u origin main
    ```

### Step 3: Enable GitHub Pages

1.  In your GitHub repository, go to the **Settings** tab.
2.  In the left sidebar, click on **Pages**.
3.  Under the "Build and deployment" section, for the **Source**, select **Deploy from a branch**.
4.  For the **Branch**, select `main` and keep the folder as `/ (root)`.
5.  Click **Save**.

Your website will be live in a few minutes at `https://<your-username>.github.io/<your-repo-name>/`.

**Important:** You will need to update the `sitemap.xml` and `robots.txt` files, as well as the Open Graph URL in `index.html`, to use your actual domain name instead of the placeholder `https://your-domain.com`.
