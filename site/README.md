# Revathi Homemade Pickles – Website

A static, responsive e-commerce website. No build step and no installs: open `index.html` in a browser, or upload the whole folder to any web host.

## Folder structure
```
index.html      Page structure (nav, hero, recipe banner, shop, about, contact, footer)
styles.css      All styling (colours are CSS variables at the top of the file)
app.js          Products, cart, checkout, WhatsApp ordering, recipe slideshow
images/
  logo-*.jpg    Logos
  products/     One photo per product (file name starts with the product number)
  recipe/       Photos for the "Our Special Recipe" slideshow (step-1 ... step-7)
```

## Common edits (all in app.js)
- **Phone numbers / WhatsApp:** change `NUM` near the top (format: country code + number, e.g. `919121763182`). Also update the `tel:` and `wa.me` links in `index.html`.
- **Products and prices:** edit the list at the top (`add(name, category, {size: price}, description)` and the arrays above it).
- **Product photo:** put the image in `images/products/` and add it to the `PH` object, for example `PH = {16: "images/products/16-chicken-boneless.jpg", ...}` where the number is the product's position in the list (starting at 0).
- **Main ingredient lines:** edit the `ING` list (same order as the products).
- **Recipe slideshow:** edit the `R` list (step title, caption, image path).

## Going live
Upload the folder to Netlify, Vercel, GitHub Pages or any hosting. Then connect your own domain (for example revathipickles.com) in the host's settings.

## What this does not include yet
- No backend or database: orders and enquiries are sent as WhatsApp messages and are not stored.
- No admin dashboard: prices and products are changed by editing `app.js`.
- Privacy Policy and Terms pages are not written yet.
- Some product photos may belong to other websites. Replace them with your own photos before launch.

## Added later
- Veg / non-veg dot on each product card; add product numbers to `BEST` in app.js to show a "Bestseller" badge.
- `POS` in app.js adjusts a product photo's position, for example `POS={24:"center 20%"}`.
- Sections added in index.html: "What Makes Our Pickles Special", "One Pickle, Many Delicious Ways" (timeline), shop address in Contact and footer.

## UPI payment
In app.js, set `UPI.id` to your UPI ID (for example "yourname@okbank"). Checkout then shows a "Pay with UPI app" button (mobile) and a QR code (computer), and the customer sends the order and payment details to you on WhatsApp. Payments are not verified automatically: check each one in your UPI app. With `UPI.id` empty, checkout works as before (WhatsApp only).
