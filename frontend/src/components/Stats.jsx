import { useMemo } from 'react';

export default function Stats({ content }) {
  const stats = useMemo(() => {
    const words = content.trim() ? content.trim().split(/\s+/).length : 0;
    const chars = content.length;
    const readTime = Math.ceil(words / 200); // 200 words per minute
    return { words, chars, readTime };
  }, [content]);

  return (
    <div className="px-4 py-2 bg-gray-50 border-t border-gray-200 flex gap-4 text-xs text-gray-500">
      <span>{stats.words} words</span>
      <span>{stats.chars} chars</span>
      <span>{stats.readTime} min read</span>
    </div>
  );
}