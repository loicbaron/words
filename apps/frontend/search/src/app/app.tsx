import { useState } from 'react';

import styles from './app.module.scss';

type User = {
  name: string;
  email: string;
  company: string;
}

export function App() {
  const [search, setSearch] = useState<string | undefined>(undefined);
  const [results, setResults] = useState<User[] | null>(null);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent page reload
    submit();
  };
  const submit = async () => {
    // const res = await searchUsers(search);
    const res = [{ name: 'Loïc Baron', email: 'loic@example.com', company: 'Example' }];
    setResults(res)
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
      {results && (
        <div>
          <h1>Results</h1>
        </div>
      )}
      {
        results?.map(user => {
          return (
            <div key={user.email} className={styles.user}>
              <div>Name: {user.name}</div>
              <div>Email: {user.email}</div>
              <div>Company: {user.company}</div>
            </div>
          )
        })
      }
    </div>
  );
}

export default App;
