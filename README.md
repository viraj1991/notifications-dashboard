# Notifications Analytics Dashboard

A single-page dashboard visualizing notification data from the JSONPlaceholder API, with interactive filters, KPI cards, charts, and a notifications table supporting read/unread state management.

## 🚀 Features

- **Real-time KPI Tracking**: Total notifications, read/unread counts, unique senders
- **Advanced Filtering**: Combined status, category, and sender search filters with AND logic
- **Responsive Design**: Mobile-friendly interface built with Tailwind CSS
- **Comprehensive Testing**: Filter combination and KPI update tests

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Charts**: Recharts
- **Icons**: Lucide React
- **Testing**: Jest + React Testing Library
- **State Management**: React Context 

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/viraj1991/notifications-dashboard.git
cd notifications-dashboard-gk

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🔄 Key Design Decisions

-> State Management: React Context with useMemo for efficient derived state (filtered notifications, KPIs, chart data).

-> Data Fetching: Custom hook useNotifications handles API calls.

-> Race-Condition Handling on Refresh: Uses AbortController to cancel in-flight requests. Rapid refresh clicks abort previous fetches, ensuring only the latest response updates the state and preventing stale/mixed data.

-> Filtering: Central AND logic applied to all components (KPIs, charts, table).

-> UI: Tailwind CSS for styling, Lucide icons for modern visuals, Recharts for charts.

## 🧪 Testing

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

```

## 🔄 Limitations

-> Read/unread state is client-side only (resets on refresh).

-> No pagination in the notifications table.

-> No persistence or backend integration.

## 🔄Future Improvements

-> Persist read state with localStorage.

-> Add table pagination or virtualization.
