import axios from "axios";
import { useState } from "react";

function Edkhal3() {
  const postObject = [{ MIL_NO: null, MIL_NO_FLAG: null, EXECUTION_DATE: null, DURATION_IN_MONTH: null }];
  const [values, setValues] = useState(postObject);
  const [counter, setCounter] = useState(0);
  const [dataLength, setDataLength] = useState(0);

  const handleChange = (ele) => {
    const name = ele.target.name;
    const value = ele.target.value;
    setValues((prevValues) => {
      const newValues = [...prevValues];
      newValues[counter][name] = value;
      return newValues;
    });
  };

  const officerCountNext = () => {
    let newCounter = (counter + 1) % dataLength;
    if (dataLength === 0) {
      newCounter = 0;
      document.getElementById("currant").innerHTML = `${0} من ${0}`;
    } else {
      setCounter(newCounter);
      document.getElementById("currant").innerHTML = `${newCounter + 1} من ${dataLength}`;
    }
  };

  const officerCountPrev = () => {
    let newCounter = (counter - 1 + dataLength) % dataLength;
    if (dataLength === 0) {
      newCounter = 0;
      document.getElementById("currant").innerHTML = `${0} من ${0}`;
    } else {
      setCounter(newCounter);
      document.getElementById("currant").innerHTML = `${newCounter + 1} من ${dataLength}`;
    }
  };

  const fetchData = async () => {
    setValues(postObject);
    const milNo = document.getElementById("MIL_NO").value;
    if (milNo !== "") {
      try {
        const response = await axios.get(`http://30.30.30.53:3000/edkhal/edkhal3.56?MIL_NO=${milNo}`);
        setValues(response.data.data);
        setDataLength(response.data.data.length);
        document.getElementById("currant").innerHTML = `1 من ${response.data.data.length}`;

        if (response.data.msg) {
          setValues((prevValues) => {
            return prevValues.map((item, index) => {
              if (index === 0) {
                return {
                  ...postObject[0],
                  warning: true,
                  msg: response.data.msg,
                };
              }
              return item;
            });
          });
        } else {
          setValues(response.data.data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    } else {
      setValues((prevValues) => {
        return prevValues.map((item, index) => {
          if (index === 0) {
            return {
              ...postObject[0],
              warning: true,
              msg: "من فضلك ضع الرقم ",
            };
          }
          return item;
        });
      });
    }
  };

  return (
    <>
      <div className="pb-3 text-4xl font-black text-center text-gray-900 dark:text-white">
        <p>تعديل مدة الخدمة بلمكان السابقة</p>
      </div>
      <div className="border-2 border-gray-400 my-[5px] rounded-xl p-6">
        {values[0].warning && (
          <div id="alert-additional-content-4" className="p-4 mb-4 text-blue-800 border border-blue-300 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-300 dark:border-blue-800" role="alert">
            <div className="flex items-center">
              <svg className="flex-shrink-0 w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
              </svg>
              <h3 className="text-lg font-medium">هذه رسالة تحذير</h3>
            </div>
            <div className="mt-2 mb-4 text-sm">{values[0].msg}</div>
            <div className="flex">
              <button
                onClick={() => {
                  setValues((prevValues) => {
                    return prevValues.map((item, index) => {
                      if (index === 0) {
                        return {
                          ...postObject[0],
                          MIL_NO: values[0].MIL_NO,
                        };
                      }
                      return item;
                    });
                  });
                }}
                type="button"
                className="text-blue-800 bg-transparent border border-blue-800 hover:bg-blue-900 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs px-3 py-1.5 text-center dark:hover:bg-blue-300 dark:border-blue-300 dark:text-blue-300 dark:hover:text-gray-800 dark:focus:ring-blue-800"
                data-dismiss-target="#alert-additional-content-4"
                aria-label="Close"
              >
                حسناً
              </button>
            </div>
          </div>
        )}
        <div>
          <p className="mb-5 text-lg font-bold underline">تعديل مدة الخدمة بالمكان السابقة</p>
          <div className="h-full">
            <div className="my-[5px]">
              <div className="flex justify-start m-1 align-middle ">
                <label htmlFor="MIL_NO" className="mx-2 font-medium text-gray-900">
                  تحقيق الشخصية
                </label>
                <input
                  name="MIL_NO"
                  value={values[counter].MIL_NO || ""}
                  onChange={handleChange}
                  type="text"
                  id="MIL_NO"
                  className="block p-1 text-sm text-gray-900 border border-gray-300 rounded-lg mil_no bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="تحقيق الشخصية"
                  required
                />
                <div className="flex items-center justify-center">
                  <div className="mx-1">
                    <button
                      onClick={fetchData}
                      type="button"
                      className="text-green-700 hover:text-white border outline-none border-green-700 hover:bg-green-800 hover:border-green-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                    >
                      بحث
                    </button>
                  </div>
                  <div className="mx-1">
                    <button
                      onClick={() => {
                        document.querySelectorAll("input").forEach((element) => {
                          element.value = "";
                        });
                        setValues(postObject);
                        setCounter(0);
                        setDataLength(0);
                      }}
                      type="button"
                      className="text-green-700 hover:text-white border outline-none border-green-700 hover:bg-green-800 hover:border-green-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                    >
                      تفريغ
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid col-start-3 m-1 lg:grid-cols-10 md:grid-cols-6 sm:grid-cols-4">
              <label htmlFor="EXECUTION_DATE" className="mx-2 font-medium text-gray-900">
                التاريخ
              </label>
              <input
                name="EXECUTION_DATE"
                value={values[counter].EXECUTION_DATE ? new Date(values[counter].EXECUTION_DATE).toISOString().split('T')[0] : ""}
                onChange={handleChange}
                type="date"
                id="EXECUTION_DATE"
                className="block p-1 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 w-52 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <div className="grid col-start-3 m-1 lg:grid-cols-10 md:grid-cols-6 sm:grid-cols-4">
              <label htmlFor="DURATION_IN_MONTH" className="mx-2 font-medium text-gray-900">
                التعديل بالشهر
              </label>
              <input
                name="DURATION_IN_MONTH"
                value={values[counter].DURATION_IN_MONTH || ""}
                onChange={handleChange}
                type="text"
                id="DURATION_IN_MONTH"
                className="block p-1 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 w-52 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
          </div>
        </div>
        <div className="col-span-1 flex items-center justify-between w-full bg-sky-100 text-gray-600 dark:text-gray-400 bg-gray-100 rounded-lg dark:bg-gray-600 max-w-[128px] mx-2">
          <button
            onClick={officerCountPrev}
            type="button"
            className="inline-flex items-center justify-center w-6 h-8 px-1 bg-sky-200 rounded-s-lg dark:bg-gray-600 hover:bg-sky-500 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-800"
          >
            <span className="font-bold text-black">-</span>
          </button>
          <span id="currant" className="flex-shrink-0 mx-1 text-sm font-medium space-x-0.5 rtl:space-x-reverse font-bold">
            {dataLength > 0 ? `${counter + 1} من ${dataLength}` : `0 من 0`}
          </span>
          <button
            onClick={officerCountNext}
            type="button"
            className="inline-flex items-center justify-center w-6 h-8 px-1 bg-sky-200 rounded-e-lg dark:bg-gray-600 hover:bg-sky-500 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-800"
          >
            <span className="font-bold text-black">+</span>
          </button>
        </div>
      </div>
    </>
  );
}

export default Edkhal3;
