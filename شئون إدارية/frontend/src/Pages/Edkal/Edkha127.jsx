import { useState } from "react";
import axios from "axios";

function Edkhal27() {
  // Initial state structure
  const initialState = { personalData: [{ COUNTRY_NO: null, NAME: null, NO: null }] };
  const [values, setValues] = useState(initialState);

  // Function to handle the API call and update state
  const fetchData = async () => {
    try {
      const response = await axios.get('http://30.30.30.53:3000/edkhal/edkhal27');
      setValues({ personalData: response.data.data.personalData });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <>
      <div className="text-center pb-3 font-black text-gray-900 text-4xl dark:text-white">
        <p>أضافة إعارة</p>
      </div>
      <div className="flex justify-center items-center">
        <div className="mx-1">
          <button
            onClick={fetchData}
            type="button"
            className="text-green-700 hover:text-white border outline-none border-green-700 hover:bg-green-800 hover:border-green-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            بحث
          </button>
        </div>
      </div>
      {/* Table */}
      <div className="border-2 border-gray-400 my-[5px] rounded-xl relative overflow-x-auto overflow-y-auto z-[2] h-screen">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-900 uppercase dark:text-gray-400">
            <tr>
              <th scope="col" className="border-l border-black border-b-2 border-black px-6 py-3 text-center">كود الإعارة</th>
              <th scope="col" className="border-l border-black border-b-2 border-black px-6 py-3 text-center">إسم الإعارة</th>
              <th scope="col" className="border-black border-b-2 px-6 py-3 text-center">الدولة</th>
            </tr>
          </thead>
          <tbody>
            {values.personalData.map((e, index) => (
              <tr className={index % 2 === 0 ? 'bg-gray-200' : 'bg-white'} key={index}>
                <td className="px-6 py-4 text-center border-l border-black">{e.NO}</td>
                <td className="px-6 py-4 text-center border-l border-black">{e.NAME}</td>
                <td className="px-6 py-4 text-center">{e.COUNTRY_NO}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Edkhal27;
