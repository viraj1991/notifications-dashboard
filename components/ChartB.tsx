import { PieChart, Pie, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { useAppContext } from '../context/AppContext';

const COLORS = ['#4ade80', '#fb923c']; 

const ChartB = () => {
  const { kpis } = useAppContext();
  const data = [
    { name: 'Read', value: kpis.read },
    { name: 'Unread', value: kpis.unread },
  ];

  return (
    <div className="flex-1 p-4 text-gray-900 rounded-md bg-white shadow-md m-4 mt-0 ml-0 min-w-0" >
      <h3 className="text-lg font-medium mb-2 text-gray-900">Read vs Unread</h3>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            innerRadius={70}
            outerRadius={100}
            paddingAngle={5}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
      <div className="flex justify-center mt-2">
        <div className="flex items-center mr-4">
          <div className="w-3 h-3 bg-green-400 mr-1"></div>
          Read
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 bg-orange-400 mr-1"></div>
          Unread
        </div>
      </div>
    </div>
  );
};

export default ChartB;