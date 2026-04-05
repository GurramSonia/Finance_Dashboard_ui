import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Legend,
  Tooltip,
} from 'recharts';
import { getSpendingByCategory, categoryColors } from '../data/mockData';

export default function SpendingChart({ transactions }) {
  const data = getSpendingByCategory(transactions);
  const colors = Object.values(categoryColors);

  return (
    <div className="card p-6 bg-white dark:bg-gray-900 transition-colors fade-in">
      <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Spending by Category</h2>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
            outerRadius={100}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
            ))}
          </Pie>
          <Tooltip
            formatter={(value) =>
              new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD',
              }).format(value)
            }
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
