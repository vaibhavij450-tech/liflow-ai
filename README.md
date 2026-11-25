# LifeFlow AI — Everyday Life Organizer

**Organize your day. Build better habits. Manage your expenses. Live smarter with AI.**

LifeFlow AI is an AI-powered everyday life organizer built using React Native and Expo. It brings essential productivity tools together in one application, helping users manage daily tasks, track habits, record expenses, and organize grocery lists.

With Google Gemini integration, LifeFlow AI can also generate personalized daily planning suggestions based on unfinished tasks, making everyday planning smarter and more efficient.

## ✨ Features

- **Daily Task Management:** Add daily tasks, mark them as completed, and track daily progress.
- **Habit Tracker:** Create personal habits and maintain daily check-ins.
- **Expense Tracker:** Record everyday expenses and monitor total spending.
- **Grocery Manager:** Create shopping lists, mark purchased items, and manage grocery requirements.
- **AI-Powered Day Planner:** Generate personalized daily planning suggestions using Google Gemini.
- **Local Data Storage:** Store tasks, habits, expenses, and grocery items using AsyncStorage.
- **Demo Mode:** Explore the application's core features without configuring an AI API key.

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
| Google Gemini API | AI-powered daily planning |

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
│   ├── package.json
│   └── tsconfig.json
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

## 🎯 Project Objective

The goal of LifeFlow AI is to simplify everyday planning by combining productivity management and artificial intelligence in one accessible application.

Instead of switching between multiple applications to manage tasks, habits, expenses, and shopping lists, users can organize their everyday activities through a single platform.

## 🔮 Future Scope

- **Firebase Authentication:** Secure user registration, login, and profile management.
- **Cloud Synchronization:** Sync tasks, habits, expenses, and grocery lists across multiple devices.
- **Smart Notifications:** Daily reminders for tasks, habits, and important activities.
- **Advanced Expense Analytics:** Visualize weekly and monthly spending patterns through interactive charts.
- **Budget Management:** Set monthly budgets, categorize expenses, and receive spending alerts.
- **AI Productivity Assistant:** Provide personalized recommendations based on user routines, priorities, and productivity patterns.
- **Smart Grocery Suggestions:** Generate grocery lists based on previous purchases and user preferences.
- **Calendar Integration:** Synchronize tasks and daily plans with personal calendars.
- **Personalized Dashboard:** Display productivity insights, habit streaks, financial summaries, and daily progress.
- **Voice-Based Interaction:** Allow users to add tasks, record expenses, and manage activities using voice commands.

## 🔐 Security

- Never commit `.env` files or API keys to GitHub.
- Keep the Gemini API key exclusively in the backend environment.
- Use `.env.example` to document required environment variables.
- Do not upload `node_modules` or generated build files.

## 👩‍💻 Author

**Vaibhavi Jain**



---

⭐ If you find this project useful, consider giving the repository a star!
