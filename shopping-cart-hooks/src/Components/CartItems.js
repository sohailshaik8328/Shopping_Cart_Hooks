import React, {useState} from 'react'
import EachCartProduct from './EachCartProduct'

function CartItems(props) { 
    var {cartItems} = props;

    // total price 
   var totolPrice =  cartItems.reduce((acc , cv) => {
       acc = (acc + cv.price) + 0
       return acc
   },0)
//    total price ended 
    return (
        <div className="cart_produts flex flex_column">
           <div>
                <div className="flex cart_inside items_center justify_between">
                    <div className="cart_bag">
                        <img src="/bag-icon.png" alt="" />
                        <p>{cartItems.length}</p>
                    </div>
                    <h3>Cart</h3>
                </div>
            <div className="line_cart"></div>
           </div>

            <div className="cart_items_products">
                {
                    cartItems.map((each) => (
                        <EachCartProduct key={each} eachProduct={each}/>
                    ))
                }
            </div>

            <div className="subTotal">
                <div className="flex justify_between items_center">
                    <h4>subtotal</h4>
                    <div>
                        <h2><span>$</span> {totolPrice}</h2>
                    </div>
                </div>
                <h3 onClick={() => {
                    alert(`You have to pay $${totolPrice}`)
                }} className="checkout">checkout</h3>
            </div>
        </div>
    )
}

export default CartItems
