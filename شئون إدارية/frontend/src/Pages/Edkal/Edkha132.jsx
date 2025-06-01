function Edkhal32() {
  return (
    <>
      <div className="text-center pb-3 font-black text-gray-900 text-4xl dark:text-white">
        <p>مصاريف الجنازة</p>
      </div>
      <div className="grid grid-cols-12 grid-rows-5">
        <div className=" col-span-12 grid grid-cols-12 p-1">

          <div className=" col-span-12 grid grid-cols-12 p-1">



            <label htmlFor="momayez" className="col-span-1 mx-2 font-medium text-gray-900">
              المميز
            </label>
            <select
              onChange={(ele) => {
                handleChange(ele)
              }}
              name="MIL_NO_FLAG"
              id="momayez"
              className="col-span-2 bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 "
            >

              <option value="N">شرف</option>
              <option value="R">احتياط</option>
              <option value="A">مكلف</option>
              <option value="S">
                عامل/فنى
              </option>
            </select>
            <label
              htmlFor="sananaalorder"
              className="col-span-1 font-medium text-gray-900"
            >
              رقم ت.ش                    </label>
            <input
              type="text"
              id="sananaalorder"
              className="col-span-2 text-center bg-gray-50  ml-1 border p-1 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  "
              required
            />
            <div className="col-span-2"></div>
            <button type="button" className="h-full p-2 col-span-1 text-green-700 hover:text-white border outline-none border-green-700 hover:bg-green-800  hover:border-green-200 font-medium rounded-lg text-xs px-5 text-center ">عرض</button>
          </div>
          <div className=" col-span-12 grid grid-cols-12 p-1">
            <label
              htmlFor="sananaalorder"
              className="col-span-1 font-medium text-gray-900"
            >
              رقم الاقدمية                   </label>
            <input
              type="text"
              id="sananaalorder"
              className="col-span-5 text-center bg-gray-50  ml-1 border p-1 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  "
              required
            />
            <div className="col-span-6"></div>
            <label
              htmlFor="sananaalorder"
              className="col-span-1 font-medium text-gray-900"
            >
              الفئة                  </label>
            <input
              type="text"
              id="sananaalorder"
              className="col-span-3 text-center bg-gray-50  ml-1 border p-1 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  "
              required
            />
            <label
              htmlFor="sananaalorder"
              className="col-span-1 font-medium text-gray-900"
            >
              النوعية                 </label>
            <input
              type="text"
              id="sananaalorder"
              className="col-span-3 text-center bg-gray-50  ml-1 border p-1 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  "
              required
            />
          </div>
          <div className=" col-span-12 grid grid-cols-12 p-1">
            <label
              htmlFor="sananaalorder"
              className="col-span-1 font-medium text-gray-900"
            >
              الاسم                  </label>
            <input
              type="text"
              id="sananaalorder"
              className="col-span-5 text-center bg-gray-50  ml-1 border p-1 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  "
              required
            />


          </div>
          <div className=" col-span-12 grid grid-cols-12 p-1">
            <label
              htmlFor="sananaalorder"
              className="col-span-1 font-medium text-gray-900"
            >
              رقم الأخطر                  </label>
            <input
              type="text"
              id="sananaalorder"
              className="col-span-4 text-center bg-gray-50  ml-1 border p-1 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  "
              required
            />
            <label
              htmlFor="sananaalorder"
              className="col-span-1 font-medium text-gray-900"
            >
              تاريخ الأخطر                  </label>
            <input
              type="text"
              id="sananaalorder"
              className="col-span-4 text-center bg-gray-50  ml-1 border p-1 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  "
              required
            />
            <button type="button" className="h-full p-2 col-span-2 text-green-700 hover:text-white border outline-none border-green-700 hover:bg-green-800  hover:border-green-200 font-medium rounded-lg text-xs px-5 text-center ">حفظ</button>


          </div>
          <div className=" col-span-12 grid grid-cols-12 p-1">

            <label
              htmlFor="sananaalorder"
              className="col-span-1 font-medium text-gray-900"
            >
              تاريخ الوفاة                  </label>
            <input
              type="text"
              id="sananaalorder"
              className="col-span-4 text-center bg-gray-50  ml-1 border p-1 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  "
              required
            />
            <div className="col-span-5"></div>
            <button type="button" className="h-full p-2 col-span-2 text-green-700 hover:text-white border outline-none border-green-700 hover:bg-green-800  hover:border-green-200 font-medium rounded-lg text-xs px-5 text-center ">حذف</button>


          </div>
          <div className=" col-span-12 grid grid-cols-12 p-1">

            <label
              htmlFor="sananaalorder"
              className="col-span-1 font-medium text-gray-900"
            >
              المستفيد                 </label>
            <input
              type="text"
              id="sananaalorder"
              className="col-span-4 text-center bg-gray-50  ml-1 border p-1 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  "
              required
            />
            <div className="col-span-5"></div>
            <button type="button" className="h-full p-2 col-span-2 text-green-700 hover:text-white border outline-none border-green-700 hover:bg-green-800  hover:border-green-200 font-medium rounded-lg text-xs px-5 text-center ">طباعة</button>


          </div>
          <div className=" col-span-12 grid grid-cols-12 p-1">

            <label
              htmlFor="sananaalorder"
              className="col-span-1 font-medium text-gray-900"
            >
              رقم الصادر                 </label>
            <input
              type="text"
              id="sananaalorder"
              className="col-span-2 text-center bg-gray-50  ml-1 border p-1 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  "
              required
            />
            <div className="col-span-5"></div>
            <label
              htmlFor="sananaalorder"
              className="col-span-1 font-medium text-gray-900"
            >
              تاريخ الصادر                 </label>
            <input
              type="text"
              id="sananaalorder"
              className="col-span-2 text-center bg-gray-50  ml-1 border p-1 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  "
              required
            />

          </div>
        </div>
      </div>
    </>
  );
}
export default Edkhal32;
