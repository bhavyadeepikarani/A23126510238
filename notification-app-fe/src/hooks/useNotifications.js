import { useState, useEffect } from "react";
import { fetchNotifications } from "../api/notifications";

export function useNotifications() {
  const [notifications, setNotifications] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const load = async () => {
      try {
        const data = await fetchNotifications();
        setNotifications(data.notifications || []);
        setTotal(data.notifications?.length || 0);
      } catch (err) {
        console.error(err);
      }
    };

    load();
  }, []);

  return {
    notifications,
    total,
    totalPages: 1,
    loading: false,
    error: null,
  };
}