import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { apiEndpoint, authHeaders } from '../../config';

const Albums = () => {
  const [albums, setAlbums] = useState(null);

  const getAlbums = async () => {
    const url = `${apiEndpoint}/albums`;
    try {
      const userAlbums = await axios.get(url, {
        params: { ids: '2nFnVemhh9jZDKOIUba4a1' },
        authHeaders,
      });
      return userAlbums.data.albums;
    } catch (e) {
      return e;
    }
  };

  useEffect(async () => {
    setAlbums(await getAlbums());
    return () => null;
  }, []);

  if (!albums) return null;
  return (
    <div>
      {albums.map((album) => (
        <div key={album.id}>{album.name}</div>
      ))}
    </div>
  );
};

export default Albums;
