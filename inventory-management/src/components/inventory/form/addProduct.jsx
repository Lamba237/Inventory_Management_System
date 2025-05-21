import { useState } from "react";
import FileBrowser from "./fileBrowsing";

export default function AddProduct() {
    const [showForm, setShowForm] = useState(false);

    const toggleForm = () => {
        setShowForm(!showForm);
    }

    return (
        <div className="add-product">
            <button onClick={toggleForm}>
                {showForm ? "Hide product" : "Add Product"}
            </button>

            {showForm && (
                <div className="add-product-form">
                    <form>
                        <div className="header-form-container">
                            <h2>New Product</h2>
                            <FileBrowser />
                        </div>
                    </form>
                </div>
            )}
        </div>
    )
}