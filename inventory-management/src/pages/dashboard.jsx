import React from "react";
import '../styles/dashboard.css';
import Sales from "../components/dashboard/sales";
import Inventory from "../components/dashboard/inventory";
import Purchase from "../components/dashboard/Purchase";
import { Product } from "../components/dashboard/Product";
import LineChart from "../components/dashboard/lineCharts";
import AllStocks from "../components/dashboard/allStocks";
import LowStocks from "../components/dashboard/lowStocks";

export default function Dashboard() {
    return (
        <div className="dashboard-container">
           <Sales />
           <Inventory />
           <Purchase />
           <Product />
           <LineChart />
           <AllStocks />
           <LowStocks />

        </div>
    )
}