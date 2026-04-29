# Deploying Oncall Websites NZ to Hostinger Shared Hosting

This project is built with Next.js 14. To deploy it to Hostinger Shared Hosting, follow these steps.

## Recommended: Node.js Application
This supports the "Smokey" background and the **Contact Form API**.

1. **Build the project locally:**
   Run `npm run build` on your computer.
2. **Upload Files:**
   Upload everything to your Hostinger server (using File Manager or FTP) **except** the `node_modules` folder.
3. **Configure Node.js in Hostinger Panel:**
   - Go to **Advanced** -> **Node.js**.
   - **App Root:** The folder where you uploaded the files (e.g., `domains/oncallwebsites.com/public_node`).
   - **Application URL:** Your domain (e.g., `oncallwebsites.com`).
   - **Node.js version:** Select **20.x** (or 18.x).
   - **Startup file:** Enter `server.js` (I have provided this in the root).
4. **Finalize Setup:**
   - Click **Edit** in the Node.js section.
   - Click **Run npm install**.
   - Click **Restart**.

## Fixing "403 Forbidden" Error
If you see a 403 error, it usually means the web server is looking for a PHP/HTML file instead of your Node app.
1. **Clear existing files:** Ensure there are no `index.php` or `default.php` files in your App Root that might conflict.
2. **Check .htaccess:** Ensure there isn't an `index.html` or `.htaccess` file blocking access.
3. **Startup File:** Double-check that the "Startup file" in Hostinger is exactly `server.js`.
4. **App Root:** If you uploaded files inside `public_html`, make sure the App Root is set to `public_html`.

## Alternative: Static Export
If you don't need the Contact API to work via Node.js, you can export to plain HTML:
1. Open `next.config.mjs` and add `output: 'export',` inside `nextConfig`.
2. Run `npm run build`.
3. Upload the contents of the new `out` folder directly into your `public_html`.
