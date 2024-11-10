import styles from './tab.module.scss';

interface ITabList {
  children: React.ReactNode | React.ReactNode[];
}

const TabList = ({ children }: ITabList) => {
  return <div className={styles.tab_list}>{children}</div>;
};

export default TabList;
