import { useMemo } from 'react';

export default function Stats({ content }) {
  const stats = useMemo(() => {
    const words = content.trim() ? content.trim().split(/\s+/).length : 0;
    const chars = content.length;
    const readTime = Math.ceil(words / 200);
    return { words, chars, readTime };
  }, [content]);

  return (
    <div className="px-4 py-2 bg-gray-50 border-t border-gray-200 flex flex-wrap gap-4 text-xs text-gray-500">
      <span className="flex items-center gap-1">
        <span className="w-1.5 h-1.5 bg-gray-400 rounded-full"></span>
        {stats.words.toLocaleString()} words
      </span>
      <span className="flex items-center gap-1">
        <span className="w-1.5 h-1.5 bg-gray-400 rounded-full"></span>
        {stats.chars.toLocaleString()} chars
      </span>
      <span className="flex items-center gap-1">
        <span className="w-1.5 h-1.5 bg-gray-400 rounded-full"></span>
        ~{stats.readTime} min read
      </span>
    </div>
  );
}