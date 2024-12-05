import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const DashboardGraphs = ({ salesData }) => {
    const data = {
        labels: salesData.map((item) => item.month),
        datasets: [
          {
            label: 'Amount',
            data: salesData.map((item) => item.sales.toString().toLocaleString("en-in")),
            borderColor: '#e46161',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderWidth: 2,
            tension: 0.4,
            pointBackgroundColor: '#000',
            pointBorderColor: '#ddd',
            pointHoverRadius: 10,
          },
        ],
    };
    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: true,
            position: 'top',
          },
          tooltip: {
            enabled: true,
          },
          title: {
            display: true,
            text: 'Monthly Sales Growth',
            font: {
              size: 20,
            },
          },
        },
        animation: {
          duration: 1500,
          easing: 'easeInOutQuart',
        },
        scales: {
          x: {
            title: {
              display: true,
              text: 'Months',
            },
          },
          y: {
            title: {
              display: true,
              text: 'Sales (in Rupees)',
            },
            beginAtZero: true,
          },
        },
    };
    return (
        <div style={{ width: '100%', height: '500px', marginBottom: "15px", backgroundColor: "#fff", padding: "20px", borderRadius: "5px", boxShadow: '3px 3px 2px 3px rgba(0,0,0,0.08)' }}>
            <Line data={data} options={options} />
        </div>
    )
}

export default DashboardGraphs