import { useEffect, useState } from "react";

const useTools = () =>{
    const [tools, setTools] = useState([]);
    useEffect(()=>{
        fetch('https://cryptic-hollows-53352.herokuapp.com/service')
        .then(res=>res.json())
        .then(data=>setTools(data))
    },[]);
    return [tools];
}
export default useTools;