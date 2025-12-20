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
import { Network, UserRoundPlus } from "lucide-react";



ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend
);

export default function OrganicRegistrations() {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept"],
    datasets: [
      {
        label: "Affiliates Reg.",
        data: [0, 90000, 140000, 165000, 30000, 180000, 280000, 160000, 40000],
        borderColor: "#00CEE8",
        backgroundColor: "#00CEE8",
        pointBackgroundColor: "#ffffff",
        pointBorderColor: "#00CEE8",
        pointRadius: 6,
        borderWidth: 2,
        tension: 0.4,
      },
      {
        label: "Organic Reg.",
        data: [100000, 170000, 135000, 215000, 50000, 10000, 50000, 20000, 90000],
        borderColor: "#0099F2",
        backgroundColor: "#0099F2",
        pointBackgroundColor: "#ffffff",
        pointBorderColor: "#0099F2",
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
          text: "Count",
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
        <h2 className="text-xl font-semibold text-title-color pt-6 !mb-0">Affiliate vs Organic Registrations</h2>
        <div className="p-0 mt-2.5 rounded-xl border border-gray-200 bg-white shadow-sm justify-center">

          <div className="grid grid-cols-1 lg:grid-cols-4">

            <div className="col-span-1 border-r border-r-gray-light1 flex justify-center lg:flex-wrap columns-1 lg:columns-2">
                
                <div className="p-4 border-b border-b-gray-light1 w-full flex flex-col gap-2.5 justify-end">
                  <Network className="text-[#0099F2] h-8 w-8" />
                  <p className="text-sm font-medium text-title-color-70 !mb-0">
                    Total Affiliates Reg.
                  </p>
                  <h3 className="mt-1 text-2xl font-semibold text-title-color">
                    727,501
                  </h3>
                </div>

                <div className="p-4 w-full flex flex-col gap-2.5 lg:border-0 border-b border-b-gray-light1">
                  <UserRoundPlus className="text-[#00CEE8] h-8 w-8" />
                  <p className="text-sm font-medium text-title-color-70 !mb-0">
                    Total Organic Reg.
                  </p>
                  <h3 className="mt-1 text-2xl font-semibold text-title-color">
                    892,694
                  </h3>
                </div>

            </div>
            <div className="col-span-1 p-4 lg:col-span-3">
              <Line data={data} options={options} className="w-full mt-2" />
            </div>

          </div>
        </div>
    </>

  );
}
