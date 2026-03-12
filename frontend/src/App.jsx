import { useState, useEffect } from 'react';
import Editor from './components/Editor';
import Preview from './components/Preview';
import Stats from './components/Stats';
import Toolbar from './components/Toolbar';
import Notification from './components/Notification';
import useNotification from './hooks/useNotification';
import useNoteContent from './hooks/useNoteContent';
import { summarizeText, rewriteText } from './services/api';

function App() {
  const { content, setContent, isSaved, handleSave } = useNoteContent();
  const [loading, setLoading] = useState({ summarize: false, rewrite: false });
  const [style, setStyle] = useState('clear');
  const { notification, showNotification } = useNotification();

  const handleSummarize = async () => {
    if (!content.trim()) return showNotification('Content is empty!', 'error');
    setLoading(prev => ({ ...prev, summarize: true }));
    try {
      const result = await summarizeText(content);
      setContent(result);
      showNotification('Summarization complete!', 'success');
    } catch (err) {
      showNotification(err.response?.data?.error || 'Failed to summarize', 'error');
    }
    setLoading(prev => ({ ...prev, summarize: false }));
  };

  const handleRewrite = async () => {
    if (!content.trim()) return showNotification('Content is empty!', 'error');
    setLoading(prev => ({ ...prev, rewrite: true }));
    try {
      const result = await rewriteText(content, style);
      setContent(result);
      showNotification('Rewrite complete!', 'success');
    } catch (err) {
      showNotification(err.response?.data?.error || 'Failed to rewrite', 'error');
    }
    setLoading(prev => ({ ...prev, rewrite: false }));
  };

  const onManualSave = () => {
    handleSave();
    showNotification('Note saved!', 'success');
  };

  // Check if any operation is loading
  const isLoading = loading.summarize || loading.rewrite;

  return (
    <div className="h-screen flex flex-col bg-gray-100">
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
      
      <div className="flex-1 flex p-4 gap-4 overflow-hidden">
        <div className="w-1/2 bg-white rounded-lg shadow-sm overflow-hidden flex flex-col">
          <Editor content={content} onChange={setContent} disabled={isLoading} />
          <Stats content={content} />
        </div>
        <div className="w-1/2 bg-white rounded-lg shadow-sm overflow-hidden">
          <Preview content={content} isLoading={isLoading} />
        </div>
      </div>

      <Notification notification={notification} />
    </div>
  );
}

export default App;