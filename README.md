# LifeFlow AI — Everyday Life Organizer

**Organize your day. Build better habits. Manage your expenses. Live smarter with AI.**

LifeFlow AI is a React Native and Expo-based everyday life organizer designed to bring essential productivity tools together in one application. It helps users manage daily tasks, track habits, record expenses, and organize grocery lists, with optional AI-powered daily planning using Google Gemini.

## ✨ Features

- **Daily Task Management:** Add tasks, mark them complete, and track daily progress.
- **Habit Tracker:** Create personal habits and maintain daily check-ins.
- **Expense Tracker:** Record everyday expenses and monitor total spending.
- **Grocery Manager:** Create shopping lists and track purchased items.
- **AI Day Planner:** Generate personalized daily planning suggestions using Google Gemini.
- **Local Data Storage:** Save tasks, habits, expenses, and grocery items using AsyncStorage.
- **Demo Mode:** Explore the application without configuring an AI API key.

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| React Native | Mobile application development |
| Expo | Cross-platform development |
| TypeScript | Type-safe development |
| Expo Router | Application navigation |
| AsyncStorage | Local data persistence |
| Node.js | Backend runtime |
| Express.js | REST API |
| Google Gemini API | AI-powered planning |

## 📁 Project Structure

```text
liflow-ai/
│
├── mobile/
│   ├── app/
│   │   ├── (tabs)/
│   │   │   ├── index.tsx
│   │   │   ├── habits.tsx
│   │   │   ├── expenses.tsx
│   │   │   ├── groceries.tsx
│   │   │   └── _layout.tsx
│   │   ├── _layout.tsx
│   │
│   ├── components/
│   └── package.json
│
├── server/
│   ├── index.js
│   ├── package.json
│   └── .env.example
│
├── .gitignore
├── README.md
└── CONTRIBUTING.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js 20 or later
- npm
- Visual Studio Code
- Expo Go or an Android/iOS emulator

### 1. Clone the repository

```bash
git clone https://github.com/vaibhavij450-tech/liflow-ai.git
```

### 2. Navigate to the project

```bash
cd liflow-ai
```

### 3. Install mobile dependencies

```bash
cd mobile
npm install
```

### 4. Start the application

```bash
npx expo start
```

Scan the QR code using Expo Go or press `w` to launch the web version.

## 🤖 AI Backend Setup

LifeFlow AI uses an optional Node.js and Express backend to connect with Google Gemini.

### 1. Install backend dependencies

Open a second terminal:

```bash
cd server
npm install
```

### 2. Configure environment variables

Create a `.env` file:

```bash
cp .env.example .env
```

For Windows PowerShell:

```powershell
Copy-Item .env.example .env
```

### 3. Add your Gemini API key

Update `server/.env`:

```env
PORT=4000
GEMINI_API_KEY=YOUR_GEMINI_API_KEY
GEMINI_MODEL=gemini-2.5-flash
```

Generate an API key through [Google AI Studio](https://aistudio.google.com/apikey).

### 4. Start the backend

```bash
npm run dev
```

The backend will be available at:

```text
http://localhost:4000
```

### 5. Connect the mobile application

Create `mobile/.env`:

```env
EXPO_PUBLIC_API_URL=http://localhost:4000
```

For a physical mobile device, replace `localhost` with your computer's local network
