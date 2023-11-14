import { Link } from 'react-router-dom';

import { Windows, ProductBlock, Slick } from '../../components';

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
          <Link to="categories">
            <button>Начать покупки</button>
          </Link>
        </div>
        <div className={styles.imageSide}>
          <img src="/img/bannerImage1.png" alt="banner" />
        </div>
      </div>
      <div className={styles.slyder}>
        <h1>Сейчас в тренде</h1>
        <Slick />
      </div>
      <div className={styles.bannerRight}>
        <div className={styles.imageSide}>
          <img src="/img/bannerImage1.png" alt="banner" />
        </div>
        <div className={styles.textSide}>
          <h2>Творческая и гармоничная жизнь</h2>
          <p>
            Вся продукция Maranyon изготавливается по стандартным размерам, поэтому вы можете
            свободно комбинировать их.
          </p>
          <Link to="categories">
            <button>Начать покупки</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
