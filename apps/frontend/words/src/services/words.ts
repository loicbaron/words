const API_URL = import.meta.env.VITE_API_URL

interface IPostWordsRequest {
  word1: string;
  word2: string;
}

interface IPostWordsResponse {
  relationship: string;
}

const postWords = async (
  word1: string,
  word2: string
): Promise<IPostWordsResponse | undefined> => {
  const response = await fetch(`${API_URL}/`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ word1, word2 } as IPostWordsRequest),
  });
  if (response.ok) {
    return response.json() as Promise<IPostWordsResponse>;
  }
  return undefined;
};

export { postWords };
