import React from "react"

export default function OverallInventory() {
    return (
        <>
         
        <div className="overall-container">
            <div className="overall-header">
                <h2>Overall Inventory</h2>
            </div>

            <div className="inventory-text-header">
                <p>Categories</p>
                <p>Total Products</p>
                <p>Top Selling</p>
                <p>Low Stocks</p>
            </div>

            <div className="inventory-record">
                <div className="categories flex-goes-here">
                    <div>
                        <p className="grey-600">14</p>
                        <p className="grey-400">Last 7 days</p>
                    </div>
                </div>

                <div className="total-products flex-goes-here">
                    <div className="last-7-day">
                        <p className="grey-600">868</p>
                        <p className="grey-400">Last 7 days</p>
                    </div>
                    <div className="revenue">
                        <p className="grey-600">₹25000</p>
                        <p className="grey-400">Revenue</p>
                    </div>
                </div>

                <div className="top-selling flex-goes-here">
                    <div className="last-7-days">
                        <p className="grey-600">5</p>
                        <p className="grey-400">Last 7 days</p>
                    </div>
                    <div className="cost">
                        <p className="grey-600">₹2500</p>
                        <p className="grey-400">Cost</p>
                    </div>
                </div>

                <div className="low-stocks flex-goes-here">
                    <div className="ordered">
                        <p className="grey-600">12</p>
                        <p className="grey-400">Ordered</p>
                    </div>
                    <div className="not-in-stock">
                        <p className="grey-600">2</p>
                        <p className="grey-400">Not in stock</p>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}