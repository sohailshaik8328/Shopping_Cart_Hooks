import React, {useState} from 'react'
import CartItems from './CartItems'

function Cart(props) {
    var {cart, handleOpenCart, handleCloseCart, cartItems} = props
    return (
        <div className="flex cart_display">
            {
                cart === true ?  <p  className="cart_icon" style={{padding:"0.8rem 1rem"}} onClick={handleCloseCart}><i className="fas fa-times"></i> </p> : <div className="cart_icon"><img className="cart_image" src="/bag-icon.png" alt="" onClick={handleOpenCart} /><span className="length">{cartItems.length}</span></div>
            }

            {
                cart === true ? <CartItems  cartItems={cartItems}/> : ""
            }
        </div>
    )
}

export default Cart
