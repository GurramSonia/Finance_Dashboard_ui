# Finance Dashboard UI

A modern, interactive finance dashboard built with React and Tailwind CSS. This application allows users to track their financial activity, view spending patterns, and manage transactions with role-based functionality.

## Features

### 1. **Dashboard Overview**
- Summary cards displaying Total Balance, Income, and Expenses
- Real-time calculation of financial totals
- Responsive card design with hover effects

### 2. **Visualizations**
- **Balance Trend Chart**: Line chart showing balance over time
- **Spending by Category**: Pie chart displaying expense breakdown by category

### 3. **Transactions Management**
- Comprehensive transaction list with multiple details
- **Search**: Find transactions by description or category
- **Filter**: Filter transactions by category
- **Sort**: Sort by date (newest first), amount (high to low), or amount (low to high)
- View transaction type (Income/Expense) with color coding

### 4. **Role-Based Access Control**
- **Viewer Mode**: Read-only access to all financial data
- **Admin Mode**: Full access including ability to add, edit, and delete transactions
- Easy role switching via dropdown selector in header

### 5. **Financial Insights**
- Highest spending category identification
- Savings rate calculation
- Average transaction value by category
- Quick tips and recommendations based on spending patterns

### 6. **Responsive Design**
- Works seamlessly on desktop, tablet, and mobile devices
- Grid layouts that adapt to screen size
- Mobile-optimized navigation and forms

## Tech Stack

- **Frontend Framework**: React 18.3.1
- **Build Tool**: Vite
- **Styling**: Tailwind CSS 3.4.3
- **State Management**: React Context API
- **Charts**: Recharts 2.12.7
- **Icons**: Lucide React 0.408.0

## Project Structure

```
finance-dashboard-ui/
├── src/
│   ├── components/
│   │   ├── Header.jsx                 # Navigation and role switcher
│   │   ├── DashboardOverview.jsx      # Summary cards
│   │   ├── BalanceTrendChart.jsx      # Balance trend visualization
│   │   ├── SpendingChart.jsx          # Spending by category chart
│   │   ├── InsightsSection.jsx        # Financial insights
│   │   ├── TransactionsSection.jsx    # Transaction filters and layout
│   │   ├── TransactionsTable.jsx      # Transaction list with actions
│   │   ├── AddTransactionModal.jsx    # Modal to add transactions
│   │   └── EditTransactionModal.jsx   # Modal to edit transactions
│   ├── context/
│   │   └── FinanceContext.jsx         # State management with Context API
│   ├── data/
│   │   └── mockData.js                # Mock transaction data and utilities
│   ├── App.jsx                        # Main app component
│   ├── App.css                        # Custom animations
│   ├── index.css                      # Global styles with Tailwind
│   └── main.jsx                       # Entry point
├── index.html                         # HTML template
├── package.json                       # Project dependencies
├── vite.config.js                     # Vite configuration
├── tailwind.config.js                 # Tailwind theme configuration
├── postcss.config.js                  # PostCSS configuration
└── README.md                          # This file
```

## Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Steps

1. **Clone or navigate to the project directory**
```bash
cd Finance_Dashboard_Ui
```

2. **Install dependencies**
```bash
npm install
```

3. **Start the development server**
```bash
npm run dev
```

4. **Open in browser**
The application will automatically open at `http://localhost:3000`

## Usage Guide

### Switching Roles
1. Click the role selector in the top-right corner of the header
2. Choose between "Viewer Mode" and "Admin Mode"

### Viewer Mode
- View all dashboard data and transactions
- Search, filter, and sort transactions
- Analyze spending patterns and insights
- No ability to modify data

### Admin Mode
- All Viewer Mode features
- Click "Add Transaction" button to create new transactions
- Click the edit icon (✏️) on any transaction to modify it
- Click the delete icon (🗑️) to remove transactions

### Managing Transactions
1. **Add Transaction**
   - Click "Add Transaction" button (Admin mode only)
   - Enter amount, type (income/expense), category, and description
   - Click "Add Transaction" to save

2. **Edit Transaction**
   - Click the edit icon next to transaction (Admin mode only)
   - Modify any field
   - Click "Save Changes" to update

3. **Delete Transaction**
   - Click the delete icon next to transaction (Admin mode only)
   - Transaction is immediately removed

### Filtering and Searching
1. **Search**: Type in the search box to find transactions by description or category
2. **Category Filter**: Select a category from dropdown to show only those transactions
3. **Sort**: Choose sort order from the sort dropdown

## Data Management

### Mock Data
The application comes with 15 pre-populated transactions demonstrating various:
- Income sources (Salary, Freelance)
- Expense categories (Rent, Groceries, Entertainment, etc.)
- Transaction types and amounts

### Data Persistence
Currently, data is stored in React state and will reset on page refresh. For production:
- Consider using localStorage for persistence
- Implement a backend API for data storage
- Add authentication for multi-user support

## Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` directory.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint (if configured)

## Component Architecture

### State Management
The app uses **React Context API** for state management, handling:
- Transactions data
- Current user role
- Active filters and search terms
- Sort preferences

### Key Utilities
- `calculateTotals()`: Computes income, expenses, and balance
- `getSpendingByCategory()`: Aggregates expenses by category
- `getMonthlyTrend()`: Creates daily balance trend data

## Design Decisions

1. **Context API over Redux**: Chosen for simplicity and lower bundle size. Redux can be added if the app scales.

2. **Mock Data**: Uses static data for demonstration. Easy to replace with API calls.

3. **Tailwind CSS**: Provides utility-first CSS with minimal custom CSS needed.

4. **Recharts**: Lightweight charting library perfect for financial visualizations.

5. **Role-Based UI**: Frontend-only RBAC for demonstration. Backend validation needed for real security.

## Future Enhancements

- [ ] Dark mode support
- [ ] Data persistence with localStorage
- [ ] Backend API integration
- [ ] User authentication
- [ ] Export to CSV/PDF
- [ ] Advanced filtering (date range, amount range)
- [ ] Budget planning features
- [ ] Transaction categories customization
- [ ] Recurring transactions
- [ ] Multi-currency support

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance Optimizations

- React 18 concurrent rendering
- Vite's fast build process
- Tailwind CSS purging unused styles
- Efficient filtering and sorting algorithms
- Memoized chart data computations

## Troubleshooting

**App not starting?**
- Clear node_modules: `rm -rf node_modules && npm install`
- Check Node.js version: `node --version` (should be v16+)

**Styles not applying?**
- Ensure Tailwind CSS is built: `npm run dev`
- Check in browser DevTools for CSS loading

**Charts not displaying?**
- Verify Recharts is installed: `npm list recharts`
- Check browser console for errors

## License

This project is created for educational purposes.

## Author

**Sonia Gurramavari**  
Frontend Developer Intern  
soniagurramvari@gmail.com

---

**Assignment Submission**: Finance Dashboard UI for Zorvyn FinTech  
**Deadline**: April 6, 2026
