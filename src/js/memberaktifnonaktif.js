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
        backgroundColor: ["#F8A23E", "#ADDE34"],
        hoverOffset: 4,
        borderWidth: 0,
        borderColor: ["#F8A23E", "#ADDE34"],
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
