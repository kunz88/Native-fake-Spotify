import axios from "axios";
import ArtistsResult, { ArtistItem } from "@/model/artistQuery";
import { useEffect, useState } from "react";

type RequestOptions = {
  headers: {
    "Content-Type": string;
    Authorization: string;
  };
};

const useArtists = (artistNames: string[],token:string | null) => {
  const [artists, setArtists] = useState<ArtistItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setIsHasError] = useState(false);

  
  useEffect(() => {


    // funzione per fetchare tutta la lista degli artisti dalle API di spotify
    const loadData = async (requestHeadears: RequestOptions) => {
    
      const artistsResponse = await Promise.all(
        artistNames.map(async (artistName) => {
          // per ogni artista setta il nome e fa la chiamata
          const response = await axios.get<ArtistsResult>(
            `https://api.spotify.com/v1/search?q=${artistName}&type=artist`,
            requestHeadears
          );
          return response.data.artists.items[0];
        })
      );
      setIsLoading(false);
      return artistsResponse;
    };
    
    
    const requestHeadears = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}}   
    `,
      },
    };
    try {
      setIsLoading(true);
      const artistsResponse = loadData(requestHeadears);

      artistsResponse.then((results) => setArtists(results));
    } catch (error) {
      console.log(error);
      setIsHasError(true);
    }
  }, []);

  return { artists, isLoading, hasError };
};

export default useArtists;
