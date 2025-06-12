import { useState } from 'react';
import Lifecycle from '../components/Lifecycle';
import useScreenSize from '../hooks/useScreenSize';
import TableWithInfiniteScroll from './TableWithInfiniteScroll';
import { TableWithLazyLoading } from './TableWithLazyLoading';
import TableWithPagination from './TableWithPagination';

const App = () => {
  const screenSize = useScreenSize();
  const [showLifecycle, setShowLifecycle] = useState(true);

  return (
    <div>
      <h1>Screen Size Detection with React Hook</h1>
      <p>Width: {screenSize.width}</p>
      <p>Height: {screenSize.height}</p>
      <div>
        {showLifecycle ? (
          <div>
            Lifecycle component mounted <Lifecycle dummy={screenSize.width} />
          </div>
        ) : (
          <p>Lifecycle component unmounted</p>
        )}
        <button onClick={() => setShowLifecycle((prev: boolean) => !prev)}>
          Toggle Lifecycle Component
        </button>
      </div>
      <TableWithPagination />
      <br />
      <TableWithLazyLoading />
      <br />
      <TableWithInfiniteScroll />
      <br />
    </div>
  );
};
export default App;
