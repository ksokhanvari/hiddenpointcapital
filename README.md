# Hidden Point Capital — static site

A plain HTML/CSS rebuild of hiddenpointcapital.com, ready to host anywhere
(Netlify, Cloudflare Pages, GitHub Pages, Amazon S3, or any shared host).
No Wix, no build step, no database.

## Files
```
index.html        Home
about.html        About
approach.html     Approach
clients.html      Clients
contact.html      Contact
css/style.css     All styling
images/           Site images (download first — see below)
download-images.sh  One-time image downloader
```

## Step 1 — Get the images
The images still live on Wix's servers. Pull them into `images/` once:

```bash
bash download-images.sh
```
(On Windows, open download-images.sh and paste each URL into a browser, then
save into the `images/` folder using the filenames shown in the script.)

## Step 2 — Make the contact form work
Both the Home and Contact pages use a free [Formspree](https://formspree.io)
form. Create a free account, make a form, and replace `YOUR_FORM_ID` in
`index.html` and `contact.html` with the ID Formspree gives you. Submissions
will be emailed to you. (Prefer no third party? Replace the form's `action`
with `mailto:you@example.com` and `method="GET"`.)

## Step 3 — Host it
Upload the whole folder. Cheap/free options:
- **Cloudflare Pages** or **Netlify** — free, drag-and-drop the folder.
- **GitHub Pages** — free, push the folder to a repo.
- Any shared host — upload via FTP to the web root.

Point your domain's DNS at the new host and you're migrated.

## Notes
- Text content matches the live site as of June 2026.
- The Clients page had no content on the original, so it's a simple placeholder.
- The original listed two addresses (Campbell and Cupertino); the Campbell
  address is used throughout. Edit the footers/contact page if you prefer the other.
