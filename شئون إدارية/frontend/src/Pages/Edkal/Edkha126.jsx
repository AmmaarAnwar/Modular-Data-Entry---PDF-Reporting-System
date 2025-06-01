function Edkhal26() {
  return (
    <>
      <div className="pb-3 text-4xl font-black text-center text-gray-900 dark:text-white">
        <p>عقوبات</p>
      </div>
      <div className="grid grid-cols-12 gap-1">
        <div className="flex grid justify-start grid-cols-12 col-span-12 align-middle ">
          <div className="col-span-2"></div>
          <button
            type="button"
            className="h-full col-span-2 p-2 px-5 text-xs font-medium text-center text-green-700 border border-green-700 rounded-lg outline-none hover:text-white hover:bg-green-800 hover:border-green-200 "
          >
            حفظ تسجيل
          </button>
          <div className="col-span-2"></div>
          <button
            type="button"
            className="h-full col-span-2 p-2 px-5 text-xs font-medium text-center text-green-700 border border-green-700 rounded-lg outline-none hover:text-white hover:bg-green-800 hover:border-green-200 "
          >
            استعلام جديد
          </button>
          <div className="col-span-2"></div>
          <button
            type="button"
            className="h-full col-span-2 p-2 px-5 text-xs font-medium text-center text-green-700 border border-green-700 rounded-lg outline-none hover:text-white hover:bg-green-800 hover:border-green-200 "
          >
            خروج
          </button>
        </div>
        <div className="flex grid justify-start grid-cols-12 col-span-12 align-middle ">
          <label
            htmlFor="MIL_NO"
            className="col-span-1 mx-2 font-medium text-gray-900"
          >
            الترشيح
          </label>
          <input
            onChange={(ele) => {
              const value = ele.target.value;
              if (value.length === 6) {
                postObject.MIL_NO = value;
              }
            }}
            type="text"
            id="MIL_NO"
            className="block col-span-1 p-1 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
            placeholder=""
            required
          />
          <label
            htmlFor="MIL_NO"
            className="col-span-1 mx-2 font-medium text-gray-900"
          >
            المكرر
          </label>
          <input
            onChange={(ele) => {
              const value = ele.target.value;
              if (value.length === 6) {
                postObject.MIL_NO = value;
              }
            }}
            type="text"
            id="MIL_NO"
            className="block col-span-1 p-1 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
            placeholder=""
            required
          />
          <label
            htmlFor="MIL_NO"
            className="col-span-1 mx-2 font-medium text-gray-900"
          >
            الكادر
          </label>
          <input
            onChange={(ele) => {
              const value = ele.target.value;
              if (value.length === 6) {
                postObject.MIL_NO = value;
              }
            }}
            type="text"
            id="MIL_NO"
            className="block col-span-1 p-1 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
            placeholder=""
            required
          />

          <input
            onChange={(ele) => {
              const value = ele.target.value;
              if (value.length === 6) {
                postObject.MIL_NO = value;
              }
            }}
            type="text"
            id="MIL_NO"
            className="block col-span-1 p-1 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
            placeholder=""
            required
          />
          <div className="col-span-1"></div>
          <button
            type="button"
            className="h-full col-span-1 p-2 px-5 text-xs font-medium text-center text-green-700 border border-green-700 rounded-lg outline-none hover:text-white hover:bg-green-800 hover:border-green-200 "
          >
            عرض
          </button>
        </div>
        <div className="flex grid justify-start grid-cols-12 col-span-12 align-middle ">
          <label
            htmlFor="MIL_NO"
            className="col-span-1 mx-2 font-medium text-gray-900"
          >
            الترشيح
          </label>
          <input
            onChange={(ele) => {
              const value = ele.target.value;
              if (value.length === 6) {
                postObject.MIL_NO = value;
              }
            }}
            type="text"
            id="MIL_NO"
            className="block col-span-1 p-1 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
            placeholder=""
            required
          />
          <input
            onChange={(ele) => {
              const value = ele.target.value;
              if (value.length === 6) {
                postObject.MIL_NO = value;
              }
            }}
            type="text"
            id="MIL_NO"
            className="block col-span-1 p-1 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
            placeholder=""
            required
          />
          <div className="col-span-1 text-center">
            {" "}
            <p>/</p>
          </div>
          <input
            onChange={(ele) => {
              const value = ele.target.value;
              if (value.length === 6) {
                postObject.MIL_NO = value;
              }
            }}
            type="text"
            id="MIL_NO"
            className="block col-span-2 p-1 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
            placeholder=""
            required
          />
          <label htmlFor="momayez" className="mx-2 font-medium text-gray-900">
            المميز
          </label>
          <select
            onChange={(ele) => {
              handleChange(ele);
            }}
            name="MIL_NO_FLAG"
            id="momayez"
            className="text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
          >
            <option value="N">شرف</option>
            <option value="R">احتياط</option>
            <option value="A">مكلف</option>
            <option value="S">عامل/فنى</option>
          </select>

          <label
            htmlFor="MIL_NO"
            className="col-span-1 mx-2 font-medium text-gray-900"
          >
            الصلاح
          </label>
          <input
            onChange={(ele) => {
              const value = ele.target.value;
              if (value.length === 6) {
                postObject.MIL_NO = value;
              }
            }}
            type="text"
            id="MIL_NO"
            className="block col-span-2 p-1 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
            placeholder=""
            required
          />
        </div>
        <div className="flex grid justify-start grid-cols-12 col-span-12 align-middle ">
          <label
            htmlFor="MIL_NO"
            className="col-span-2 mx-2 font-medium text-gray-900"
          >
            الوحدة الحالية
          </label>
          <input
            onChange={(ele) => {
              const value = ele.target.value;
              if (value.length === 6) {
                postObject.MIL_NO = value;
              }
            }}
            type="text"
            id="MIL_NO"
            className="block col-span-5 p-1 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
            placeholder=""
            required
          />
          <label
            htmlFor="MIL_NO"
            className="col-span-1 mx-2 font-medium text-gray-900"
          >
            النوعية
          </label>
          <input
            onChange={(ele) => {
              const value = ele.target.value;
              if (value.length === 6) {
                postObject.MIL_NO = value;
              }
            }}
            type="text"
            id="MIL_NO"
            className="block col-span-3 p-1 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
            placeholder=""
            required
          />
        </div>
        <div className="flex grid justify-start grid-cols-12 col-span-12 align-middle ">
          <label
            htmlFor="MIL_NO"
            className="col-span-2 mx-2 font-medium text-gray-900"
          >
            الوحدة الحالية
          </label>
          <input
            onChange={(ele) => {
              const value = ele.target.value;
              if (value.length === 6) {
                postObject.MIL_NO = value;
              }
            }}
            type="text"
            id="MIL_NO"
            className="block col-span-5 p-1 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
            placeholder=""
            required
          />
        </div>
        <div className="flex grid justify-start grid-cols-12 col-span-12 align-middle ">
          <label
            htmlFor="MIL_NO"
            className="col-span-1 mx-2 font-medium text-gray-900"
          >
            ت. العقوبة
          </label>
          <input
            onChange={(ele) => {
              const value = ele.target.value;
              if (value.length === 6) {
                postObject.MIL_NO = value;
              }
            }}
            type="text"
            id="MIL_NO"
            className="block col-span-2 p-1 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
            placeholder=""
            required
          />
          <div className="col-span-3"></div>
          <button
            type="button"
            className="h-full col-span-1 p-2 px-5 text-xs font-medium text-center text-green-700 border border-green-700 rounded-lg outline-none hover:text-white hover:bg-green-800 hover:border-green-200 "
          >
            حذف
          </button>
        </div>
        <div className="flex grid justify-start grid-cols-12 col-span-12 align-middle ">
          <label
            htmlFor="MIL_NO"
            className="col-span-1 mx-2 font-medium text-gray-900"
          >
            الجريمة
          </label>
          <input
            onChange={(ele) => {
              const value = ele.target.value;
              if (value.length === 6) {
                postObject.MIL_NO = value;
              }
            }}
            type="text"
            id="MIL_NO"
            className="block col-span-1 p-1 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
            placeholder=""
            required
          />
          <input
            onChange={(ele) => {
              const value = ele.target.value;
              if (value.length === 6) {
                postObject.MIL_NO = value;
              }
            }}
            type="text"
            id="MIL_NO"
            className="block col-span-2 p-1 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
            placeholder=""
            required
          />
        </div>
        <div className="flex grid justify-start grid-cols-12 col-span-12 align-middle ">
          <label
            htmlFor="MIL_NO"
            className="col-span-2 mx-2 font-medium text-gray-900"
          >
            مكمل الجريمة
          </label>
          <input
            onChange={(ele) => {
              const value = ele.target.value;
              if (value.length === 6) {
                postObject.MIL_NO = value;
              }
            }}
            type="text"
            id="MIL_NO"
            className="block col-span-7 p-1 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
            placeholder=""
            required
          />
        </div>
        <div className="flex grid justify-start grid-cols-12 col-span-12 align-middle ">
          <label
            htmlFor="MIL_NO"
            className="col-span-1 mx-2 font-medium text-gray-900"
          >
            العقوبة
          </label>
          <input
            onChange={(ele) => {
              const value = ele.target.value;
              if (value.length === 6) {
                postObject.MIL_NO = value;
              }
            }}
            type="text"
            id="MIL_NO"
            className="block col-span-1 p-1 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
            placeholder=""
            required
          />
          <input
            onChange={(ele) => {
              const value = ele.target.value;
              if (value.length === 6) {
                postObject.MIL_NO = value;
              }
            }}
            type="text"
            id="MIL_NO"
            className="block col-span-3 p-1 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
            placeholder=""
            required
          />
          <label
            htmlFor="MIL_NO"
            className="col-span-1 mx-2 font-medium text-gray-900"
          >
            مدة العقوبة
          </label>
          <input
            onChange={(ele) => {
              const value = ele.target.value;
              if (value.length === 6) {
                postObject.MIL_NO = value;
              }
            }}
            type="text"
            id="MIL_NO"
            className="block col-span-1 p-1 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
            placeholder=""
            required
          />
          <input
            onChange={(ele) => {
              const value = ele.target.value;
              if (value.length === 6) {
                postObject.MIL_NO = value;
              }
            }}
            type="text"
            id="MIL_NO"
            className="block col-span-2 p-1 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
            placeholder=""
            required
          />

          <div className="col-span-1"></div>
          <button
            type="button"
            className="h-full col-span-1 p-2 px-5 text-xs font-medium text-center text-green-700 border border-green-700 rounded-lg outline-none hover:text-white hover:bg-green-800 hover:border-green-200 "
          >
            طباعة
          </button>
        </div>
        <div className="flex grid justify-start grid-cols-12 col-span-12 align-middle ">
          <label
            htmlFor="MIL_NO"
            className="col-span-2 mx-2 font-medium text-gray-900"
          >
            المصدق
          </label>
          <input
            onChange={(ele) => {
              const value = ele.target.value;
              if (value.length === 6) {
                postObject.MIL_NO = value;
              }
            }}
            type="text"
            id="MIL_NO"
            className="block col-span-5 p-1 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
            placeholder=""
            required
          />
          <label htmlFor="momayez" className="mx-2 font-medium text-gray-900">
            نوع الأثارة
          </label>
          <select
            onChange={(ele) => {
              handleChange(ele);
            }}
            name="MIL_NO_FLAG"
            id="momayez"
            className="text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
          >
            <option value="N">شرف</option>
            <option value="R">احتياط</option>
            <option value="A">مكلف</option>
            <option value="S">عامل/فنى</option>
          </select>
          <label
            htmlFor="MIL_NO"
            className="col-span-1 mx-2 font-medium text-gray-900"
          >
            ت رفع الإثارة
          </label>
          <input
            onChange={(ele) => {
              const value = ele.target.value;
              if (value.length === 6) {
                postObject.MIL_NO = value;
              }
            }}
            type="text"
            id="MIL_NO"
            className="block col-span-1 p-1 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
            placeholder=""
            required
          />
        </div>
      </div>
    </>
  );
}
export default Edkhal26;
