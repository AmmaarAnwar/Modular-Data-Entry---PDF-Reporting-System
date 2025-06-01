import React, { useState, useEffect } from "react";
import axios from "axios";

function Edkhal17() {
  const [values, setValues] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://30.30.30.53:3000/edkhal/edkhal17');
      setValues(response.data.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <>
      <div className="text-center pb-3 font-black text-gray-900 text-4xl dark:text-white">
        <p>رابط الوحدة بالوحدة الأم</p>
      </div>
      <div className=" col-span-12 grid grid-cols-12  p-1">
        <div className="col-span-5" />
        <button
          type="button"
          className="col-span-1 text-green-700 hover:text-white border outline-none border-green-700 hover:bg-green-800 hover:border-green-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          onClick={fetchData}
        >
          بحث
        </button>
      </div>
      <div className="flex justify-center items-center mx-26 ">
        <div className="mx-1">
          <p className="font-bold text-lg">
            ربط الوحدة بالوحدة الأم
          </p>
        </div>
      </div>
      <div className="relative overflow-x-auto overflow-y-auto z-[2] mx-24  ">
        <div className="border-2 border-gray-400 mt-2 rounded-lg p-2">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 ">
            <thead className="text-md text-gray-900 uppercase dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3 text-center">
                  كود الوحدة
                </th>
                <th scope="col" className="px-6 py-3 text-center">
                  أسم الوحدة
                </th>
                <th scope="col" className="px-6 py-3 text-center">
                  كود الوحدة الأم
                </th>
              </tr>
            </thead>
            <tbody >
              {
                values.map((e, index) => (
                  <tr className={index % 2 === 0 ? 'bg-gray-200' : 'bg-white'} key={index}>
                    <td className="px-6 py-4 text-center">
                      {e.NO}
                    </td>
                    <td className="px-6 py-4 text-center">
                      {e.NAME}
                    </td>
                    <td className="px-6 py-4 text-center">
                      {e.MANG_UNIT_NO}
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Edkhal17;
