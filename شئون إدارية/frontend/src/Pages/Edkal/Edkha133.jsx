function Edkhal33() {
  return (
    <>
      <div className="text-center pb-3 font-black text-gray-900 text-4xl dark:text-white">
        <p>تعديل عدد الصفحات --قرارات إتمام--</p>
      </div>
      <div>


        <div className="grid  lg:grid-cols-7 md:grid-cols-6 sm:grid-cols-4  m-1 md:grid ">
          <label
            htmlFor="sananaalorder"
            className="mx-2 font-medium text-gray-900"
          >
            الرقم ت ش
          </label>
          <input
            type="text"
            id="sananaalorder"
            className="text-center bg-gray-50  ml-1 border p-1 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  "
            required
          />
          <label
            htmlFor="sananaalorder"
            className="mx-2 font-medium text-gray-900"
          >
            رقم القضية
          </label>
          <input
            type="text"
            id="sananaalorder-tabe3"
            className="bg-gray-50 border  p-1 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  "
            required
          />
          <label
            htmlFor="sananaalorder"
            className="mx-2 font-medium text-gray-900"
          >
            السنه
          </label>
          <input
            type="text"
            id="sananaalorder-tabe3"
            className="bg-gray-50 border  p-1 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  "
            required
          />

        </div>

        <label
          htmlFor="sananaalorder"
          className="mx-2 font-medium text-gray-900"
        >
          عدد الصفحات
        </label>
        <input
          type="text"
          id="sananaalorder"
          className="text-center bg-gray-50  ml-1 border p-1 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  "
          required
        />
      </div>
    </>
  );
}
export default Edkhal33;
