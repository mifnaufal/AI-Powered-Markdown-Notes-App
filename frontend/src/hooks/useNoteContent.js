import { useState, useEffect, useCallback } from 'react';

export default function useNoteContent() {
  const [content, setContent] = useState('');
  const [isSaved, setIsSaved] = useState(true);

  useEffect(() => {
    const saved = localStorage.getItem('ai-note-content');
    if (saved) setContent(saved);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (content) {
        localStorage.setItem('ai-note-content', content);
        setIsSaved(true);
      }
    }, 1000);

    setIsSaved(false);
    return () => clearTimeout(timer);
  }, [content]);

  const handleSave = useCallback(() => {
    localStorage.setItem('ai-note-content', content);
    setIsSaved(true);
  }, [content]);

  return { content, setContent, isSaved, handleSave };
}