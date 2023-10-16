import css from './Statistics.module.css';
export const Statistics = ({ title = false, stats }) => {
  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 1677215)
      .toString(16)
      .padStart(6, 0)}`;
  }

  const itemStyles = { backgroundColor: getRandomHexColor() };
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}

      <ul className={css.statList}>
        {stats.map(stats => {
          return (
            <li className={css.item} key={stats.id} style={itemStyles}>
              <span className={css.label}>{stats.label}</span>
              <span className={css.percentage}>{`${stats.percentage}%`}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
