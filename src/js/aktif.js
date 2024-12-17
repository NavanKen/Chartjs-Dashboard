const aktif = document.getElementById("memberAkitf");
const dataAktif = [7000, 2000, 5342, 1023, 1009, 4208];
const tahunAktif = [2019, 2020, 2021, 2022, 2023, 2024];
const dataNonAktif = [3000, 1024, 2068, 987, 4032, 1024];
const tahunNonAktif = [2019, 2020, 2021, 2022, 2023, 2024];

const memberAkifChart = new Chart(aktif, {
  type: "bar",
  data: {
    labels: dataAktif,
    datasets: [
      {
        pointStyle: "circle",
        label: "Member Aktif",
        backgroundColor: "#3B71CA",
        data: dataAktif,
      },
      {
        pointStyle: "circle",
        label: "Member Nonaktif",
        backgroundColor: "#E6E6E6",
        data: dataNonAktif,
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
  },
});
