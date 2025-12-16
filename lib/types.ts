export interface Notification {
  id: number;
  categoryId: number; 
  title: string; 
  sender: string; 
  message: string; 
  isRead: boolean; 
}

export interface FilterState {
  status: 'All' | 'Read' | 'Unread';
  category: string; 
  search: string;
}

export interface KPI {
  total: number;
  unread: number;
  read: number;
  uniqueSenders: number;
}