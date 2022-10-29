import { useEffect, useState } from "react"
import { getCard } from "../pages/FakeDb"

const useCart=(shops)=>{
    const [Cart, setCart] = useState([])

    useEffect(() => {
        console.log('before', shops)


        const cardStorage = getCard();
        const saveCart = []


        for (const id in cardStorage) {
            //  console.log('milano',id1)
            const addedProduct = shops.find(product => (product.id === id))

            if (addedProduct) {
                console.log(addedProduct)
                const quantity = cardStorage[id]
                addedProduct.quantity = quantity;
                saveCart.push(addedProduct)
            }


        }
        setCart(saveCart)
    }, [shops])
   return[Cart,setCart]

}
export default useCart;