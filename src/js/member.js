const member = document.getElementById("member");
const dataMember = [120, 4031, 2024, 1246, 7993, 5032];
const tahun = ["2020", "2021", "2022", "2023", "2024", "2025"];
const memberChart = new Chart(member, {
  type: "line",
  data: {
    labels: tahun,
    datasets: [
      {
        pointStyle: "circle",
        label: "Member Baru",
        backgroundColor: "#3B71CA",
        borderColor: "#3B71CA",
        data: dataMember,
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
        max: 10000,
      },
    },
  },
});
