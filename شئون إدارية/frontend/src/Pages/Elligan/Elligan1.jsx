import { useState, useEffect } from "react";
import axios from "axios";
import Ligan1_btn from "../../components/Ligan1_btn";

function Elligan1() {
  let postObject = { data: [{ NO: null, NAME: null, FLAG: null }] };
  const [values, setValues] = useState(postObject);
  let myData = [...(values.data ?? "")];
  async function fetchLegan1(TITLE_NO) {
    setValues(postObject);
    const response = await axios.get(
      `http://30.30.30.53:3000/lgan/3nwanellgan?TITLE_NO=${TITLE_NO}`
    );
    setValues((values) => ({
      data: [...response.data.data],
    }));
  }

  return (
    <>
      {values.warning && (
        <div
          class="flex items-center p-1 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
          role="alert"
        >
          <svg
            class="flex-shrink-0 inline w-4 h-4 me-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
          </svg>
          <span class="sr-only"></span>
          <span class="font-medium">هذه رسالة تحذير</span>
          &nbsp; &#160;
          {values.msg}
          &nbsp; &#160;
          <div className="flex">
            <button
              onClick={async () => {
                const inputs = document.querySelectorAll("input");
                console.log(inputs);
                inputs.forEach((element) => {
                  element.value = null;
                });
                const selections = document.querySelectorAll("select");
                console.log(selections);
                inputs.forEach((element) => {
                  element.value = null;
                });
                setValues({});
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
      <div className="pb-3 text-4xl font-black text-center text-gray-900 dark:text-white">
        <p>عنوان اللجنة</p>
      </div>
      <div className="border-2 border-gray-400 my-[5px] rounded-xl">
        <div className="flex justify-start my-[5px] ">
          <div className="flex justify-start m-1 align-middle ">
            <label
              htmlFor="TITLE_NO"
              className="mx-2 font-medium text-gray-900"
            >
              Title No{" "}
            </label>
            <input
              name="TITLE_NO"
              // value={values.MIL_NO}
              // onChange={(ele) => handleChange(ele)}
              type="text"
              id="TITLE_NO"
              className="block p-1 text-sm text-gray-900 border border-gray-300 rounded-lg title_no bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
              placeholder="Title No"
              required
            />
          </div>
          <div className="flex justify-start m-1 align-middle ">
            <label
              htmlFor="TITLE_NAME"
              className="mx-2 font-medium text-gray-900"
            >
              Title Name
            </label>
            <input
              name="TITLE_NAME"
              value={values.NAME}
              // onChange={(ele) => handleChange(ele)}
              type="text"
              id="TITLE_NAME"
              className="block p-1 text-sm text-gray-900 border border-gray-300 rounded-lg title_name bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
              placeholder="Title Name"
              required
            />
          </div>
          <div className="flex justify-start m-1 align-middle ">
            <label
              htmlFor="SELECTION_FLAG"
              className="mx-2 font-medium text-gray-900"
            >
              Selection Flag
            </label>
            <input
              name="SELECTION_FLAG"
              value={values.FLAG}
              // onChange={(ele) => handleChange(ele)}
              type="text"
              id="SELECTION_FLAG"
              className="block p-1 text-sm text-gray-900 border border-gray-300 rounded-lg selection_flag bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
              placeholder="Selection Flag"
              required
            />
          </div>

          <div className="flex items-center justify-center">
            <div className="mx-1 ">
              <button
                onClick={async () => {
                  setValues(postObject);
                  if (!(document.getElementById("TITLE_NO").value == "")) {
                    const response = await axios.get(
                      `http://30.30.30.53:3000/lgan/3nwanellgan?TITLE_NO=${
                        document.getElementById("TITLE_NO").value
                      }`
                    );
                    setValues(response.data);
                    console.log(response);
                    if (response.data.msg) {
                      setValues((values) => ({
                        ...postObject,
                        warning: true,
                        msg: response.data.msg,
                      }));
                    } else {
                      setValues((values) => ({
                        ...response.data.data,
                        warning: false,
                        msg: response.data.msg,
                      }));
                    }
                  } else {
                    setValues((values) => ({
                      ...values,
                      warning: true,
                      msg: "من فضلك ضع الرقم لجنة صحيح",
                    }));
                  }
                }}
                type="button"
                className="text-green-700   hover:text-white border outline-none border-green-700 hover:bg-green-800  hover:border-green-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
              >
                بحث
              </button>
            </div>
          </div>
          <div className="mx-1 ">
            <button
              onClick={async () => {
                const inputs = document.querySelectorAll("input");
                console.log(inputs);
                inputs.forEach((element) => {
                  element.value = null;
                });
                const selections = document.querySelectorAll("select");
                console.log(selections);
                inputs.forEach((element) => {
                  element.value = null;
                });
                setValues({});
              }}
              type="button"
              className="text-green-700  hover:text-white border outline-none border-green-700 hover:bg-green-800  hover:border-green-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
            >
              تفريغ
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Elligan1;
