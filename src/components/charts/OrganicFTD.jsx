import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend,
} from "chart.js";

import { Line } from "react-chartjs-2";
import { PiggyBank, HandCoins } from "lucide-react";



ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend
);

export default function OrganicFTD() {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept"],
    datasets: [
      {
        label: "Affiliates",
        data: [160000, 90000, 140000, 80000, 30000, 180000, 280000, 160000, 40000],
        borderColor: "#0284ff",
        backgroundColor: "#0284ff",
        pointBackgroundColor: "#ffffff",
        pointBorderColor: "#0284ff",
        pointRadius: 6,
        borderWidth: 2,
        tension: 0.4,
      },
      {
        label: "Organic",
        data: [260000, 170000, 135000, 215000, 50000, 10000, 50000, 20000, 90000],
        borderColor: "#8b5cf6",
        backgroundColor: "#8b5cf6",
        pointBackgroundColor: "#ffffff",
        pointBorderColor: "#8b5cf6",
        pointRadius: 6,
        borderWidth: 2,
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    interaction: {
      mode: "index",
      intersect: false,
    },
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          usePointStyle: true,
          boxWidth: 8,
          color: "#1f2937",
        },
      },
      tooltip: {
        enabled: true,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: "#6b7280",
        },
      },
      y: {
        min: 0,
        max: 300000,
        ticks: {
          stepSize: 50000,
          color: "#6b7280",
        },
        title: {
          display: true,
          text: "Amount",
          color: "#6b7280",
        },
        grid: {
          color: "#e5e7eb",
        },
      },
    },
  };

  return (
    <>
        <h2 className="text-xl font-semibold text-title-color pt-6 !mb-0">Affiliate vs Organic FTD</h2>
        <div className="p-0 mt-2.5 rounded-xl border border-gray-200 bg-white shadow-sm justify-center">

          <div className="grid grid-cols-1 lg:grid-cols-4">
            <div className="col-span-1 border-r border-r-gray-light1 flex justify-center lg:flex-wrap columns-2">                
                <div className="p-4 border-b border-b-gray-light1 w-full flex flex-col gap-2.5 justify-end">
                  <PiggyBank className="text-[#0099F2] h-10 w-10" />
                  <p className="text-sm font-medium text-title-color-70 !mb-0">
                    Total Affiliates FTD
                  </p>
                  <h3 className="mt-1 text-2xl font-semibold text-title-color !mb-0">
                    R 8.54 m
                  </h3>
                </div>

                <div className="p-4 w-full flex flex-col gap-2.5 lg:border-0 border-b border-b-gray-light1">
                  <HandCoins className="text-[#9159C0] h-10 w-10" />
                  <p className="text-sm font-medium text-title-color-70 !mb-0">
                    Total Organic FTD
                  </p>
                  <h3 className="mt-1 text-2xl font-semibold text-title-color !mb-0">
                    R 11.65 m
                  </h3>
                </div>
            </div>
            <div className="col-span-3 p-4">
              <Line data={data} options={options} className="w-full mt-2" />
            </div>
          </div>
        </div>
    </>

  );
}
