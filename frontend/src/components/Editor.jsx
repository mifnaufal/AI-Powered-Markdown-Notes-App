export default function Editor({ content, onChange, disabled }) {
  const charCount = content.length;

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="px-4 py-3 bg-gray-50 border-b border-gray-200 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 bg-green-500 rounded-full"></span>
          <span className="text-xs font-semibold text-gray-600 uppercase tracking-wide">Markdown Input</span>
        </div>
        <span className="text-xs text-gray-400 font-mono">{charCount.toLocaleString()} chars</span>
      </div>

      {/* Textarea */}
      <textarea
        className="flex-1 w-full p-4 bg-white text-gray-800 font-mono text-sm leading-relaxed focus:outline-none resize-none disabled:bg-gray-50 disabled:cursor-not-allowed"
        placeholder="# Start writing your notes...&#10;&#10;- Point 1&#10;- Point 2&#10;&#10;**Bold** and *italic* supported"
        value={content}
        onChange={(e) => onChange(e.target.value)}
        disabled={disabled}
        spellCheck="false"
      />
    </div>
  );
}