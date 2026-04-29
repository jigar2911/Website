# Deploying Oncall Websites NZ to Hostinger Shared Hosting

This project is built with Next.js 14. To deploy it to Hostinger Shared Hosting, you have two main options:

## Option 1: Node.js Application (Recommended)
This option supports all features, including the **Contact Form API**.

1. **Build the project:**
   Run `npm run build` on your local machine.
2. **Upload Files:**
   Upload all project files to your Hostinger server (e.g., via File Manager or FTP) **except** the `node_modules` folder.
3. **Configure Node.js in Hostinger:**
   - Go to your Hostinger Panel -> **Advanced** -> **Node.js**.
   - Set the **App Root** to the folder where you uploaded the files.
   - Set the **Application URL** to your domain.
   - Select the **Node.js version** (use 18 or 20).
   - Set the **Startup file** to `node_modules/next/dist/bin/next`.
   - Click **Run npm install** in the Hostinger panel.
   - Click **Restart Application**.

## Option 2: Static Export (Simple)
This option converts the site into plain HTML/CSS/JS. Note: The Contact Form API will **not** work in this mode unless you use a 3rd party service (like Formspree).

1. **Enable Export Mode:**
   Edit `next.config.mjs` and add `output: 'export',` inside the `nextConfig` object.
2. **Build the project:**
   Run `npm run build`. This will create an `out` folder.
3. **Upload:**
   Upload the **contents** of the `out` folder directly into your `public_html` directory via Hostinger File Manager.

## Stealth Note
The code is already optimized for stealth. Avoid using the default "Next.js" naming in your folder paths on the server to maintain the "redeveloped" status.
