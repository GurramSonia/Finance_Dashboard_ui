import { getSpendingByCategory, calculateTotals } from '../data/mockData';
import { Lightbulb, AlertCircle } from 'lucide-react';

export default function InsightsSection({ transactions }) {
  const spending = getSpendingByCategory(transactions);
  const { income, expenses } = calculateTotals(transactions);
  const savingsRate = income > 0 ? ((income - expenses) / income * 100).toFixed(1) : 0;

  const insights = [
    {
      title: 'Highest Spending Category',
      value: spending[0]?.name || 'N/A',
      amount: spending[0]?.value || 0,
      color: 'from-orange-400 to-orange-600',
    },
    {
      title: 'Savings Rate',
      value: `${savingsRate}%`,
      description: 'of your income saved',
      color: 'from-green-400 to-green-600',
    },
    {
      title: 'Average Transaction',
      value: transactions.length > 0 
        ? `$${(spending.reduce((sum, item) => sum + item.value, 0) / spending.length).toFixed(2)}`
        : 'N/A',
      description: 'per category',
      color: 'from-blue-400 to-blue-600',
    },
  ];

  return (
    <div className="mt-8 fade-in">
      <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center space-x-2">
        <Lightbulb size={24} className="text-yellow-500" />
        <span>Financial Insights</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {insights.map((insight, index) => (
          <div key={index} className="card p-6 overflow-hidden bg-white dark:bg-gray-900 transition-colors">
            <div className={`bg-gradient-to-r ${insight.color} h-1 mb-4`}></div>
            <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">{insight.title}</p>
            <p className="text-2xl font-bold text-gray-900 dark:text-white">{insight.value}</p>
            {insight.amount > 0 && (
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                ${insight.amount.toFixed(2)}
              </p>
            )}
            {insight.description && (
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{insight.description}</p>
            )}
          </div>
        ))}
      </div>

      <div className="mt-6 card p-6 bg-blue-50 dark:bg-blue-900 border-l-4 border-blue-500 transition-colors">
        <div className="flex items-start space-x-3">
          <AlertCircle className="text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" size={20} />
          <div>
            <h3 className="font-semibold text-blue-900 dark:text-blue-100">Quick Tip</h3>
            <p className="text-sm text-blue-700 dark:text-blue-200 mt-1">
              {spending[0] ? `Your highest spending category is ${spending[0].name}. Consider reviewing these expenses to find potential savings.` : 'Add transactions to see spending patterns and get personalized insights.'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
