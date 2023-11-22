import React from 'react';

import { scrollUp } from '../../utils/scrollUp';
import { Slick } from '../../components';

import styles from './FullProduct.module.scss';

export const FullProduct = () => {
  React.useEffect(() => {
    scrollUp();
  }, []);

  return (
    <div className={styles.root}>
      <div className={styles.productBlock}>
        <div className={styles.imgSide}>
          <div className={styles.imgContainer}>
            <img
              src="https://cdn.leroymerlin.ru/lmru/image/upload/v1690792609/b_white,c_pad,d_photoiscoming.png,f_auto,h_2000,q_auto,w_2000/lmcode/zDmWnDfYFkeZV09qEaUvYQ/18596885.png"
              alt="productphoto"
            />
          </div>
          <div className={styles.selector}>
            <img
              src="https://cdn.leroymerlin.ru/lmru/image/upload/v1690792609/b_white,c_pad,d_photoiscoming.png,f_auto,h_2000,q_auto,w_2000/lmcode/zDmWnDfYFkeZV09qEaUvYQ/18596885.png"
              alt="porductminiphoto"
            />
            <img
              src="https://cdn.leroymerlin.ru/lmru/image/upload/v1690792609/b_white,c_pad,d_photoiscoming.png,f_auto,h_2000,q_auto,w_2000/lmcode/aMbmhkzAcECu92idc9G9Mw/18596885_01.png"
              alt="porductminiphoto"
            />
            <img
              src="https://cdn.leroymerlin.ru/lmru/image/upload/v1690792609/b_white,c_pad,d_photoiscoming.png,f_auto,h_2000,q_auto,w_2000/lmcode/gE0M9sO1t0Gjn7ZXRTsOnw/18596885_07.png"
              alt="porductminiphoto"
            />
          </div>
        </div>
        <div className={styles.textSide}>
          <p>
            Банкетка Альберо выполнена из массива древесины. Оборудована двумя полочками для обуви,
            и третьей, предназначенной для удобства обувания. Подходит для размещения в прихожей.
            Благодаря лаконичному дизайну и нейтральному белому цвету хорошо впишется в современные
            интерьеры. Простая конструкция обеспечивает легкий уход. Поверхность очищается от
            загрязнений и пыли при помощи влажной ветоши.
          </p>
          <div className={styles.price}>
            <span>Колличество</span>
            <div className={styles.quantity}>
              <div className={styles.plus}>-</div>
              <div className={styles.count}>1</div>
              <div className={styles.minus}>+</div>
            </div>
            <span>3499₽</span>
          </div>
          <div className={styles.buttons}>
            <div className={styles.cart}>В корзину</div>
            <div className={styles.bay}>Купить сейчас</div>
          </div>
        </div>
      </div>
      <div className={styles.about}></div>
      <Slick />
    </div>
  );
};
