import css from './TransactionHistory.module.css';
export const TransactionHistory = ({ items }) => { 

    return (
        <table className={css.transactionHistory}>
            <thead className={css.tableHead}>
                <tr className={css.tableHeadRow}>
                    <th className={css.tableHeadText}>Type</th>
                    <th className={css.tableHeadText}>Amount</th>
                    <th className={css.tableHeadText}>Currency</th>
                </tr>
            </thead>

            <tbody className={css.tableBody}>
                {items.map(({ id,type,amount,currency}) => {
                    return (
                        <tr className={css.tableRow} key={id}>
                            <td className={css.tableRowType}>{type}</td>
                            <td className={css.tableRowAmount}>{amount}</td>
                            <td className={css.tableRowCurrency} >{currency}</td>
                        </tr>
                    );
                 })
                }
            </tbody>
        </table>
    )

}