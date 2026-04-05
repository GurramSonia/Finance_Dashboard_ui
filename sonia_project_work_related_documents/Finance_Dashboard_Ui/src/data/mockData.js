export const mockTransactions = [
  { id: 1, date: '2024-04-01', amount: 2500, category: 'Salary', type: 'income', description: 'Monthly salary' },
  { id: 2, date: '2024-04-02', amount: 150, category: 'Groceries', type: 'expense', description: 'Weekly groceries' },
  { id: 3, date: '2024-04-03', amount: 1200, category: 'Rent', type: 'expense', description: 'Monthly rent' },
  { id: 4, date: '2024-04-04', amount: 75, category: 'Entertainment', type: 'expense', description: 'Movie tickets' },
  { id: 5, date: '2024-04-05', amount: 500, category: 'Freelance', type: 'income', description: 'Project payment' },
  { id: 6, date: '2024-04-06', amount: 45, category: 'Utilities', type: 'expense', description: 'Electric bill' },
  { id: 7, date: '2024-04-07', amount: 200, category: 'Healthcare', type: 'expense', description: 'Doctor visit' },
  { id: 8, date: '2024-04-08', amount: 300, category: 'Dining', type: 'expense', description: 'Restaurant' },
  { id: 9, date: '2024-04-09', amount: 1000, category: 'Investment', type: 'expense', description: 'Stock purchase' },
  { id: 10, date: '2024-04-10', amount: 120, category: 'Transport', type: 'expense', description: 'Gas and parking' },
  { id: 11, date: '2024-04-11', amount: 80, category: 'Groceries', type: 'expense', description: 'Shopping' },
  { id: 12, date: '2024-04-12', amount: 250, category: 'Entertainment', type: 'expense', description: 'Concert tickets' },
  { id: 13, date: '2024-04-13', amount: 2500, category: 'Salary', type: 'income', description: 'Monthly salary' },
  { id: 14, date: '2024-04-14', amount: 95, category: 'Utilities', type: 'expense', description: 'Internet bill' },
  { id: 15, date: '2024-04-15', amount: 600, category: 'Dining', type: 'expense', description: 'Monthly eating out' },
];

export const categoryColors = {
  Salary: '#10b981',
  Freelance: '#06b6d4',
  Rent: '#ef4444',
  Groceries: '#f59e0b',
  Entertainment: '#8b5cf6',
  Healthcare: '#ec4899',
  Dining: '#6366f1',
  Utilities: '#14b8a6',
  Transport: '#f97316',
  Investment: '#6b7280',
};

export const getSpendingByCategory = (transactions) => {
  const spending = {};
  transactions.forEach(transaction => {
    if (transaction.type === 'expense') {
      spending[transaction.category] = (spending[transaction.category] || 0) + transaction.amount;
    }
  });
  return Object.entries(spending).map(([name, value]) => ({
    name,
    value,
  })).sort((a, b) => b.value - a.value);
};

export const getMonthlyTrend = (transactions) => {
  const byDate = {};
  const balance = { income: 0, expense: 0 };
  
  transactions.sort((a, b) => new Date(a.date) - new Date(b.date)).forEach(transaction => {
    const date = transaction.date;
    if (!byDate[date]) {
      byDate[date] = { date, income: 0, expense: 0 };
    }
    if (transaction.type === 'income') {
      byDate[date].income += transaction.amount;
    } else {
      byDate[date].expense += transaction.amount;
    }
  });

  return Object.values(byDate).map(day => ({
    ...day,
    balance: (balance.income += day.income) - (balance.expense += day.expense)
  }));
};

export const calculateTotals = (transactions) => {
  const totals = {
    income: 0,
    expenses: 0,
    balance: 0,
  };

  transactions.forEach(transaction => {
    if (transaction.type === 'income') {
      totals.income += transaction.amount;
    } else {
      totals.expenses += transaction.amount;
    }
  });

  totals.balance = totals.income - totals.expenses;
  return totals;
};
