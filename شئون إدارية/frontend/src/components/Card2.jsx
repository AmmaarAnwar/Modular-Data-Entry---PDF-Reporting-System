import React, { useEffect, useState, useRef } from 'react';
import ApexCharts from 'apexcharts';
import axios from 'axios';

const Card2 = () => {
  const [chartData, setChartData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedData, setSelectedData] = useState(null);
  const [Data, setData] = useState([{ NAME: null, MIL_NO: null, MIL_NO_FLAG: null }]);
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const popupRef = useRef(null);

  const handleClickOutside = (event) => {
    if (popupRef.current && !popupRef.current.contains(event.target)) {
      setIsPopupVisible(false);
    }
  };

  useEffect(() => {
    if (isPopupVisible) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isPopupVisible]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://30.30.30.53:3000/dashboard/dashboard');
        const data = await response.json();
        const rotabanalysisData = data.data.ROTABANALYSIS;
        setChartData(rotabanalysisData);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching data: ', error);
        setError('حدث خطأ');
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const getChartOptions = (data) => {
      const categories = data.map((entry) => entry.NAME);
      const seriesData = data.map((entry) => entry.RANK_COUNT);

      return {
        series: [
          {
            name: 'عدد الطباط',
            data: seriesData
          }
        ],
        colors: ['#1C64F2'],
        chart: {
          type: 'bar',
          height: 320,
          width: '100%',
          events: {
            dataPointSelection: async (event, chartContext, config) => {
              const selectedIndex = config.dataPointIndex;
              console.log(data[selectedIndex]);
              setSelectedData(data[selectedIndex]);
              const response = await axios.get(`http://30.30.30.53:3000/dashboard/officersrank?rank=${data[selectedIndex].NAME}`);
              console.log(response);
              setData(response.data.data);
              setIsPopupVisible(true);
            },
          },
        },
        xaxis: {
          categories: categories,
          labels: {
            style: {
              fontFamily: 'Inter, sans-serif',
              fontSize: '14px',
            },
            rotate: -35,
            offsetY: 40,
          },
        },
        legend: {
          position: 'bottom',
          fontFamily: 'Inter, sans-serif',
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: '40%',
            borderRadius: 4,
          }
        },
        grid: {
          show: true,
          borderColor: '#e7e7e7',
          strokeDashArray: 4,
        },
        dataLabels: {
          enabled: true,
          style: {
            colors: ['#304758'],
            fontFamily: 'Inter, sans-serif',
            fontSize: '14px',
          },
          formatter: function (val) {
            return val;
          },
        },
        tooltip: {
          enabled: true,
          theme: 'dark',
        }
      };
    };

    if (chartData.length) {
      const chart = new ApexCharts(document.getElementById('column-chart'), getChartOptions(chartData));
      chart.render();

      // Attach click event listeners to x-axis labels after chart is rendered
      const xAxisLabels = document.querySelectorAll('.apexcharts-xaxis-texts-g text');
      xAxisLabels.forEach((label, index) => {
        label.style.cursor = 'pointer'; // Indicate that labels are clickable
        label.addEventListener('click', async () => {
          const selectedLabel = chartData[index].NAME;
          const response = await axios.get(`http://30.30.30.53:3000/dashboard/officersrank?rank=${selectedLabel}`);
          setData(response.data.data);
          setIsPopupVisible(true);
        });
      });

      return () => {
        chart.destroy();
        // Clean up label click event listeners
        xAxisLabels.forEach((label) => {
          label.removeEventListener('click', () => {});
        });
      };
    }
  }, [chartData]);

  const closePopup = () => {
    setIsPopupVisible(false);
    setSelectedData(null);
  };

  return (
    <>
      <div className="w-full p-4 bg-white rounded-lg shadow max-w dark:bg-gray-800 md:p-6">
        <div className="flex justify-between mb-3">
          <h2 className="text-lg font-semibold text-gray-800 dark:text-white">الإجمالى</h2>
        </div>
        {isLoading && <p>جارى التحميل...</p>}
        {error && <p>{error}</p>}
        {!isLoading && !error && <div className="py-6" id="column-chart"></div>}
        {isPopupVisible && selectedData && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div ref={popupRef} className="overflow-y-auto bg-white rounded-lg shadow dark:bg-gray-800 max-h-96">
              <table className="text-sm text-left text-gray-500 auto bg-sky-300 rtl:text-right dark:text-gray-400">
                <thead className="sticky top-0 text-xs text-lg font-bold text-right text-gray-700 text-gray-900 uppercase bg-white bg-gray-100 bg-sky-300 dark:text-gray-400 dark:bg-gray-800">
                  <tr>
                    <th scope="col" className="py-3 px-36">الاسم</th>
                    <th scope="col" className="py-3">الرقم </th>
                    <th scope="col" className="py-3 px-7">المميز</th>
                  </tr>
                </thead>
                <tbody>
                  {Data.map((e, index) => (
                    <tr
                      className={index % 2 === 0 ? "bg-gray-300 border p-1 border-gray-300 rounded-lg " : "bg-white border p-1 border-gray-300 rounded-lg "}
                      key={index}
                    >
                      <td
                        scope="row"
                        className="px-6 py-4 font-medium text-center text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        {e.NAME}
                      </td>
                      <td className="px-6 py-4 text-center">{e.MIL_NO}</td>
                      <td className="px-6 py-4 text-center">
                        {e.MIL_NO_FLAG === "N" ? "شرف" : e.MIL_NO_FLAG === "R" ? "احتياط" : e.MIL_NO_FLAG === "C" ? "طالب" : e.MIL_NO_FLAG === "O" ? "مكلف" : e.MIL_NO_FLAG === "S" ? "عامل/فنى" : null}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Card2;
