import React from "react";
import {
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Title,
    Tooltip,
    Legend,
    PolarAreaController,
} from "chart.js";
import { Line, PolarArea } from "react-chartjs-2";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend);

const labels = ["Jan", "Feb", "Mar", "Apr", "May"]

const options = {
    layout: {
        autoPadding: true,
    },
    animation: {
        tension: {
            duration: 2000,
            easing: "linear",
            from: 1,
            to: 0,
            loop: true,
        }

    },
    elements: {
        point: {
            pointStyle: 'circle',
            radius: 3,
        }
    }
};

const data = {
    labels,
    datasets: [
        {
            label: "Ordered",
            backgroundColor: "rgb(255, 255, 255)",
            borderColor: "rgba(219, 163, 98, 1)",
            borderRadius: 14,
            data: [4000, 1500, 2500, 2100, 2350, 1300, 2100],
            tension: 0.5,
            pointRadius: 0,
        },
        {
            label: "Delivered",
            backgroundColor: "rgb(255, 255, 255)",
            borderColor: "rgba(182, 211, 250, 1)",
            data: [3100, 2100, 3800, 3750, 3700, 2800, 3500, 2100, 3100],
            tension: 0.5,
            pointRadius: 0,
        }
    ],
};

function LineChart() {
    return (
        <div className="line-chart-container">
            <div className="chart-header">
                <h2>Order Summary</h2>
            </div>
            <div className="chart-body">
            <Line data={data} options={options}/>
            </div>
        </div>
    );
}

export default LineChart;