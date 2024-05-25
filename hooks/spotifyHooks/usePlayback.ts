import axios from "axios";

import { useEffect } from "react";

const usePlayback = (deviceId: string, token: string | null) => {
  

  useEffect(() => {
    
    const requestUrl = `https://api.spotify.com/v1/me/player`;
    const requestHeadears = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}}`,
      },
    };
    const requestBody = {
        "device_ids": [
            deviceId
        ],
        "play":true
    }
    axios
      .put(requestUrl,requestBody, requestHeadears)
      .then((response) => console.log(response))
      .catch((e)=>{console.log(e)});
  }, [deviceId, token]);
};

export default usePlayback;
