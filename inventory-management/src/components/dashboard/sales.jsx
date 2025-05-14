export default function Sales() {
    return (
        <div className="sales-container flex-container">
            <h2>Sales Overview</h2>
            <div className="flex-item">
                <div className="sales logo-container">
                    <img src="../src/assets/dashboard/sales-data/Sales.svg" alt="sales-logo" />
                    <div className="text-div">
                        <strong>₹ 832</strong>
                        <p>Sales</p>
                    </div>
                    
                </div>
                <hr />

                <div className="Revenue logo-container">
                    <img src="../src/assets/dashboard/sales-data/Revenue.svg" alt="Revenue-logo" />
                    <div className="text-div">
                        <strong>₹ 18,300</strong>
                        <p>Revenue</p>
                    </div>
                </div>
                <hr />

                <div className="Profit logo-container">
                    <img src="../src/assets/dashboard/sales-data/Profit.svg" alt="Profit-logo" />
                    <div className="text-div">
                        <strong>₹ 868</strong>
                        <p>Profit</p>
                    </div>
                </div>
                <hr />

                <div className="Cost logo-container">
                    <img src="../src/assets/dashboard/sales-data/Cost.svg" alt="Cost Container" />
                    <div className="text-div">
                        <strong>₹ 17,432</strong>
                        <p className="last-child">Cost</p>
                    </div>
                </div>
            </div>
        </div>
    )
}