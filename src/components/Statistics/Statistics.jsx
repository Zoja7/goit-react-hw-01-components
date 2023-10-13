export const Statistics = ({ title=false, stats }) => { 

    return (
        <section className="statistics">
            {title && <h2 className="title">Upload stats</h2>}
            
            <ul className="stat-list">
                {stats.map(stats => {
                    return (
                        <li className="item" key={stats.id}>
                            <span className="label">{stats.label}</span>
                            <span className="percentage">{stats.percentage}</span>
                        </li>);
                })}
                
            </ul>
        </section> 
    )
}


          