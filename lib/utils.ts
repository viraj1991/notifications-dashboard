import { Notification, FilterState, KPI } from './types'; 


export function filterNotifications(
  notifications: Notification[],
  filters: FilterState
): Notification[] {
  return notifications.filter((notif) => {
    const statusMatch =
      filters.status === 'All' ||
      (filters.status === 'Read' && notif.isRead) ||
      (filters.status === 'Unread' && !notif.isRead);

    const categoryMatch =
      filters.category === 'All' || notif.categoryId.toString() === filters.category;

    const searchMatch =
      !filters.search || notif.sender.toLowerCase().includes(filters.search.toLowerCase());

    return statusMatch && categoryMatch && searchMatch;
    
  });
}

export function computeKPIs(notifications: Notification[]): KPI {

  const total = notifications.length;
  const unread = notifications.filter((n) => !n.isRead).length;
  const read = total - unread;
  const uniqueSenders = new Set(notifications.map((n) => n.sender)).size;

  return { total, unread, read, uniqueSenders };
}

export function groupByCategory(

  notifications: Notification[]
): { category: string; count: number }[] {
  const groups = notifications.reduce((acc, notif) => {
    const key = notif.categoryId.toString();
    acc[key] = (acc[key] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  return Object.entries(groups)
    .map(([category, count]) => ({ category, count }))
    .sort((a, b) => parseInt(a.category) - parseInt(b.category));
}