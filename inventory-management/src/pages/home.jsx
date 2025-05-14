import React from "react";
import Drawer from "../components/drawer";
import SearchBar from "../components/searchBar";
import { Outlet } from "react-router-dom";
import '../styles/home.css';


export default function Home() {
    return (
        <div className="home-layout-container">
            <div className="drawer-container">
                <Drawer />
            </div>
            <div className="search-bar-container">
                <SearchBar />
                <div className="content">
                    <Outlet />
                </div>
            </div>

        </div>
    )
}