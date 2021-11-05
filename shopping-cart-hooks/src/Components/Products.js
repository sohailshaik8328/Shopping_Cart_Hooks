import React from 'react'

function Products(props) {
    var {allProducts,handleAddCart} = props
    return (
        <div className="flex flex_wrap justify_start">
            {
                allProducts.map((each) => (
                    <article className="each_card flex_30" key={each.sku}>
                        {
                            each.isFreeShipping === true ? <p>Free Shipping</p> : <i className="fas fa-crown"></i>
                        }
                        <img src={`/products/${each.sku}_1.jpg`} alt="" />
                        <div className="data">
                            <h3>{each.title}</h3>
                            <div className="line"></div>
                            <div className="price">
                                <span>{each.currencyFormat}</span>
                                <span className="each_price">{each.price}</span>
                            </div>
                            <h2 onClick={() => handleAddCart(each)}>Add To Cart</h2>
                        </div>
                    </article>
                ))
            }
        </div>
    )
}

export default Products
