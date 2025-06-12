// Uncomment this line to use CSS modules
// import styles from './app.module.scss';
import { useState } from 'react';
import Datatable from '../components/datatable';
import Pagination from '../components/pagination';

const getKeysAndValues = (data: any) => {
  // Get the list of keys (assuming all objects have the same keys)
  const keys = Object.keys(data[0]);

  // Get an array of the values
  const values: string[][] = data.map((obj: Record<string, string | number>) =>
    Object.values(obj)
  );
  return { keys, values };
};

const data = [
  {
    name: 'John',
    age: 30,
  },
  {
    name: 'Jane',
    age: 25,
  },
  {
    name: 'Doe',
    age: 40,
  },
  {
    name: 'Alice',
    age: 35,
  },
  {
    name: 'Bob',
    age: 28,
  },
  {
    name: 'Charlie',
    age: 22,
  },
  {
    name: 'David',
    age: 45,
  },
  {
    name: 'Eve',
    age: 29,
  },
  {
    name: 'Frank',
    age: 33,
  },
  {
    name: 'Grace',
    age: 27,
  },
  {
    name: 'Heidi',
    age: 31,
  },
  {
    name: 'Ivan',
    age: 26,
  },
  {
    name: 'Judy',
    age: 38,
  },
];

export function TableWithPagination() {
  // const data = {
  //   keys: ['name', 'age'],
  //   values: [
  //     ['John', '30'],
  //     ['Jane', '25'],
  //   ],
  // };
  const rowCount = 5; // Assuming you want to limit the number of rows to 5
  const [currentPage, setCurrentPage] = useState(1);
  const start = (currentPage - 1) * rowCount;
  const end = start + rowCount;
  const visualizeData = data.slice(start, end); // Limit to 5 rows

  const { keys, values } = getKeysAndValues(visualizeData);

  return (
    <div>
      <h1>Table with pagination</h1>
      <Datatable keys={keys} values={values} />
      <div>
        {data.length > rowCount && (
          <>
            <div>
              Nb rows: {data.length} currentPage: {currentPage}
            </div>
            <Pagination
              currentPage={currentPage}
              total={data.length}
              nbRows={rowCount}
              onPageChange={setCurrentPage}
            />
          </>
        )}
      </div>
    </div>
  );
}

export default TableWithPagination;
