import axios from "axios";
import { useState } from "react";
function PopUp_est3lam_elakareb(props) {
  const [hide, setHide] = useState(true);
  // let myData = [...props.Data.OFFICERS_PHONES ?? ""]
  window.onkeydown = (event) => {
    if (event.keyCode == 27) setHide(true);
  };
  return (
    <>
      <button
        onClick={async () => {
          setHide(!hide);
          // myData=null
        }}
        data-modal-target="authentication-modal"
        data-modal-toggle="authentication-modal"
        className="w-full h-full px-5 text-xs font-medium text-center text-green-700 border border-green-700 rounded-lg outline-none hover:text-white hover:bg-green-800 hover:border-green-200"
        type="button"
      >
        الاقارب{" "}
      </button>
      <div
        id="authentication-modal"
        tabIndex="5"
        aria-hidden="true"
        className={`${
          hide && "hidden"
        } z-[1] bg-gray-500/50  left-0 top-0 overflow-y-auto  flex fixed z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] h-full`}
      >
        <div className="relative w-full max-h-full p-4 my-2 max-w-fit">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div className="flex items-center justify-between p-4 bg-blue-700 border-b rounded-t md:p-5 dark:border-gray-600">
              <h3 className="text-xl font-semibold text-white text-gray-900 ">
                الاقارب{" "}
              </h3>
              <button
                type="button"
                onClick={() => {
                  setHide(!hide);
                }}
                className="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-hide="authentication-modal"
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            <div className="relative overflow-x-auto overflow-y-auto z-[2]">
              <div className="grid grid-cols-12 gap-1">
                <div className="grid grid-cols-12 col-span-12 ">
                  <div className="flex grid justify-start grid-cols-12 col-span-4 m-1 align-middle ">
                    <label
                      htmlFor="MIL_NO"
                      className="col-span-3 mx-2 font-medium text-gray-900 "
                    >
                      ت ش
                    </label>
                    <input
                      onChange={(ele) => {
                        const value = ele.target.value;
                        if (value.length === 6) {
                          postObject.MIL_NO = value;
                        }
                      }}
                      type="text"
                      id="MIL_NO"
                      className="block col-span-9 p-1 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
                      placeholder=""
                      required
                    />
                  </div>

                  <div className="flex grid justify-start grid-cols-12 col-span-4 m-1 align-middle">
                    <label
                      htmlFor="momayez"
                      className="col-span-6 mx-2 font-medium text-gray-900"
                    >
                      المميز
                    </label>
                    <select className="col-span-6">
                      <option value="N">شرف</option>
                      <option value="R">احتياط</option>
                      <option value="A">مكلف</option>
                      <option value="S">عامل/فنى</option>
                    </select>
                  </div>
                  <div className="flex grid justify-start grid-cols-12 col-span-4 m-1 align-middle ">
                    <label
                      htmlFor="momayez"
                      className="col-span-6 mx-2 font-medium text-gray-900"
                    >
                      الحالة
                    </label>
                    <select className="col-span-6">
                      <option value="N">شرف</option>
                      <option value="R">احتياط</option>
                      <option value="A">مكلف</option>
                      <option value="S">عامل/فنى</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-12 col-span-12 ">
                  <div className="flex grid justify-start grid-cols-12 col-span-3 m-1 align-middle ">
                    <label
                      htmlFor="MIL_NO"
                      className="col-span-3 mx-2 font-medium text-gray-900 "
                    >
                      الكادر
                    </label>
                    <input
                      onChange={(ele) => {
                        const value = ele.target.value;
                        if (value.length === 6) {
                          postObject.MIL_NO = value;
                        }
                      }}
                      type="text"
                      id="MIL_NO"
                      className="block col-span-9 p-1 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
                      placeholder=""
                      required
                    />
                  </div>
                  <div className="flex grid justify-start grid-cols-12 col-span-3 m-1 align-middle ">
                    <label
                      htmlFor="MIL_NO"
                      className="col-span-3 mx-2 font-medium text-gray-900"
                    >
                      الاقدمية
                    </label>
                    <input
                      onChange={(ele) => {
                        const value = ele.target.value;
                        if (value.length === 6) {
                          postObject.MIL_NO = value;
                        }
                      }}
                      type="text"
                      id="MIL_NO"
                      className="block col-span-9 p-1 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
                      placeholder=""
                      required
                    />
                  </div>
                  <div className="flex grid justify-start grid-cols-12 col-span-3 m-1 align-middle ">
                    <label
                      htmlFor="MIL_NO"
                      className="col-span-3 mx-2 font-medium text-gray-900"
                    >
                      المكرر
                    </label>
                    <input
                      onChange={(ele) => {
                        const value = ele.target.value;
                        if (value.length === 6) {
                          postObject.MIL_NO = value;
                        }
                      }}
                      type="text"
                      id="MIL_NO"
                      className="block col-span-9 p-1 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
                      placeholder=""
                      required
                    />
                  </div>
                  <div className="flex grid justify-start grid-cols-12 col-span-3 m-1 align-middle ">
                    <label
                      htmlFor="MIL_NO"
                      className="col-span-3 mx-2 font-medium text-gray-900"
                    >
                      الرتبة
                    </label>
                    <input
                      onChange={(ele) => {
                        const value = ele.target.value;
                        if (value.length === 6) {
                          postObject.MIL_NO = value;
                        }
                      }}
                      type="text"
                      id="MIL_NO"
                      className="block col-span-2 p-1 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
                      placeholder=""
                      required
                    />
                    <input
                      onChange={(ele) => {
                        const value = ele.target.value;
                        if (value.length === 6) {
                          postObject.MIL_NO = value;
                        }
                      }}
                      type="text"
                      id="MIL_NO"
                      className="block col-span-6 p-1 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
                      placeholder=""
                      required
                    />
                  </div>
                </div>

                <div className="flex grid justify-start grid-cols-12 col-span-12 m-1 align-middle ">
                  <label
                    htmlFor="MIL_NO"
                    className="col-span-1 mx-2 font-medium text-gray-900"
                  >
                    الاسم
                  </label>
                  <input
                    onChange={(ele) => {
                      const value = ele.target.value;
                      if (value.length === 6) {
                        postObject.MIL_NO = value;
                      }
                    }}
                    type="text"
                    id="MIL_NO"
                    className="block col-span-11 p-1 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
                    placeholder=""
                    required
                  />
                </div>
                <div className="flex grid justify-start grid-cols-12 col-span-3 m-1 align-middle ">
                  <label
                    htmlFor="MIL_NO"
                    className="col-span-3 mx-2 font-medium text-gray-900"
                  >
                    الفئة
                  </label>
                  <input
                    onChange={(ele) => {
                      const value = ele.target.value;
                      if (value.length === 6) {
                        postObject.MIL_NO = value;
                      }
                    }}
                    type="text"
                    id="MIL_NO"
                    className="block col-span-2 p-1 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
                    placeholder=""
                    required
                  />
                  <input
                    onChange={(ele) => {
                      const value = ele.target.value;
                      if (value.length === 6) {
                        postObject.MIL_NO = value;
                      }
                    }}
                    type="text"
                    id="MIL_NO"
                    className="block col-span-6 p-1 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
                    placeholder=""
                    required
                  />
                </div>

                <div className="grid grid-cols-12 col-span-12 ">
                  <table className="w-full col-span-12 text-sm text-left text-gray-500 rtl:text-right dark:text-gray-400">
                    <thead className="text-xs text-gray-900 uppercase dark:text-gray-400">
                      <tr className="flex justify-around">
                        <th scope="col" className="px-6 py-3">
                          مميز
                        </th>
                        <th scope="col" className="px-6 py-3">
                          ت ش
                        </th>
                        <th scope="col" className="px-6 py-3">
                          الاسم
                        </th>
                        <th scope="col" className="px-6 py-3">
                          نوع القراية
                        </th>
                        <th scope="col" className="px-6 py-3">
                          الوظيفة
                        </th>
                        <th scope="col" className="px-6 py-3">
                          الجنسية
                        </th>
                        <th scope="col" className="px-6 py-3">
                          اقرب الاقارب
                        </th>
                        <th scope="col" className="px-6 py-3">
                          النوع
                        </th>
                        <th scope="col" className="px-6 py-3">
                          الديانة
                        </th>
                      </tr>
                    </thead>
                    <tbody>{}</tbody>
                  </table>
                </div>
              </div>

              {/* <table className="w-full text-sm text-left text-gray-500 rtl:text-right dark:text-gray-400">
                                <thead className="text-xs text-gray-900 uppercase dark:text-gray-400">
                                    <tr>
                                        <th scope="col" className="px-6 py-3">
                                            رقم التليفون
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                        كود المحافظة    
                                        </th>   
                                    </tr>
                                </thead> */}
              {/* <tbody >
                                    {
                                        myData.map((e, index) => (
                                            <tr className="bg-white dark:bg-gray-800" key={index}>
                                                <td className="px-6 py-4">
                                                    {e.PHONE_NUMBER}
                                                </td>
                                                <td className="px-6 py-4">
                                                    {e.AREA_CODE}
                                                </td>
                                            </tr>
                                        ))}
                                </tbody> */}
              {/* </table> */}
            </div>

            {/* <div className="flex justify-end p-2 m-4 mt-0">
                            <button
                                onClick={async () => {
                                    setHide(!hide);
                                    const response = await axios.post(`http://30.30.30.53:3000/info/recrute`,
                                        {
                                         "POPUP_NUM": 13,
                                            "MIL_NO": `${props.MIL_NO}`,
                                            "DATE0": "1995-06-29"
                                            , "RANK_NO": 1
                                            , "HIRE_BUL_NO": 49
                                            , "HIRE_BUL_YEAR": 1995
                                            , "Rank": "ملازم"
                                        }

                                    );
                                    console.log(response)
                                }}
                                className="mt-2 w-fit right text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">تعديل</button>
                        </div> */}
            {/* <div className="flex justify-end p-2 m-4 mt-0">
                            <button
                                onClick={async () => {
                                    setHide(!hide);
                                    const response = await axios.post(`http://30.30.30.53:3000/info/recrute`,
                                        {

                                        }

                                    );
                                }}
                                className="mt-2 w-fit right text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">تعديل</button>
                        </div> */}
          </div>
        </div>
      </div>
    </>
  );
}
export default PopUp_est3lam_elakareb;
