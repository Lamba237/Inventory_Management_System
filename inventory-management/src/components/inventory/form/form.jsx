import { useState } from "react"
export default function Form() {

    // pending form state
    const [showForm, setShowForm] = useState(false);

    const toggleForm = () => {
        setShowForm(!showForm);
    }
    return (
        <form>
            <div className="form-group">
                <label htmlFor="product-name">Product Name</label>
                <input type="text" id="product-name" name="ProductName" />
            </div>

            <div className="form-group">
                <label htmlFor="product-id">Product ID</label>
                <input type="text" id="product-id" name="productId" className="product-id"/>
            </div>

            <div className="form-group">
                <label htmlFor="product-category">Category</label>
                <input type="text" className="product-category"/>
            </div>

            <div className="form-group">
                <label htmlFor="buying-price">Buying Price</label>
                <input type="number" id="buying-price" name="buyingPrice" className="buying-price" />
            </div>

            <div className="form-group">
                <label htmlFor="quantity">Quantity</label>
                <input type="number" id="quantity" name="quantity" className="quantity"/>
            </div>

            <div className="form-group">
                <label htmlFor="unit">Unit</label>
                <input type="number" id="unit" name="unit" className="unit" />
            </div>

            <div className="form-group">
                <label htmlFor="expirary-date">Expirary date</label>
                <input type="month" id="calender" name="calender" className="expiry-date"/>
            </div>

            <div className="form-group">
                <label htmlFor="threshold-value">Threshold value</label>
                <input type="number" id="threshold-value" name="threshold-value" className="threshold" /> 
            </div>

            <div className="button-group">
                <button 
                    className="discard-btn"
                    onClick={toggleForm}>Discard</button>

                <button type="submit"
                    className="submit-btn">
                    Add Product
                </button>
            </div>
        </form>
    )
}