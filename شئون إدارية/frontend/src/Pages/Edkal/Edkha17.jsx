import { useState, useEffect } from "react";
import axios from "axios";
function Edkhal7() {
  let postObject = { "personalData": [{ "TASHKEL": null, "NAME": null, "NO": null }] };
  const [values, setValues] = useState(postObject)
  let myData = [...values.personalData ?? ""]
  async function fetchEdkhal7() {
    setValues(postObject)
    const response = await axios.get(`http://30.30.30.53:3000/edkhal/edkhal7`);
    setValues((values) => ({
      "personalData": [...response.data.data]
    }))
  }
  useEffect(() => {
    fetchEdkhal7();
  }, [])
  return (
    <>
      <div className="text-center pb-3 font-black text-gray-900 text-4xl dark:text-white">
        <p>الوحدات</p>
      </div>
      <div class="relative overflow-x-auto overflow-y-auto z-[2] h-screen mx-28 border-2 border-gray-400 mt-2 rounded-lg h[200px]">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 ">
          <thead class="text-xs text-gray-900 uppercase dark:text-gray-400 sticky top-0 bg-white">
            <tr>
              <th scope="col" class="px-6 py-3 text-center">
                كود
              </th>
              <th scope="col" class="px-6 py-3 text-center">
                الوحدة
              </th>
              <th scope="col" class="px-6 py-3 text-center">
                التشكيل
              </th>
            </tr>
          </thead>
          <tbody>
            {
              myData.map((e, index) => (
                <tr class={index % 2 === 0 ? 'bg-gray-200' : 'bg-white'} key={index}>
                  <td class="px-6 py-4 text-center">
                    {e.NO}
                  </td>
                  <td class="px-6 py-4 text-center">
                    {e.NAME}
                  </td>
                  <td class="px-6 py-4 text-center">
                    {(e.TASHKEL === 1) ? " تشكيل " : ((e.TASHKEL === 2) ? " ليست تشكيل " : null)}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
export default Edkhal7;