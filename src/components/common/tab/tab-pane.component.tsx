import clsx from 'clsx';
import { useTabContext } from './tab.component';

import styles from './tab.module.scss';

interface ITabPane {
  id: string;
  children: React.ReactNode | React.ReactNode[];
}

const TabPane = ({ id, children }: ITabPane) => {
  const { activeTab } = useTabContext();

  return (
    <div
      role='tabpanel'
      id={`panel-${id}`}
      className={clsx(styles.tab_pane, activeTab === id && styles.active)}
      hidden={activeTab !== id}
    >
      {children}
    </div>
  );
};

export default TabPane;
