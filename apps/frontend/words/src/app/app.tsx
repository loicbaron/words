// Uncomment this line to use CSS modules
// import styles from './app.module.scss';
import { useState } from 'react';
import { postWords } from '../services/words';

type Relationship = {
  relationship: string;
};

export function App() {
  const [word1, setWord1] = useState('car');
  const [word2, setWord2] = useState('vehicle');
  const [relationship, setRelationship] = useState<Relationship | undefined>(undefined);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent page reload
    submit();
  };
  const submit = async () => {
    const rel = await postWords(word1, word2);
    setRelationship(rel)
  }
  return (
    <div>
      <div>
        <h1>Words relashionship</h1>
        <div>How to get the relationship between 2 words?</div>
        <div>
          <h2>Examples:</h2>
          <ul>
            <li>car + vehicle = typeOf</li>
            <li>hot + cold = oppositeOf</li>
            <li>leaf + tree = partOf</li>
          </ul>

        </div>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <input type='text' id='word1' value={word1} onChange={(e) => setWord1(e.target.value)} />
          <input type='text' id='word2' value={word2} onChange={(e) => setWord2(e.target.value)} />
          <button type='submit'>send</button>
        </form>
        <div>{relationship?.relationship}</div>
      </div>

    </div>
  );
}

export default App;
