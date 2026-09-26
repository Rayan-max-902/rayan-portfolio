/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send } from 'lucide-react';
import { Comment } from '../types';

interface CommentsProps {
  title: string;
  namePlaceholder: string;
  commentPlaceholder: string;
  publishButton: string;
}

const DEFAULT_COMMENTS: Comment[] = [
  {
    id: 1,
    name: "Équipe Codexa.ma",
    text: "Excellente collaboration avec Rayan sur nos architectures backend et nos modules IA. Très rigoureux et réactif !",
    date: "20/05/2026"
  },
  {
    id: 2,
    name: "Comité One Run Global",
    text: "Organisation remarquable lors du marathon international One Run Global Marathon. Un profil proactif et visionnaire.",
    date: "18/05/2026"
  },
  {
    id: 3,
    name: "Karim B. (Recruteur Tech)",
    text: "Impressionné par le projet d'automatisation du recrutement et l'intégration de DeepSeek R1.",
    date: "12/05/2026"
  }
];

export default function Comments({ title, namePlaceholder, commentPlaceholder, publishButton }: CommentsProps) {
  const [comments, setComments] = useState<Comment[]>(DEFAULT_COMMENTS);
  const [newName, setNewName] = useState('');
  const [newComment, setNewComment] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchComments();
  }, []);

  const fetchComments = async () => {
    try {
      const response = await fetch('/api/comments');
      if (response.ok) {
        const data = await response.json();
        if (Array.isArray(data) && data.length > 0) {
          setComments(data);
        }
      }
    } catch (error) {
      console.warn('API comments fetch fallback:', error);
    }
  };

  const handleAddComment = async () => {
    if (!newName.trim() || !newComment.trim() || isLoading) return;
    
    setIsLoading(true);
    const tempComment: Comment = {
      id: Date.now(),
      name: newName.trim(),
      text: newComment.trim(),
      date: new Date().toLocaleDateString(),
    };

    // Optimistically add to UI immediately so the visitor sees their message without delay
    setComments((prev) => [tempComment, ...prev]);
    const currentName = newName;
    const currentText = newComment;
    setNewName('');
    setNewComment('');

    try {
      const response = await fetch('/api/comments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: currentName,
          text: currentText,
        }),
      });

      if (response.ok) {
        const savedComment = await response.json();
        // Update with actual saved server ID
        setComments((prev) => prev.map((c) => (c.id === tempComment.id ? savedComment : c)));
      }
    } catch (error) {
      console.error('Failed to sync comment to server:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white dark:bg-zinc-900 p-5 sm:p-8 rounded-2xl sm:rounded-3xl border border-zinc-100 dark:border-zinc-800 shadow-sm">
      <div className="space-y-4 mb-8">
        <input 
          type="text" 
          placeholder={namePlaceholder}
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          className="w-full px-4 py-3 bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all text-base dark:text-white"
        />
        <textarea 
          placeholder={commentPlaceholder}
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          rows={3}
          className="w-full px-4 py-3 bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all text-base dark:text-white resize-none"
        />
        <button 
          onClick={handleAddComment}
          disabled={isLoading}
          className={`w-full sm:w-auto px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-blue-500/20 active:scale-95 ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          <Send className="w-4 h-4" />
          {isLoading ? '...' : publishButton}
        </button>
      </div>

      <div className="space-y-4">
        <AnimatePresence>
          {comments.map((comment) => (
            <motion.div 
              key={comment.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="p-4 bg-zinc-50 dark:bg-zinc-950 rounded-2xl border border-zinc-100 dark:border-zinc-800"
            >
              <div className="flex justify-between items-start mb-2">
                <span className="font-bold text-zinc-900 dark:text-zinc-100">{comment.name}</span>
                <span className="text-xs text-zinc-400">{comment.date}</span>
              </div>
              <p className="text-zinc-600 dark:text-zinc-400">{comment.text}</p>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
