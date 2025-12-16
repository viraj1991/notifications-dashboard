'use client';

import Header from '../components/Header';
import Filters from '../components/Filters';
import KPICards from '../components/KPICards';
import ChartA from '../components/ChartA';
import ChartB from '../components/ChartB';
import NotificationsTable from '../components/NotificationsTable';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorMessage from '../components/ErrorMessage';
import { AppProvider, useAppContext } from '../context/AppContext';

function DashboardContent() {
  const { loading, error } = useAppContext();

  if (error) return <ErrorMessage />;
  if (loading) return <LoadingSpinner />;

  return (
    <>
      <Header />
      <Filters />
      <KPICards />
      <div className="flex gap-4">
        <ChartA />
        <ChartB />
      </div>
      <NotificationsTable />
    </>
  );
}

export default function Home() {
  return (
    <AppProvider>
      <DashboardContent />
    </AppProvider>
  );
}