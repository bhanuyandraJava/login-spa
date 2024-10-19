import React, { createContext, useContext, useState } from 'react';

interface HexaWareAppContext {
    token: string | null;
    setToken: (token: string | null) => void;
}

const AppContext = createContext<HexaWareAppContext | undefined>(undefined);

export const HexaContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [token, setToken] = useState<string | null>(null);

    return (
        <AppContext.Provider value={{ token, setToken }}>
            {children}
        </AppContext.Provider>
    );
};

export const useHexawareContext = () => {
    const context = useContext(AppContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
