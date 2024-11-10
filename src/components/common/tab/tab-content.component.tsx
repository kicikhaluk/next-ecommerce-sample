import styles from './tab.module.scss';

interface ITabContent {
  children: React.ReactNode | React.ReactNode[];
}

const TabContent = ({ children }: ITabContent) => {
  return <div className={styles.tab_content}>{children}</div>;
};

export default TabContent;
