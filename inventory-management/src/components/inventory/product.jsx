import React from 'react';
import AddProduct from './form/addProduct';

export default function Product() {

    return (
        <>
            <div className='product-container'>
                <div className='product-display'>
                    <div className='product-header'>
                        <h2>Products</h2>
                    </div>

                    <div className='product-element-container'>
                        <div className='add-product-section'>
                            <AddProduct />
                        </div>

                        <div>
                            <button className='filter-section'>
                                <img src='../src/assets/inventory/Filters.svg' alt='Filter Icon' />
                                Filters
                            </button>
                        </div>
                        
                        <div className='download-section'>
                            <button type='button' className='product-btn'>Download All</button>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}