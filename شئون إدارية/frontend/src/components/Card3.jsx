import React, { useEffect, useState } from "react";
import ApexCharts from "apexcharts";

function Card3() {
  const [chartData, setChartData] = useState({ total: 0, series: [0, 0] });
  const [hasFetched, setHasFetched] = useState(false);

  useEffect(() => {
    if (!hasFetched) {
      const fetchData = async () => {
        try {
          const response = await fetch("http://30.30.30.53:3000/dashboard/dashboard");
          const data = await response.json();
          const { TOTAL_OFFICERS, MUSLIM, CHRESTIAN } = data.data;
          setChartData({ total: TOTAL_OFFICERS, series: [MUSLIM, CHRESTIAN] });
          setHasFetched(true);
        } catch (error) {
          console.error("Error fetching data: ", error);
        }
      };

      fetchData();
    }
  }, [hasFetched]);

  useEffect(() => {
    const getChartOptions = (data) => {
      const total = data.total;
      const series = data.series;
      const seriesSum = series.reduce((acc, value) => acc + value, 0);

      return {
        series: series,
        colors: ["#1C64F2", "#9400D3"],
        chart: {
          height: 320,
          width: "100%",
          type: "donut",
        },
        stroke: {
          colors: ["transparent"],
          lineCap: "",
        },
        plotOptions: {
          pie: {
            donut: {
              labels: {
                show: true,
                name: {
                  show: true,
                  fontFamily: "Inter, sans-serif",
                  offsetY: 20,
                },
                total: {
                  showAlways: true,
                  show: true,
                  label: "عدد الضباط",
                  fontFamily: "Inter, sans-serif",
                  formatter: function () {
                    return total;
                  },
                },
                value: {
                  show: true,
                  fontFamily: "Inter, sans-serif",
                  offsetY: -20,
                },
              },
              size: "70%",
            },
          },
        },
        grid: {
          padding: {
            top: -2,
          },
        },
        labels: [" مسلم", "  مسيحى"],
        dataLabels: {
          enabled: false,
        },
        legend: {
          position: "bottom",
          fontFamily: "Inter, sans-serif",
        },
        yaxis: {
          labels: {
          },
        },
        xaxis: {
          labels: {
          },
          axisTicks: {
            show: false,
          },
          axisBorder: {
            show: false,
          },
        },
      };
    };

    if (chartData.series.length && hasFetched) {
      const chart = new ApexCharts(document.getElementById("donut-chart2"), getChartOptions(chartData));
      chart.render();

      return () => {
        chart.destroy();
      };
    }
  }, [chartData, hasFetched]);

  return (
    <div className="max-w-sm w-full bg-white rounded-lg shadow dark:bg-gray-800 p-4 md:p-6">
      <div className="flex justify-between mb-3">
        <div
          id="data-tooltip"
          role="tooltip"
          className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
        >
          <div className="tooltip-arrow" data-popper-arrow></div>
        </div>
      </div>
      <div className="py-6" id="donut-chart2"></div>
    </div>
  );
}

export default Card3;
