import Product from "../components/inventory/product"
import OverallInventory from "../components/inventory/overall-inventory"
import "../styles/inventory.css"
export default function Inventory() {
    return (
        <div className="inventory-page-container">
            <OverallInventory />
            <Product />
        </div>
    )
}