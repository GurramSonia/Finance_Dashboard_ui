import { useState } from 'react';
import { useFinance } from '../context/FinanceContext';
import EditTransactionModal from './EditTransactionModal';
import { Trash2, Edit2, Loader } from 'lucide-react';
import { categoryColors } from '../data/mockData';

export default function TransactionsTable() {
  const { getFilteredTransactions, role, deleteTransaction, loading } = useFinance();
  const [editingId, setEditingId] = useState(null);
  const transactions = getFilteredTransactions();

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(amount);
  };

  if (transactions.length === 0) {
    return (
      <div className="card p-12 text-center bg-white dark:bg-gray-900 transition-colors">
        <p className="text-gray-500 dark:text-gray-400 text-lg">No transactions found</p>
      </div>
    );
  }

  return (
    <>
      <div className="card overflow-hidden bg-white dark:bg-gray-900 transition-colors fade-in">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                  Description
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                  Category
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                  Type
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                  Amount
                </th>
                {role === 'admin' && (
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                    Actions
                  </th>
                )}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {transactions.map((transaction) => (
                <tr
                  key={transaction.id}
                  className="hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                >
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                    {new Date(transaction.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric',
                    })}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900 dark:text-white">
                    {transaction.description}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <span
                      className="px-3 py-1 rounded-full text-white text-xs font-medium animate-fade-in"
                      style={{
                        backgroundColor:
                          categoryColors[transaction.category] || '#6366f1',
                      }}
                    >
                      {transaction.category}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                        transaction.type === 'income'
                          ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100'
                          : 'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-100'
                      }`}
                    >
                      {transaction.type === 'income' ? 'Income' : 'Expense'}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-semibold text-gray-900 dark:text-white">
                    {transaction.type === 'income' ? '+' : '-'}
                    {formatCurrency(transaction.amount)}
                  </td>
                  {role === 'admin' && (
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      {loading ? (
                        <Loader className="inline animate-spin text-gray-400" size={18} />
                      ) : (
                        <>
                          <button
                            onClick={() => setEditingId(transaction.id)}
                            className="text-blue-600 dark:text-blue-400 hover:text-blue-900 dark:hover:text-blue-300 mr-4 inline-flex items-center space-x-1 transition-colors"
                            title="Edit"
                          >
                            <Edit2 size={16} />
                          </button>
                          <button
                            onClick={() => deleteTransaction(transaction.id)}
                            className="text-red-600 dark:text-red-400 hover:text-red-900 dark:hover:text-red-300 inline-flex items-center space-x-1 transition-colors"
                            title="Delete"
                          >
                            <Trash2 size={16} />
                          </button>
                        </>
                      )}
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {editingId && (
        <EditTransactionModal
          transactionId={editingId}
          onClose={() => setEditingId(null)}
        />
      )}
    </>
  );
}
