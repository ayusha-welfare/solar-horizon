# Solar Horizon: JEE Prep Companion 🚀

> **"Your External Brain for JEE Success"**

Solar Horizon is a gamified, psychology-driven study companion designed specifically for JEE aspirants. It helps you track your syllabus, manage mistakes, memorize formulas, and stay motivated through daily streaks and XP.

## ✨ Features

### 1. 🧠 Formula Vault
A dedicated, distraction-free **Formula Sheet** with a "flashcard" memory design.
- **Subject Themes**: Distinct visual identities for Physics (Blue), Chemistry (Teal), and Maths (Red) to aid visual memory.
- **Formula Only**: Strict focus on equations and key facts. No fluff.
- **Smart Inputs**: Add your own formulas with dedicated fields for the Equation and Mnemonics.
- **Backup & Restore**: Never lose your data by exporting your Vault to a JSON file.

### 2. 📉 Mistake Log
Turn failures into leverage.
- Log every question you get wrong.
- Tag by "Silly Mistake", "Conceptual Error", or "Time Pressure".
- Review regularly to close gaps.

### 3. 🗺️ Syllabus Tracker
Visual progress bars for the vast JEE syllabus.
- Track completion status (Pending, Done, Revised) for every chapter.
- See your overall readiness level at a glance.

### 4. 🎮 Gamified Dashboard
Stay consistent with daily motivation.
- **XP & Levels**: Earn XP for completing daily tasks.
- **Streaks**: Maintain your `Day Streak` by showing up every day.
- **Daily 3**: Set 3 critical goals each day and crush them.

## 🛠️ Tech Stack
- **Frontend**: React + Vite
- **Styling**: Tailwind CSS + `clsx`
- **Icons**: Lucide React
- **Persistence**: LocalStorage (Data lives in your browser!)

## 🚀 Getting Started

### Prerequisites
- Node.js installed on your machine.

### Installation

1.  **Clone the repo**
    ```bash
    git clone https://github.com/your-username/solar-horizon.git
    cd solar-horizon
    ```

2.  **Install Dependencies**
    ```bash
    npm install
    ```

3.  **Run Locally**
    ```bash
    npm run dev
    ```

## 🌐 Deployment (GitHub Pages)

This project is optimized for static deployment.

1.  Update `vite.config.js` with your repo name:
    ```js
    base: '/solar-horizon/', // If repo is named 'solar-horizon'
    ```

2.  Deploy via script:
    ```bash
    npm run deploy
    ```

## 🔒 Privacy
**100% Client-Side.** Your data is stored in your browser's `LocalStorage`. We do not have a backend, so your data never leaves your device unless you manually **Backup** it to a JSON file.

---
*Built with ❤️ for Engineers.*
