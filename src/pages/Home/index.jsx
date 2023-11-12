import { Windows, ProductBlock } from '../../components';

import styles from './Home.module.scss';

export const Home = () => {
  return (
    <div className={styles.root}>
      <Windows />
      <div className={styles.proud}>
        <h2>Продукция, которой мы гордимся</h2>
        <div className={styles.gridContainer}>
          <ProductBlock />
          <ProductBlock />
          <ProductBlock />
          <ProductBlock />
          <ProductBlock />
          <ProductBlock />
          <ProductBlock />
          <ProductBlock />
        </div>
      </div>
      <div className={styles.banner}>
        <div className={styles.textSide}>
          <h2>Творческая и гармоничная жизнь</h2>
          <p>
            Вся продукция Maranyon изготавливается по стандартным размерам, поэтому вы можете
            свободно комбинировать их.
          </p>
          <button>Начать покупки</button>
        </div>
        <div className={styles.imageSide}>
          <img src="/img/bannerImage1.png" alt="banner" />
        </div>
      </div>
    </div>
  );
};