import React from 'react';
import Controls from '../../components/Controls/Controls';
import { useEffect, useState } from 'react';
import { getFilms } from '../../services/data';
import Details from '../../components/Details/Details';

export default function Home() {
  const [films, setFilms] = useState([]);
  const [searchFilm, setSearchFilm] = useState({});
  const [searchInput, setSearchInput] = useState('');

  const handleSearch = () => {
    let filter = films.filter((film) =>
      film.title.toLowerCase().includes(searchInput.toLowerCase())
    );
    setSearchFilm(filter[0]);
    console.log(searchFilm);
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await getFilms();
      setFilms(data);
    };
    fetchData();
  }, []);
  return (
    <div>
      <Controls
        setFilms={setFilms}
        handleSearch={handleSearch}
        searchInput={searchInput}
        setSearchInput={setSearchInput}
      />
      <Details films={films} searchFilm={searchFilm} />
    </div>
  );
}
