import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

interface SearchProps {
  propExample: any;
}

export default function Search() {
  const [query, setQuery] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<any[]>([]);
  const [error, setError] = useState<boolean>(false);

  // need to define the type of data the API will return
  const fetchData = async (searchQuery: string) => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://api.openbrewerydb.org/v1/breweries/search?query=${searchQuery}`
      );
      setLoading(false);
      if (!response.ok) {
        setError(true);
        throw new Error(`HTTP err. Status: ${response.status}`);
      }
      const result = await response.json();
      console.log('ONE ITEM', result[1]);
      setData(result);
    } catch (error) {
      console.log(error);
      setError(true);
    }
  };

  const handleChange = (value: string) => {
    setQuery(value);
    // setTimeout(() => {
    fetchData(value);
    // }, 2000);
  };

  return (
    <>
      <div className="flex flex-row">
        {error && (
          <div className="text-red-700" data-testid="error-message">
            Error happened
          </div>
        )}
        <FaSearch className="" />
        <input
          data-testid="search-input"
          placeholder="type to search.."
          className="mx-4"
          type="text"
          value={query}
          onChange={(e) => handleChange(e.target.value)}
        />
      </div>
      {loading && <div>Loading...</div>}

      {/* <SearchResults/> */}

      {/* <div className="mx-2">{query}</div> */}
      <>
        {data &&
          data.slice(0, 5).map((el) => {
            return <pre>{el.name}</pre>;
          })}
      </>
    </>
  );
}
