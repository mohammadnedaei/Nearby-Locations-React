import './tableStyles.scss';

const Table = (props) => {
  return(
      <div className="container">
          <table className="responsive-table">
              <thead className="responsive-table__head">
              <tr className="responsive-table__row">
                  <th className="responsive-table__head__title responsive-table__head__title--name">Name
                  </th>
                  <th className="responsive-table__head__title responsive-table__head__title--distance">Distance</th>
                  <th className="responsive-table__head__title responsive-table__head__title--types">Type</th>
                  <th className="responsive-table__head__title responsive-table__head__title--address">Address
                  </th>
                  <th className="responsive-table__head__title responsive-table__head__title--country">Country / Region</th>
              </tr>
              </thead>
              <tbody className="responsive-table__body">
              {props.tableRow}
              </tbody>
          </table>
      </div>
  )
}
export default Table;