export default function Toolbar({ onSummarize, onRewrite, onSave, loading, loadingState, style, setStyle, isSaved }) {
  return (
    <header className="bg-gradient-to-r from-gray-900 to-gray-800 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6">
        <div className="h-16 flex items-center justify-between gap-4">
          {/* Logo */}
          <h1 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent whitespace-nowrap">
            AI Notes
          </h1>
          
          {/* Controls - Scrollable on mobile */}
          <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto flex-shrink-0">
            {/* Save Status - Hidden on small mobile */}
            <span className={`hidden sm:block text-xs ${isSaved ? 'text-gray-400' : 'text-yellow-400'}`}>
              {isSaved ? '✓ Saved' : '● Saving...'}
            </span>

            {/* Style Selector */}
            <select
              value={style}
              onChange={(e) => setStyle(e.target.value)}
              className="bg-gray-700 text-white text-sm rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-600 cursor-pointer hover:bg-gray-600 transition"
              disabled={loading}
            >
              <option value="clear">Clear</option>
              <option value="formal">Formal</option>
              <option value="casual">Casual</option>
              <option value="academic">Academic</option>
            </select>

            {/* Action Buttons */}
            <button
              onClick={onSummarize}
              disabled={loading}
              className="px-3 sm:px-4 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-800 text-white text-sm font-medium rounded-lg disabled:opacity-50 transition-all flex items-center gap-2 shadow-md hover:shadow-lg"
            >
              {loadingState.summarize && <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"/>} 
              <span className="hidden sm:inline">Summarize</span>
              <span className="sm:hidden">Summary</span>
            </button>
            
            <button
              onClick={onRewrite}
              disabled={loading}
              className="px-3 sm:px-4 py-2 bg-emerald-600 hover:bg-emerald-700 disabled:bg-emerald-800 text-white text-sm font-medium rounded-lg disabled:opacity-50 transition-all flex items-center gap-2 shadow-md hover:shadow-lg"
            >
              {loadingState.rewrite && <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"/>} 
              <span className="hidden sm:inline">Rewrite</span>
              <span className="sm:hidden">Rewrite</span>
            </button>

            <button
              onClick={onSave}
              disabled={loading}
              className="px-3 sm:px-4 py-2 bg-gray-700 hover:bg-gray-600 disabled:bg-gray-800 text-white text-sm font-medium rounded-lg disabled:opacity-50 transition-all shadow-md hover:shadow-lg"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}