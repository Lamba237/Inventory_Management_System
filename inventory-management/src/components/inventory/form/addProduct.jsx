import { useState, useEffect } from "react";
import './addProduct.css';
import Form from "./form";

export default function AddProduct() {
    const [showForm, setShowForm] = useState(false);

    const toggleForm = () => {
        setShowForm(!showForm);
    }

    useEffect(() => {
        if (showForm) {
        document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        }
    }, [showForm]);

    return (
        <div className="add-product">
            <button onClick={toggleForm} className="product-btn blue-btn">
                Add Product
            </button>

            {showForm && (
                <div className="modal-container">
                    <div className="modal-attributes">

                        <div className="modal-files">
                            <h2 className="modal-header">New Product</h2>

                            <div className="file-name">
                                <div className="dotted-box"></div>
                                <div className="browse-files">
                                    <p>Drag image here</p>
                                    <p>or</p>
                                    <p>Browse file</p>
                                </div>
                            </div>
                        </div>

                        <div className="modal-form">
                            <Form />
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}