import React, { useState } from "react"
import { Route } from "react-router-dom"

const th = ["Name", "Sold Quantity", "Remaining Quantity", "Price"]

const allStocks = [
    ["Surf Excel", "30", "12", "₹ 100"],
    ["Rin", "21", "15", "₹ 207"],
    ["Parle G", "19", "17", "₹ 105"],
    ["Tata Tea", "15", "10", "₹ 50"],
    ["Tata Salt", "12", "8", "₹ 20"]

]



export default function AllStocks() {
    const [showAll, setShowAll] = useState(false)

    // toggle between showing top stocks and all stocks
    const toggleStocks = () => {
        setShowAll((prev) => !prev)
    }

    const displayedStocks = showAll ? allStocks : allStocks.slice(0, 3)
    
    return (
        <div className="all-stocks-container">
            <div className="allStock-header">
                <h2>Top Selling Stock</h2>
                <p onClick={toggleStocks} style={{ cursor: "pointer", color: "#0f50aa"}} className="show-all">
                    {showAll ? "See Less" : "See All"}
                </p>
            </div>

            <div className="stocks-list">
                <table>
                    <tr>
                        {th.map((item, index) => {
                            return (
                                <th key={index}>{item}</th>
                            )
                        })}
                    </tr>

                    <tbody>
                        {displayedStocks.map((item, index) => (
                            <tr key={index}>
                                {item.map((subItem, subIndex) => (
                                    <td key={subIndex}>{subItem}</td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </div>
    )
}