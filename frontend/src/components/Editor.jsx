export default function Editor({ content, onChange, disabled }) {
  const charCount = content.length;

  return (
    <div className="flex flex-col h-full border-r border-gray-200">
      <div className="px-4 py-2 bg-gray-50 border-b border-gray-200 flex justify-between items-center">
        <span className="text-xs font-semibold text-gray-500 uppercase">Markdown Input</span>
        <span className="text-xs text-gray-400">{charCount} chars</span>
      </div>

      <textarea
        className="w-full h-full p-4 bg-white text-gray-800 font-mono text-sm focus:outline-none resize-none disabled:bg-gray-50 disabled:cursor-not-allowed"
        placeholder="# Mulai menulis catatan..."
        value={content}
        onChange={(e) => onChange(e.target.value)}
        disabled={disabled}
        spellCheck="false"
      />
    </div>
  );
}