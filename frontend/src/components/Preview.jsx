import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { useMemo } from 'react';

export default function Preview({ content, isLoading }) {
  const memoizedContent = useMemo(() => content, [content]);

  return (
    <div className="flex flex-col h-full relative">
      <div className="px-4 py-2 bg-gray-50 border-b border-gray-200">
        <span className="text-xs font-semibold text-gray-500 uppercase">Preview</span>
      </div>
      
      {isLoading && (
        <div className="absolute inset-0 bg-white/80 flex items-center justify-center z-10">
          <div className="text-center">
            <span className="animate-spin text-4xl">⚪</span>
            <p className="text-gray-500 text-sm mt-2">AI is processing...</p>
          </div>
        </div>
      )}

      <div className="flex-1 p-6 bg-white overflow-auto">
        {memoizedContent ? (
          <article className="prose prose-sm max-w-none">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{memoizedContent}</ReactMarkdown>
          </article>
        ) : (
          <div className="h-full flex items-center justify-center text-gray-400">
            <p className="text-sm">Preview will appear here</p>
          </div>
        )}
      </div>
    </div>
  );
}