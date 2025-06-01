import axios from "axios";
import { useState } from "react";

function Edkhal8() {
  let postObject = { "MIL_NO": null, "NO_OF_IMAGES": null, "DOCUMENT_SER": null };
  const [values, setValues] = useState(postObject)
  const handleChange = (ele) => {
    const name = ele.target.name
    const value = ele.target.value
    setValues((values) => ({
      ...values,
      [name]: value
    }))
    console.log(values);
  }
  return (

    <>
      <div className="pb-3 text-4xl font-black text-center text-gray-900 dark:text-white">
        <p>تعديل عدد الصفحات 1-كادر</p>
      </div>
      <div className="p-2 mt-2 border-2 border-gray-400 rounded-lg">
        <p className="mb-5 text-lg font-bold underline underline-offset-8">الكارت و 2 كود (2) و 1 كود (1) والعائلى كود (3)</p>
        <div className="mr-7">
          <div className="grid grid-cols-6 m-1 ">
            <label htmlFor="ta7kek_no" className="mx-2 font-medium text-gray-900">
              رقم تحقيق الشخصية
            </label>
            <input
              value={values.MIL_NO}
              onChange={(ele) => {
                handleChange(ele)
                console.log(values.MIL_NO);
              }}
              type="text"
              name="MIL_NO"
              id="MIL_NO"
              className="block col-start-2 p-1 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 w-52 focus:ring-blue-500 focus:border-blue-500"
              placeholder="رقم تحقيق الشخصية"
              required
            />

            <div className="col-start-4">
              <button onClick={
                async () => {
                  setValues(postObject)
                  if (!(document.getElementById("MIL_NO").value == "")) {
                    console.log(document.getElementById("MIL_NO").value);
                    const response = await axios.get(`http://30.30.30.53:3000/edkhal/edkhal8?mil_no=${document.getElementById("MIL_NO").value}`);
                    console.log(response.data);
                    setValues(response.data)
                    console.log(values);
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
          </div>
          <div className="grid grid-cols-6 m-1 ">
            <label htmlFor="code" className="mx-2 font-medium text-gray-900">
              الكود
            </label>
            <input
              value={values.DOCUMENT_SER}
              onChange={(ele) => {
                handleChange(ele)
              }}
              type="text"
              id="code"
              name="DOCUMENT_SER"
              placeholder="الكود"
              className="block col-start-2 p-1 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 w-52 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="grid grid-cols-6 m-1 ">
            <label htmlFor="page_counts" className="mx-2 font-medium text-gray-900">
              عدد الصفحات
            </label>
            <input
              value={values.NO_OF_IMAGES}
              onChange={(ele) => {
                handleChange(ele)
              }}
              type="text"
              id="page_counts"
              name="NO_OF_IMAGES"
              placeholder="عدد الصفحات"
              className="block col-start-2 p-1 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 w-52 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

        </div>
      </div>
    </>

  );
}
export default Edkhal8;
