import { useState } from 'react';

type FileItem = {
  id: number;
  name: string;
  children: FileItem[];
}


const isDirectory = (item: FileItem) => {
  return item?.children?.length > 0;
}

type FileExplorerProps = {
  data: FileItem[];
}

// Sorting function: directories first, then files; both alphabetically
const sortFilesAndDirs = (items: FileItem[]) => {
  return [...items].sort((a, b) => {
    const aIsDir = !!a.children;
    const bIsDir = !!b.children;

    if (aIsDir && !bIsDir) return -1;
    if (!aIsDir && bIsDir) return 1;

    return a.name.localeCompare(b.name);
  });
};

export default function FileExplorer({ data }: FileExplorerProps) {
  const sortedData = sortFilesAndDirs(data);
  const [expanded, setExpanded] = useState(0);
  const toggleExpand = (id: number) => {
    setExpanded((prev) => prev === id ? 0 : id);
  }
  const handleItemClick = (item: FileItem) => {
    if (isDirectory(item)) {
      toggleExpand(item.id);
    } else {
      // Handle file click
      console.log(`File clicked: ${item.name}`);
    }
  }
  return (
    <div>
      {sortedData.map((item) => (
        <div key={item.id} style={{ marginLeft: '20px' }}>
          <div onClick={() => handleItemClick(item)}>{item.name}</div>
          {isDirectory(item) && expanded === item.id && (
            <FileExplorer data={item.children} />
          )}
        </div>
      ))}
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
    </div>
  );
}
