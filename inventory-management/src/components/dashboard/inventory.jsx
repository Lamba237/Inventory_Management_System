export default function Inventory() {
    return (
        <div className="inventory-container inv-prod">
            <h2>Inventory Summary</h2>

            <div className="inv-prod-items">
                <div className="Quantity flex-action">
                    <img src="../src/assets/dashboard/Inventory-data/Quantity.svg" alt="Quantity Logo" />
                    <div className="text">
                        <strong>800</strong>
                        <p>Quantity in Hand</p>
                    </div>
                </div>
                <div className="To-be-received flex-action">
                    <img src="../src/assets/dashboard/Inventory-data/map.svg" alt="Map logo" />
                    <div className="text">
                        <strong>200</strong>
                        <p>To be received</p>
                    </div>
                </div>
            </div>
        </div>
    )
}