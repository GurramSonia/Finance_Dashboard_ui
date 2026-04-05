import { useState } from 'react';
import { useFinance } from '../context/FinanceContext';
import TransactionsTable from './TransactionsTable';
import AddTransactionModal from './AddTransactionModal';
import ExportTransactions from './ExportTransactions';
import { Plus, Search, ChevronDown } from 'lucide-react';

export default function TransactionsSection() {
  const {
    transactions,
    role,
    setFilteredCategory,
    setSearchTerm,
    setSortBy,
    searchTerm,
    setDateRange,
    setAmountRange,
    amountRange,
    setTransactionTypeFilter,
    transactionTypeFilter,
  } = useFinance();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [expandedFilters, setExpandedFilters] = useState(false);

  const categories = [...new Set(transactions.map(t => t.category))];

  return (
    <div className="mt-8 fade-in">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white">Transactions</h2>
        <div className="flex items-center space-x-3">
          <ExportTransactions />
          {role === 'admin' && (
            <button
              onClick={() => setIsModalOpen(true)}
              className="btn-primary flex items-center space-x-2"
            >
              <Plus size={18} />
              <span>Add Transaction</span>
            </button>
          )}
        </div>
      </div>

      {/* Basic Filters */}
      <div className="card p-6 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {/* Search */}
          <div className="relative lg:col-span-2">
            <Search className="absolute left-3 top-3 text-gray-400 dark:text-gray-500" size={18} />
            <input
              type="text"
              placeholder="Search transactions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
            />
          </div>

          {/* Category Filter */}
          <select
            onChange={(e) => setFilteredCategory(e.target.value || null)}
            className="px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
          >
            <option value="">All Categories</option>
            {categories.map(category => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>

          {/* Sort */}
          <select
            onChange={(e) => setSortBy(e.target.value)}
            defaultValue="date"
            className="px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
          >
            <option value="date">Date (Newest)</option>
            <option value="amount-high">Amount (High to Low)</option>
            <option value="amount-low">Amount (Low to High)</option>
          </select>

          {/* Toggle Advanced Filters */}
          <button
            onClick={() => setExpandedFilters(!expandedFilters)}
            className="flex items-center justify-center space-x-2 px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
          >
            <span>More</span>
            <ChevronDown size={18} className={`transition-transform ${expandedFilters ? 'rotate-180' : ''}`} />
          </button>
        </div>

        {/* Advanced Filters */}
        {expandedFilters && (
          <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700 grid grid-cols-1 md:grid-cols-3 gap-4 animate-in fade-in slide-in-from-top">
            {/* Transaction Type Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Transaction Type
              </label>
              <select
                value={transactionTypeFilter || ''}
                onChange={(e) => setTransactionTypeFilter(e.target.value || null)}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
              >
                <option value="">All Types</option>
                <option value="income">Income</option>
                <option value="expense">Expense</option>
              </select>
            </div>

            {/* Date Range Start */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Start Date
              </label>
              <input
                type="date"
                onChange={(e) => setDateRange(prev => ({ ...prev, start: e.target.value }))}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
              />
            </div>

            {/* Date Range End */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                End Date
              </label>
              <input
                type="date"
                onChange={(e) => setDateRange(prev => ({ ...prev, end: e.target.value }))}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
              />
            </div>

            {/* Amount Range */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Min Amount ($)
              </label>
              <input
                type="number"
                min="0"
                value={amountRange.min}
                onChange={(e) => setAmountRange(prev => ({ ...prev, min: parseFloat(e.target.value) || 0 }))}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Max Amount ($)
              </label>
              <input
                type="number"
                min="0"
                value={amountRange.max}
                onChange={(e) => setAmountRange(prev => ({ ...prev, max: parseFloat(e.target.value) || 100000 }))}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
              />
            </div>
          </div>
        )}
      </div>

      {/* Transactions Table */}
      <TransactionsTable />

      {/* Add Transaction Modal */}
      {isModalOpen && (
        <AddTransactionModal onClose={() => setIsModalOpen(false)} />
      )}
    </div>
  );
}
