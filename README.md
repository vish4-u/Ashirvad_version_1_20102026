# Ashirvaad website + admin panel

Files: `index.html` (public site), `admin.html` (admin panel at /admin.html), `site.js` (settings + default text), `supabase-setup.sql`.

## One-time setup (about 10 minutes)
1. Create a free project at supabase.com.
2. SQL Editor -> paste `supabase-setup.sql` -> Run.
3. Authentication -> Users -> **Add user** (your email + password, tick auto-confirm). Then Authentication -> Sign In / Providers -> turn **off** "Allow new users to sign up".
4. Project Settings -> API: copy the **Project URL** and the **anon public** key into the top of `site.js`.
5. Upload all files to your GitHub repo (replace the old ones). Open `www.ashirvaad.in/admin.html` and log in.

## Using it
- **Videos & Images**: choose a file, add a title. For videos a thumbnail is picked automatically; use "Use current frame" to choose another, or upload your own. Click Upload & publish - it appears on the site instantly.
- **Website content**: edit any text, add/remove services, team members (with photos) and contact details, then Save.
- Free plan limit: 50 MB per file, 1 GB storage. Compress big videos first.
