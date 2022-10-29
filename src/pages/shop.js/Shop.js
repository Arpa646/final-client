import React, { useEffect, useState } from 'react';
import ShopDisplay from './ShopDisplay';
import './shop.css'
import OrderDisplay from './OrderDisplay';
import { addToDb, getCard } from '../FakeDb';
import { Link } from 'react-router-dom';
const Shop = () => {
    const [shops, setShops] = useState([])
    const [Cart, setCart] = useState([])
    useEffect(() => {
        fetch(' shop.json')
            .then(res => res.json())
            .then(data => setShops(data))
    }, [])


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



            //    if(addedProduct)
            //    {
            //     console.log(addedProduct)

            // const quantity=cardStorage[id]
            // addedProduct.quantity=quantity;
            //     console.log('paise',addedProduct)
            //    }
            //    else{
            //     console.log('cant finr',addedProduct)
            //    }
        }
        setCart(saveCart)
    }, [shops])



    const addCart = (selectedProduct) => {
        let newCart = [];
        const exists = Cart.find(product => product.id === selectedProduct.id)

        if (!exists) {
            selectedProduct.quantity = 1
            newCart = [...Cart, selectedProduct]
        }
        else {
            const rest = Cart.filter(product => product.id !== selectedProduct.id)
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists]
        }
        // setCart(shop)
        setCart(newCart)
        addToDb(selectedProduct.id)
    }
    return (
       <div>
         <h1 className='welcome'>welcome To Our Online Shop</h1>
               <div className='display'>
        
            <div className='grid grid-cols-3  v'>
           
                {        
                    shops.map(shop => <ShopDisplay
                        key={shop._id}
                        shop={shop}
                        addCart={addCart}
                    ></ShopDisplay>)
                }
            </div>


            <div className='order'>
                <h1>order</h1>

                <OrderDisplay Cart={Cart}>

                <Link to='/review'><button className=' nn btn-design'>Review Order</button></Link>
                </OrderDisplay>


            </div>




        </div>
         <div className='display'>
       
       <div className='grid grid-cols-3  v'>
      
           {        
               shops.map(shop => <ShopDisplay
                   key={shop._id}
                   shop={shop}
                   addCart={addCart}
               ></ShopDisplay>)
           }
       </div>


       <div className='order'>
           <h1>order</h1>

           <OrderDisplay
               Cart={Cart}
           ></OrderDisplay>


       </div>




   </div>
       </div>

    );
};

export default Shop;