import { useState } from "react";
import axios from "axios";

function Edkhal25() {
  const postObject = { TEST_DATES: [{ DATE0: null, EXAM_NO: null }] };
  const [values, setValues] = useState(postObject);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://30.30.30.53:3000/edkhal/edkhal25');
      setValues({ TEST_DATES: response.data.data.TEST_DATES });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <>
      <div className="text-center pb-3 font-black text-gray-900 text-4xl dark:text-white">
        <p>تاريخ أمتحان الترقى</p>
      </div>
      <button
        onClick={fetchData}
        type="button"
        className="h-full p-2 col-span-1 text-green-700 hover:text-white border outline-none border-green-700 hover:bg-green-800 hover:border-green-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
      >
        بحث
      </button>
      <div className="border-2 border-gray-400 my-[5px] rounded-xl relative overflow-x-auto overflow-y-auto z-[2] h-screen">
        <table className="relative overflow-x-auto overflow-y-auto z-[2] border-2 border-gray-400 rounded-xl w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-center text-xs text-gray-900 uppercase dark:text-gray-400">
            <tr>
              <th scope="col" className="border-l border-black px-6 py-3 text-center">Date0</th>
              <th scope="col" className="px-6 py-3 text-center">Exam No</th>
            </tr>
          </thead>
          <tbody>
            {values.TEST_DATES.map((e, index) => (
              <tr className={index % 2 === 0 ? 'bg-gray-200 text-center' : 'bg-white text-center'} key={index}>
                {e.DATE0 && e.DATE0 && new Date(e.DATE0).toISOString().split('T')[0]}
                <td className="px-6 py-4 text-center border-r border-black ">{e.EXAM_NO}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Edkhal25;
