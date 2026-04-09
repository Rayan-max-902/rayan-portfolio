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

export default function Comments({ title, namePlaceholder, commentPlaceholder, publishButton }: CommentsProps) {
  const [comments, setComments] = useState<Comment[]>([]);
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
        setComments(data);
      }
    } catch (error) {
      console.error('Failed to fetch comments:', error);
    }
  };

  const handleAddComment = async () => {
    if (!newName.trim() || !newComment.trim() || isLoading) return;
    
    setIsLoading(true);
    try {
      const response = await fetch('/api/comments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: newName,
          text: newComment,
        }),
      });

      if (response.ok) {
        const comment = await response.json();
        setComments([comment, ...comments]);
        setNewName('');
        setNewComment('');
      }
    } catch (error) {
      console.error('Failed to add comment:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white dark:bg-zinc-900 p-8 rounded-3xl border border-zinc-100 dark:border-zinc-800 shadow-sm">
      <div className="space-y-4 mb-8">
        <input 
          type="text" 
          placeholder={namePlaceholder}
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          className="w-full px-4 py-3 bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all dark:text-white"
        />
        <textarea 
          placeholder={commentPlaceholder}
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          rows={4}
          className="w-full px-4 py-3 bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all dark:text-white resize-none"
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
