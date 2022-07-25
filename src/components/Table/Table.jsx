import './Table.scss';

const Table = (props) => {
    return (
        <div className="table-container">
            <table className="table">
                <thead className="table-head">
                <tr className="table-row">
                    <th className="table-head-title table-head-title-name">Name
                    </th>
                    <th className="table-head-title table-head-title-distance">Distance</th>
                    <th className="table-head-title table-head-title-types">Type</th>
                    <th className="table-head-title table-head-title-address">Address
                    </th>
                    <th className="table-head-title table-head-title-country">Country / Region</th>
                </tr>
                </thead>
                <tbody className="table-body">
                {props.tableRow}
                </tbody>
            </table>
        </div>
    )
}
export default Table;