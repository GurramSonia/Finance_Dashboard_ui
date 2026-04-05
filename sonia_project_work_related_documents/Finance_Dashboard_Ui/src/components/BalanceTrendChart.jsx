import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { getMonthlyTrend } from '../data/mockData';
import { useFinance } from '../context/FinanceContext';

export default function BalanceTrendChart({ transactions }) {
  const { darkMode } = useFinance();
  const data = getMonthlyTrend(transactions);

  const textColor = darkMode ? '#9ca3af' : '#6b7280';
  const gridStroke = darkMode ? '#374151' : '#e5e7eb';
  const tooltipBg = darkMode ? '#1f2937' : '#fff';
  const tooltipBorder = darkMode ? '#4b5563' : '#e5e7eb';

  return (
    <div className="card p-6 bg-white dark:bg-gray-900 transition-colors fade-in">
      <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Balance Trend</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke={gridStroke} />
          <XAxis dataKey="date" stroke={textColor} />
          <YAxis stroke={textColor} />
          <Tooltip
            contentStyle={{
              backgroundColor: tooltipBg,
              border: `1px solid ${tooltipBorder}`,
              borderRadius: '8px',
            }}
            formatter={(value) =>
              new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD',
              }).format(value)
            }
          />
          <Line
            type="monotone"
            dataKey="balance"
            stroke="#6366f1"
            dot={{ fill: '#6366f1', r: 4 }}
            activeDot={{ r: 6 }}
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
