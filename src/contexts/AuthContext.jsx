import React, { createContext, useContext, useState, useEffect, useRef } from 'react';

const AuthContext = createContext();

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuthContext must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState({
    isAuthenticated: false,
    isLoading: true,
    lastCheck: 0
  });

  const mountedRef = useRef(true);
  const checkIntervalRef = useRef(null);

  useEffect(() => {
    const handleAuthChange = () => {
      setAuthState(prev => ({
        isAuthenticated: false,
        isLoading: false,
        lastCheck: Date.now()
      }));
    };

    handleAuthChange();

    window.addEventListener('authChange', handleAuthChange);

    return () => {
      window.removeEventListener('authChange', handleAuthChange);
    };
  }, []);

  useEffect(() => {
    mountedRef.current = true;

    const updateAuthState = () => {
      const now = Date.now();

      if (now - authState.lastCheck < 3000) {
        return;
      }

      const newAuthState = {
        isAuthenticated: false,
        isLoading: false,
        lastCheck: now
      };

      if (mountedRef.current && (
        newAuthState.isAuthenticated !== authState.isAuthenticated ||
        newAuthState.isLoading !== authState.isLoading
      )) {
        setAuthState(newAuthState);
      }
    };

    updateAuthState();

    checkIntervalRef.current = setInterval(updateAuthState, 60000);

    return () => {
      mountedRef.current = false;
      if (checkIntervalRef.current) {
        clearInterval(checkIntervalRef.current);
      }
    };
  }, [authState.lastCheck]);

  const value = {
    ...authState,
    login: () => {
      setAuthState({
        isAuthenticated: true,
        isLoading: false,
        lastCheck: Date.now()
      });
      setTimeout(() => {
        window.dispatchEvent(new Event('authChange'));
      }, 100);
    },
    refreshAuth: () => {
      setAuthState(prev => ({ ...prev, lastCheck: 0 }));
    },
    logout: () => {
      setAuthState({
        isAuthenticated: false,
        isLoading: false,
        lastCheck: Date.now()
      });
      setTimeout(() => {
        window.dispatchEvent(new Event('authChange'));
      }, 100);
    }
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
