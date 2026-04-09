import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import Database from "better-sqlite3";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const db = new Database("comments.db");
db.exec(`
  CREATE TABLE IF NOT EXISTS comments (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    text TEXT NOT NULL,
    date TEXT NOT NULL
  )
`);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API routes
  app.get("/api/comments", (req, res) => {
    const comments = db.prepare("SELECT * FROM comments ORDER BY id DESC").all();
    res.json(comments);
  });

  app.post("/api/comments", (req, res) => {
    const { name, text } = req.body;
    if (!name || !text) {
      return res.status(400).json({ error: "Name and text are required" });
    }
    const date = new Date().toLocaleDateString();
    const info = db.prepare("INSERT INTO comments (name, text, date) VALUES (?, ?, ?)").run(name, text, date);
    res.json({ id: info.lastInsertRowid, name, text, date });
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
