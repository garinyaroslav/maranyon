import { Windows } from '../../components/Windows';

import styles from './Home.module.scss';

export const Home = () => {
  return (
    <div className={styles.root}>
      <Windows />
    </div>
  );
};
