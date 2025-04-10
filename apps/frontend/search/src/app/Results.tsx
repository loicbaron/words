import styles from './app.module.scss';
type User = {
  name: string;
  email: string;
  company: string;
}
const Results = ({ results }: { results: User[] | null }) => {
  return (
    <div>
      {results ? (
        <div>
          <h1>Results</h1>
          {results.length ? (
            results.map((user) => (
              <div key={user.email} className={styles.user}>
                <div>Name: {user.name}</div>
                <div>Email: {user.email}</div>
                <div>Company: {user.company}</div>
              </div>
            ))
          ) : (
            <div>No results</div>
          )}
        </div>
      ) : null}
    </div>
  );
}

export default Results;
