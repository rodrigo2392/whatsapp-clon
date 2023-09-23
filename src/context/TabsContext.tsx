import React from 'react';
import {createContext, useState} from 'react';

interface TabsContextProp {
  selectedType: string;
  setSelectedType: (value: string) => void;
}

export const TabContext = createContext<TabsContextProp>({
  selectedType: 'CHAT',
  setSelectedType: () => {
    throw 'Not implemented';
  },
});

export default function ContextProvider({children}: any) {
  const [selectedType, setSelectedType] = useState('CHAT');
  return (
    <TabContext.Provider value={{selectedType, setSelectedType}}>
      {children}
    </TabContext.Provider>
  );
}
