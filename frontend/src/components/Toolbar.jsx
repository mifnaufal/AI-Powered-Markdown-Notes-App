export default function Toolbar({ onSummarize, onRewrite, onSave, loading, loadingState, style, setStyle, isSaved }) {
  return (
    <div className="h-16 bg-gray-900 flex items-center justify-between px-6 shadow-md">
      <h1 className="text-white font-bold text-lg">AI Notes</h1>
      
      <div className="flex items-center gap-3">
        <span className={`text-xs ${isSaved ? 'text-gray-400' : 'text-yellow-500'}`}>
          {isSaved ? 'All changes saved' : 'Saving...'}
        </span>

        <select
          value={style}
          onChange={(e) => setStyle(e.target.value)}
          className="bg-gray-800 text-white text-sm rounded px-3 py-2 focus:outline-none border border-gray-700"
          disabled={loading}
        >
          <option value="clear">Clear</option>
          <option value="formal">Formal</option>
          <option value="casual">Casual</option>
          <option value="academic">Academic</option>
        </select>

        <button
          onClick={onSummarize}
          disabled={loading}
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded disabled:opacity-50 transition flex items-center gap-2"
        >
          {loadingState.summarize && <span className="animate-spin">⚪</span>} Summarize
        </button>
        
        <button
          onClick={onRewrite}
          disabled={loading}
          className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-medium rounded disabled:opacity-50 transition flex items-center gap-2"
        >
          {loadingState.rewrite && <span className="animate-spin">⚪</span>} Rewrite
        </button>

        <button
          onClick={onSave}
          disabled={loading}
          className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white text-sm font-medium rounded disabled:opacity-50 transition"
        >
          Save
        </button>
      </div>
    </div>
  );
}