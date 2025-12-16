import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { useAppContext } from '../context/AppContext';

const ChartA = () => {
  const { categoryData } = useAppContext();

  return (
    <div className="flex-1 p-4 rounded-md bg-white shadow-md m-4 mt-0 mr-0 min-w-0">
      <h3 className="text-lg font-medium mb-2 text-gray-900">Notifications by Category</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={categoryData}>
          <XAxis dataKey="category" tickFormatter={(value) => `Cat ${value}`} />
          <YAxis />
          <Tooltip />
          <Bar dataKey="count" fill="#3b82f6" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ChartA;