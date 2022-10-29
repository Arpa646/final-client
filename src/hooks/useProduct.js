import { useEffect, useState } from "react"

const useProduct=()=>{
    const [shops, setShops] = useState([])
    
    useEffect(() => {
        fetch(' shop.json')
            .then(res => res.json())
            .then(data => setShops(data))
    }, [])


  
    return [ shops,setShops]
}
export default useProduct