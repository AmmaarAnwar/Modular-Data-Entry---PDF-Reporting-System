import axios from "axios";
import { useState } from "react";
function Edkhal5() {

  let postObject = { "personalData": [{ "TEACH_SCHOOL_NO": null, "DATE0": null, "DEGREE": null, "CIVIL_TRAIN_NO": null, "UNIVERSITY_NO": null, "PERSENT": null, "ORDER0": null, "SCHOOL_NAME": null, "CIVIL_TRAINING_NAME": null, "UNIVERSITY_NAME": null }], "MIL_NO": null, "NAME": null, "SENIORITY_NO": null, "SENIORITY_SERIAL": null, "SENIORIT_LIST": null };
  const [values, setValues] = useState(postObject)
  let myData = [...values.personalData ?? ""]
  console.log("myData", myData)
  const handleChange = (ele) => {
    const name = ele.target.name
    const value = ele.target.value
    setValues((values) => ({
      ...values,
      [name]: value
    }))
  }
  return (
    <>
      <div className="pb-3 text-4xl font-black text-center text-gray-900 dark:text-white">
        <p>تأهيل مدنى</p>
      </div>
      <div class="font-bold text-lg	">
        <p>
          تسجيل تأهيل مدنى 
        </p>
      </div>
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
                  MIL_NO: values.MIL_NO
                }))
              }}
                type="button" className="text-blue-800 bg-transparent border border-blue-800 hover:bg-blue-900 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs px-3 py-1.5 text-center dark:hover:bg-blue-300 dark:border-blue-300 dark:text-blue-300 dark:hover:text-gray-800 dark:focus:ring-blue-800" data-dismiss-target="#alert-additional-content-4" aria-label="Close">
                حسناً
              </button>
            </div>
          </div>
        )}

      <div className="h-full ">
        <div className="border-2 border-gray-400 my-[5px] rounded-xl">
          <div className="flex justify-start my-[5px] ">
            <div className="flex justify-start m-1 align-middle ">
              <label
                htmlFor="MIL_NO"
                className="mx-2 font-medium text-gray-900"
              >
                تحقيق الشخصية
              </label>
              <input
                name="MIL_NO"
                value={values.MIL_NO}
                onChange={(ele) => {
                  handleChange(ele)
                }}

                type="text"
                id="MIL_NO"
                className="block p-1 text-sm text-gray-900 border border-gray-300 rounded-lg mil_no bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
                placeholder="تحقيق الشخصية"
                required

              />
            </div>
            <div className="flex items-center justify-center">
              <div className="mx-1 ">
                <button onClick={
                  async () => {
                    setValues(postObject)
                    if (!(document.getElementById("MIL_NO").value == "")) {
                      const response = await axios.get(`http://30.30.30.53:3000/edkhal/edkhal5?mil_no=${document.getElementById("MIL_NO").value}`);
                      setValues(response.data)
                      if (response.data.msg) {
                        setValues((values) => ({
                          ...postObject,
                          warning: true,
                          msg: response.data.msg,
                        }))
                      } else {
                        setValues((values) => ({
                          ...response.data.data,
                          warning: false,
                          msg: response.data.msg,
                        }))
                      }
                    } else {
                      setValues((values) => ({
                        ...values,
                        warning: true,
                        msg: "من فضلك ضع الرقم العسكرى"
                      }))
                    }
                  }
                }
                  type="button" className="text-green-700   hover:text-white border outline-none border-green-700 hover:bg-green-800  hover:border-green-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">بحث</button>

              </div>
              <div className="mx-1 ">
                <button onClick={async () => {
                  const inputs = document.querySelectorAll("input");
                  console.log(inputs)
                  inputs.forEach(element => {
                    element.value = null

                  });
                  const selections = document.querySelectorAll("select");
                  console.log(selections)
                  inputs.forEach(element => {
                    element.value = null
                  });
                  setValues({})
                }
                }
                  type="button" className="text-green-700  hover:text-white border outline-none border-green-700 hover:bg-green-800  hover:border-green-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">تفريغ</button>
              </div>
            </div>
            <div className="flex justify-start m-1 align-middle">
              <label htmlFor="ٌRotba" className="mx-2 font-medium text-gray-900">
                الرتبة
              </label>
              <input
                name="ٌRotba"
                value={values.RANK}
                onChange={(ele) => {
                  handleChange(ele)
                }}
                type="text"
                id="ٌRotba"
                className="block p-1 text-sm text-gray-900 border border-gray-300 rounded-lg mil_no bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
                placeholder=""
                required
              />
            </div>
            <div className="flex justify-start m-1 align-middle">
              <label htmlFor="selah" className="mx-2 font-medium text-gray-900">
                المكان
              </label>
              <input
                name="selah"
                value={values.CORP_NAME}
                onChange={(ele) => {
                  handleChange(ele)
                }}
                type="text"
                id="selah"
                className="block p-1 text-sm text-gray-900 border border-gray-300 rounded-lg mil_no bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
                placeholder=""
                required

              />
            </div>

          </div>

          <div className="flex justify-start my-[5px] ">

            <div className="flex justify-start align-middle">
              <label htmlFor="cader" className="mx-2 font-medium text-gray-900">
                
              </label>
              <input
                value={values.SENIORIT_LIST}
                onChange={(ele) => {
                  handleChange(ele)
                }}
                name="SENIORIT_LIST"
                type="text"
                id="cader"
                className="block w-20 p-1 ml-1 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
                required
              />
              <input
                // LIST_NM
                value={values.SENIORITY_LIST_NAME}
                onChange={(ele) => {
                  handleChange(ele)
                }}
                name="SENIORIT_LIST_NAME"

                type="text"
                id="cader-tabe3"
                className="block p-1 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
                required
              />
            </div>
            <div className="flex justify-start mr-5 align-middle">
              <label
                htmlFor="SENIORITY_NO"
                className="mx-2 font-medium text-gray-900"
              >
                رقم 
              </label>
              <input
                id="SENIORITY_NO"
                value={values.SENIORITY_NO}
                type="text"
                className="block w-20 p-1 ml-1 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
                required
              />
              <input
                value={values.SENIORITY_SERIAL}
                onChange={(ele) => {
                  handleChange(ele)
                }}
                name="SENIORITY_SERIAL"
                type="text"
                id="SENIORITY_SERIAL"
                className="block w-20 p-1 ml-1 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
                required
              />
            </div>
          </div>
          <div className="flex justify-start my-[5px] ">
            <div className="flex justify-start m-1 align-middle">
              <label htmlFor="name" className="mx-2 font-medium text-gray-900">
                الاسم
              </label>
              <input
                value={values.NAME}
                onChange={(ele) => {
                  handleChange(ele)
                }}
                name="NAME"
                type="text"
                id="name"
                className="bg-gray-50 border w-[500px]  p-1 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  "
                placeholder="الاسم"
                required
              />
            </div>
          </div>
        </div>
      </div>





      {/* table */}
      <div class="relative overflow-x-auto overflow-y-auto z-[2] border-2 border-gray-400 rounded-xl">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-900 uppercase dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3 text-center">
                التاريخ
              </th>
              <th scope="col" class="px-6 py-3 text-center">
                رقم المؤهل
              </th>
              <th scope="col" class="px-6 py-3 text-center">
                المؤهل
              </th>
              <th scope="col" class="px-6 py-3 text-center">

              </th>
              <th scope="col" class="px-6 py-3 text-center">
                الكلية
              </th>
              <th scope="col" class="px-6 py-3 text-center">
                الخطة
              </th>
              <th scope="col" class="px-6 py-3 text-center">
                التقدير
              </th>
              <th scope="col" class="px-6 py-3 text-center">

              </th>
              <th scope="col" class="px-6 py-3 text-center">
                الجامعة
              </th>
            </tr>
          </thead>
          <tbody >
            {
              myData.map((e, index) => (
                <tr class={index % 2 === 0 ? 'bg-gray-200' : 'bg-white'} key={index}>
                  <td scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap text-center border-l border-black">
                    {e.DATE0 && e.DATE0 && new Date(e.DATE0).toISOString().split('T')[0]}
                  </td>
                  <td class="px-6 py-4 text-center border-l border-black">
                    {e.CIVIL_TRAIN_NO}
                  </td>
                  <td class="px-6 py-4 text-center border-l border-black">
                    {e.CIVIL_TRAINING_NAME}
                  </td>
                  <td class="px-6 py-4 text-center border-l border-black">
                    {e.TEACH_SCHOOL_NO}
                  </td>
                  <td class="px-6 py-4 text-center border-l border-black">
                    {e.SCHOOL_NAME}
                  </td>
                  <td class="px-6 py-4 text-center border-l border-black">
                    {e.CIVIL_TRAIN_NO}
                  </td>
                  <td class="px-6 py-4 text-center border-l border-black">
                    {e.PLAN_TYPE}
                  </td>
                  <td class="px-6 py-4 text-center border-l border-black">
                    {e.DEGREE}
                  </td>
                  <td class="px-6 py-4 text-center border-l">
                    {e.UNIVERSITY_NO}
                  </td>
                  <td class="px-6 py-4 text-center">
                    {e.UNIVERSITY_NAME}
                  </td>

                </tr>
              ))}
          </tbody>
        </table>
      </div>

    </>
  );
}
export default Edkhal5;
