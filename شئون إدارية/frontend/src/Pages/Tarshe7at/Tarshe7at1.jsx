import { useState, useEffect } from "react";
import axios from "axios";

function Tarshe7at1() {
  let postObject = { personalData: [{ NO: null, NAME: null }] };
  const [values, setValues] = useState(postObject);

  let myData = [...(values.personalData ?? "")];
  async function fetchTarshe7at1() {
    setValues(postObject);
    const response = await axios.get(
      `http://30.30.30.53:3000/tarshe7at/acwadetarshe7at`
    );
    setValues((values) => ({
      personalData: [...response.data.data],
    }));
  }
  useEffect(() => {
    fetchTarshe7at1();
  }, []);
  return (
    <>
      <div className="pb-3 text-4xl font-black text-center text-gray-900 dark:text-white">
        <p>الوحدات</p>
      </div>
      <div class="relative overflow-x-auto overflow-y-auto z-[2] h-screen mx-28 border-2 border-gray-400 mt-2 rounded-lg h[200px] ">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400  ">
          <thead class="text-xs text-gray-900 uppercase dark:text-gray-400 sticky top-0 bg-white">
            <tr>
              <th scope="col" class="px-6 py-3 text-center">
                كود
              </th>
              <th scope="col" class="px-6 py-3 text-center">
                اسم الترشيح
              </th>
            </tr>
          </thead>
          <tbody>
            {myData.map((e, index) => (
              <tr
                class={index % 2 === 0 ? "bg-gray-200" : "bg-white"}
                key={index}
              >
                <td class="px-6 py-4 text-center">{e.NO}</td>
                <td class="px-6 py-4 text-center">{e.NAME}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Tarshe7at1;
