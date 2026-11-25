YADAV SANITATION — image assets
================================

Drop the client's logo files in THIS folder (public/images) using these exact
file names and they will be picked up automatically — no code changes needed:

  logo.png        -> main logo (used in the navbar, on white background)
  logo.svg        -> optional vector version, preferred if both exist
  logo-light.png  -> light/white version for the dark footer background
  favicon.png     -> optional browser tab icon (32x32 or 64x64)

Recommended sizes
-----------------
  logo.png        height 64-120 px, transparent background, PNG or SVG
  logo-light.png  same dimensions, white/light version of the same mark
  favicon.png     64 x 64 px (square)

Notes
-----
- The site tries the files in order: logo.svg, logo.png, logo.webp, logo.jpg.
  If none exist it falls back to the built-in blue engineering mark, so the
  site never shows a broken image.
- The footer sits on a dark navy background — provide logo-light.png for the
  best result; otherwise the footer uses the built-in mark.
- To change the browser tab icon, replace public/favicon.svg (or add
  favicon.png and update the <link rel="icon"> tags in index.html).
