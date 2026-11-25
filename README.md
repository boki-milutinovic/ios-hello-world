# Hello World (Expo)

A tiny iPhone/Android app with one button. Tapping it shows a popup that says "Hello World".

## What you need

- Node.js 20 or newer (https://nodejs.org)
- The **Expo Go** app on your iPhone (from the App Store)

## Run it

1. Install the project packages (only needed once):

   ```bash
   npm install
   ```

2. Start the development server:

   ```bash
   npx expo start
   ```

3. A QR code appears in the terminal. On your iPhone, open the **Camera** app, point it at the QR code, and tap the banner that appears. The app opens in Expo Go.

4. Tap **Press me**. The popup "Hello World" appears.

## Try it in the browser (no install)

Open https://snack.expo.dev, delete the default code, and paste the contents of `App.js`. Scan the QR code with Expo Go, or use the phone preview on the left side of the page.

## Project layout

- `App.js` - the screen: one button and the popup.
- `index.js` - the entry point Expo uses to start the app. You can leave it alone.
- `app.json` - app name and settings.
- `assets/` - app icons.
