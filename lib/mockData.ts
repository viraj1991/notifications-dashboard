import { Notification } from './types';

export const mockNotifications: Notification[] = [
  {
    id: 1,
    categoryId: 1,
    title: 'Comment Added #1',
    sender: 'john.doe@example.com',
    message: 'This is an important notification regarding your account.',
    isRead: false,
  },
  {
    id: 2,
    categoryId: 1,
    title: 'New Message Received',
    sender: 'jane.smith@example.com',
    message: 'You have a new message in your inbox.',
    isRead: true,
  },
  {
    id: 3,
    categoryId: 2,
    title: 'Weekly Summary #3',
    sender: 'john.doe@example.com',
    message: 'A new update is available for your application.',
    isRead: false,
  },
  {
    id: 4,
    categoryId: 3,
    title: 'Security Alert',
    sender: 'security@company.com',
    message: 'We detected unusual activity on your account.',
    isRead: false,
  },
  {
    id: 5,
    categoryId: 2,
    title: 'Update Available',
    sender: 'updates@example.com',
    message: 'Version 2.0 is now live!',
    isRead: true,
  },
];