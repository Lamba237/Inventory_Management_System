import React from 'react';
import AddProduct from './form/addProduct';

export default function Product() {

    return (
        <>
            <div className='product-container'>
                <div className='product-header'>
                    <h2>Product</h2>
                    <div className='add-product-container'>
                        <div className='add-product-section'>
                            <AddProduct />
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}