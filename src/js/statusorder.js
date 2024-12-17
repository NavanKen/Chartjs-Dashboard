const statusOrder = document.getElementById("statusOrder");
const delivery = ["Selesai", "Belum"];
const jumlah = [30, 12];

const orderChart = new Chart(statusOrder, {
  type: "pie",
  data: {
    labels: delivery,
    datasets: [
      {
        label: "Status Order",
        backgroundColor: ["#3B71CA", "#FBFBFB"],
        data: jumlah,
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
