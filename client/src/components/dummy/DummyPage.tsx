import { useState } from 'react';

import { useBackendContext } from "@/contexts/hooks/useBackendContext";

const DummyPage = () => {
  const [response, setResponse] = useState('');
  const { backend } = useBackendContext();

  const handleClick = async () => {
    try {
      const res = await backend.get("/test"); // or use full URL like http://localhost:8080/test if needed
    //   console.log(res)
      const text = await res.data;
      setResponse(text);
    } catch (error) {
      console.error('Error fetching /test:', error);
      setResponse('Error contacting backend.');
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Pee pee poo poo</h1>
      <button onClick={handleClick}>Call /test</button>
      {response && (
        <p style={{ marginTop: '1rem', fontWeight: 'bold' }}>
          Response: {response}
        </p>
      )}
    </div>
  );
};

export default DummyPage;
