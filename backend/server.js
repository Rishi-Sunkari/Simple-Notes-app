const express = require('express');
const cors = require('cors');
const { v4: uuidv4 } = require('uuid');

const app = express();
app.use(cors());
app.use(express.json());

// In-memory store
let notes = [
  {
    id: uuidv4(),
    title: 'Meeting notes',
    content: 'Discussed Q2 roadmap and upcoming product milestones.',
    created_at: new Date().toISOString()
  },
  {
    id: uuidv4(),
    title: 'Grocery list',
    content: 'Milk, eggs, bread, butter, apples, coffee, and pasta.',
    created_at: new Date().toISOString()
  },
  {
    id: uuidv4(),
    title: 'Project ideas',
    content: 'Build a habit tracker app. Create a recipe manager. Design a budget planner.',
    created_at: new Date().toISOString()
  }
];

// POST /notes - Add a new note
app.post('/notes', (req, res) => {
  const { title, content } = req.body;
  if (!title || !content) {
    return res.status(400).json({ error: 'Title and content are required.' });
  }
  const note = {
    id: uuidv4(),
    title,
    content,
    created_at: new Date().toISOString()
  };
  notes.push(note);
  res.status(201).json(note);
});

// GET /notes - Get all notes
app.get('/notes', (req, res) => {
  res.json(notes);
});

// GET /search?q= - Search notes by title or content
app.get('/search', (req, res) => {
  const query = (req.query.q || '').toLowerCase();
  if (!query) return res.json(notes);
  const results = notes.filter(
    note =>
      note.title.toLowerCase().includes(query) ||
      note.content.toLowerCase().includes(query)
  );
  res.json(results);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
