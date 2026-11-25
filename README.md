# Hello World (Expo)

A small iPhone/Android app with one button. Tapping it shows a popup that says "Hello World".

You need:
- A computer (this guide is for Windows)
- Node.js: download the LTS version from https://nodejs.org and install it
- The **Expo Go** app on your iPhone (free, from the App Store)

## Part 1: Get the project on your computer

Pick one way:

- **Easy way:** On this GitHub page, click the green **Code** button, then **Download ZIP**. Unzip the file to a folder, for example `C:\Projects\hello-world`.
- **Git way:** Open PowerShell and run:

  ```powershell
  git clone https://github.com/boki-milutinovic/ios-hello-world.git
  ```

## Part 2: Install and start (on your computer)

1. Open **PowerShell** (or Terminal) in the project folder. In File Explorer, open the folder, click the address bar, type `powershell`, and press Enter.
2. Install the project packages. You only do this once:

   ```powershell
   npm install
   ```

3. Start the app:

   ```powershell
   npx expo start
   ```

4. A QR code appears in the terminal. Keep this window open.

## Part 3: Open it on your iPhone

1. Make sure the iPhone and the computer are on the same Wi-Fi.
2. Open the **Camera** app on the iPhone and point it at the QR code.
3. Tap the banner that appears. The app opens in **Expo Go**.
4. Tap **Press me**. The popup "Hello World" appears.

## Try it in the browser (no install)

Open https://snack.expo.dev, delete the default code, and paste the contents of `App.js`. Scan the QR code with Expo Go to see the popup on your phone.

## Project layout

- `App.js`: the screen, with one button and the popup.
- `index.js`: the entry point Expo uses. You can leave it alone.
- `app.json`: app name and settings.
- `assets/`: app icons.
