
import { render, screen, fireEvent } from '@testing-library/react';
import { AppProvider } from '../context/AppContext';
import Filters from '../components/Filters';
import KPICards from '../components/KPICards';
import NotificationsTable from '../components/NotificationsTable';
import { mockNotifications } from '../lib/mockData';
import * as UseNotifications from '../hooks/useNotifications';


jest.mock('../hooks/useNotifications', () => ({
  useNotifications: () => ({
    notifications: mockNotifications,
    loading: false,
    error: false,
    refresh: jest.fn(),
  }),
}));

const renderDashboard = () => {
  render(
    <AppProvider>
      <Filters />
      <KPICards />
      <NotificationsTable />
    </AppProvider>
  );
};

describe('Combined Filters', () => {
  it('applies status, category, and sender search filters together correctly', () => {
    renderDashboard();

    expect(screen.getByText(/Notifications List/i)).toHaveTextContent('(5)');

    fireEvent.change(screen.getByRole('combobox', { name: /STATUS FILTER/i }), {
      target: { value: 'Unread' },
    });
    expect(screen.getByText(/Notifications List/i)).toHaveTextContent('(3)');

    fireEvent.change(screen.getByRole('combobox', { name: /CATEGORY FILTER/i }), {
      target: { value: '1' },
    });
    expect(screen.getByText(/Notifications List/i)).toHaveTextContent('(1)');

    fireEvent.change(screen.getByPlaceholderText(/Search by email/i), {
      target: { value: 'john' },
    });
    expect(screen.getByText(/Notifications List/i)).toHaveTextContent('(1)');

    fireEvent.change(screen.getByPlaceholderText(/Search by email/i), {
      target: { value: 'jane' },
    });
    expect(screen.getByText(/Notifications List/i)).toHaveTextContent('(0)');
  });
});