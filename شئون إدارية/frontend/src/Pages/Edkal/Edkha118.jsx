import axios from "axios";
import { useState } from "react";

function Edkhal18() {
  let postObject = {
    "data": {
      "DATE0": null, "NO_OF_IMAGES": null, "MIL_NO": null
    }
  }
  const [values, setValues] = useState(postObject)
  let myData = { ...values.data ?? "" }
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
                  MIL_NO: values.MIL_NO
                }))
              }}
                type="button" className="text-blue-800 bg-transparent border border-blue-800 hover:bg-blue-900 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs px-3 py-1.5 text-center dark:hover:bg-blue-300 dark:border-blue-300 dark:text-blue-300 dark:hover:text-gray-800 dark:focus:ring-blue-800" data-dismiss-target="#alert-additional-content-4" aria-label="Close">
                حسناً
              </button>
            </div>
          </div>
        )}
      <div className="pb-3 text-4xl font-black text-center text-gray-900 dark:text-white">
        <p>تعديل عدد الصفحات --أخرى--</p>
      </div>
      <div>

        <h6>عقوبات</h6>
        <div className="grid grid-cols-12 ">
          <div className="col-span-4" />
          <button onClick={
            async () => {
              setValues(postObject)
              if (!(document.getElementById("mil_no").value == "")) {
                const response = await axios.get(`http://30.30.30.53:3000/edkhal/edkhal18?mil_no=${document.getElementById("mil_no").value}`);
                setValues((values) => ({
                  "data": response.data,
                  ...response.data

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

            type="button" className=" p-2 col-span-1 text-green-700  hover:text-white border outline-none border-green-700 hover:bg-green-800  hover:border-green-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center "> بحث  </button>
          <div className="col-span-1" />

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
          <div className="col-span-3" />

          <div className="col-span-4 ">
            <label
              htmlFor="sananaalorder"
              className="mx-2 font-medium text-gray-900"
            >
              الرقم 
            </label>
            <input
              value={myData.MIL_NO}
              onChange={(ele) => {
                handleChange(ele)
              }}
              type="text"
              id="mil_no"
              className="block p-1 ml-1 text-sm text-center text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
              required
            />
          </div>
          <div className="col-span-4 ">
            <label
              htmlFor="sananaalorder"

              className="mx-2 font-medium text-gray-900"
            >
              التاريخ
            </label>
            <input
              value={myData.DATE0 && new Date(myData.DATE0).toISOString().split('T')[0]}
              onChange={(ele) => {
                handleChange(ele)
              }}
              type="date"
              id="sananaalorder-tabe3"
              className="block p-1 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
              required
            />
          </div>
          <div className="col-span-4 ">
            <label
              htmlFor="sananaalorder"
              className="mx-2 font-medium text-gray-900"
            >
              عدد الصفحات
            </label>
            <input
              value={myData.NO_OF_IMAGES}
              onChange={(ele) => {
                handleChange(ele)
              }}
              type="text"
              id="sananaalorder"
              className="block p-1 ml-1 text-sm text-center text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
              required
            />
          </div>
        </div>
      </div>
    </>
  );
}
export default Edkhal18;
