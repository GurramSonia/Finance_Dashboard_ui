import { useState } from 'react';
import { FinanceProvider, useFinance } from './context/FinanceContext';
import Header from './components/Header';
import DashboardOverview from './components/DashboardOverview';
import BalanceTrendChart from './components/BalanceTrendChart';
import SpendingChart from './components/SpendingChart';
import TransactionsSection from './components/TransactionsSection';
import InsightsSection from './components/InsightsSection';
import './App.css';

function AppContent() {
  const { transactions } = useFinance();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 transition-colors">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Dashboard Overview */}
        <DashboardOverview transactions={transactions} />

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
          <BalanceTrendChart transactions={transactions} />
          <SpendingChart transactions={transactions} />
        </div>

        {/* Insights Section */}
        <InsightsSection transactions={transactions} />

        {/* Transactions Section */}
        <TransactionsSection />
      </main>
    </div>
  );
}

function App() {
  return (
    <FinanceProvider>
      <AppContent />
    </FinanceProvider>
  );
}

export default App;
