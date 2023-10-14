import css from './Statistics.module.css';
export const Statistics = ({ title = false, stats }) => { 

    return (
        <section className={css.statistics}>
            {title && <h2 className={css.title}>Upload stats</h2>}
            
            <ul className={css.statList}>
                {stats.map(stats => {
                    return (
                        <li className={css.item} key={stats.id}>
                            <span className={css.label}>{stats.label}</span>
                            <span className={css.percentage}>{`${ stats.percentage }%`}</span>
                        </li>);
                })}
                
            </ul>
        </section> 
    )
}


          