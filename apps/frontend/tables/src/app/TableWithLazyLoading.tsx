import { useState } from 'react';
import Datatable from '../components/datatable';

const getKeysAndValues = (data: any) => {
  const keys = Object.keys(data[0]);
  const values: string[][] = data.map((obj: Record<string, string | number>) =>
    Object.values(obj)
  );
  return { keys, values };
};

const data = [
  { name: 'John', age: 30 },
  { name: 'Jane', age: 25 },
  { name: 'Doe', age: 40 },
  { name: 'Alice', age: 35 },
  { name: 'Bob', age: 28 },
  { name: 'Charlie', age: 22 },
  { name: 'David', age: 45 },
  { name: 'Eve', age: 29 },
  { name: 'Frank', age: 33 },
  { name: 'Grace', age: 27 },
  { name: 'Heidi', age: 31 },
  { name: 'Ivan', age: 26 },
  { name: 'Judy', age: 38 },
];

export function TableWithLazyLoading() {
  const chunkSize = 3;
  const [visibleCount, setVisibleCount] = useState(chunkSize);

  const visibleData = data.slice(0, visibleCount);
  const { keys, values } = getKeysAndValues(visibleData);

  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + chunkSize, data.length));
  };

  return (
    <div>
      <h1>Lazy Loading Table</h1>
      <Datatable keys={keys} values={values} />
      {visibleCount < data.length && (
        <div style={{ marginTop: '1rem' }}>
          <button onClick={handleLoadMore}>Load more</button>
        </div>
      )}
    </div>
  );
}
