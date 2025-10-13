import React, { createContext, useContext, useState } from 'react';

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
    isLoading: false
  });

  const value = {
    ...authState,
    login: () => {
      setAuthState({
        isAuthenticated: true,
        isLoading: false
      });
    },
    logout: () => {
      setAuthState({
        isAuthenticated: false,
        isLoading: false
      });
    }
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
