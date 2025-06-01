import { useState, useEffect } from "react";
import axios from "axios";

function Edkhal7() {
  let postObject = { "personalData": [{ "TASHKEL": null, "NAME": null, "NO": null }] };
  const [values, setValues] = useState(postObject);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(20); // Limit to 20 items per page

  // Data after applying pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  let myData = [...values.personalData ?? ""].slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil((values.personalData ?? []).length / itemsPerPage);

  async function fetchEdkhal7() {
    setValues(postObject);
    const response = await axios.get(`http://30.30.30.53:3000/edkhal/edkhal24`);
    setValues(() => ({
      "personalData": [...response.data.data]
    }));
  }

  useEffect(() => {
    fetchEdkhal7();
  }, []);

  return (
    <>
      <div className="text-center pb-3 font-black text-gray-900 text-4xl dark:text-white">
        <p>اجازات مرضية</p>
      </div>
      <div className="col-span-12 grid grid-cols-12 border-2 border-gray-400 my-[5px] rounded-xl">
        <table className="col-span-12 w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-900 uppercase dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3 text-center">ت.ش</th>
              <th scope="col" className="px-6 py-3 text-center">مميز ت.ش</th>
              <th scope="col" className="px-6 py-3 text-center">تاريخ الدخول</th>
              <th scope="col" className="px-6 py-3 text-center">تاريخ المغادرة</th>
              <th scope="col" className="px-6 py-3 text-center">الحالة</th>
              <th scope="col" className="px-6 py-3 text-center">مميز الإصابة</th>
              <th scope="col" className="px-6 py-3 text-center">نص الإصابة</th>
              <th scope="col" className="px-6 py-3 text-center">المستشفى</th>
              <th scope="col" className="px-6 py-3 text-center">نوع الإصابة</th>
              <th scope="col" className="px-6 py-3 text-center">مدة الاجازة</th>
            </tr>
          </thead>
          <tbody>
            {
              myData.map((e, index) => (
                <tr className={index % 2 === 0 ? 'bg-gray-200' : 'bg-white'} key={index}>
                  <td className="px-6 py-4 text-center">{e.MIL_NO}</td>
                  <td className="px-6 py-4 text-center">{e.MIL_NO_FLAG === "S" ? " عامل/فنى " : e.MIL_NO_FLAG === "N" ? "شرف" : e.MIL_NO_FLAG}</td>
                  <td className="px-6 py-4 text-center">{(new Date(e.ENTER_DATE)).toLocaleDateString('en-CA')}</td>
                  <td className="px-6 py-4 text-center">{(new Date(e.EXIT_DATE)).toLocaleDateString('en-CA')}</td>
                  <td className="px-6 py-4 text-center">{e.STATUS === "Y" ? " عطلان" : e.STATUS === "N" ? "شغال" : e.STATUS}</td>
                  <td className="px-6 py-4 text-center">{e.INJURY_FLAG === "N" ? "حى" :e.INJURY_FLAG === "Y" ? "متوفى" : e.INJURY_FLAG}</td>
                  <td className="px-6 py-4 text-center">{e.INJURY_TEXT}</td>
                  <td className="px-6 py-4 text-center">{e.HOSPITAL}</td>
                  <td className="px-6 py-4 text-center">{e.DIS_NAME}</td>
                  <td className="px-6 py-4 text-center">{e.LEAVE_DUR}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>

      {/* Pagination Slider */}
      <div className="flex justify-center my-4">
        <input
          type="range"
          min="1"
          max={totalPages}
          value={currentPage}
          onChange={(e) => setCurrentPage(Number(e.target.value))}
          className="w-1/2"
        />
      </div>
      <div className="text-center">
        <p>Page {currentPage} of {totalPages}</p>
      </div>
    </>
  );
}

export default Edkhal7;
