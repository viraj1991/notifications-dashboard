import { useState, useEffect, useRef } from 'react';
import { Notification } from '../lib/types';

interface UseNotificationsReturn {
  notifications: Notification[];
  loading: boolean;
  error: boolean;
  refresh: () => void;
}

export function useNotifications(): UseNotificationsReturn {

  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const abortControllerRef = useRef<AbortController | null>(null);

  const fetchNotifications = async () => {

    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }

    setLoading(true);
    setError(false);

    const controller = new AbortController();
    abortControllerRef.current = controller;

    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/comments', {
        signal: controller.signal,
      });

      if (!res.ok) throw new Error('Failed to fetch');

      const data: any[] = await res.json();

      const mapped: Notification[] = data.slice(0, 200).map((item) => ({
        id: item.id,
        categoryId: item.postId,
        title: item.name,
        sender: item.email,
        message: item.body,
        isRead: false, 
      }));

      setNotifications(mapped);
    } catch (err: any) {
      if (err.name !== 'AbortError') {
        setError(true);
      }
    } finally {
      setLoading(false);

      if (abortControllerRef.current === controller) {
        abortControllerRef.current = null;
      }
    }
  };

  useEffect(() => {

    fetchNotifications();   
    return () => {
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
    };
  }, []);


  return {
    notifications,
    loading,
    error,
    refresh: fetchNotifications, 
  };
}