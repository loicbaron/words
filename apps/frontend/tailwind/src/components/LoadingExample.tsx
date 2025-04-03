import { useEffect, useState } from "react";
import { getGreetings } from "../services/greetings";
import { Greeting } from "@playground/types";

const LoadingExample = () => {
  const [data, setData] = useState<Greeting | undefined>(undefined);

  useEffect(() => {
    async function fetchMyAPI() {
      setTimeout(async() => {
        const hello = await getGreetings()
        setData(hello);
      }, 2000)
      // const hello = await getGreetings();
      // setData(hello);
    }

    fetchMyAPI();
  }, []);

  return (
    <div>
      <h1>Loading Example</h1>
      {data ? <p>{data.message}</p> : <p>Loading...</p>}
    </div>
  );
}

export default LoadingExample;
