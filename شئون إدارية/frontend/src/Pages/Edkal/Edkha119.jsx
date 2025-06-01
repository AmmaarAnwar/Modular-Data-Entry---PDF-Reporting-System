import React, { useState } from "react";
import axios from "axios";

function Edkhal19() {
  const [values, setValues] = useState({});
  const [warning, setWarning] = useState(false);
  const [msg, setMsg] = useState("");

  const handleSearch = async () => {
    const milNo = document.getElementById("mil_no").value;

    if (milNo == null) {
      setMsg("من فضلك ضع رقم فرقة");
      setWarning(true);
      return;
    }

    try {
      const response = await axios.get(`http://30.30.30.53:3000/edkhal/edkhal19?mil_no=${milNo}`);
      const data = response.data.data;
      setValues(data);
      setWarning(false);
    } catch (error) {
      setMsg("Error fetching data");
      setWarning(true);
      console.error(error);
    }
  };

  const handleClear = () => {
    const inputs = document.querySelectorAll("input");
    inputs.forEach(element => {
      element.value = "";
    });

    const selections = document.querySelectorAll("select");
    selections.forEach(element => {
      element.value = "N";
    });

    setValues({});
    setWarning(false);
    setMsg("");
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  return (
    <>
      <div className="text-center pb-3 font-black text-gray-900 text-4xl dark:text-white">
        <p>الأقارب</p>
      </div>
      <div className="col-span-12 grid grid-cols-12">
        <div className="col-span-12 grid grid-cols-12">
          <label htmlFor="mil_no" className="col-span-1 font-medium text-gray-900">
            ت.ش
          </label>
          <input
            type="text"
            id="mil_no"
            className="col-span-2 text-center bg-gray-50 ml-1 border p-1 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block"
            required
          />
          <label htmlFor="momayez" className="col-span-1 mx-2 font-medium text-gray-900">
            المميز
          </label>
          <select
            onChange={handleChange}
            value={values.MIL_NO_FLAG || null}
            name="MIL_NO_FLAG"
            id="momayez"
            className="col-span-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="N">شرف</option>
            <option value="R">احتياط</option>
            <option value="S">عامل/فنى</option>
          </select>
          <label htmlFor="status" className="col-span-1 mx-2 font-medium text-gray-900">
            الحالة
          </label>
          <select
            onChange={handleChange}
            value={values.STATUS || null}
            name="STATUS"
            id="status"
            className="col-span-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="1">خدمة</option>
            <option value="2">معاش</option>
          </select>
          <div className="col-span-1"></div>
          <button
            onClick={handleSearch}
            type="button"
            className="p-2 col-span-1 text-green-700 hover:text-white border outline-none border-green-700 hover:bg-green-800 hover:border-green-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            بحث
          </button>
          <button
            onClick={handleClear}
            type="button"
            className="text-green-700 hover:text-white border outline-none border-green-700 hover:bg-green-800 hover:border-green-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            تفريغ
          </button>
        </div>
        {warning && <div className="col-span-12 text-red-600">{msg}</div>}
        <div className="col-span-12 grid grid-cols-12">
          <label htmlFor="SENIORITY_NO" className="col-span-1 font-medium text-gray-900">
            الكادر
          </label>
          <input
            type="text"
            id="SENIORIT_LIST"
            value={values.SENIORIT_LIST || null}
            className="col-span-1 text-center bg-gray-50 ml-1 border p-1 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block"
            readOnly
          />
          <label htmlFor="SENIORIT_LIST" className="col-span-1 font-medium text-gray-900">
            الاقدمية
          </label>
          <input
            type="text"
            id="SENIORITY_NO"
            value={values.SENIORITY_NO || null}
            className="col-span-2 text-center bg-gray-50 ml-1 border p-1 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block"
            readOnly
          />
          <label htmlFor="SENIORITY_SERIAL" className="col-span-1 font-medium text-gray-900">
            المكرر
          </label>
          <input
            type="text"
            id="SENIORITY_SERIAL"
            value={values.SENIORITY_SERIAL || null}
            className="col-span-2 text-center bg-gray-50 ml-1 border p-1 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block"
            readOnly
          />
          <label htmlFor="RANK_NO" className="col-span-1 font-medium text-gray-900">
            الرتبة
          </label>
          <input
            type="text"
            id="RANK_NO"
            value={values.RANK_NO || null}
            className="col-span-1 text-center bg-gray-50 ml-1 border p-1 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block"
            readOnly
          />
          <input
            type="text"
            id="RANK_NAME"
            value={values.RANK_NAME || null}
            className="col-span-2 text-center bg-gray-50 ml-1 border p-1 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block"
            readOnly
          />
        </div>
        <div className="col-span-12 grid grid-cols-12">
          <label htmlFor="NAME" className="col-span-1 font-medium text-gray-900">
            الاسم
          </label>
          <input
            type="text"
            id="NAME"
            value={values.NAME || null}
            className="col-span-11 text-center bg-gray-50 ml-1 border p-1 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block"
            readOnly
          />
        </div>
        <div className="col-span-12 grid grid-cols-12">
          <label htmlFor="CLASS_NO" className="col-span-1 font-medium text-gray-900">
            الفئة
          </label>
          <input
            type="text"
            id="CLASS_NO"
            value={values.CLASS_NO || null}
            className="col-span-1 text-center bg-gray-50 ml-1 border p-1 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block"
            readOnly
          />
        </div>
        <div className="col-span-12 grid grid-cols-12 border-2 border-gray-400 my-[5px] rounded-xl">
          <table className="col-span-12 text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-900 uppercase dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3 text-center">
                  مميز
                </th>
                <th scope="col" className="px-6 py-3 text-center">
                  ت ش
                </th>
                <th scope="col" className="px-6 py-3 text-center">
                  الاسم
                </th>
                <th scope="col" className="px-6 py-3 text-center">
                  نوع القراية
                </th>
                <th scope="col" className="px-6 py-3 text-center">
                  الوظيفة
                </th>
                <th scope="col" className="px-6 py-3 text-center">
                  الجنسية
                </th>
                <th scope="col" className="px-6 py-3 text-center">
                  اقرب الاقارب
                </th>
                <th scope="col" className="px-6 py-3 text-center">
                  النوع
                </th>
                <th scope="col" className="px-6 py-3 text-center">
                  الديانة
                </th>
              </tr>
            </thead>
            <tbody>
              {values.RELATIVES &&
                values.RELATIVES.map((relative, index) => {
                  const mapReligion = (religion) => {
                    switch (religion) {
                      case 'M':
                        return 'مسلم';
                      case 'C':
                        return 'مسيجى';
                      default:
                        return "بدون";
                    }
                  };
                  const mapNEARST_F = (NEARST_F) => {
                    switch (NEARST_F) {
                      case 'N':
                        return 'لا';
                      case 'Y':
                        return 'نعم';
                      default:
                        return "بدون";
                    }
                  };
                  const mapSEX = (SEX) => {
                    switch (SEX) {
                      case 'M':
                        return 'ذكر';
                      case 'F':
                        return 'انثى';
                      default:
                        return "بدون";
                    }
                  };
                  const mapTYPE = (TYPE) => {
                    switch (TYPE) {
                      case 'M':
                        return 'ام';
                      case 'F':
                        return 'والد';
                      case 'B':
                        return 'اخ';
                      default:
                        return "بدون";
                    }
                  };
                  return (
                    <tr className={(index) % 2 === 0 ? 'bg-gray-200' : 'bg-white'}>
                      <td className="px-6 py-3 text-center">{relative.RELATIVE_MIL_NO_FLAG}</td>
                      <td className="px-6 py-3 text-center">{relative.RELATIVE_MIL_NO}</td>
                      <td className="px-6 py-3 text-center">{relative.NAME}</td>
                      <td className="px-6 py-3 text-center">{mapTYPE(relative.TYPE)}</td>
                      <td className="px-6 py-3 text-center">{relative.JOB}</td>
                      <td className="px-6 py-3 text-center">{relative.NATIONALITY}</td>
                      <td className="px-6 py-3 text-center">{mapNEARST_F(relative.NEARST_F)}</td>
                      <td className="px-6 py-3 text-center">{mapSEX(relative.SEX)}</td>
                      <td className="px-6 py-3 text-center">{mapReligion(relative.RELIGION)}</td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Edkhal19;
