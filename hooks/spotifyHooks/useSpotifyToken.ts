import spotifyStorage from "@/utils/storage";
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
/*     spotifyStorage
      .load({
        key: "spotifyTemporaryToken",

        // autoSync (default: true) means if data is not found or has expired,
        // then invoke the corresponding sync method
        autoSync: false,

        // syncInBackground (default: true) means if data expired,
        // return the outdated data first while invoking the sync method.
        // If syncInBackground is set to false, and there is expired data,
        // it will wait for the new data and return only after the sync completed.
        // (This, of course, is slower)
        syncInBackground: false,
      })
      .then((ret: { key: string; data: string }) => {
        // found data go to then()
        setAccessToken(ret.data);
      })
      .catch((err) => {
        console.warn(err.message);
        switch (err.name) {
          case "NotFoundError":
            setAccessToken("");

            break;
          case "ExpiredError":
            setAccessToken("");
            break;
        }
      }); */

    if (!accessToken) {
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
          spotifyStorage.save({ key:"spotifyTemporaryToken", data: {token:accessToken} }).then((e)=>{console.log(e)});
        })
        .catch((e) =>
          console.log(
            "Errore durante la richiesta del token di accesso a Spotify:",
            e
          )
        );
    }
  },[]);

  return accessToken
  
};

export default useSpotifyToken;
