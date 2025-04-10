import { useState } from 'react';

import styles from './app.module.scss';
import Results from './Results';

type User = {
  name: string;
  email: string;
  company: string;
}

export function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [search, setSearch] = useState<string | undefined>(undefined);
  const [results, setResults] = useState<User[] | null>(null);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent page reload
    submit();
  };
  const submit = async () => {
    setIsLoading(true)
    // const res = await searchUsers(search);
    const res = [{ name: 'Loïc Baron', email: 'loic@example.com', company: 'Example' }];
    // const res: User[] = []
    setTimeout(() => {
      setResults(res)
      setIsLoading(false)
    }, 2000);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor='search'>Search:</label>
        <input type='text' id='search' value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder='search for a user'
        />
        <button type='submit'>send</button>
      </form>
      {isLoading ? <div className={styles.loading}>Loading...</div> :
        <Results results={results} />
      }
    </div>
  );
}

export default App;
