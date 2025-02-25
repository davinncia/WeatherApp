import React, { createContext, useContext, useState, ReactNode } from 'react';

type AppContextType = {
  cityName: string | null;
  setCityName: (name: string | null) => void;
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [cityName, setCityName] = useState<string | null>("Paris");

  return (
    <AppContext.Provider value={{ cityName, setCityName }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};
