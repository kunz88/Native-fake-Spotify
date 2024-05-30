import axios from "axios";
import ArtistsResult, { ArtistItem } from "@/model/artistQuery";
import { useEffect, useState } from "react";
import { sleep } from "@/utils/agent";

type RequestOptions = {
  headers: {
    "Content-Type": string;
    Authorization: string;
  };
};

const useArtists = (artistNames: string[], token: string | null) => {





  const [artists, setArtists] = useState<ArtistItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  //oggetto che contiene gli headers per fetchare gli artisti
  const requestHeadears = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };


  // funzione per fetchare tutta la lista degli artisti dalle API di spotify
  const loadData = async (requestHeadears: RequestOptions) => {
    setIsLoading(true);
    try {
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
      console.log("data loaded {from useArtist hook}");
      setArtists(artistsResponse);
    } catch (error) {
      console.log(`error {from useArtistsHook} ${error}`);
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  };



  useEffect(() => {
    loadData(requestHeadears);
  }, []);

  return { artists, isLoading, hasError };
};

export default useArtists;
