
import axios from "axios";
import { useEffect, useState } from "react";

const CLIENT_ID = "8aa3c4fa0b5541b8abe418f87b9c08cd";
const CLIENT_SECRET = "6cdddd22938a421c9c537d06e6d60b36";

type TokenType = {
  access_token: string;
  token_type: string;
  expires_in: number;
};

const useSpotifyToken = () => {
  const [accessToken, setAccessToken] = useState<string>("");
  useEffect(() => {


    // se non ho il token effettuo la chiamata all'endpoint
    const requestUrl = "https://accounts.spotify.com/api/token";
    const requestBody = `grant_type=client_credentials&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`;
    const requestOptions = {
      headers: { "Content-type": "application/x-www-form-urlencoded" },
    };
    axios // effettuo una chiamata post per settare il token di spotify
      .post<TokenType>(requestUrl, requestBody, requestOptions)
      .then((response) => {
        setAccessToken(response.data.access_token);
      })
      .catch((e) =>
        console.log(
          "Errore durante la richiesta del token di accesso a Spotify:",
          e
        )
      );
  }, []);

  return accessToken;
};

export default useSpotifyToken;
