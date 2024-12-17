const terima = document.getElementById("statusTerima");
const data = [20, 70];
const selesai = "selesai";
const belum = "belum";

const terimaChart = new Chart(terima, {
  type: "pie",
  data: {
    labels: [selesai, belum],
    datasets: [
      {
        backgroundColor: ["#3B71CA", "#FBFBFB"],
        data: data,
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
