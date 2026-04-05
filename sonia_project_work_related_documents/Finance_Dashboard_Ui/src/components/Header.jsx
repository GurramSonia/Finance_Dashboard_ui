import { useFinance } from '../context/FinanceContext';
import { BarChart3, Settings, Moon, Sun } from 'lucide-react';

export default function Header() {
  const { role, setRole, darkMode, setDarkMode } = useFinance();

  return (
    <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50 shadow-sm transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-primary p-2 rounded-lg">
              <BarChart3 className="text-white" size={24} />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Finance Dashboard</h1>
              <p className="text-sm text-gray-500 dark:text-gray-400">Track your financial activity</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            {/* Dark Mode Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {darkMode ? (
                <Sun size={20} className="text-yellow-500" />
              ) : (
                <Moon size={20} className="text-gray-600" />
              )}
            </button>

            {/* Role Selector */}
            <div className="flex items-center space-x-2 bg-gray-100 dark:bg-gray-800 rounded-lg p-1">
              <Settings size={18} className="text-gray-600 dark:text-gray-400 ml-2" />
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="bg-transparent px-3 py-2 font-medium text-gray-700 dark:text-gray-300 text-sm focus:outline-none cursor-pointer"
              >
                <option value="viewer">Viewer Mode</option>
                <option value="admin">Admin Mode</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
