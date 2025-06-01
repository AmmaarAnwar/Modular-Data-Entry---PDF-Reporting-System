function Edkhal6() {
  return (
    <>
      <div className="text-center pb-3 font-black text-gray-900 text-4xl dark:text-white">
        <p>تقارير سرية</p>
      </div>
      <div className="grid grid-cols-12 gap-1">

        <div className="col-span-12 grid grid-cols-12 flex justify-start align-middle  ">
          <div className="col-span-1"></div>
          <button type="button" className="h-full p-2 col-span-2 text-green-700 hover:text-white border outline-none border-green-700 hover:bg-green-800  hover:border-green-200 font-medium rounded-lg text-xs px-5 text-center ">خطاب الشكر و شهادات التقدير</button>
          <div className="col-span-1"></div>
          <button type="button" className="h-full p-2 col-span-2 text-green-700 hover:text-white border outline-none border-green-700 hover:bg-green-800  hover:border-green-200 font-medium rounded-lg text-xs px-5 text-center ">نتائج التفتيش</button>
          <div className="col-span-1"></div>
          <button type="button" className="h-full p-2 col-span-2 text-green-700 hover:text-white border outline-none border-green-700 hover:bg-green-800  hover:border-green-200 font-medium rounded-lg text-xs px-5 text-center ">حفظ التسجيل</button>
          <div className="col-span-1"></div>
        </div>
        <div className="grid grid-cols-12 col-span-12 flex justify-start align-middle  ">
          <label htmlFor="MIL_NO" className="col-span-1 mx-2 font-medium text-gray-900">
            رقم الاقدمية
          </label>
          <input
            onChange={(ele) => {
              const value = ele.target.value
              if (value.length === 6) {
                postObject.MIL_NO = value;
              }
            }}
            type="text"
            id="MIL_NO"
            className="col-span-1 bg-gray-50 border p-1 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  "
            placeholder=""
            required
          />
          <input
            onChange={(ele) => {
              const value = ele.target.value
              if (value.length === 6) {
                postObject.MIL_NO = value;
              }
            }}
            type="text"
            id="MIL_NO"
            className="col-span-1 bg-gray-50 border p-1 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  "
            placeholder=""
            required
          />
          <input
            onChange={(ele) => {
              const value = ele.target.value
              if (value.length === 6) {
                postObject.MIL_NO = value;
              }
            }}
            type="text"
            id="MIL_NO"
            className="col-span-2 bg-gray-50 border p-1 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  "
            placeholder=""
            required
          />
          <label htmlFor="MIL_NO" className="col-span-1 mx-2 font-medium text-gray-900">
            الكادر
          </label>
          <input
            onChange={(ele) => {
              const value = ele.target.value
              if (value.length === 6) {
                postObject.MIL_NO = value;
              }
            }}
            type="text"
            id="MIL_NO"
            className="col-span-1 bg-gray-50 border p-1 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  "
            placeholder=""
            required
          />
          <input
            onChange={(ele) => {
              const value = ele.target.value
              if (value.length === 6) {
                postObject.MIL_NO = value;
              }
            }}
            type="text"
            id="MIL_NO"
            className="col-span-2 bg-gray-50 border p-1 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  "
            placeholder=""
            required
          />

        </div>
        <div className="grid grid-cols-12 col-span-12 flex justify-start align-middle  ">
          <label htmlFor="MIL_NO" className="col-span-2 mx-2 font-medium text-gray-900">
            تحقيق الشخصية
          </label>
          <input
            onChange={(ele) => {
              const value = ele.target.value
              if (value.length === 6) {
                postObject.MIL_NO = value;
              }
            }}
            type="text"
            id="MIL_NO"
            className="col-span-1 bg-gray-50 border p-1 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  "
            placeholder=""
            required
          />

          <label htmlFor="momayez" className="mx-2 font-medium text-gray-900">
            المميز
          </label>
          <select
            onChange={(ele) => {
              handleChange(ele)
            }}
            name="MIL_NO_FLAG"
            id="momayez"
            className="bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 "
          >

            <option value="N">شرف</option>
            <option value="R">احتياط</option>
            <option value="A">مكلف</option>
            <option value="S">
              عامل/فنى
            </option>
          </select>

          <input
            onChange={(ele) => {
              const value = ele.target.value
              if (value.length === 6) {
                postObject.MIL_NO = value;
              }
            }}
            type="text"
            id="MIL_NO"
            className="col-span-2 bg-gray-50 border p-1 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  "
            placeholder=""
            required
          />


        </div>
        <div className="grid grid-cols-12 col-span-12 flex justify-start align-middle  ">
          <label htmlFor="MIL_NO" className="col-span-2 mx-2 font-medium text-gray-900">
            الفئة
          </label>
          <input
            onChange={(ele) => {
              const value = ele.target.value
              if (value.length === 6) {
                postObject.MIL_NO = value;
              }
            }}
            type="text"
            id="MIL_NO"
            className="col-span-1 bg-gray-50 border p-1 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  "
            placeholder=""
            required
          />

          <label htmlFor="momayez" className="mx-2 font-medium text-gray-900">
            النوعية
          </label>


          <input
            onChange={(ele) => {
              const value = ele.target.value
              if (value.length === 6) {
                postObject.MIL_NO = value;
              }
            }}
            type="text"
            id="MIL_NO"
            className="col-span-2 bg-gray-50 border p-1 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  "
            placeholder=""
            required
          />
          <input
            onChange={(ele) => {
              const value = ele.target.value
              if (value.length === 6) {
                postObject.MIL_NO = value;
              }
            }}
            type="text"
            id="MIL_NO"
            className="col-span-2 bg-gray-50 border p-1 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  "
            placeholder=""
            required
          />


        </div>
        <div className="grid grid-cols-12 col-span-12 flex justify-start align-middle  ">
          <label htmlFor="MIL_NO" className="col-span-1 mx-2 font-medium text-gray-900">
            الأسم
          </label>
          <input
            onChange={(ele) => {
              const value = ele.target.value
              if (value.length === 6) {
                postObject.MIL_NO = value;
              }
            }}
            type="text"
            id="MIL_NO"
            className="col-span-11 bg-gray-50 border p-1 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  "
            placeholder=""
            required
          />


        </div>
        <div className="grid grid-cols-12 col-span-12 flex justify-start align-middle  ">
          <label htmlFor="MIL_NO" className="col-span-1 mx-2 font-medium text-gray-900">
            الوحدة الحالية
          </label>
          <input
            onChange={(ele) => {
              const value = ele.target.value
              if (value.length === 6) {
                postObject.MIL_NO = value;
              }
            }}
            type="text"
            id="MIL_NO"
            className="col-span-11 bg-gray-50 border p-1 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  "
            placeholder=""
            required
          />


        </div>
        <div className="grid grid-cols-12 col-span-12 flex justify-start align-middle  ">
          <label htmlFor="MIL_NO" className="col-span-1 mx-2 font-medium text-gray-900">
            نوع التقرير
          </label>
          <input
            onChange={(ele) => {
              const value = ele.target.value
              if (value.length === 6) {
                postObject.MIL_NO = value;
              }
            }}
            type="text"
            id="MIL_NO"
            className="col-span-1 bg-gray-50 border p-1 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  "
            placeholder=""
            required
          />
          <input
            onChange={(ele) => {
              const value = ele.target.value
              if (value.length === 6) {
                postObject.MIL_NO = value;
              }
            }}
            type="text"
            id="MIL_NO"
            className="col-span-2 bg-gray-50 border p-1 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  "
            placeholder=""
            required
          />

          <label htmlFor="MIL_NO" className="col-span-1 mx-2 font-medium text-gray-900">
            المدة من
          </label>
          <input
            onChange={(ele) => {
              const value = ele.target.value
              if (value.length === 6) {
                postObject.MIL_NO = value;
              }
            }}
            type="text"
            id="MIL_NO"
            className="col-span-1 bg-gray-50 border p-1 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  "
            placeholder=""
            required
          />
          <label htmlFor="MIL_NO" className="col-span-1 mx-2 font-medium text-gray-900">
            المدة الى
          </label>
          <input
            onChange={(ele) => {
              const value = ele.target.value
              if (value.length === 6) {
                postObject.MIL_NO = value;
              }
            }}
            type="text"
            id="MIL_NO"
            className="col-span-1 bg-gray-50 border p-1 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  "
            placeholder=""
            required
          />

        </div>
        <div className="grid grid-cols-12 col-span-12 flex justify-start align-middle  ">
          <label htmlFor="MIL_NO" className="col-span-2 mx-2 font-medium text-gray-900">
            تقدير المباشر
          </label>
          <input
            onChange={(ele) => {
              const value = ele.target.value
              if (value.length === 6) {
                postObject.MIL_NO = value;
              }
            }}
            type="text"
            id="MIL_NO"
            className="col-span-1 bg-gray-50 border p-1 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  "
            placeholder=""
            required
          />
          <input
            onChange={(ele) => {
              const value = ele.target.value
              if (value.length === 6) {
                postObject.MIL_NO = value;
              }
            }}
            type="text"
            id="MIL_NO"
            className="col-span-3 bg-gray-50 border p-1 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  "
            placeholder=""
            required
          />

          <label htmlFor="MIL_NO" className="col-span-2 mx-2 font-medium text-gray-900">
            النسبة المئوية
          </label>
          <input
            onChange={(ele) => {
              const value = ele.target.value
              if (value.length === 6) {
                postObject.MIL_NO = value;
              }
            }}
            type="text"
            id="MIL_NO"
            className="col-span-1 bg-gray-50 border p-1 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  "
            placeholder=""
            required
          />
          <div><p>%</p></div>


        </div>
        <div className="grid grid-cols-12 col-span-12 flex justify-start align-middle">
          <label htmlFor="MIL_NO" className="col-span-2 mx-2 font-medium text-gray-900">
            نوع الملحوظه
          </label>
          <input
            onChange={(ele) => {
              const value = ele.target.value
              if (value.length === 6) {
                postObject.MIL_NO = value;
              }
            }}
            type="text"
            id="MIL_NO"
            className="col-span-10 bg-gray-50 border p-1 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  "
            placeholder=""
            required
          />
        </div>
        <div className="grid grid-cols-12 col-span-12 flex justify-start align-middle">
          <label htmlFor="MIL_NO" className="col-span-1 mx-2 font-medium text-gray-900">
            الملحوظه
          </label>
          <input
            onChange={(ele) => {
              const value = ele.target.value
              if (value.length === 6) {
                postObject.MIL_NO = value;
              }
            }}
            type="text"
            id="MIL_NO"
            className="col-span-11 bg-gray-50 border p-1 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  "
            placeholder=""
            required
          />
        </div>
        <div className="grid grid-cols-12 col-span-12 flex justify-start align-middle  ">
          <label htmlFor="MIL_NO" className="col-span-2 mx-2 font-medium text-gray-900">
            تقدير المباشر
          </label>
          <input
            onChange={(ele) => {
              const value = ele.target.value
              if (value.length === 6) {
                postObject.MIL_NO = value;
              }
            }}
            type="text"
            id="MIL_NO"
            className="col-span-1 bg-gray-50 border p-1 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  "
            placeholder=""
            required
          />
          <input
            onChange={(ele) => {
              const value = ele.target.value
              if (value.length === 6) {
                postObject.MIL_NO = value;
              }
            }}
            type="text"
            id="MIL_NO"
            className="col-span-3 bg-gray-50 border p-1 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  "
            placeholder=""
            required
          />

          <label htmlFor="MIL_NO" className="col-span-2 mx-2 font-medium text-gray-900">
            تقدير المصدق
          </label>
          <input
            onChange={(ele) => {
              const value = ele.target.value
              if (value.length === 6) {
                postObject.MIL_NO = value;
              }
            }}
            type="text"
            id="MIL_NO"
            className="col-span-1 bg-gray-50 border p-1 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  "
            placeholder=""
            required
          />
          <div><p>%</p></div>


        </div>
        <div className="grid grid-cols-12 col-span-12 flex justify-start align-middle">
          <label htmlFor="MIL_NO" className="col-span-2 mx-2 font-medium text-gray-900">
            نوع الملحوظه
          </label>
          <input
            onChange={(ele) => {
              const value = ele.target.value
              if (value.length === 6) {
                postObject.MIL_NO = value;
              }
            }}
            type="text"
            id="MIL_NO"
            className="col-span-10 bg-gray-50 border p-1 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  "
            placeholder=""
            required
          />
        </div>
        <div className="grid grid-cols-12 col-span-12 flex justify-start align-middle">
          <label htmlFor="MIL_NO" className="col-span-1 mx-2 font-medium text-gray-900">
            الملحوظه
          </label>
          <input
            onChange={(ele) => {
              const value = ele.target.value
              if (value.length === 6) {
                postObject.MIL_NO = value;
              }
            }}
            type="text"
            id="MIL_NO"
            className="col-span-11 bg-gray-50 border p-1 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  "
            placeholder=""
            required
          />
        </div>
        <div className="grid grid-cols-12 col-span-12 flex justify-start align-middle">
          <label htmlFor="MIL_NO" className="col-span-2 mx-2 font-medium text-gray-900">
            اسم المصدق
          </label>
          <input
            onChange={(ele) => {
              const value = ele.target.value
              if (value.length === 6) {
                postObject.MIL_NO = value;
              }
            }}
            type="text"
            id="MIL_NO"
            className="col-span-10 bg-gray-50 border p-1 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  "
            placeholder=""
            required
          />
        </div>
        <div className="grid grid-cols-12 col-span-12 flex justify-start align-middle">
          <div className="col-span-5"></div>
          <button type="button" className="h-full p-2 col-span-2 text-green-700 hover:text-white border outline-none border-green-700 hover:bg-green-800  hover:border-green-200 font-medium rounded-lg text-xs px-5 text-center ">حفظ المتغيرات</button>

        </div>
      </div>
    </>
  );
}
export default Edkhal6;

