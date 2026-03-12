import { useState, useCallback } from 'react';
import Editor from './components/Editor';
import Preview from './components/Preview';
import Stats from './components/Stats';
import Toolbar from './components/Toolbar';
import ErrorBanner from './components/ErrorBanner';
import Notification from './components/Notification';
import useNotification from './hooks/useNotification';
import useNoteContent from './hooks/useNoteContent';
import useError from './hooks/useError';
import { summarizeText, rewriteText } from './services/api';

function App() {
  const { content, setContent, isSaved, handleSave } = useNoteContent();
  const [loading, setLoading] = useState({ summarize: false, rewrite: false });
  const [style, setStyle] = useState('clear');
  const { notification, showNotification } = useNotification();
  const { errors, setError, clearError } = useError();

  const retrySummarize = useCallback(async () => {
    if (!content.trim()) return;
    setLoading(prev => ({ ...prev, summarize: true }));
    clearError('summarize');
    try {
      const result = await summarizeText(content);
      setContent(result);
      showNotification('Summarization complete!', 'success');
    } catch (err) {
      setError('summarize', err.userMessage || 'Failed to summarize');
    }
    setLoading(prev => ({ ...prev, summarize: false }));
  }, [content, setContent, clearError, setError, showNotification]);

  const retryRewrite = useCallback(async () => {
    if (!content.trim()) return;
    setLoading(prev => ({ ...prev, rewrite: true }));
    clearError('rewrite');
    try {
      const result = await rewriteText(content, style);
      setContent(result);
      showNotification('Rewrite complete!', 'success');
    } catch (err) {
      setError('rewrite', err.userMessage || 'Failed to rewrite');
    }
    setLoading(prev => ({ ...prev, rewrite: false }));
  }, [content, style, setContent, clearError, setError, showNotification]);

  const handleSummarize = async () => {
    if (!content.trim()) {
      setError('summarize', 'Content is empty!');
      return;
    }
    clearError('summarize');
    setLoading(prev => ({ ...prev, summarize: true }));
    try {
      const result = await summarizeText(content);
      setContent(result);
      showNotification('Summarization complete!', 'success');
    } catch (err) {
      setError('summarize', err.userMessage || 'Failed to summarize');
      showNotification('Summarization failed', 'error');
    }
    setLoading(prev => ({ ...prev, summarize: false }));
  };

  const handleRewrite = async () => {
    if (!content.trim()) {
      setError('rewrite', 'Content is empty!');
      return;
    }
    clearError('rewrite');
    setLoading(prev => ({ ...prev, rewrite: true }));
    try {
      const result = await rewriteText(content, style);
      setContent(result);
      showNotification('Rewrite complete!', 'success');
    } catch (err) {
      setError('rewrite', err.userMessage || 'Failed to rewrite');
      showNotification('Rewrite failed', 'error');
    }
    setLoading(prev => ({ ...prev, rewrite: false }));
  };

  const onManualSave = () => {
    handleSave();
    showNotification('Note saved!', 'success');
  };

  const isLoading = loading.summarize || loading.rewrite;

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Toolbar */}
      <Toolbar 
        onSummarize={handleSummarize} 
        onRewrite={handleRewrite} 
        onSave={onManualSave} 
        loading={isLoading}
        loadingState={loading}
        style={style} 
        setStyle={setStyle} 
        isSaved={isSaved}
      />
      
      {/* Error Banners */}
      <div className="px-4 sm:px-6 pt-4 max-w-7xl mx-auto w-full">
        <ErrorBanner 
          error={errors.summarize} 
          onDismiss={() => clearError('summarize')}
          onRetry={retrySummarize}
        />
        <ErrorBanner 
          error={errors.rewrite} 
          onDismiss={() => clearError('rewrite')}
          onRetry={retryRewrite}
        />
      </div>
      
      {/* Main Content - Split Screen */}
      <main className="flex-1 flex flex-col lg:flex-row p-4 gap-4 overflow-hidden max-w-[1920px] mx-auto w-full">
        {/* Editor Panel */}
        <section className="flex-1 flex flex-col min-h-[50vh] lg:min-h-0 bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
          <Editor content={content} onChange={setContent} disabled={isLoading} />
          <Stats content={content} />
        </section>
        
        {/* Preview Panel */}
        <section className="flex-1 flex flex-col min-h-[50vh] lg:min-h-0 bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
          <Preview content={content} isLoading={isLoading} />
        </section>
      </main>

      {/* Toast Notification */}
      <Notification notification={notification} />
    </div>
  );
}

export default App;