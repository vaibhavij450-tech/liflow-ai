# LifeFlow AI — Everyday Life Organizer

A practical React Native + Expo app for organizing everyday life in one place.

## Features
- Daily task list with completion tracking
- Habit tracker with daily check-ins
- Expense tracker with category totals
- Grocery list with check-off
- AI day-planning suggestions through an optional Node/Express + Gemini backend
- Local-first storage with AsyncStorage; demo mode works without API keys

## Tech stack
- React Native, Expo Router, TypeScript
- AsyncStorage
- Node.js, Express
- Google Gemini API (optional)

## Requirements
- Node.js 20+
- Expo Go on Android/iOS, or an emulator
- Optional: Gemini API key for AI planning

## Run the mobile app
```bash
cd mobile
npm install
npx expo start
```
Scan the QR code with Expo Go.

## Run the AI backend (optional)
```bash
cd server
npm install
cp .env.example .env
```
Add your Gemini key to `server/.env`:
```env
PORT=4000
GEMINI_API_KEY=your_key_here
GEMINI_MODEL=gemini-2.5-flash
```
Then:
```bash
npm run dev
```

For a physical phone, create `mobile/.env`:
```env
EXPO_PUBLIC_API_URL=http://YOUR_COMPUTER_LAN_IP:4000
```
Use your computer's LAN IP, ensure phone and computer are on the same Wi-Fi, and restart Expo.

## GitHub upload
Create an empty GitHub repository, then run from this project root:
```bash
git init
git add .
git commit -m "Initial commit: LifeFlow AI"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/liflow-ai.git
git push -u origin main
```

## Security
- Never commit `.env` files or API keys.
- The Gemini key belongs only in the backend `.env`, never in the mobile app.
- This starter stores data locally on the device. It does not sync across devices.
