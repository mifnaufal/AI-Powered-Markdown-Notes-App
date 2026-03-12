import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { useMemo, useState } from 'react';

export default function Preview({ content, isLoading }) {
  const memoizedContent = useMemo(() => content, [content]);
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    if (content) {
      await navigator.clipboard.writeText(content);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="flex flex-col h-full relative">
      {/* Header */}
      <div className="px-4 py-3 bg-gray-50 border-b border-gray-200 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
          <span className="text-xs font-semibold text-gray-600 uppercase tracking-wide">Preview</span>
        </div>
        {content && (
          <button
            onClick={handleCopy}
            className={`text-xs px-3 py-1 rounded-md transition-all ${
              copied 
                ? 'bg-green-100 text-green-700' 
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {copied ? '✓ Copied!' : '📋 Copy'}
          </button>
        )}
      </div>
      
      {/* Loading Overlay */}
      {isLoading && (
        <div className="absolute inset-0 bg-white/90 backdrop-blur-sm flex items-center justify-center z-10">
          <div className="text-center">
            <div className="w-12 h-12 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mx-auto mb-3"/>
            <p className="text-gray-600 font-medium">AI is processing...</p>
            <p className="text-gray-400 text-sm">This may take a few seconds</p>
          </div>
        </div>
      )}

      {/* Content */}
      <div className="flex-1 p-6 bg-white overflow-auto prose prose-sm max-w-none prose-headings:text-gray-800 prose-p:text-gray-700 prose-a:text-blue-600 prose-code:bg-gray-100 prose-code:px-1 prose-code:rounded prose-code:text-red-600">
        {memoizedContent ? (
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{memoizedContent}</ReactMarkdown>
        ) : (
          <div className="h-full flex items-center justify-center text-gray-400">
            <div className="text-center">
              <svg className="w-16 h-16 mx-auto mb-3 opacity-30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <p className="text-sm font-medium">Preview will appear here</p>
              <p className="text-xs mt-1">Start typing in the editor</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}