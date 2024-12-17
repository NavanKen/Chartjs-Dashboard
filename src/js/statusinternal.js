const statusInternal = document.getElementById("statusInternal");
const internalStatus = ["Selesai", "Proses"];
const total = [0, 15];

const internalChart = new Chart(statusInternal, {
  type: "pie",
  data: {
    labels: internalStatus,
    datasets: [
      {
        label: "Status Internal",
        backgroundColor: ["#FBFBFB", "#3B71CA"],
        data: total,
      },
    ],
  },
  options: {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: "bottom",
        labels: {
          usePointStyle: true,
        },
      },
    },
  },
});
