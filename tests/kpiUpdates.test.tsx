
import { render, screen, fireEvent } from '@testing-library/react';
import { AppProvider } from '../context/AppContext';
import Filters from '../components/Filters';
import KPICards from '../components/KPICards';
import NotificationsTable from '../components/NotificationsTable';
import { mockNotifications } from '../lib/mockData';


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

describe('KPI Updates', () => {
  it('updates KPIs when toggling read/unread status', () => {
    renderDashboard();

    const getKpiValue = (label: string) =>
      screen.getByText(label).closest('div')?.querySelector('p')?.textContent;

    expect(getKpiValue('Total Notifications')).toBe('5');
    expect(getKpiValue('Unread Count')).toBe('3');
    expect(getKpiValue('Read Count')).toBe('2');

    // Click first Unread button
    fireEvent.click(screen.getAllByRole('button', { name: /Unread/i })[0]);

    expect(getKpiValue('Unread Count')).toBe('2');
    expect(getKpiValue('Read Count')).toBe('3');
  });

  it('updates KPIs when marking all visible as read', () => {
    renderDashboard();

    fireEvent.change(screen.getByRole('combobox', { name: /STATUS FILTER/i }), {
      target: { value: 'Unread' },
    });

    expect(screen.getByText(/Notifications List/i)).toHaveTextContent('(3)');
    expect(screen.getByText('Unread Count').closest('div')?.querySelector('p')).toHaveTextContent('3');

    fireEvent.click(screen.getByRole('button', { name: /Mark all visible as read/i }));

    expect(screen.getByText('Unread Count').closest('div')?.querySelector('p')).toHaveTextContent('0');
    expect(screen.getByText(/Notifications List/i)).toHaveTextContent('(0)');
  });
});