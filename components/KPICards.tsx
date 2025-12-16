import { Bell, Eye, Users, EyeOff } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

const KPICards = () => {
  const { kpis } = useAppContext();

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 m-4">
      <div className="bg-white p-6 rounded-md shadow-md flex items-center gap-4">
        <div className="p-3 rounded-md bg-blue-500/20 text-blue-500">
          <Bell className="h-6 w-6" />
        </div>
        <div>
          <h3 className="text-sm font-medium text-gray-500">Total Notifications</h3>
          <p className="text-2xl font-bold text-gray-600">{kpis.total}</p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-md shadow-md flex items-center gap-4">
        <div className="p-3 rounded-md bg-orange-500/20 text-orange-500">
          <EyeOff className="h-6 w-6" />
        </div>
        <div>
          <h3 className="text-sm font-medium text-gray-500">Unread Count</h3>
          <p className="text-2xl font-bold text-gray-600">{kpis.unread}</p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-md shadow-md flex items-center gap-4">
        <div className="p-3 rounded-md bg-green-500/20 text-green-500">
          <Eye className="h-6 w-6" />
        </div>
        <div>
          <h3 className="text-sm font-medium text-gray-500">Read Count</h3>
          <p className="text-2xl font-bold text-gray-600">{kpis.read}</p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-md shadow-md flex items-center gap-4">
        <div className="p-3 rounded-md bg-purple-500/20 text-purple-500">
          <Users className="h-6 w-6" />
        </div>
        <div>
          <h3 className="text-sm font-medium text-gray-500">Unique Senders</h3>
          <p className="text-2xl font-bold text-gray-600">{kpis.uniqueSenders}</p>
        </div>
      </div>
    </div>
  );
};

export default KPICards;