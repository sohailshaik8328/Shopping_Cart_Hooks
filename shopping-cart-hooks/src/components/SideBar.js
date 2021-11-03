import React, { useState } from 'react'
import "../stylesheets/App.css"

function SideBar(props) {
    let {products, handleSize} = props;


   
    // let allProducts = [];

 

    let sizes = products.reduce((acc, cv) => {
        acc = acc.concat(cv.availableSizes)
        return acc;
    }, [])
    let uniqueSizes = [...new Set(sizes)];
    return (
        <>
            <section className=" total flex between align_center">
                <div className="">
                    <section className="sidebar">
                        {
                            uniqueSizes.map(size => (
                                <button key={size} onClick={() => handleSize(size)} className="sizes_btn">{size}</button>
                            ))
                        }
                    </section>
                </div>

              
            </section>    
        </>
    )
}

export default SideBar
