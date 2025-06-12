import { useEffect } from 'react';

type LifecycleProps = {
  dummy: number;
};

const Lifecycle = ({ dummy }: LifecycleProps) => {
  useEffect(() => {
    // componentDidMount
    console.log('Component mounted');

    return () => {
      // componentWillUnmount
      console.log('Component unmounted');
    };
  }, []); // empty dependency array implies this effect runs only once when the component mounts

  useEffect(() => {
    // componentDidUpdate
    console.log('Component updated');
  }, [
    dummy, // This effect will run when 'dummy' changes
    /* dependencies - changes to these values should trigger the function to re-run */
    /* NOTE: This function will run during mount too */
  ]);

  return <p>Lifecycle Example: Check the console for lifecycle logs.</p>;
};
export default Lifecycle;
