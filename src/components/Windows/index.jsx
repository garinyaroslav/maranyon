import styles from './Windows.module.scss';

export const Windows = () => {
  return (
    <div className={styles.root}>
      <div className={styles.categoryOne}>
        <div className={styles.overlay}>
          <img src="/img/first.jpg" alt="category" />
        </div>
        <span>Жить с комфортом</span>
      </div>
      <div className={styles.categoryTwo}>
        <div className={styles.overlay}>
          <img src="" alt="category" />
        </div>
        <span>Лампы</span>
      </div>
      <div>
        <div className={styles.categoryTree}>
          <div className={styles.overlay}>
            <img src="" alt="category" />
          </div>
          <span>Всё для кухни</span>
        </div>
        <div className={styles.categoryTree}>
          <div className={styles.overlay}>
            <img src="" alt="category" />
          </div>
          <span>Электроника</span>
        </div>
      </div>
    </div>
  );
};
