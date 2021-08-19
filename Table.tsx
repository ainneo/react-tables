import React, { FC } from 'react';
type Props = { columns: any; rows: any };

const Table: FC<Props> = props => {
  // console.log(props); //columns: [{}, {}, {}]
  const { columns, rows } = props;
  // console.log(columns[0].label);

  const [searchTerm, setSearchTerm] = React.useState('');
  const [searchResults, setSearchResults] = React.useState([]);
  const handleChange = event => {
    setSearchTerm(event.target.value);
  };

  React.useEffect(() => {
    const results = rows.filter((item: { name: string }) => {
      return item.name.toLowerCase().includes(searchTerm.toLowerCase());
    });
    setSearchResults(results);
  }, [searchTerm]);

  return (
    <div>
      <div>
        <label>Search:</label>
        <input
          type="text"
          onChange={event => handleChange(event)}
          placeholder="Search by Name"
          value={searchTerm}
        />
      </div>

      <div>
        <table className="container">
          <thead>
            <th>
              <td>{columns[0].label}</td>
            </th>
            <th>
              <td>{columns[1].label}</td>
            </th>
            <th>
              <td>{columns[2].label}</td>
            </th>
            <th>
              <td>{columns[3].label}</td>
            </th>
          </thead>
          <tbody>
            {searchResults.map(info => {
              return (
                <tr>
                  <td>{info.id}</td>
                  <td>{info.name}</td>
                  <td>{info.email}</td>
                  <td>{info.phone}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
