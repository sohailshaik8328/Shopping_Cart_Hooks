import React, {useState} from 'react'
import Cart from './Cart';
import data from '../data.json';
import Products from './Products';
function Sizes() {
    var [size, setSize] = useState("");
    var [sortPrize, setsortPrize] = useState("");
    var [cart , setCart] = useState(false);
    var [cartItems, setcartItems] = useState([])

    function handleSize(each){
        setSize(each)
    }
    function handleSort(event){
        setsortPrize(event.target.value)
    }
    function handleOpenCart(){
        setCart(true)
    }
    function handleCloseCart(){
        setCart(false)
    }
    function handleAddCart(product){
        // console.log(product)
        setcartItems([...cartItems, product])
    }

    // allSizes 
    var allSizes = [];
    data.products.map((each) => {
        each.availableSizes.map((eachSize) => {
            return allSizes.push(eachSize)
        })
    })
    var sizes = allSizes.filter((elem, index) => {
        return allSizes.indexOf(elem) === index;
    })


    // allProducts 
    var allProducts = [];
    if(!size){
        data.products.map((each) => {
            return allProducts.push(each)
        })
    }else{
        data.products.map((each) => {
            each.availableSizes.map((eachSize) => {
                if(eachSize === size) {
                    return allProducts.push(each)
                }
            })
        })
    }

    // sorting prices 
    if(sortPrize === "lowtohigh"){
        allProducts.sort((a, b) => {
            return a.price - b.price
        })
    }else if(sortPrize === "hightolow"){
        allProducts.sort((a, b) => {
            return b.price - a.price
        })
    }
    // sorting prices ended


    return (
        <div className="container flex justify_center">
            {/* allTags  */}
            <div className='allsizes'>
                <h2 className="size">Sizes : </h2>
                <div className=" flex justify_start flex_wrap">
                    {
                        sizes.map((each) => (
                            <div onClick={() => handleSize(each)} key={each} className={size===each ? "tag flex justify_center items_center tag_bg" : "tag flex justify_center items_center "}>
                                <p>{each}</p>
                            </div>
                        ))
                    }  
                </div>
                <div className="data_tags">
                    <p>Leave a star on Github if this repository was useful :)</p>
                </div>
            </div>

            {/* allProducts */}
            <div className="allproducts">
                <div className="flex justify_between">
                    <h6>{size ? <span className="size_display">{size}</span> : ""}  {allProducts.length} Product(s) found</h6>
                    <div>
                        <span>Order by</span>
                        <select name="" id="" onChange={handleSort}>
                            <option value="">Select</option>
                            <option value="lowtohigh" >Low to Hieghest</option>
                            <option value="hightolow">High to Lowest</option>
                        </select>
                    </div>
                </div>
                <div className="products">
                    <Products allProducts={allProducts} handleAddCart={handleAddCart} />
                </div>

            </div>
            <div className="cart">
                <Cart cart={cart} cartItems={cartItems} handleOpenCart={handleOpenCart} handleCloseCart={handleCloseCart} />
            </div>
        </div>
    )
}

export default Sizes;
