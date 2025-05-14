import React, { useState } from "react";

const lowStocks = [
    [
        "../src/assets/dashboard/low-stocks/lays.jpg",
        "Lays",
        "15",
        "Low"
    ],
    [
        "../src/assets/dashboard/low-stocks/tata-salt.png",
        "Tata Salt",
        "10",
        "Low"
    ],
    [
        "../src/assets/dashboard/low-stocks/pepsi.jpg",
        "Pepsi",
        "8",
        "Low"
    ],

]

export default function LowStocks() {
    const [showAll, setShowAll] = useState(false)

    const toggleStocks = () => {
        setShowAll((prev) => !prev)
    }

    const displayedStocks = showAll ? lowStocks : lowStocks.slice(0, 2);

    return (
        <div className="low-stocks-container">
            <div className="lowStock-header">
                <h2>Low Quality Stock</h2>
                <p onClick={toggleStocks}>
                    {showAll ? "See Less" : "See All"}
                </p>
            </div>

            <div className="lowStock-list">
                <table  className="low-stock-table">
                    <tbody>
                        {displayedStocks.map((item, index) => (
                            <tr key={index} className="low-stock-item">
                                <td>
                                    <img src={item[0]} alt={item[1]} className="lowStock-img"/>
                                </td>
                                <div className="lowStock-details">
                                    <td>{item[1]}</td>
                                    <td>Remaining Quantity: {item[2]} Packets</td>
                                </div>
                                <td className="low-stock-status">
                                    {item[3]}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}