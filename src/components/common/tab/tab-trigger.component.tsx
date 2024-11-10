import clsx from 'clsx';
import { useTabContext } from './tab.component';

import styles from './tab.module.scss';

interface ITabTrigger {
  id: string;
  title: string;
}

const TabTrigger = ({ id, title }: ITabTrigger) => {
  const { activeTab, setActiveTab } = useTabContext();

  const handleClick = () => {
    setActiveTab(id);
  };

  return (
    <button
      className={clsx(styles.tab_trigger, activeTab === id && styles.active)}
      onClick={handleClick}
      role='tab'
    >
      {title}
    </button>
  );
};

export default TabTrigger;
