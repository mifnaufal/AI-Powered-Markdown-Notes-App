export default function Notification({ notification }) {
  if (!notification) return null;

  const bgColors = {
    success: 'bg-green-500',
    error: 'bg-red-500',
    info: 'bg-blue-500',
  };

  return (
    <div className={`fixed bottom-4 right-4 ${bgColors[notification.type]} text-white px-6 py-3 rounded shadow-lg transition-all`}>
      {notification.message}
    </div>
  );
}