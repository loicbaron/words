import { Greeting } from "@playground/types";

const API_URL = import.meta.env.VITE_API_URL

const getGreetings = async (): Promise<Greeting | undefined> => {
  const response = await fetch(`${API_URL}/`, {
    method: 'GET',
  });
  if (response.ok) {
    return response.json()
  }
  return undefined;
}

export { getGreetings };
