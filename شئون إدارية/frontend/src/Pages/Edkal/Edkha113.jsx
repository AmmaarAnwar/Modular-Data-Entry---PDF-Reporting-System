function Edkhal13() {
  return (
    <>
      <div className="pb-3 text-4xl font-black text-center text-gray-900 dark:text-white">
        <p>تعديل عدد الصفحات --التقرير--</p>
      </div>
      <div className="p-2 mt-2 border-2 border-gray-400 rounded-lg">
        <div className="grid m-1 lg:grid-cols-7 md:grid-cols-6 sm:grid-cols-4 md:grid ">
          <label
            htmlFor="sananaalorder"
            className="mx-2 font-medium text-gray-900"
          >
            الرقم 
          </label>
          <input
            type="text"
            id="sananaalorder"
            className="block p-1 ml-1 text-sm text-center text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
            required
          />
          <label
            htmlFor="sananaalorder"
            className="mx-2 font-medium text-gray-900"
          >
            عدد الصفحات
          </label>
          <input
            type="text"
            id="sananaalorder-tabe3"
            className="block p-1 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
            required
          />
        </div>
        <h6 className="text-center"> المدة</h6>
        <div className="grid m-1 lg:grid-cols-7 md:grid-cols-6 sm:grid-cols-4 md:grid ">

          <label
            htmlFor="sananaalorder"
            className="mx-2 font-medium text-gray-900"
          >
            من
          </label>
          <input
            type="text"
            id="sananaalorder"
            className="block p-1 ml-1 text-sm text-center text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
            required
          />
          <label
            htmlFor="sananaalorder"
            className="mx-2 font-medium text-gray-900"
          >
            الى
          </label>
          <input
            type="text"
            id="sananaalorder-tabe3"
            className="block p-1 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
            required
          />
        </div>
      </div>
    </>
  );
}
export default Edkhal13;
