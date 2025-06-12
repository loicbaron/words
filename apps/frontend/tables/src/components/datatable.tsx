type DatatableProps = {
  keys: string[];
  values: string[][];
};
const Datatable = ({ keys, values }: DatatableProps) => {
  return (
    <>
      <h2>Datatable</h2>
      <table>
        <thead>
          <tr>
            {keys.map((key, index) => (
              <th key={index}>{key}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {values.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Datatable;
