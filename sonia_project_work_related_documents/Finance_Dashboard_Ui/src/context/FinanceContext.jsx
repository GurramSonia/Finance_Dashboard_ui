import React, { createContext, useState, useCallback, useEffect } from 'react';
import { mockTransactions as initialData } from '../data/mockData';

export const FinanceContext = createContext();

export const FinanceProvider = ({ children }) => {
  // Initialize with mock data or from localStorage
  const [transactions, setTransactions] = useState(() => {
    try {
      const saved = localStorage.getItem('financeTransactions');
      if (saved) {
        const parsed = JSON.parse(saved);
        // Use mock data if localStorage has empty array
        return Array.isArray(parsed) && parsed.length > 0 ? parsed : initialData;
      }
      return initialData;
    } catch (e) {
      return initialData;
    }
  });
  const [role, setRole] = useState('viewer');
  const [filteredCategory, setFilteredCategory] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('date');
  const [darkMode, setDarkMode] = useState(() => {
    try {
      const saved = localStorage.getItem('darkMode');
      return saved ? JSON.parse(saved) : false;
    } catch (e) {
      return false;
    }
  });
  const [dateRange, setDateRange] = useState({ start: '', end: '' });
  const [amountRange, setAmountRange] = useState({ min: 0, max: 100000 });
  const [transactionTypeFilter, setTransactionTypeFilter] = useState(null);
  const [loading, setLoading] = useState(false);

  // Apply dark mode on mount
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Save transactions to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('financeTransactions', JSON.stringify(transactions));
  }, [transactions]);

  // Save dark mode preference
  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  const addTransaction = useCallback((newTransaction) => {
    setLoading(true);
    // Simulate API delay
    setTimeout(() => {
      const transaction = {
        ...newTransaction,
        id: Math.max(...transactions.map(t => t.id), 0) + 1,
        date: new Date().toISOString().split('T')[0],
      };
      setTransactions([...transactions, transaction]);
      setLoading(false);
    }, 500);
  }, [transactions]);

  const editTransaction = useCallback((id, updatedTransaction) => {
    setLoading(true);
    setTimeout(() => {
      setTransactions(transactions.map(t => 
        t.id === id ? { ...t, ...updatedTransaction } : t
      ));
      setLoading(false);
    }, 500);
  }, [transactions]);

  const deleteTransaction = useCallback((id) => {
    setLoading(true);
    setTimeout(() => {
      setTransactions(transactions.filter(t => t.id !== id));
      setLoading(false);
    }, 300);
  }, [transactions]);

  const getFilteredTransactions = useCallback(() => {
    let filtered = transactions;

    // Category filter
    if (filteredCategory) {
      filtered = filtered.filter(t => t.category === filteredCategory);
    }

    // Transaction type filter
    if (transactionTypeFilter) {
      filtered = filtered.filter(t => t.type === transactionTypeFilter);
    }

    // Search term
    if (searchTerm) {
      filtered = filtered.filter(t =>
        t.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        t.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Date range filter
    if (dateRange.start) {
      filtered = filtered.filter(t => new Date(t.date) >= new Date(dateRange.start));
    }
    if (dateRange.end) {
      filtered = filtered.filter(t => new Date(t.date) <= new Date(dateRange.end));
    }

    // Amount range filter
    filtered = filtered.filter(t => t.amount >= amountRange.min && t.amount <= amountRange.max);

    // Sort
    let sorted = [...filtered];
    switch (sortBy) {
      case 'amount-high':
        sorted.sort((a, b) => b.amount - a.amount);
        break;
      case 'amount-low':
        sorted.sort((a, b) => a.amount - b.amount);
        break;
      case 'date':
      default:
        sorted.sort((a, b) => new Date(b.date) - new Date(a.date));
        break;
    }

    return sorted;
  }, [transactions, filteredCategory, transactionTypeFilter, searchTerm, sortBy, dateRange, amountRange]);

  const value = {
    transactions,
    role,
    setRole,
    filteredCategory,
    setFilteredCategory,
    searchTerm,
    setSearchTerm,
    sortBy,
    setSortBy,
    darkMode,
    setDarkMode,
    dateRange,
    setDateRange,
    amountRange,
    setAmountRange,
    transactionTypeFilter,
    setTransactionTypeFilter,
    loading,
    addTransaction,
    editTransaction,
    deleteTransaction,
    getFilteredTransactions,
  };

  return (
    <FinanceContext.Provider value={value}>
      {children}
    </FinanceContext.Provider>
  );
};

export const useFinance = () => {
  const context = React.useContext(FinanceContext);
  if (!context) {
    throw new Error('useFinance must be used within FinanceProvider');
  }
  return context;
};
