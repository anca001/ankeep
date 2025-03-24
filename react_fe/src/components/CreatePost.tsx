import { useState } from 'react';
// import axios from 'axios';

export default function CreatePost() {
  const [recipe, setRecipe] = useState({ name: '', url: '' });
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // const response = axios.post('http://localhost:5656/posts/', { recipe });
    console.log('submitting');
  }

  return (
    <>
      {/* extract into separate component */}
      {/* add new components for displaying posts */}
      <form onSubmit={handleSubmit} className="w-full max-w-sm">
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="post-name"
            >
              Enter recipe name:
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              type="text"
              value={recipe.name}
              id="post-name"
              onChange={(e) => setRecipe({ ...recipe, name: e.target.value })}
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            />
          </div>
        </div>
        {/* <div>{recipe.name}</div> */}
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="post-url"
            >
              Enter recipe url:
            </label>
          </div>
          <input
            type="url"
            value={recipe.url}
            id="post-url"
            onChange={(e) => setRecipe({ ...recipe, url: e.target.value })}
          ></input>
          <input type="submit"></input>
        </div>
        {/* <div>{recipe.url}</div> */}
      </form>
    </>
  );
}
