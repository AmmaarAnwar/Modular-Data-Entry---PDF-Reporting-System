import axios from "axios";
import { useState } from "react";

function Edkhal29() {

  let postObject = { "DATE0": null, "WEIGTH": null, "MIL_NO": null, "HEIGHT": null };
  const [values, setValues] = useState(postObject)
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
        <p>أوزان</p>
      </div>
      <div className="h-full ">
        <div className="border-2 border-gray-400 my-[5px] rounded-xl">
          <div className="flex justify-start my-[5px] ">
            <div className="flex justify-start m-1 align-middle ">
              <label
                htmlFor="MIL_NO"
                className="mx-2 font-medium text-gray-900"
              >
                رقم 
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
                      const response = await axios.get(`http://30.30.30.53:3000/edkhal/edkhal29?mil_no=${document.getElementById("MIL_NO").value}`);
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
                        msg: "من فضلك ضع الرقم "
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
              <label htmlFor="DATE0" className="mx-2 font-medium text-gray-900">
                الطول س.م              </label>
              <input
                name="HEIGHT"
                value={values.HEIGHT}
                onChange={(ele) => {
                  handleChange(ele)
                }}
                id="DATE0"
                className="block p-1 text-sm text-gray-900 border border-gray-300 rounded-lg mil_no bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
                placeholder=""
                required
              />
            </div>
            <div className="flex justify-start m-1 align-middle">
              <label htmlFor="DEGREE" className="mx-2 font-medium text-gray-900">
                الوزن ك.غ
              </label>
              <input
                name="WEIGTH"
                value={values.WEIGTH}
                onChange={(ele) => {
                  handleChange(ele)
                }}
                type="text"
                id="DEGREE"
                className="block p-1 text-sm text-gray-900 border border-gray-300 rounded-lg mil_no bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
                placeholder=""
                required

              />
            </div>
            <div className="flex justify-start m-1 align-middle">
              <label htmlFor="DEGREE" className="mx-2 font-medium text-gray-900">
                التاريخ
              </label>
              <input
                name="DATE0"
                value={values.DATE0 && new Date(values.DATE0).toISOString().split('T')[0]}
                onChange={(ele) => {
                  handleChange(ele)
                }}
                type="text"
                id="DEGREE"
                className="block p-1 text-sm text-gray-900 border border-gray-300 rounded-lg mil_no bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
                placeholder=""
                required

              />
            </div>

          </div>
        </div>
      </div>

    </>
  );
}
export default Edkhal29;
