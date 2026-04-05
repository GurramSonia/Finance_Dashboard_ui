import { calculateTotals } from '../data/mockData';
import { TrendingUp, TrendingDown, DollarSign } from 'lucide-react';

export default function DashboardOverview({ transactions }) {
  const { income, expenses, balance } = calculateTotals(transactions);

  const cards = [
    {
      title: 'Total Balance',
      amount: balance,
      icon: DollarSign,
      color: 'from-blue-500 to-blue-600',
      textColor: 'text-blue-600',
      darkTextcolor: 'dark:text-blue-400',
    },
    {
      title: 'Income',
      amount: income,
      icon: TrendingUp,
      color: 'from-green-500 to-green-600',
      textColor: 'text-green-600',
      darkTextcolor: 'dark:text-green-400',
    },
    {
      title: 'Expenses',
      amount: expenses,
      icon: TrendingDown,
      color: 'from-red-500 to-red-600',
      textColor: 'text-red-600',
      darkTextcolor: 'dark:text-red-400',
    },
  ];

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(amount);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 fade-in">
      {cards.map((card, index) => {
        const Icon = card.icon;
        return (
          <div
            key={index}
            className="card bg-white dark:bg-gray-900 overflow-hidden transform hover:scale-105 transition-transform duration-200"
          >
            <div className={`bg-gradient-to-r ${card.color} h-2`}></div>
            <div className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">
                    {card.title}
                  </p>
                  <p className="text-3xl font-bold text-gray-900 dark:text-white">
                    {formatCurrency(Math.abs(card.amount))}
                  </p>
                </div>
                <div className={`${card.textColor} ${card.darkTextcolor} p-3 bg-opacity-10 dark:bg-opacity-20 rounded-lg bg-current`}>
                  <Icon size={24} />
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
