import { useEffect, useState } from "react";



export const useFetch = <T>(url: string,token:string) => {
  
  const [isFetching,setIsFetching] = useState(true);
  const [data,setData] = useState<T>();
  const [error,setError] = useState(false);
  

useEffect(()=>{
    setTimeout(() => {
        fetch(url,{
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        })
          .then(async (res) => {
            return await res.json();
          })
          .then((json) => (setData(json)))
          .catch((err) => (setError(err)))
          .finally(() => ( setIsFetching(false)));
      }, 2000);

},[url,token])



  return { isFetching, data,error }; 
};

export default useFetch;