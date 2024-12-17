const customer = document.getElementById("customer");
const datacustomer = [5120, 24031, 12024, 61246, 67993, 55032];
const year = ["2020", "2021", "2022", "2023", "2024", "2025"];
const customerChart = new Chart(customer, {
  type: "line",
  data: {
    labels: year,
    datasets: [
      {
        pointStyle: "circle",
        label: "Customer Baru",
        backgroundColor: "#3B71CA",
        borderColor: "#3B71CA",
        data: datacustomer,
        fill: false,
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        labels: {
          usePointStyle: true,
        },
        display: true,
        position: "bottom",
        align: "start",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 90000,
      },
    },
  },
});
