export function Product() {
    return (
        <div className="Product inv-prod">
            <h2>Product Summary</h2>

            <div className="inv-prod-items">
                <div className="Suppliers flex-action">
                    <img src="../src/assets/dashboard/Product/suppliers.svg" alt="Supplier Logo" />
                    <div className="text">
                        <strong>31</strong>
                        <p>Number of Suppliers</p>
                    </div>
                </div>
                <hr />
                <div className="Categories flex-action">
                    <img src="../src/assets/dashboard/Product/Categories.svg" />
                    <div className="text">
                        <strong>21</strong>
                        <p>Number of Categories</p>
                    </div>
                </div>
            </div>
        </div>
    )
}