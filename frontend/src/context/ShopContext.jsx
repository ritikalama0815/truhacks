import { createContext } from "react";
import { products } from '../assets/assets' // Assuming you have a products.js file in assets
export const ShopContext = createContext();

const ShopContextProvider = (props) =>{

    const currency = '$';
    const delivery_fee = 4.99;
    
    const value ={
        products, currency, delivery_fee
    }
    return(
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )

}

export default ShopContextProvider;