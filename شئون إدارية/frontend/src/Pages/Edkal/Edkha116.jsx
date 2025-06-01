import { useState } from "react";

function Edkhal16() {
  const [activeTab, setActiveTab] = useState('');
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  return (
    <>
      <div className="text-center pb-3 font-black text-gray-900 text-4xl dark:text-white">
        <p>حالة إجتماعية</p>
      </div>
      <div className="grid grid-cols-12 gap-1">
        <div className="grid grid-cols-12 col-span-12 flex justify-start align-middle  ">
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
            className="col-span-2 bg-gray-50 border p-1 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  "
            placeholder=""
            required
          />
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
          <div className="col-span-1"></div>
          <button type="button" className="h-full p-2 col-span-2 text-green-700 hover:text-white border outline-none border-green-700 hover:bg-green-800  hover:border-green-200 font-medium rounded-lg text-xs px-5 text-center ">عرض</button>

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
            الفئه
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
          <label htmlFor="MIL_NO" className="col-span-1 mx-2 font-medium text-gray-900">
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
          <label htmlFor="MIL_NO" className="col-span-2 mx-2 font-medium text-gray-900">
            الحالة الإجتماعية
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
          <label htmlFor="MIL_NO" className="col-span-1 mx-2 font-medium text-gray-900">
            عدد الاولاد
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
          <label htmlFor="MIL_NO" className="col-span-1 mx-2 font-medium text-gray-900">
            ذكور
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
            إناث
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

      </div>
      <div className="col-span-12 grid grid-cols-12 flex justify-center align-middle border-2 border-gray-400 rounded-xl ">
        <ul className="col-span-12 grid grid-cols-12 flex justify-center align-middle -mb-px" id="tabs">
          <li className="col-span-4 me-2 text-center">
            <a
              href="#"
              className={`tab-link inline-block p-4 border-b-2 border-transparent rounded-lg hover/edit:translate-x-0.5 hover/edit:bg-blue-100 ${activeTab === 'العنوان' ? 'inline-block text-white bg-blue-600 rounded-lg active' : ''
                }`}
              onClick={() => handleTabClick('العنوان')}
            >
              العنوان
            </a>
          </li>
          <li className="col-span-4 me-2 text-center">
            <a
              href="#"
              className={`tab-link inline-block p-4 border-b-2 border-transparent rounded-lg hover/edit:translate-x-0.5 hover/edit:bg-blue-100 ${activeTab === 'الزوجة' ? 'inline-block text-white bg-blue-600 rounded-lg active' : ''
                }`}
              onClick={() => handleTabClick('الزوجة')}
            >
              الزوجة
            </a>
          </li>
          <li className="col-span-4 me-2 text-center">
            <a
              href="#"
              className={`tab-link inline-block p-4 border-b-2 border-transparent rounded-lg hover/edit:translate-x-0.5 hover/edit:bg-blue-100 ${activeTab === 'الاقارب' ? 'inline-block text-white bg-blue-600 rounded-lg active' : ''
                }`}
              onClick={() => handleTabClick('الاقارب')}
            >
              الاقارب
            </a>
          </li>
        </ul>
      </div>
      <div className="tab-content col-span-12 grid grid-cols-12" style={{ display: activeTab === 'العنوان' ? 'block' : 'none' }}>
        <div className=" col-span-12 grid grid-cols-12  p-1">
          <div className=" col-span-12 grid grid-cols-12  p-1">
            <label
              htmlFor="sananaalorder"
              className="col-span-1 font-medium text-gray-900"
            >
              حالة العنوان                </label>
            <select
              // defaultValue={values.MIL_NO_FLAG ?? "N"}
              // value={values.MIL_NO_FLAG ?? "N"}
              onChange={(ele) => {
                handleChange(ele)
              }}
              name="MIL_NO_FLAG"
              id="momayez"
              className="col-span-2 bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 "
            >

              <option value="N">حالى</option>
              <option value="R">احتياط</option>
              <option value="A">مكلف</option>
              <option value="S">
                عامل/فنى
              </option>
            </select>



          </div>
          <div className=" col-span-12 grid grid-cols-12  p-1">
            <label
              htmlFor="sananaalorder"
              className="col-span-1 font-medium text-gray-900"
            >
              اسم الشارع                 </label>
            <input
              type="text"
              id="sananaalorder"
              className="col-span-10 text-center bg-gray-50  ml-1 border p-1 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  "
              required
            />


          </div>
          <div className=" col-span-12 grid grid-cols-12  p-1">
            <button type="button" className="h-full p-2 col-span-1 text-green-700 hover:text-white border outline-none border-green-700 hover:bg-green-800  hover:border-green-200 font-medium rounded-lg text-xs px-5 text-center ">المحافظة </button>

            <input
              type="text"
              id="sananaalorder"
              className="col-span-10 text-center bg-gray-50  ml-1 border p-1 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  "
              required
            />


          </div>
          <div className=" col-span-12 grid grid-cols-12  p-1">
            <button type="button" className="h-full p-2 col-span-1 text-green-700 hover:text-white border outline-none border-green-700 hover:bg-green-800  hover:border-green-200 font-medium rounded-lg text-xs px-5 text-center ">قسم البوليس </button>

            <input
              type="text"
              id="sananaalorder"
              className="col-span-10 text-center bg-gray-50  ml-1 border p-1 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  "
              required
            />


          </div>
          <div className=" col-span-12 grid grid-cols-12  p-1">
            <label
              htmlFor="sananaalorder"
              className="col-span-1 font-medium text-gray-900"
            >
              رقم التليفون                  </label>
            <input
              type="text"
              id="sananaalorder"
              className="col-span-2 text-center bg-gray-50  ml-1 border p-1 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  "
              required
            />
            <input
              type="text"
              id="sananaalorder"
              className="col-span-1 text-center bg-gray-50  ml-1 border p-1 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  "
              required
            />


          </div>
          <div className=" col-span-12 grid grid-cols-12  p-1">

            <div className="col-span-3" />
            <button type="button" className="h-full p-1 col-span-1 text-green-700 hover:text-white border outline-none border-green-700 hover:bg-green-800  hover:border-green-200 font-medium rounded-lg text-xs px-5 text-center "> سجل جديد </button>
            <div className="col-span-1" />
            <button type="button" className="h-full p-1 col-span-1 text-green-700 hover:text-white border outline-none border-green-700 hover:bg-green-800  hover:border-green-200 font-medium rounded-lg text-xs px-5 text-center "> حفظ </button>
            <div className="col-span-1" />
            <button type="button" className="h-full p-1 col-span-1 text-green-700 hover:text-white border outline-none border-green-700 hover:bg-green-800  hover:border-green-200 font-medium rounded-lg text-xs px-5 text-center "> حذف </button>

          </div>
        </div>




      </div>
      <div className="tab-content col-span-12 grid grid-cols-12" style={{ display: activeTab === 'الزوجة' ? 'block' : 'none' }}>
        <div className=" col-span-12 grid grid-cols-12  p-1">
          <div className=" col-span-12 grid grid-cols-12  p-1">
            <label
              htmlFor="sananaalorder"
              className="col-span-1 font-medium text-gray-900"
            >
              ت.الزواج                </label>
            <input
              type="text"
              id="sananaalorder"
              className="col-span-1 text-center bg-gray-50  ml-1 border p-1 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  "
              required
            />
            <label htmlFor="momayez" className="col-span-1 mx-2 font-medium text-gray-900">
              الاسم
            </label>
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
              ت.الميلاد                </label>
            <input
              type="text"
              id="sananaalorder"
              className="col-span-1 text-center bg-gray-50  ml-1 border p-1 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  "
              required
            />
            <label
              htmlFor="sananaalorder"
              className="col-span-1 font-medium text-gray-900"
            >
              الجنسية               </label>
            <select

              name="MIL_NO_FLAG"
              id="momayez"
              className="col-span-1 bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 "
            >

              <option value="N">بدون</option>
              <option value="R">احتياط</option>
              <option value="A">مكلف</option>
              <option value="S">
                عامل/فنى
              </option>
            </select>
            <label htmlFor="momayez" className="col-span-1 mx-2 font-medium text-gray-900">
              النوع
            </label>
            <select

              name="MIL_NO_FLAG"
              id="momayez"
              className="col-span-1 bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 "
            >

              <option value="N">ذكر</option>
              <option value="R">احتياط</option>
              <option value="A">مكلف</option>
              <option value="S">
                عامل/فنى
              </option>
            </select>
          </div>
          <div className=" col-span-12 grid grid-cols-12  p-1">
            <label
              htmlFor="sananaalorder"
              className="col-span-1 font-medium text-gray-900"
            >
              الديانة               </label>
            <select

              name="MIL_NO_FLAG"
              id="momayez"
              className="col-span-1 bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 "
            >

              <option value="N">مسلم</option>
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
              النوع               </label>
            <select

              name="MIL_NO_FLAG"
              id="momayez"
              className="col-span-1 bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 "
            >

              <option value="N">انثى</option>
              <option value="R">احتياط</option>
              <option value="A">مكلف</option>
              <option value="S">
                عامل/فنى
              </option>
            </select>
            <label
              htmlFor="sananaalorder"
              className="col-span-2 font-medium text-gray-900"
            >
              الحالة الإجتماعية               </label>
            <select

              name="MIL_NO_FLAG"
              id="momayez"
              className="col-span-1 bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 "
            >

              <option value="N">بدون</option>
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
              ت.الوفاه                </label>
            <input
              type="text"
              id="sananaalorder"
              className="col-span-1 text-center bg-gray-50  ml-1 border p-1 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  "
              required
            />          <label
              htmlFor="sananaalorder"
              className="col-span-1 font-medium text-gray-900"
            >
              ت.الطلاق                </label>
            <input
              type="text"
              id="sananaalorder"
              className="col-span-1 text-center bg-gray-50  ml-1 border p-1 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  "
              required
            />
          </div>
          <div className=" col-span-12 grid grid-cols-12  p-1">
            <label
              htmlFor="sananaalorder"
              className="col-span-1 font-medium text-gray-900"
            >
              الرقم القومى               </label>
            <input
              type="text"
              id="sananaalorder"
              className="col-span-4 text-center bg-gray-50  ml-1 border p-1 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  "
              required
            />          <label
              htmlFor="sananaalorder"
              className="col-span-1 font-medium text-gray-900"
            >
              المؤاهل               </label>
            <input
              type="text"
              id="sananaalorder"
              className="col-span-6 text-center bg-gray-50  ml-1 border p-1 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  "
              required
            />
          </div>
          <div className=" col-span-12 grid grid-cols-12  p-1">
            <label
              htmlFor="sananaalorder"
              className="col-span-1 font-medium text-gray-900"
            >
              حالة العمل              </label>
            <select

              name="MIL_NO_FLAG"
              id="momayez"
              className="col-span-3 bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 "
            >

              <option value="N">لا تعمل</option>
              <option value="R">احتياط</option>
              <option value="A">مكلف</option>
              <option value="S">
                عامل/فنى
              </option>
            </select>
            <div className="col-span-3" />
            <label
              htmlFor="sananaalorder"
              className="col-span-1 font-medium text-gray-900"
            >
              تليفون العمل               </label>
            <input
              type="text"
              id="sananaalorder"
              className="col-span-2 text-center bg-gray-50  ml-1 border p-1 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  "
              required
            />
          </div>
          <div className=" col-span-12 grid grid-cols-12  p-1">
            <label
              htmlFor="sananaalorder"
              className="col-span-1 font-medium text-gray-900"
            >
              حالة العمل              </label>
            <input
              type="text"
              id="sananaalorder"
              className="col-span-10 text-center bg-gray-50  ml-1 border p-1 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  "
              required
            />
          </div>
          <div className=" col-span-12 grid grid-cols-12  p-1">
            <label
              htmlFor="sananaalorder"
              className="col-span-1 font-medium text-gray-900"
            >
              الوظيفة             </label>
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
              عنوان العمل             </label>
            <input
              type="text"
              id="sananaalorder"
              className="col-span-5 text-center bg-gray-50  ml-1 border p-1 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  "
              required
            />
          </div>

          <div className="col-span-5" />
          <button type="button" className="col-span-2 text-green-700  hover:text-white border outline-none border-green-700 hover:bg-green-800  hover:border-green-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center "> حذف الزوجة</button>

          <div className="col-span-6" />
          <h1 className="col-span-1">الاولاد</h1>
          <div className=" col-span-12 grid grid-cols-12  p-1">
            <label htmlFor="momayez" className="col-span-1 mx-2 font-medium text-gray-900">
              الاسم
            </label>
            <input
              type="text"
              id="sananaalorder"
              className="col-span-5 text-center bg-gray-50  ml-1 border p-1 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  "
              required
            />
            <label
              htmlFor="sananaalorder"
              className="col-span-1 font-medium text-gray-900"
            >
              ت.الميلاد                </label>
            <input
              type="text"
              id="sananaalorder"
              className="col-span-2 text-center bg-gray-50  ml-1 border p-1 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  "
              required
            />
            <label
              htmlFor="sananaalorder"
              className="col-span-1 font-medium text-gray-900"
            >
              محل الميلاد               </label>
            <input
              type="text"
              id="sananaalorder"
              className="col-span-2 text-center bg-gray-50  ml-1 border p-1 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  "
              required
            />
          </div>
          <div className=" col-span-12 grid grid-cols-12  p-1">
            <label
              htmlFor="sananaalorder"
              className="col-span-1 font-medium text-gray-900"
            >
              النوع               </label>
            <select

              name="MIL_NO_FLAG"
              id="momayez"
              className="col-span-1 bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 "
            >

              <option value="N">ذكد</option>
              <option value="R">احتياط</option>
              <option value="A">مكلف</option>
              <option value="S">
                عامل/فنى
              </option>
            </select>
            <label
              htmlFor="sananaalorder"
              className="col-span-2 font-medium text-gray-900"
            >
              الحالة الإجتماعية               </label>
            <select

              name="MIL_NO_FLAG"
              id="momayez"
              className="col-span-2 bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 "
            >

              <option value="N">بدون</option>
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
              مميز العلاج               </label>
            <select

              name="MIL_NO_FLAG"
              id="momayez"
              className="col-span-2 bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 "
            >

              <option value="N">مسلم</option>
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
              حالة العمل              </label>
            <select

              name="MIL_NO_FLAG"
              id="momayez"
              className="col-span-2 bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 "
            >

              <option value="N">طالب</option>
              <option value="R">احتياط</option>
              <option value="A">مكلف</option>
              <option value="S">
                عامل/فنى
              </option>
            </select>

          </div>
          <div className=" col-span-12 grid grid-cols-12  p-1">
            <label
              htmlFor="sananaalorder"
              className="col-span-1 font-medium text-gray-900"
            >
              الرقم القومى               </label>
            <input
              type="text"
              id="sananaalorder"
              className="col-span-11 text-center bg-gray-50  ml-1 border p-1 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  "
              required
            />
          </div>
          <div className=" col-span-12 grid grid-cols-12  p-1">
            <label
              htmlFor="sananaalorder"
              className="col-span-1 font-medium text-gray-900"
            >
              الملاحظات              </label>
            <input
              type="text"
              id="sananaalorder"
              className="col-span-11 text-center bg-gray-50  ml-1 border p-1 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  "
              required
            />
          </div>
          <div className=" col-span-12 grid grid-cols-12  p-1">
            <div className="col-span-2" />
            <button type="button" className="col-span-2 text-green-700  hover:text-white border outline-none border-green-700 hover:bg-green-800  hover:border-green-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center "> حذف الأبن</button>
            <div className="col-span-2" />
            <button type="button" className="col-span-1 text-green-700  hover:text-white border outline-none border-green-700 hover:bg-green-800  hover:border-green-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center "> حفظ </button>
            <div className="col-span-2" />
            <button type="button" className="col-span-1 text-green-700  hover:text-white border outline-none border-green-700 hover:bg-green-800  hover:border-green-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center "> عودة </button>

          </div>

        </div>
      </div>
      <div className="tab-content col-span-12 grid grid-cols-12" style={{ display: activeTab === 'الاقارب' ? 'block' : 'none' }}>
        <div className=" col-span-12 grid grid-cols-12  p-1">
          <div className=" col-span-12 grid grid-cols-12  p-1">
            <label
              htmlFor="sananaalorder"
              className="col-span-1 font-medium text-gray-900"
            >
              الاسم                </label>
            <input
              type="text"
              id="sananaalorder"
              className="col-span-4 text-center bg-gray-50  ml-1 border p-1 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  "
              required
            />
            <label htmlFor="momayez" className="col-span-1 mx-2 font-medium text-gray-900">
              درجة القرابة
            </label>
            <select

              name="MIL_NO_FLAG"
              id="momayez"
              className="col-span-1 bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 "
            >

              <option value="N">والد</option>
              <option value="R">احتياط</option>
              <option value="A">مكلف</option>
              <option value="S">
                عامل/فنى
              </option>
            </select>
            <label htmlFor="momayez" className="col-span-1 mx-2 font-medium text-gray-900">
              النوع
            </label>
            <select

              name="MIL_NO_FLAG"
              id="momayez"
              className="col-span-1 bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 "
            >

              <option value="N">ذكر</option>
              <option value="R">احتياط</option>
              <option value="A">مكلف</option>
              <option value="S">
                عامل/فنى
              </option>
            </select>
          </div>
          <div className=" col-span-12 grid grid-cols-12  p-1">
            <label
              htmlFor="sananaalorder"
              className="col-span-1 font-medium text-gray-900"
            >
              تاريخ الميلاد                </label>
            <input
              type="text"
              id="sananaalorder"
              className="col-span-2 text-center bg-gray-50  ml-1 border p-1 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  "
              required
            />
            <label htmlFor="momayez" className="col-span-2 mx-2 font-medium text-gray-900">
              الحالة الإجتماعية
            </label>
            <select

              name="MIL_NO_FLAG"
              id="momayez"
              className="col-span-1 bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 "
            >

              <option value="N">متزوج</option>
              <option value="R">اعذب</option>
              <option value="A">مكلف</option>
              <option value="S">
                عامل/فنى
              </option>
            </select>
            <label htmlFor="momayez" className="col-span-1 mx-2 font-medium text-gray-900">
              الديانة
            </label>
            <select

              name="MIL_NO_FLAG"
              id="momayez"
              className="col-span-1 bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 "
            >

              <option value="N">مسلم</option>
              <option value="R">مسيحى</option>
              <option value="A">بدون</option>
              <option value="S">
                عامل/فنى
              </option>
            </select>
            <label htmlFor="momayez" className="col-span-1 mx-2 font-medium text-gray-900">
              الجنسية
            </label>
            <select

              name="MIL_NO_FLAG"
              id="momayez"
              className="col-span-1 bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 "
            >

              <option value="N">مصرى</option>
              <option value="R">احتياط</option>
              <option value="A">مكلف</option>
              <option value="S">
                عامل/فنى
              </option>
            </select>
          </div>
          <div className=" col-span-12 grid grid-cols-12  p-1">

            <label htmlFor="momayez" className="col-span-1 mx-2 font-medium text-gray-900">
              اقرب الاقارب
            </label>
            <select

              name="MIL_NO_FLAG"
              id="momayez"
              className="col-span-1 bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 "
            >

              <option value="N">لا</option>
              <option value="R">احتياط</option>
              <option value="A">مكلف</option>
              <option value="S">
                عامل/فنى
              </option>
            </select>
          </div>
          <div className=" col-span-12 grid grid-cols-12  p-1">
            <label
              htmlFor="sananaalorder"
              className="col-span-1 font-medium text-gray-900"
            >
              عنوان المنذل                </label>
            <input
              type="text"
              id="sananaalorder"
              className="col-span-2 text-center bg-gray-50  ml-1 border p-1 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  "
              required
            />
            <div className="col-span-2" />
            <label
              htmlFor="sananaalorder"
              className="col-span-1 font-medium text-gray-900"
            >
              تليفون المنذل                </label>
            <input
              type="text"
              id="sananaalorder"
              className="col-span-2 text-center bg-gray-50  ml-1 border p-1 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  "
              required
            />

          </div>
          <div className=" col-span-12 grid grid-cols-12  p-1">
            <label
              htmlFor="sananaalorder"
              className="col-span-1 font-medium text-gray-900"
            >
              الوظيفة               </label>
            <input
              type="text"
              id="sananaalorder"
              className="col-span-2 text-center bg-gray-50  ml-1 border p-1 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  "
              required
            />
            <div className="col-span-2" />

            <button type="button" className="h-full p-2 col-span-1 text-green-700 hover:text-white border outline-none border-green-700 hover:bg-green-800  hover:border-green-200 font-medium rounded-lg text-xs px-5 text-center ">ض ق.م</button>
            <div className="col-span-4" />
            <button type="button" className="h-full p-2 col-span-1 text-green-700 hover:text-white border outline-none border-green-700 hover:bg-green-800  hover:border-green-200 font-medium rounded-lg text-xs px-5 text-center ">حذف</button>
            <div className="col-span-1" />
          </div>
          <div className=" col-span-12 grid grid-cols-12  p-1">
            <label
              htmlFor="sananaalorder"
              className="col-span-1 font-medium text-gray-900"
            >
              الوظيفة               </label>
            <input
              type="text"
              id="sananaalorder"
              className="col-span-2 text-center bg-gray-50  ml-1 border p-1 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  "
              required
            />
            <div className="col-span-2" />

            <button type="button" className="h-full p-2 col-span-1 text-green-700 hover:text-white border outline-none border-green-700 hover:bg-green-800  hover:border-green-200 font-medium rounded-lg text-xs px-5 text-center ">ض شرطة</button>
            <div className="col-span-4" />
            <button type="button" className="h-full p-2 col-span-1 text-green-700 hover:text-white border outline-none border-green-700 hover:bg-green-800  hover:border-green-200 font-medium rounded-lg text-xs px-5 text-center ">حفظ</button>
            <div className="col-span-1" />
          </div>
          <div className=" col-span-12 grid grid-cols-12  p-1">
            <button type="button" className="h-full p-2 col-span-1 text-green-700 hover:text-white border outline-none border-green-700 hover:bg-green-800  hover:border-green-200 font-medium rounded-lg text-xs px-5 text-center ">ض ق.م</button>
            <label
              htmlFor="sananaalorder"
              className="col-span-1 font-medium text-gray-900"
            >
              رقم ت.ش               </label>
            <input
              type="text"
              id="sananaalorder"
              className="col-span-1 text-center bg-gray-50  ml-1 border p-1 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  "
              required
            />
            <select

              name="MIL_NO_FLAG"
              id="momayez"
              className="col-span-1 bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 "
            >

              <option value="N">بدون</option>
              <option value="R">احتياط</option>
              <option value="A">مكلف</option>
              <option value="S">
                عامل/فنى
              </option>
            </select>
            <input
              type="text"
              id="sananaalorder"
              className="col-span-4 text-center bg-gray-50  ml-1 border p-1 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  "
              required
            />

          </div>
          <div className=" col-span-12 grid grid-cols-12  p-1">
            <label
              htmlFor="sananaalorder"
              className="col-span-1 font-medium text-gray-900"
            >
              عنوان العمل                 </label>
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
              تليفون العمل                 </label>
            <input
              type="text"
              id="sananaalorder"
              className="col-span-2 text-center bg-gray-50  ml-1 border p-1 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  "
              required
            />
          </div>
          <div className=" col-span-12 grid grid-cols-12  p-1">
            <label
              htmlFor="sananaalorder"
              className="col-span-2 font-medium text-gray-900"
            >
              اسم الزوج/الزوجة                </label>
            <input
              type="text"
              id="sananaalorder"
              className="col-span-10 text-center bg-gray-50  ml-1 border p-1 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  "
              required
            />
          </div>
          <div className=" col-span-12 grid grid-cols-12  p-1">
            <label
              htmlFor="sananaalorder"
              className="col-span-2 font-medium text-gray-900"
            >
              وظيفة الزوج/الزوجة                </label>
            <input
              type="text"
              id="sananaalorder"
              className="col-span-10 text-center bg-gray-50  ml-1 border p-1 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  "
              required
            />
          </div>
          <div className="col-span-5" />
          <button type="button" className="h-full p-2 col-span-2 text-green-700 hover:text-white border outline-none border-green-700 hover:bg-green-800  hover:border-green-200 font-medium rounded-lg text-xs px-5 text-center ">عودة</button>

        </div>
      </div>
    </>
  );
}
export default Edkhal16;
