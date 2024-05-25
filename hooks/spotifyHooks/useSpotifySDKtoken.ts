import axios from "axios";
import { useEffect, useState } from "react";

const useSpotifySDKtoken = () => {
  const [token, setToken] = useState("");

  useEffect(() => {
    async function getToken() {
      try{
        const response = await axios.get("http://192.168.0.142:3000/auth/token");
        setToken(response.data.spotifyToken);
      }catch(error){
        console.log(error)
      }

    }
    getToken();
  }, []);


  return token
};
export default useSpotifySDKtoken;
