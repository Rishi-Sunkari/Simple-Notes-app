# 📝 Notes App

A simple full-stack notes app with real-time search and text highlighting.

## Features
- ✅ Add notes (title + content)
- ✅ View all notes
- ✅ Search notes (matches title & content, updates as you type)
- ✅ **Bonus**: Matched text is highlighted in yellow
- ✅ Works standalone (frontend-only mode if backend is offline)

---

## Project Structure

```
notes-app/
├── backend/
│   ├── server.js        # Express API
│   └── package.json
├── frontend/
│   └── index.html       # UI (pure HTML/CSS/JS)
└── README.md
```

---

## API Endpoints

| Method | Endpoint         | Description             |
|--------|------------------|-------------------------|
| POST   | `/notes`         | Add a new note          |
| GET    | `/notes`         | Get all notes           |
| GET    | `/search?q=...`  | Search notes by keyword |

### Note Structure
```json
{
  "id": "uuid",
  "title": "string",
  "content": "string",
  "created_at": "ISO date string"
}
```

---

## Getting Started

### 1. Start the Backend

```bash
cd backend
npm install
npm start
# API running at http://localhost:3001
```

### 2. Open the Frontend

Simply open `frontend/index.html` in your browser.

> **Note**: The frontend also works in standalone mode (no backend required). If the backend isn't running, it loads sample notes and saves new ones in memory for the session.

---

## Tech Stack
- **Backend**: Node.js, Express, uuid
- **Frontend**: Vanilla HTML/CSS/JS (no dependencies)
