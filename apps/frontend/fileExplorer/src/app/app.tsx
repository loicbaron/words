// Uncomment this line to use CSS modules
// import styles from './app.module.scss';

import FileExplorer from "./FileExplorer";

const data = [
  {
    id: 1,
    name: 'README.md',
  },
  {
    id: 2,
    name: 'Documents',
    children: [
      {
        id: 3,
        name: 'Word.doc',
      },
      {
        id: 4,
        name: 'Powerpoint.ppt',
      },
    ],
  },
  {
    id: 5,
    name: 'Downloads',
    children: [
      {
        id: 6,
        name: 'unnamed.txt',
      },
      {
        id: 7,
        name: 'Misc',
        children: [
          {
            id: 8,
            name: 'foo.txt',
          },
          {
            id: 9,
            name: 'bar.txt',
          },
        ],
      },
    ],
  },
];

export function App() {
  return (
    <div>
      <FileExplorer data={data} />
    </div>
  );
}

export default App;
