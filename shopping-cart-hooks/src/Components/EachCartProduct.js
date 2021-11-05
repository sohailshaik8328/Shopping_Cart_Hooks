import React, {useState} from 'react'
import ItemCom from './ItemCom';
import data from '../data.json'

function EachCartProduct(props) {
    var [quantity, setQuantity] = useState(1);
    function handleAddQuantity(){
        setQuantity(quantity + 1)
    }
    function handleRemoveQuantity(){
        setQuantity(quantity-1)
    }
    function handleCross(){
        setQuantity(0)
    }
    var FindProduct = data.products.map((each) => {
        console.log(each.title)
        return each.title
    })
    console.log(FindProduct)
    var {eachProduct} = props;
    return (
        <>
            {
                quantity === 0  ? null : <ItemCom  eachProduct={eachProduct} quantity={quantity} handleCross={handleCross} handleAddQuantity={handleAddQuantity} handleRemoveQuantity={handleRemoveQuantity} />
            }
        </>
    )
}

export default EachCartProduct;
