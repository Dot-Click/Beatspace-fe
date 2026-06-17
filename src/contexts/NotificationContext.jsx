import React, { createContext, useContext, useState, useEffect } from "react";
import { io } from "socket.io-client";
import custAxios, { baseURL } from "../configs/axios.config";
import { useAuthContext } from "./AuthContext";

const NotificationContext = createContext();

const SOCKET_URL = baseURL.replace(/\/api$/, "");

export const NotificationProvider = ({ children }) => {
  const [notifications, setNotifications] = useState([]);
  const [unreadCount, setUnreadCount] = useState(0);
  const { isAuthenticated } = useAuthContext();

  const fetchNotifications = async () => {
    try {
      const response = await custAxios.get("/notfs", { withCredentials: true });
      const fetchedNotifications = response.data.data || [];
      setNotifications(fetchedNotifications);
      setUnreadCount(fetchedNotifications.filter(n => !n.isRead).length);
    } catch {
      // silently ignore — axios.config.js silent-401 guard prevents logout
    }
  };

  useEffect(() => {
    if (!isAuthenticated) {
      setNotifications([]);
      setUnreadCount(0);
      return;
    }

    fetchNotifications();

    const socket = io(SOCKET_URL, {
      withCredentials: true,
      transports: ["websocket", "polling"],
    });

    socket.on("new-notification", (notification) => {
      setNotifications((prev) => [notification, ...prev]);
      setUnreadCount((prev) => prev + 1);
    });

    socket.on("connect_error", () => {});

    return () => {
      socket.disconnect();
    };
  }, [isAuthenticated]);

  const markAsRead = async (id) => {
    try {
      await custAxios.patch(`/notfs/${id}`, {}, { withCredentials: true });
      setNotifications((prev) =>
        prev.map((n) => (n._id === id ? { ...n, isRead: true } : n))
      );
      setUnreadCount((prev) => Math.max(0, prev - 1));
    } catch {
      // silently ignore
    }
  };

  const markAllAsRead = async () => {
    try {
      await custAxios.patch("/notfs/mark-all-read", {}, { withCredentials: true });
      setNotifications((prev) => prev.map((n) => ({ ...n, isRead: true })));
      setUnreadCount(0);
    } catch {
      // silently ignore
    }
  };

  return (
    <NotificationContext.Provider
      value={{ notifications, unreadCount, markAsRead, markAllAsRead, fetchNotifications }}
    >
      {children}
    </NotificationContext.Provider>
  );
};

export const useNotifications = () => useContext(NotificationContext);
