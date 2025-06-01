import React, { useState, useEffect } from "react";
import axios from "axios";

function Edkhal22() {
  const [values, setValues] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://30.30.30.53:3000/edkhal/edkhal22');
      setValues(response.data.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <>
      <div className="text-center pb-3 font-black text-gray-900 text-4xl dark:text-white">
        <p>أضافة وظيفة</p>
      </div>
      <div className="flex justify-center items-center">
        <div className="mx-1">
          <p className="font-bold text-lg">
         الوظائف
          </p>
        </div>
      </div>
      <div className="relative overflow-x-auto overflow-y-auto z-[2] h-screen ">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 ">
          <thead className="text-md text-gray-900 uppercase dark:text-gray-400 sticky top-0 bg-white">
            <tr>
              <th scope="col" className="px-6 py-3 text-center">
                الكود 
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                أسم الوظيفة
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
                </tr>
              ))}
          </tbody>
        </table>
      </div>

    </>
  );
}
export default Edkhal22;
