import { useState } from 'react';
// import axios from 'axios';
import './App.css';
import axios from 'axios';
// import CreatePost from './components/createPost';
import Search from './components/SearchBar';

function App() {
  // const [count, setCount] = useState(0)
  // const [items, setItems] = useState([]);
  const [post, setPost] = useState({ name: '', url: '' });
  // const [name, setName] = useState('');
  // const [url, setUrl] = useState('');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const response = await axios.post('http://localhost:5656/posts/', { post });
    console.log('submitting');
  }

  return (
    <div className="h-screen flex bg-gray-200 text-2xl items-center justify-center flex-col">
      <Search />
    </div>

    /* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */
  );
}

export default App;
