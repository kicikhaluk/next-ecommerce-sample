'use client';

import * as React from 'react';

import TabList from './tab-list.component';
import TabTrigger from './tab-trigger.component';
import TabContent from './tab-content.component';
import TabPane from './tab-pane.component';

import styles from './tab.module.scss';

interface ITabContext {
  activeTab: string;
  setActiveTab: (id: string) => void;
}

const TabContext = React.createContext<ITabContext | undefined>(undefined);
TabContext.displayName = 'Tab Context';

interface ITab {
  children: React.ReactNode | React.ReactNode[];
  defaultActiveTab?: string;
}

const Tab = ({ children, defaultActiveTab }: ITab) => {
  const [activeTab, setActiveTab] = React.useState(defaultActiveTab || '');

  const contextValue = {
    activeTab,
    setActiveTab,
  };

  return (
    <TabContext.Provider value={contextValue}>
      <div className={styles.tab}>{children}</div>
    </TabContext.Provider>
  );
};

Tab.List = TabList;
Tab.Trigger = TabTrigger;
Tab.Content = TabContent;
Tab.Pane = TabPane;

export const useTabContext = () => {
  const context = React.useContext(TabContext);
  if (!context) {
    throw new Error(
      'useTabContext can not be used outside of the Tab Component'
    );
  }
  return context;
};

export default Tab;
