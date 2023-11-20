import { Link } from 'react-router-dom';

import { scrollUp } from '../../utils/scrollUp';

import styles from './Windows.module.scss';

export const Windows = () => {
  return (
    <div className={styles.root}>
      <div className={styles.categoryOne}>
        <Link to="categories">
          <div onClick={scrollUp} className={styles.overlay}></div>
        </Link>
        <img src="/img/1.png" alt="category" />
        <span>Жить с комфортом</span>
      </div>
      <div className={styles.categoryTwo}>
        <Link to="categories">
          <div onClick={scrollUp} className={styles.overlay}></div>
        </Link>
        <img src="/img/2.png" alt="category" />
        <span>Люстры</span>
      </div>
      <div className={styles.categoryTree}>
        <Link to="categories">
          <div onClick={scrollUp} className={styles.overlay}></div>
        </Link>
        <img src="/img/3.png" alt="category" />
        <span>Всё для кухни</span>
      </div>
      <div className={styles.categoryFour}>
        <Link to="categories">
          <div onClick={scrollUp} className={styles.overlay}></div>
        </Link>
        <img src="/img/4.png" alt="category" />
        <span>Электроника</span>
      </div>
    </div>
  );
};
