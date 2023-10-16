import css from './Statistics.module.css';
import { useState, useEffect } from 'react';

export const Statistics = ({ title = false, stats }) => {
  
  // function getRandomHexColor() {
  //   return `#${Math.floor(Math.random() * 1677215)
  //     .toString(16)
  //     .padStart(6, 0)}`;
  // }

  // const itemStyles = { backgroundColor: getRandomHexColor() };

  const [itemStyles, setItemStyles] = useState([]);

  useEffect(() => {
    function getRandomHexColor() {
      let color;
      do {
        color = `#${Math.floor(Math.random() * 1677215)
          .toString(16)
          .padStart(6, '0')}`;
      } while (itemStyles.includes(color));
      return color;
    }

    const newStyles = stats.map(() => {
      return { backgroundColor: getRandomHexColor() };
    });

    setItemStyles(newStyles);
    // eslint-disable-next-line
  }, [stats]);

  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}

      <ul className={css.statList}>
        {stats.map((stats, index) => {
          return (
            <li className={css.item} key={stats.id} style={itemStyles[index]}>
              <span className={css.label}>{stats.label}</span>
              <span className={css.percentage}>{`${stats.percentage}%`}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
