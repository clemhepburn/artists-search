import React, { useState } from 'react';
import Loading from '../../common/Loading';
import Search from '../../Controls/Search';
import { fetchArtists } from '../../../services/artistApi.js';

export default function Home() {
  const [artists, setArtists] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleSearch = (searchTerm) => {
    fetchArtists(0, searchTerm).then(setArtists).finally(() => setLoading(false));
    console.log(searchTerm);
  };


  return (
    <div>
      <p>Search artists</p>
      <Search onSearch={handleSearch} />
      {/* <ArtistList artist={artists}/> */}
    </div>
  );
}
