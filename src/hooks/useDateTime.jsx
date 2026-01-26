import { useState , useEffect } from "react";

const useDateTime = () => {
     
    const[now,setNow] = useState(new Date());

    useEffect(() => {
      const timer = setInterval(() => {
        setNow(new Date());
      }, 1000);
        return () => clearInterval(timer);
    }, []);

    return now; 
}

export default useDateTime;