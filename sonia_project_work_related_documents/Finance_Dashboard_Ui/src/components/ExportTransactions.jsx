import { Download } from 'lucide-react';
import { useFinance } from '../context/FinanceContext';

export default function ExportTransactions() {
  const { getFilteredTransactions } = useFinance();
  const transactions = getFilteredTransactions();

  const exportToCSV = () => {
    if (transactions.length === 0) {
      alert('No transactions to export');
      return;
    }

    const headers = ['Date', 'Description', 'Category', 'Type', 'Amount'];
    const data = transactions.map(t => [
      t.date,
      t.description,
      t.category,
      t.type,
      t.amount,
    ]);

    const csvContent = [
      headers.join(','),
      ...data.map(row => row.join(',')),
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', `transactions_${new Date().toISOString().split('T')[0]}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const exportToJSON = () => {
    if (transactions.length === 0) {
      alert('No transactions to export');
      return;
    }

    const jsonData = JSON.stringify(transactions, null, 2);
    const blob = new Blob([jsonData], { type: 'application/json;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', `transactions_${new Date().toISOString().split('T')[0]}.json`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="flex space-x-2">
      <button
        onClick={exportToCSV}
        className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors"
        title="Download as CSV"
      >
        <Download size={18} />
        <span>CSV</span>
      </button>
      <button
        onClick={exportToJSON}
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors"
        title="Download as JSON"
      >
        <Download size={18} />
        <span>JSON</span>
      </button>
    </div>
  );
}
