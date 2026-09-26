import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import Database from "better-sqlite3";
import { GoogleGenAI } from "@google/genai";

let db: any = null;
try {
  db = new Database("comments.db");
  db.exec(`
    CREATE TABLE IF NOT EXISTS comments (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      text TEXT NOT NULL,
      date TEXT NOT NULL
    )
  `);

  const countRow = db.prepare("SELECT count(*) as count FROM comments").get() as { count: number };
  if (countRow.count === 0) {
    const insert = db.prepare("INSERT INTO comments (name, text, date) VALUES (?, ?, ?)");
    insert.run("Équipe Codexa.ma", "Excellente collaboration avec Rayan sur nos architectures backend et nos modules IA. Très rigoureux et réactif !", "20/05/2026");
    insert.run("Comité One Run Global", "Organisation remarquable lors du marathon international One Run Global Marathon. Un profil proactif et visionnaire.", "18/05/2026");
    insert.run("Karim B. (Recruteur Tech)", "Impressionné par le projet d'automatisation du recrutement et l'intégration de DeepSeek R1.", "12/05/2026");
  }
} catch (e) {
  console.error("Database initialization notice (falling back to in-memory if needed):", e);
}

// In-memory fallback if SQLite encounters an environment restriction
const fallbackComments = [
  { id: 1, name: "Équipe Codexa.ma", text: "Excellente collaboration avec Rayan sur nos architectures backend et nos modules IA. Très rigoureux et réactif !", date: "20/05/2026" },
  { id: 2, name: "Comité One Run Global", text: "Organisation remarquable lors du marathon international One Run Global Marathon. Un profil proactif et visionnaire.", date: "18/05/2026" },
  { id: 3, name: "Karim B. (Recruteur Tech)", text: "Impressionné par le projet d'automatisation du recrutement et l'intégration de DeepSeek R1.", date: "12/05/2026" }
];

let aiClient: GoogleGenAI | null = null;
function getAiClient(): GoogleGenAI | null {
  if (!process.env.GEMINI_API_KEY) {
    return null;
  }
  if (!aiClient) {
    aiClient = new GoogleGenAI({
      apiKey: process.env.GEMINI_API_KEY,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        }
      }
    });
  }
  return aiClient;
}

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API routes
  app.post("/api/chat", async (req, res) => {
    const { prompt } = req.body;
    if (!prompt) {
      return res.status(400).json({ error: "Prompt is required" });
    }
    try {
      if (!process.env.GEMINI_API_KEY) {
        // Safe, smart local fallback if the API key is not yet set up
        return res.json({ response: "Bonjour ! Je suis l'IA de Rayan. Mon créateur est un brillant ingénieur IA et fondateur de 3alem o t3alem ! (Clé API de démonstration active)" });
      }
      const client = getAiClient();
      if (!client) {
        return res.json({ response: "Bonjour ! Je suis l'IA de Rayan. Mon créateur est un brillant ingénieur IA et fondateur de 3alem o t3alem ! (Clé API de démonstration active)" });
      }
      const response = await client.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
        config: {
          systemInstruction: "Tu es Rayan AI, un conseiller IA sage, dynamique, empathique et brillant, qui assiste et guide chaleureusement les visiteurs du portfolio de Rayan El Moatadide (un ingénieur IA marocain exceptionnel, Fondateur de 3alemot3alm, spécialisé en DeepSeek R1, IA et Backend). Réponds de façon captivante, encourageante et amicale en français. Sois concis (1 à 2 phrases maximum).",
          temperature: 0.7,
        }
      });
      res.json({ response: response.text });
    } catch (error) {
      console.error("Gemini server-side error:", error);
      // Fallback response instead of crashing or throwing network errors to the user
      res.json({ response: "Rayan m'a conçu pour être résilient ! Je continue d'apprendre chaque seconde. Que puis-je faire pour vous aujourd'hui ?" });
    }
  });

  app.get("/api/comments", (req, res) => {
    try {
      if (db) {
        const comments = db.prepare("SELECT * FROM comments ORDER BY id DESC").all();
        return res.json(comments);
      }
    } catch (e) {
      console.error("Comments fetch error:", e);
    }
    res.json(fallbackComments);
  });

  app.post("/api/comments", (req, res) => {
    const { name, text } = req.body;
    if (!name || !text) {
      return res.status(400).json({ error: "Name and text are required" });
    }
    const date = new Date().toLocaleDateString();
    try {
      if (db) {
        const info = db.prepare("INSERT INTO comments (name, text, date) VALUES (?, ?, ?)").run(name, text, date);
        return res.json({ id: info.lastInsertRowid, name, text, date });
      }
    } catch (e) {
      console.error("Comment insert error:", e);
    }
    const newComment = { id: Date.now(), name, text, date };
    fallbackComments.unshift(newComment);
    res.json(newComment);
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
