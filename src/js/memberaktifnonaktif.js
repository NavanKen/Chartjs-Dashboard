const idChart = document.getElementById("chartAktifNonaktif");
const aktifMember = 300;
const nonaktifMember = 800;

const memberNonaktifAktif = new Chart(idChart, {
  type: "doughnut",
  data: {
    labels: ["Member Aktif", "Member Nonaktif"],
    datasets: [
      {
        pointStyle: "circle",
        data: [aktifMember, nonaktifMember],
        backgroundColor: ["#3B71CA", "#E6E6E6"],
        hoverOffset: 4,
        borderWidth: 0,
      },
    ],
  },
  options: {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: "right",
        labels: {
          usePointStyle: true,
        },
      },
    },
  },
});
