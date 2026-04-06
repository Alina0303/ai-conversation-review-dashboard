# AI Conversation Review Dashboard

A modern dashboard for reviewing AI-generated conversations, built with React, Vite, Tailwind CSS, and TypeScript.

## 🚀 Project Overview

This app helps reviewers inspect dialogue threads, add reviewer notes, and update approval status in a polished dashboard experience. It includes a responsive sidebar, chat details panel, review actions, and a weather widget powered by Axios.

## ✨ Key Features

- Responsive layout using Tailwind CSS and DaisyUI
- Dark-themed UI with a clean dashboard design
- Conversation list with selectable dialog review panels
- Review status controls: Pending Review, Approved, Needs Fix
- Reviewer notes with validation and note history
- Weather widget with loading and error states
- State management centralized in the main App component
- Written in TypeScript for better type safety and maintainability

## 🧩 Technology Stack

- React 19
- Vite
- TypeScript
- Tailwind CSS
- DaisyUI
- Axios
- nanoid
- react-icons

## 📁 Project Structure

- `src/App.tsx` — app shell and global state
- `src/components/SidebarList.tsx` — conversation sidebar
- `src/components/ChatWindow.tsx` — selected chat display
- `src/components/ReviewerNotes.tsx` — add and display notes
- `src/components/Actions.tsx` — review actions and status updates
- `src/data/mockData.ts` — sample conversation data

## ⚙️ Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## 📌 Live Demo

[ai-conversation-review-dashboard](https://ai-conversation-review-dashboard.netlify.app/)

## 💡 Notes

This repository is ideal for showcasing a small review dashboard prototype, exploring Tailwind + DaisyUI UI patterns, and practicing React state flow with TypeScript.
