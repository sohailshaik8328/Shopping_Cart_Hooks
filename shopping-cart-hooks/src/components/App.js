import '../stylesheets/App.css';
import SideBar from "./SideBar"
import {products} from "../data.json"
import Main from './Main';
import { useState } from 'react';

// console.log(products)

function App() {

  const [sortedPrice, setSortedPrice] = useState("");
  const [size, setSize] = useState("");

  let handleSize = (size) => {
    setSize(size);
  }
  
  let allProducts = [];
if(!size){
  products.map(product => (
      allProducts.push(product)
  ))
} else {
  products.map(product => (
      product.availableSizes.map(each => {
          if(each === size) {
          return   allProducts.push(product)
          }
      })
  ))
}

  // products.map(product => (
  //     allProducts.push(product)
  // ))
    
  if(!size){
    products.map(product => (
        allProducts.push(product)
    ))
} else {
    products.map(product => (
        product.availableSizes.map(each => {
            if(each === size) {
            return   allProducts.push(product)
            }
        })
    ))
}


  let handleSort = (e) => {
    console.log(e.target.value)
    setSortedPrice(e.target.value)
}

  if(sortedPrice === "highToLow") {
    allProducts.sort((a, b) => { return b.price - a.price})
 } else if(sortedPrice === "lowToHigh") {
     allProducts.sort((a, b) => {return a.price - b.price})
 }
  return (
   <>
     <div className=" container">
        <SideBar products={products} handleSize={handleSize} />
            <div className="select">
                <select name="" id="" onChange={handleSort}>
                    <option value="">Select</option>
                    <option value="highToLow">Hign to low</option>
                    <option value="lowToHigh">low to high</option>
                </select>
            </div>
        <Main products={allProducts} />
     </div>
     
   </>
  );
}

export default App;
