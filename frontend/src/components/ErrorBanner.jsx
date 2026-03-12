export default function ErrorBanner({ error, onDismiss, onRetry }) {
  if (!error) return null;

  return (
    <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-4">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <h3 className="text-sm font-medium text-red-800">Error</h3>
          <p className="text-sm text-red-700 mt-1">{error}</p>
        </div>
        <div className="flex gap-2 ml-4">
          {onRetry && (
            <button
              onClick={onRetry}
              className="text-sm text-red-600 hover:text-red-800 font-medium"
            >
              Retry
            </button>
          )}
          <button
            onClick={onDismiss}
            className="text-sm text-red-400 hover:text-red-600"
          >
            ✕
          </button>
        </div>
      </div>
    </div>
  );
}