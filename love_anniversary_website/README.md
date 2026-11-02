# For By, With All My Love ❤️

A romantic anniversary website built with HTML, CSS, and JavaScript.

## Files
- `index.html` — all screens and your personal message
- `style.css` — styling, floating hearts, and animated gallery
- `script.js` — anniversary-date gate, navigation, and 60-photo gallery

## Preview locally
1. Extract the ZIP.
2. Open this folder in VS Code.
3. Open `index.html` with Live Server.

## Customize before sending
### Anniversary password
In `script.js`, edit `acceptedDates`. It currently accepts `November 3`, `Nov 3`, `November 3rd`, `Nov 3rd`, `11/3`, and `11-3`.

This is a playful front-end gate, not secure password protection. Someone who inspects the source can find the date.

### Add your flower
In `index.html`, find `.flower-placeholder` and replace the placeholder content with your flower image, e.g.:

```html
<img src="images/your-flower.jpg" alt="By's favorite flower" class="flower-photo">
```

Then add this to `style.css` if you use that class:

```css
.flower-photo { width: min(100%, 520px); max-height: 450px; object-fit: contain; border-radius: 18px; }
```

### Add 50+ pictures to the moving gallery
The gallery creates 60 photo cards automatically. Create a folder named `images` beside `index.html` and add your photos with these filenames:
- `memory-01.jpg`
- `memory-02.jpg`
- ...
- `memory-60.jpg`

You can use fewer than 60 photos; slots without matching images will remain cute heart placeholders. Use `.png` or `.webp` instead if you also change the `.jpg` paths in `script.js`.

Each photo gently moves. When she clicks one, it opens in a larger view while the gallery continues moving behind it. The **Return to all our pictures** button closes the large view.

### Change your messages
In `index.html`, replace:
- `[Write your flower message here, By. 🌷]`
- `[Write your message about your memories here, By. Tell her which moments mean the most to you. 💌]`
- The letter text inside `.letter-body`, if you'd like to make it more personal.
- `Your love ♥` with your name or nickname.

The letter is currently written in a sweet, romantic tone for your 3-year anniversary.

## Publish it for her phone
Opening `index.html` only works locally on your computer. To share a link, publish the full folder (including the `images` folder) using GitHub Pages or Netlify. Test the published link on your phone before sending it to By.
