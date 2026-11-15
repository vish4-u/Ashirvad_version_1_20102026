# Ashirvaad Nexora Technologies website + admin panel

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

## New in this version
- Golden theme by default. **Admin -> Theme & design**: pick a ready-made theme (Golden Luxe, Ivory & Gold, Royal Blue, Emerald, Rose) or change every colour, heading style and corner style, then Save.
- **Testimonials**: Admin -> Website content -> Testimonials / Reviews -> Add. The section is hidden until you add one.
- **WhatsApp**: Admin -> Website content -> Contact details -> WhatsApp number (country code + number, no + sign). A floating WhatsApp button and a "send your query" box appear on the site once a number is set.
- Visitor counter removed.

## Version 3 additions (all editable in Admin -> Website content / Theme & design)
- **Live offer banner**: moving messages at the very top (pauses on hover, visitors can also press the pause/play button). Admin -> Live offer banner: add messages, set "Show" to Yes, choose speed.
- **Pricing**: Pricing - plans -> Add. Section and menu link appear once you add a plan.
- **FAQ**, **Extra sections** (your own sections with text, image and button; they get a menu link), **Social media links**, **Footer** text/hours and extra links.
- **Text colours**: Theme & design -> Main text, Soft text and Heading colours.

## Documents (PDF / Word / Excel / PowerPoint)
- **One-time step:** Supabase -> SQL Editor -> paste `supabase-update-documents.sql` -> Run. (New installs already get this from `supabase-setup.sql`.)
- Admin -> Videos, Images & Documents: choose a document, add a title, Upload. It appears in the public **Our Work** section under a **Documents** tab (the tab is always visible). Visitors can **View** it online (PDF, Word, Excel, PowerPoint) or **Download** it.
- On each item: **Edit** (title/description), **Replace** (swap in a newer file, same listing) and **Delete**.

## Theme
Default theme is now **LinkedIn Blue** (light grey page, white cards, blue accents). If you saved a different theme before, go to Admin -> Theme & design -> click **LinkedIn Blue** -> Save all changes.

## Enquiry form
Run `supabase-form.sql` once. Admin -> Website content -> Enquiry form: add, edit, remove, reorder fields (text, email, phone, number, date, long text, dropdown, file upload). Submissions: Admin -> Form enquiries (view, mark done, delete, export CSV, open attached files). Attached files are private (10 MB each).
