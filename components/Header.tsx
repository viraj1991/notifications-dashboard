import { Bell, RefreshCw } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

const Header = () => {
  const { refreshData, loading } = useAppContext();

  return (
    <header className="flex justify-between items-center p-4 bg-white shadow-md m-4 rounded-md">
      <h1 className="text-2xl font-bold text-gray-800 flex items-center">
        <Bell className="mr-2 h-7 w-7 text-blue-500" />
        Notifications Analytics Dashboard
      </h1>
      <button
        onClick={refreshData}
        disabled={loading}
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 disabled:opacity-50 flex items-center gap-2"
      >
        <RefreshCw className={`h-4 w-4 ${loading ? 'animate-spin' : ''}`} />
        {loading ? 'Refreshing...' : 'Refresh Data'}
      </button>
    </header>
  );
};

export default Header;