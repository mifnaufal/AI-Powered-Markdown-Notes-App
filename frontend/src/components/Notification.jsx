export default function Notification({ notification }) {
  if (!notification) return null;

  const styles = {
    success: 'bg-green-600',
    error: 'bg-red-600',
    info: 'bg-blue-600',
  };

  const icons = {
    success: '✓',
    error: '✕',
    info: 'ℹ',
  };

  return (
    <div className={`fixed bottom-6 right-6 ${styles[notification.type]} text-white px-6 py-3 rounded-lg shadow-2xl flex items-center gap-3 z-50 animate-slide-up`}>
      <span className="text-lg font-bold">{icons[notification.type]}</span>
      <span className="font-medium">{notification.message}</span>
    </div>
  );
}