import './App.css';
import { useEffect } from 'react';
import { useState } from 'react';


function App() {
  const [data, setData] = useState(0);

  useEffect(() => {
    console.log('useEffect');
  }, [data]);

  return (
    <div className="App">
      <button onClick={() => setData(data + 1)}>Click me +</button>
      <button onClick={() => setData(data - 1)}>Click me -</button>
      <p>
        {data}
      </p>
    </div>
  );
}

export default App;
