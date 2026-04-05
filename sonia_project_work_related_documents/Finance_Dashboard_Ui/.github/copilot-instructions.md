# Finance Dashboard UI - Project Instructions

## Project Overview
This is a React-based Finance Dashboard UI application built with Vite, Tailwind CSS, and Recharts. It features a comprehensive interface for tracking financial activity with role-based access control.

## Completed Setup Steps

### ✅ Project Initialization
- Created Vite React project with ES module support
- Installed all required dependencies:
  - React 18.3.1
  - Recharts 2.12.7
  - Tailwind CSS 3.4.3
  - Lucide React for icons
  - PostCSS and Autoprefixer for CSS processing

### ✅ Configuration Files
- `vite.config.js` - Vite build configuration
- `tailwind.config.js` - Tailwind theme customization
- `postcss.config.js` - PostCSS plugin configuration
- `.gitignore` - Git ignore patterns

### ✅ Project Structure
- `src/components/` - All React components
- `src/context/` - FinanceContext for state management
- `src/data/` - Mock data and utility functions
- `index.html` - HTML entry point
- `src/main.jsx` - React root
- `src/App.jsx` - Main app component

### ✅ Features Implemented
1. Dashboard Overview with summary cards
2. Balance Trend Chart (Line chart visualization)
3. Spending by Category Chart (Pie chart visualization)
4. Transactions section with:
   - Search functionality
   - Category filtering
   - Sorting options
   - Add/Edit/Delete operations (Admin only)
5. Role-Based UI:
   - Viewer Mode: Read-only access
   - Admin Mode: Full CRUD operations
6. Financial Insights section
7. Responsive design for all screen sizes

### ✅ State Management
- Context API for global state
- Handling of transactions data
- Role management
- Filter and search state
- Sort preferences

### ✅ Documentation
- Comprehensive README.md with:
  - Feature overview
  - Installation instructions
  - Usage guide
  - Build and deployment information
  - Component architecture explanation

## Running the Application

### Development Server
```bash
npm run dev
```
Application runs at `http://localhost:3000/`

### Production Build
```bash
npm run build
```
Creates optimized build in `dist/` directory

### Preview Production Build
```bash
npm run preview
```

## Key Technologies
- **Framework**: React 18.3.1
- **Build Tool**: Vite 5.2.0
- **Styling**: Tailwind CSS 3.4.3
- **Charts**: Recharts 2.12.7
- **Icons**: Lucide React 0.408.0
- **State Management**: React Context API

## Design Patterns Used
1. React Functional Components with Hooks
2. Context API for global state management
3. Custom hooks (useFinance)
4. Compound components for modals
5. Responsive grid layouts

## Features Explained

### Role-Based Access
- Switch roles using dropdown selector in header
- Viewer Mode: Read-only dashboard and transactions
- Admin Mode: Full transaction management capabilities

### Transaction Management
- Add: New transaction modal (Admin only)
- Edit: Inline edit modal (Admin only)
- Delete: One-click deletion (Admin only)
- Search: Real-time search across descriptions
- Filter: Filter by category
- Sort: Multiple sort options

### Visualizations
- Balance Trend: Shows cumulative balance over time
- Spending Categories: Pie chart with percentage breakdown

### Insights
- Highest spending category
- Savings rate calculation
- Average transaction value
- AI-generated tips based on data

## Data Structure

### Transaction Object
```javascript
{
  id: number,
  date: string (YYYY-MM-DD),
  amount: number,
  category: string,
  type: 'income' | 'expense',
  description: string
}
```

## Responsive Breakpoints
- Mobile: 0px - 767px (Single column layouts)
- Tablet: 768px - 1023px (2-column grids)
- Desktop: 1024px+ (3-column grids and full layout)

## Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Future Enhancement Opportunities
- Dark mode toggle
- LocalStorage for data persistence
- Backend API integration
- User authentication
- CSV/PDF export
- Date range filtering
- Budget planning
- Transaction categories customization
- Recurring transactions
- Multi-currency support

## Troubleshooting

**Port 3000 already in use?**
- Kill process: `npx kill-port 3000`
- Or specify different port: `npm run dev -- --port 3001`

**Styles not loading?**
- Clear cache: Delete `.vite` folder
- Restart dev server

**Module not found errors?**
- Reinstall dependencies: `rm -rf node_modules && npm install`

## Project Status
✅ **Complete and Ready for Submission**

All requirements met:
- Dashboard with summary cards and visualizations
- Transaction management with filtering/sorting
- Role-based UI with admin and viewer modes
- Financial insights section
- Responsive design
- Clean code structure
- Documentation
- State management

## Author
**Sonia Gurramavari**
Frontend Developer Intern
soniagurramvari@gmail.com

## Assignment Details
- **Position**: Frontend Developer Intern
- **Company**: Zorvyn FinTech Pvt. Ltd.
- **Project**: Finance Dashboard UI
- **Submission Deadline**: April 6, 2026
