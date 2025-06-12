// Uncomment this line to use CSS modules
// import styles from './app.module.scss';
import LoginForm from '../components/LoginForm';

export function App() {
  return (
    <div>
      <LoginForm onSubmit={console.log} />
    </div>
  );
}

export default App;
