import axios from "axios";
import { useState } from "react";

function Edkhal10() {
  let postObject = {
    "Mil_CER_DATA": [{
      "DEGREE": null, "MIL_NO": null, "MIL_TRAIN_NO": null, "ORDER0": null,
      "OFFICER_Data": [{ "OFFICER_NAME": null, "SENIORITY_NO": null, "RANK_NO": null, "CORP_NO": null, "SENIORIT_LIST": null, "RANK_NAME": null, "CORP_NAME": null, "SENIORITY_NAME": null, "SENIORITY_SERIAL": null }]
    }],
    "CAPACITY": null, "UNIT_NO": null, "START_DATE": null, "END_DATE": null, "COURSE_NO": null, "PLAN_YEAR": null, "MIL_NAME": null, "UNIT_NAME": null
  };
  const [values, setValues] = useState(postObject)
  let myData = [...values.Mil_CER_DATA ?? ""]
  console.log("myData", myData)
  const handleChange = (ele) => {
    const name = ele.target.name
    const value = ele.target.value
    setValues((values) => ({
      ...values,
      [name]: value
    }))
  };
  return (
    <>
      {
        values.warning && (
          <div id="alert-additional-content-4" className="p-4 mb-4 text-blue-800 border border-blue-300 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-300 dark:border-blue-800" role="alert">
            <div className="flex items-center">
              <svg className="flex-shrink-0 w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
              </svg>
              <h3 className="text-lg font-medium">هذه رسالة تحذير</h3>
            </div>
            <div className="mt-2 mb-4 text-sm">
              {values.msg}
            </div>
            <div className="flex">
              <button onClick={async () => {
                setValues((values) => ({
                  ...postObject,
                  MIL_TRAIN_NO: values.MIL_TRAIN_NO
                }))
              }}
                type="button" className="text-blue-800 bg-transparent border border-blue-800 hover:bg-blue-900 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs px-3 py-1.5 text-center dark:hover:bg-blue-300 dark:border-blue-300 dark:text-blue-300 dark:hover:text-gray-800 dark:focus:ring-blue-800" data-dismiss-target="#alert-additional-content-4" aria-label="Close">
                حسناً
              </button>
            </div>
          </div>
        )}
      <div className="pb-3 text-4xl font-black text-center text-gray-900 dark:text-white">
        <p>تأهيل عسكرى</p>
      </div>
      <div className="grid grid-cols-12 col-span-12 p-1 ">
        <div className="grid grid-cols-12 col-span-12 p-1 ">

          <label
            htmlFor="sananaalorder"
            className="col-span-1 font-medium text-gray-900"
          >
            الفرقة               </label>
          <input
            name="fer2a_number"
            value={values.MIL_TRAIN_NO}
            onChange={(ele) => {
              handleChange(ele)
            }}
            type="text"
            id="fer2a_number"
            className="block col-span-1 p-1 ml-1 text-sm text-center text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
            placeholder="رقم الفرقة"
            required
          />
          <input
            name="fer2a_name"
            value={values.MIL_NAME}
            onChange={(ele) => {
              handleChange(ele)
            }}
            type="text"
            id="fer2a_name"
            className="block col-span-2 p-1 ml-1 text-sm text-center text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
            placeholder="اسم الفرقة"
            required
          />

          <div className="col-span-2" />
          <label
            htmlFor="sananaalorder"
            className="col-span-1 font-medium text-gray-900"
          >
            من تاريخ               </label>
          <input
            value={values.START_DATE && new Date(values.START_DATE).toISOString().split('T')[0]}
            onChange={(ele) => {
              handleChange(ele)
            }}
            type="text"
            id="startDt"
            placeholder="yy/mm/dd"
            className="block col-span-2 p-1 ml-1 text-sm text-center text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
            required
          />

        </div>
        <div className="grid grid-cols-12 col-span-12 p-1 ">

          <label
            htmlFor="sananaalorder"
            className="col-span-1 font-medium text-gray-900"
          >
            المعهد               </label>
          <input
            value={values.UNIT_NO}
            onChange={(ele) => {
              handleChange(ele)
            }}
            type="text"
            id="unit_no"
            className="block col-span-1 p-1 ml-1 text-sm text-center text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
            required
          />
          <input
            value={values.UNIT_NAME}
            onChange={(ele) => {
              handleChange(ele)
            }}
            type="text"
            id="unit_name"
            className="block col-span-2 p-1 ml-1 text-sm text-center text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
            required
          />

          <div className="col-span-2" />
          <label
            htmlFor="sananaalorder"
            className="col-span-1 font-medium text-gray-900"
          >
            الى تاريخ</label>
          <input
            value={values.END_DATE && new Date(values.END_DATE).toISOString().split('T')[0]}
            onChange={(ele) => {
              handleChange(ele)
            }}
            type="text"
            id="endDt"
            placeholder="yy/mm/dd"
            className="block col-span-2 p-1 ml-1 text-sm text-center text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
            required
          />

        </div>
        <div className="grid grid-cols-12 col-span-12 p-1 ">

          <label
            htmlFor="sananaalorder"
            className="col-span-1 font-medium text-gray-900"
          >
            الدورة               </label>
          <input
            value={values.COURSE_NO}
            onChange={(ele) => {
              handleChange(ele)
            }}
            type="text"
            id="course_no"
            className="block col-span-1 p-1 ml-1 text-sm text-center text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
            required
          />
          <label
            htmlFor="sananaalorder"
            className="col-span-1 font-medium text-gray-900"
          >
            العام التدريبى              </label>
          <input
            value={values.PLAN_YEAR}
            onChange={(ele) => {
              handleChange(ele)
            }}
            type="text"
            id="plan_year"
            className="block col-span-1 p-1 ml-1 text-sm text-center text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
            required
          />
          <label
            htmlFor="sananaalorder"
            className="col-span-1 font-medium text-gray-900"
          >
            العدد </label>
          <input
            value={values.CAPACITY}
            onChange={(ele) => {
              handleChange(ele)
            }}
            type="text"
            id="capacity"
            className="block col-span-1 p-1 ml-1 text-sm text-center text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
            required
          />

          <div className="col-span-3" />
          <button
            onClick={
              async () => {
                setValues(postObject)
                if (!(document.getElementById("fer2a_number").value == "")) {
                  const response = await axios.get(`http://30.30.30.53:3000/edkhal/edkhal10?mil_train_no=${document.getElementById("fer2a_number").value}`);
                  setValues((values) => ({
                    "Mil_CER_DATA": response.data.data.Mil_CER_DATA,
                    ...response.data.data

                  }))

                } else {
                  setValues((values) => ({
                    ...values,
                    warning: true,
                    msg: "من فضلك ضع رقم فرقة"
                  }))
                }
              }
            }
            type="button" className="h-full p-2 col-span-1 text-green-700  hover:text-white border outline-none border-green-700 hover:bg-green-800  hover:border-green-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center "> بحث  </button>
          <div className="col-span-1" />

          <button onClick={async () => {
            const inputs = document.querySelectorAll("input");
            console.log(inputs)
            inputs.forEach(element => {
              element.value = null

              const selections = document.querySelectorAll("select");
              console.log(selections)
              inputs.forEach(element => {
                element.value = null
              });
              setValues({})
            });
          }
          }
            type="button" className="text-green-700  hover:text-white border outline-none border-green-700 hover:bg-green-800  hover:border-green-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">تفريغ</button>

        </div>
      </div>

      <div className="border-2 border-gray-400 my-[5px] rounded-xl ">
        <div className="relative overflow-x-auto overflow-y-auto z-[2] h-screen border-2 border-gray-400 rounded-xl">
          <table className="w-full text-sm text-left text-gray-500 rtl:text-right dark:text-gray-400 ">
            <thead className="text-xs text-gray-900 uppercase dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3 text-center ">

                </th>
                <th scope="col" className="px-6 py-3 text-center">
                  الكادر
                </th>
                <th scope="col" className="px-6 py-3 text-center">
                  أقدمية
                </th>
                <th scope="col" className="px-6 py-3 text-center">

                </th>
                <th scope="col" className="px-6 py-3 text-center">
                  رتبة
                </th>
                <th scope="col" className="px-6 py-3 text-center">
                  اسم
                </th>
                <th scope="col" className="px-6 py-3 text-center">
                  عدة
                </th>
                <th scope="col" className="px-6 py-3 text-center">
                  ترتيب
                </th>
                <th scope="col" className="px-6 py-3 text-center">
                  تقدير
                </th>
              </tr>
            </thead>
            <tbody>
              {
                myData.map((item, index) => (
                  item.OFFICER_Data.map((officer, officerIndex) => {
                    // Function to map DEGREE values
                    const mapDegree = (degree) => {
                      switch (degree) {
                        case 'G':
                          return 'جيد';
                        case 'V':
                          return 'جيد جداً';
                        case 'E':
                          return 'ممتاز';
                        case 'S':
                          return 'مقبول';
                        default:
                          return degree; // return the original value if it doesn't match any case
                      }
                    };

                    return (
                      <tr className={(index + officerIndex) % 2 === 0 ? 'bg-gray-200' : 'bg-white'} key={`${index}-${officerIndex}`}>
                        <td scope="row" className="px-6 py-4 font-medium text-center text-gray-900 border-l border-black whitespace-nowrap">
                          {officer.SENIORIT_LIST}
                        </td>
                        <td className="px-6 py-4 text-center border-l border-black">
                          {officer.SENIORITY_NAME}
                        </td>
                        <td className="px-6 py-4 text-center border-l border-black">
                          {officer.SENIORITY_NO}
                        </td>
                        <td className="px-6 py-4 text-center border-l border-black">
                          {officer.SENIORITY_SERIAL}
                        </td>
                        <td className="px-6 py-4 text-center border-l border-black">
                          {officer.RANK_NAME}
                        </td>
                        <td className="px-6 py-4 text-center border-l border-black">
                          {officer.OFFICER_NAME}
                        </td>
                        <td className="px-6 py-4 text-center border-l border-black">
                          {officer.CORP_NAME}
                        </td>
                        <td className="px-6 py-4 text-center border-l border-black">
                          {item.ORDER0}
                        </td>
                        <td className="px-6 py-4 text-center border-l">
                          {mapDegree(item.DEGREE)}
                        </td>
                      </tr>
                    );
                  })
                ))
              }
            </tbody>

          </table>
        </div>

      </div>







    </>
  );
}
export default Edkhal10;
