import { useState, useCallback } from 'react';

export default function useError() {
  const [errors, setErrors] = useState({
    summarize: null,
    rewrite: null,
    save: null,
  });

  const setError = useCallback((operation, message) => {
    setErrors(prev => ({ ...prev, [operation]: message }));
  }, []);

  const clearError = useCallback((operation) => {
    setErrors(prev => ({ ...prev, [operation]: null }));
  }, []);

  const clearAllErrors = useCallback(() => {
    setErrors({ summarize: null, rewrite: null, save: null });
  }, []);

  return { errors, setError, clearError, clearAllErrors };
}