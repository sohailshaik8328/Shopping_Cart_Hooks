import React from 'react';
function ItemCom(props){
    var {eachProduct, quantity, handleAddQuantity,handleRemoveQuantity, handleCross} = props;
    return (
        <>

        <div className="eachProduct_in_cart flex items_center justify_between">
            <img src={`/products/${eachProduct.sku}_2.jpg`} alt="" />
            <div className="data">
                <h2>{eachProduct.title}</h2>
                <h6>{eachProduct.style}</h6>
                <h5>Quantity : {quantity}</h5>
            </div>
            <div className="data_price_quantity">
                <p className="cross" onClick={handleCross}><i className="fas fa-times"></i></p>
                <div className="flex price_symbol">
                    <h3>{eachProduct.currencyFormat}</h3>
                    <h4>{(eachProduct.price) * quantity}</h4>
                </div>
                <div className="flex plus_minus">
                    <p onClick={handleAddQuantity}>+</p>
                    {
                        quantity === 1 ? <p disabled={quantity === 1} onClick={handleRemoveQuantity}>-</p> : <p onClick={handleRemoveQuantity}>-</p>
                    }
                </div>
            </div>
        </div>

        {/* <div className="subTotal">
                <div className="flex justify_between items_center">
                    <h4>subtotal</h4>
                    <div>
                        <h2><span>$</span> {((eachProduct.price) * quantity)}</h2>
                    </div>
                </div>
                <h3 className="checkout">checkout</h3>
            </div> */}

        </>
    )
}

export default ItemCom;