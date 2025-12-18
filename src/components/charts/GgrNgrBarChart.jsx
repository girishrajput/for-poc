import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
);

const GgrNgrBarChart = () => {
  const data = {
    labels: [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun",
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ],
    datasets: [
      {
        label: "GGR",
        data: [120, 150, 180, 170, 200, 220, 210, 230, 250, 240, 260, 280],
        backgroundColor: "#3B57C9",
      },
      {
        label: "NGR",
        data: [60, 70, 90, 85, 100, 120, 110, 125, 140, 135, 150, 165],
        backgroundColor: "#0099F2",
      },
    ],
  };

  const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "bottom",
      labels: {
        usePointStyle: true,
        pointStyle: "circle",
      },
    },
    tooltip: {
      mode: "index",
      intersect: false,
    },
  },
  
  scales: {
      x: {
        stacked: false, // IMPORTANT → side by side
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Amount",
        },
      },
    },
  };

  return(
    <>
    <div className="p-4 mt-6 rounded-xl border border-gray-200 bg-white shadow-sm">
    <h2 className="text-xl font-semibold text-title-color">Monthly GGR & NGR</h2>
    <Bar data={data} options={options} className="w-full mt-2" />
    </div>
    </>
  ) ;
};

export default GgrNgrBarChart;
