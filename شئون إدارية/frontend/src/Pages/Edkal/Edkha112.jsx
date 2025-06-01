import { useState } from "react";

function Edkhal12() {
  const [activeTab, setActiveTab] = useState("");
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  return (
    <>
      <div className="pb-3 text-4xl font-black text-center text-gray-900 dark:text-white">
        <p>إضافة وحدة</p>
      </div>
      <div className="flex grid justify-center grid-cols-12 col-span-12 align-middle border-2 border-gray-400 rounded-xl ">
        <ul
          className="flex grid justify-center grid-cols-12 col-span-12 -mb-px align-middle"
          id="tabs"
        >
          <li className="col-span-1" />
          <li className="col-span-2 text-center me-2">
            <a
              href="#"
              className={`tab-link inline-block p-4 border-b-2 border-transparent rounded-lg hover/edit:translate-x-0.5 hover/edit:bg-blue-100 ${
                activeTab === "الوحدات النمطيه"
                  ? "inline-block text-white bg-blue-600 rounded-lg active"
                  : ""
              }`}
              onClick={() => handleTabClick("الوحدات النمطيه")}
            >
              الوحدات النمطيه
            </a>
          </li>
          <li className="col-span-2 text-center me-2">
            <a
              href="#"
              className={`tab-link inline-block p-4 border-b-2 border-transparent rounded-lg hover/edit:translate-x-0.5 hover/edit:bg-blue-100 ${
                activeTab === "الوحدات الفرعيه"
                  ? "inline-block text-white bg-blue-600 rounded-lg active"
                  : ""
              }`}
              onClick={() => handleTabClick("الوحدات الفرعيه")}
            >
              الوحدات الفرعيه
            </a>
          </li>
          <li className="col-span-2 text-center me-2">
            <a
              href="#"
              className={`tab-link inline-block p-4 border-b-2 border-transparent rounded-lg hover/edit:translate-x-0.5 hover/edit:bg-blue-100 ${
                activeTab === "الوظائف"
                  ? "inline-block text-white bg-blue-600 rounded-lg active"
                  : ""
              }`}
              onClick={() => handleTabClick("الوظائف")}
            >
              الوظائف
            </a>
          </li>
          <li className="col-span-2 text-center me-2">
            <a
              href="#"
              className={`tab-link inline-block p-4 border-b-2 border-transparent rounded-lg hover/edit:translate-x-0.5 hover/edit:bg-blue-100 ${
                activeTab === "مؤهلات وظيفه"
                  ? "inline-block text-white bg-blue-600 rounded-lg active"
                  : ""
              }`}
              onClick={() => handleTabClick("مؤهلات وظيفه")}
            >
              مؤهلات وظيفه
            </a>
          </li>
          <li className="col-span-2 text-center me-2">
            <a
              href="#"
              className={`tab-link inline-block p-4 border-b-2 border-transparent rounded-lg hover/edit:translate-x-0.5 hover/edit:bg-blue-100 ${
                activeTab === "الوحدات الفعليه"
                  ? "inline-block text-white bg-blue-600 rounded-lg active"
                  : ""
              }`}
              onClick={() => handleTabClick("الوحدات الفعليه")}
            >
              الوحدات الفعليه
            </a>
          </li>
        </ul>
      </div>
      <div
        className="grid grid-cols-12 col-span-12 tab-content"
        style={{ display: activeTab === "الوحدات النمطيه" ? "block" : "none" }}
      >
        <div className="grid grid-cols-12 col-span-12 p-1 ">
          <div className="grid grid-cols-12 col-span-12 p-1 ">
            <div className="col-span-1" />
            <button
              type="button"
              className="h-full col-span-2 p-2 px-5 text-xs font-medium text-center text-green-700 border border-green-700 rounded-lg outline-none hover:text-white hover:bg-green-800 hover:border-green-200 "
            >
              {" "}
              إدخال إستعلام
            </button>
            <div className="col-span-1" />
            <button
              type="button"
              className="h-full col-span-1 p-2 px-5 text-xs font-medium text-center text-green-700 border border-green-700 rounded-lg outline-none hover:text-white hover:bg-green-800 hover:border-green-200 "
            >
              {" "}
              إستعلام
            </button>
            <div className="col-span-1" />
            <button
              type="button"
              className="h-full col-span-1 p-2 px-5 text-xs font-medium text-center text-green-700 border border-green-700 rounded-lg outline-none hover:text-white hover:bg-green-800 hover:border-green-200 "
            >
              سجل تالى{" "}
            </button>
            <div className="col-span-1" />
            <button
              type="button"
              className="h-full col-span-1 p-2 px-5 text-xs font-medium text-center text-green-700 border border-green-700 rounded-lg outline-none hover:text-white hover:bg-green-800 hover:border-green-200 "
            >
              {" "}
              سجل سابق{" "}
            </button>
            <div className="col-span-1" />
            <button
              type="button"
              className="h-full col-span-1 p-2 px-5 text-xs font-medium text-center text-green-700 border border-green-700 rounded-lg outline-none hover:text-white hover:bg-green-800 hover:border-green-200 "
            >
              {" "}
              سجل جديد{" "}
            </button>
          </div>
          <div className="grid grid-cols-12 col-span-12 p-1 ">
            <label
              htmlFor="sananaalorder"
              className="col-span-2 font-medium text-gray-900"
            >
              النمط
            </label>
            <input
              type="text"
              id="sananaalorder"
              className="block col-span-10 p-1 ml-1 text-sm text-center text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
              required
            />
          </div>
          <div className="grid grid-cols-12 col-span-12 p-1 ">
            <label
              htmlFor="sananaalorder"
              className="col-span-2 font-medium text-gray-900"
            >
              نوع الوحدة{" "}
            </label>
            <select
              onChange={(ele) => {
                handleChange(ele);
              }}
              name="MIL_NO_FLAG"
              id="momayez"
              className="col-span-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
            >
              <option value="N">شرف</option>
              <option value="R">احتياط</option>
              <option value="A">مكلف</option>
              <option value="S">عامل/فنى</option>
            </select>
            <div className="col-span-2" />
            <label
              htmlFor="sananaalorder"
              className="col-span-2 font-medium text-gray-900"
            >
              جهة الإمداد{" "}
            </label>
            <select
              onChange={(ele) => {
                handleChange(ele);
              }}
              name="MIL_NO_FLAG"
              id="momayez"
              className="col-span-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
            >
              <option value="N">شرف</option>
              <option value="R">احتياط</option>
              <option value="A">مكلف</option>
              <option value="S">عامل/فنى</option>
            </select>
          </div>
          <div className="grid grid-cols-12 col-span-12 p-1 ">
            <div className="col-span-2" />
            <label
              htmlFor="sananaalorder"
              className="col-span-2 font-medium text-gray-900"
            >
              رقم تعليمات الإنشاء{" "}
            </label>
            <input
              type="text"
              id="sananaalorder"
              className="block col-span-1 p-1 ml-1 text-sm text-center text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
              required
            />
            <div className="col-span-1" />
            <label
              htmlFor="sananaalorder"
              className="col-span-2 font-medium text-gray-900"
            >
              ت تعليمات الإنشاء{" "}
            </label>
            <input
              type="text"
              id="sananaalorder"
              className="block col-span-1 p-1 ml-1 text-sm text-center text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
              required
            />
          </div>
          <div className="grid grid-cols-12 col-span-12 p-1 ">
            <div className="col-span-2" />
            <label
              htmlFor="sananaalorder"
              className="col-span-2 font-medium text-gray-900"
            >
              رقم تعليمات الإلغاء{" "}
            </label>
            <input
              type="text"
              id="sananaalorder"
              className="block col-span-1 p-1 ml-1 text-sm text-center text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
              required
            />
            <div className="col-span-1" />
            <label
              htmlFor="sananaalorder"
              className="col-span-2 font-medium text-gray-900"
            >
              ت تعليمات الإلغاء{" "}
            </label>
            <input
              type="text"
              id="sananaalorder"
              className="block col-span-1 p-1 ml-1 text-sm text-center text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
              required
            />
          </div>
          <div className="grid grid-cols-12 col-span-12 p-1 ">
            <label
              htmlFor="sananaalorder"
              className="col-span-2 font-medium text-gray-900"
            >
              الوحدة الافرعية القيادية{" "}
            </label>
            <input
              type="text"
              id="sananaalorder"
              className="block col-span-10 p-1 ml-1 text-sm text-center text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
              required
            />
          </div>
          <div className="grid grid-cols-12 col-span-12 p-1 ">
            <div className="col-span-3" />
            <button
              type="button"
              className="h-full col-span-2 p-2 px-5 text-xs font-medium text-center text-green-700 border border-green-700 rounded-lg outline-none hover:text-white hover:bg-green-800 hover:border-green-200 "
            >
              {" "}
              حفظ
            </button>
            <div className="col-span-1" />
            <button
              type="button"
              className="h-full col-span-2 p-2 px-5 text-xs font-medium text-center text-green-700 border border-green-700 rounded-lg outline-none hover:text-white hover:bg-green-800 hover:border-green-200 "
            >
              {" "}
              حذف
            </button>
            <div className="col-span-1" />
            <button
              type="button"
              className="h-full col-span-2 p-2 px-5 text-xs font-medium text-center text-green-700 border border-green-700 rounded-lg outline-none hover:text-white hover:bg-green-800 hover:border-green-200 "
            >
              {" "}
              وظائف الوحدة الفرعية القيادية
            </button>
          </div>
        </div>
      </div>
      <div
        className="grid grid-cols-12 col-span-12 tab-content"
        style={{ display: activeTab === "الوحدات الفرعيه" ? "block" : "none" }}
      >
        <div className="grid grid-cols-12 col-span-12 p-1 ">
          <div className="grid grid-cols-12 col-span-12 p-1 ">
            <table className="col-span-12 text-gray-500 auto">
              <thead className="text-lg font-bold text-right text-gray-700 bg-gray-100">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    الوحدة الفرعية
                  </th>
                  <th scope="col" className="px-6 py-3">
                    العدد
                  </th>
                  <th scope="col" className="px-6 py-3">
                    تعليمات
                  </th>
                  <th scope="col" className="px-6 py-3">
                    الإنشاء
                  </th>
                  <th scope="col" className="px-6 py-3">
                    تعليمات
                  </th>
                  <th scope="col" className="px-6 py-3">
                    الإلغاء
                  </th>
                  <th scope="col" className="px-6 py-3">
                    جهة الإمداد
                  </th>
                </tr>
              </thead>
              <tbody>{}</tbody>
            </table>
          </div>
          <div className="grid grid-cols-12 col-span-12 p-1 ">
            <div className="col-span-1" />
            <button
              type="button"
              className="h-full col-span-2 p-1 px-5 text-xs font-medium text-center text-green-700 border border-green-700 rounded-lg outline-none hover:text-white hover:bg-green-800 hover:border-green-200 "
            >
              {" "}
              المستوى الادنى{" "}
            </button>
            <div className="col-span-1" />
            <button
              type="button"
              className="h-full col-span-2 p-1 px-5 text-xs font-medium text-center text-green-700 border border-green-700 rounded-lg outline-none hover:text-white hover:bg-green-800 hover:border-green-200 "
            >
              {" "}
              المستور الاعلى{" "}
            </button>
            <div className="col-span-1" />
            <button
              type="button"
              className="h-full col-span-1 p-1 px-5 text-xs font-medium text-center text-green-700 border border-green-700 rounded-lg outline-none hover:text-white hover:bg-green-800 hover:border-green-200 "
            >
              {" "}
              سجل جديد{" "}
            </button>
            <div className="col-span-1" />
            <button
              type="button"
              className="h-full col-span-1 p-1 px-5 text-xs font-medium text-center text-green-700 border border-green-700 rounded-lg outline-none hover:text-white hover:bg-green-800 hover:border-green-200 "
            >
              {" "}
              حفظ{" "}
            </button>
            <div className="col-span-1" />
            <button
              type="button"
              className="h-full col-span-1 p-1 px-5 text-xs font-medium text-center text-green-700 border border-green-700 rounded-lg outline-none hover:text-white hover:bg-green-800 hover:border-green-200 "
            >
              {" "}
              حذف{" "}
            </button>
          </div>
        </div>
      </div>
      <div
        className="grid grid-cols-12 col-span-12 tab-content"
        style={{ display: activeTab === "الوظائف" ? "block" : "none" }}
      >
        <div className="grid grid-cols-12 col-span-12 p-1 ">
          <div className="grid grid-cols-12 col-span-12 p-1 ">
            <label
              htmlFor="sananaalorder"
              className="col-span-1 font-medium text-gray-900"
            >
              وظيفة{" "}
            </label>
            <input
              type="text"
              id="sananaalorder"
              className="block col-span-1 p-1 ml-1 text-sm text-center text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
              required
            />
            <p className="col-span-1 "> ر.الجهاز</p>

            <label
              htmlFor="sananaalorder"
              className="col-span-1 font-medium text-gray-900"
            >
              العدد{" "}
            </label>
            <input
              type="text"
              id="sananaalorder"
              className="block col-span-1 p-1 ml-1 text-sm text-center text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
              required
            />

            <label
              htmlFor="sananaalorder"
              className="col-span-1 font-medium text-gray-900"
            >
              جهة الإمداد{" "}
            </label>
            <select
              // defaultValue={values.MIL_NO_FLAG ?? "N"}
              // value={values.MIL_NO_FLAG ?? "N"}
              onChange={(ele) => {
                handleChange(ele);
              }}
              name="MIL_NO_FLAG"
              id="momayez"
              className="col-span-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
            >
              <option value="N"> </option>
              <option value="R">احتياط</option>
              <option value="A">مكلف</option>
              <option value="S">عامل/فنى</option>
            </select>
            <div className="col-span-2" />
          </div>
          <div className="grid grid-cols-12 col-span-12 p-1 ">
            <label
              htmlFor="sananaalorder"
              className="col-span-1 font-medium text-gray-900"
            >
              الرتبة{" "}
            </label>
            <select
              // defaultValue={values.MIL_NO_FLAG ?? "N"}
              // value={values.MIL_NO_FLAG ?? "N"}
              onChange={(ele) => {
                handleChange(ele);
              }}
              name="MIL_NO_FLAG"
              id="momayez"
              className="col-span-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
            >
              <option value="N"> لواء </option>
              <option value="R">احتياط</option>
              <option value="A">مكلف</option>
              <option value="S">عامل/فنى</option>
            </select>
            <label
              htmlFor="sananaalorder"
              className="col-span-1 font-medium text-gray-900"
            >
              الفئة{" "}
            </label>
            <select
              // defaultValue={values.MIL_NO_FLAG ?? "N"}
              // value={values.MIL_NO_FLAG ?? "N"}
              onChange={(ele) => {
                handleChange(ele);
              }}
              name="MIL_NO_FLAG"
              id="momayez"
              className="col-span-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
            >
              <option value="N"> عامل </option>
              <option value="R">احتياط</option>
              <option value="A">مكلف</option>
              <option value="S">عامل/فنى</option>
            </select>
            <label
              htmlFor="sananaalorder"
              className="col-span-1 font-medium text-gray-900"
            >
              النوعية{" "}
            </label>
            <input
              type="text"
              id="sananaalorder"
              className="block col-span-1 p-1 ml-1 text-sm text-center text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
              required
            />
          </div>
          <div className="grid grid-cols-12 col-span-12 p-1 ">
            <div className="col-span-2" />
            <label
              htmlFor="sananaalorder"
              className="col-span-1 font-medium text-gray-900"
            >
              التخصص العام{" "}
            </label>
            <input
              type="text"
              id="sananaalorder"
              className="block col-span-1 p-1 ml-1 text-sm text-center text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
              required
            />
            <div className="col-span-2" />
            <label
              htmlFor="sananaalorder"
              className="col-span-2 font-medium text-gray-900"
            >
              التخصص الدقيق{" "}
            </label>
            <input
              type="text"
              id="sananaalorder"
              className="block col-span-1 p-1 ml-1 text-sm text-center text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
              required
            />
          </div>
          <div className="grid grid-cols-12 col-span-12 p-1 ">
            <label
              htmlFor="sananaalorder"
              className="col-span-2 font-medium text-gray-900"
            >
              تعليمات الإنشاء{" "}
            </label>
            <input
              type="text"
              id="sananaalorder"
              className="block col-span-1 p-1 ml-1 text-sm text-center text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
              required
            />
            <input
              type="text"
              id="sananaalorder"
              className="block col-span-2 p-1 ml-1 text-sm text-center text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
              required
            />
            <div className="col-span-2" />
            <label
              htmlFor="sananaalorder"
              className="col-span-1 font-medium text-gray-900"
            >
              تعليمات الإلغاء{" "}
            </label>
            <input
              type="text"
              id="sananaalorder"
              className="block col-span-1 p-1 ml-1 text-sm text-center text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
              required
            />
            <input
              type="text"
              id="sananaalorder"
              className="block col-span-2 p-1 ml-1 text-sm text-center text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
              required
            />
          </div>
          <div className="grid grid-cols-12 col-span-12 p-1 ">
            <label
              htmlFor="sananaalorder"
              className="col-span-2 font-medium text-gray-900"
            >
              مستوى التأهيل{" "}
            </label>
            <select
              // defaultValue={values.MIL_NO_FLAG ?? "N"}
              // value={values.MIL_NO_FLAG ?? "N"}
              onChange={(ele) => {
                handleChange(ele);
              }}
              name="MIL_NO_FLAG"
              id="momayez"
              className="col-span-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
            >
              <option value="N">قيادة</option>
              <option value="R">احتياط</option>
              <option value="A">مكلف</option>
              <option value="S">عامل/فنى</option>
            </select>
            <label
              htmlFor="sananaalorder"
              className="col-span-2 font-medium text-gray-900"
            >
              نوع الوظيفة{" "}
            </label>
            <select
              // defaultValue={values.MIL_NO_FLAG ?? "N"}
              // value={values.MIL_NO_FLAG ?? "N"}
              onChange={(ele) => {
                handleChange(ele);
              }}
              name="MIL_NO_FLAG"
              id="momayez"
              className="col-span-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
            >
              <option value="N">قيادة </option>
              <option value="R">احتياط</option>
              <option value="A">مكلف</option>
              <option value="S">عامل/فنى</option>
            </select>
            <div className="col-span-1" />
            <label
              htmlFor="sananaalorder"
              className="col-span-1 font-medium text-gray-900"
            >
              مجال العمل{" "}
            </label>
            <input
              type="text"
              id="sananaalorder"
              className="block col-span-1 p-1 ml-1 text-sm text-center text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
              required
            />
            <p className="col-span-1 "> لا يوجد</p>
          </div>
          <div className="grid grid-cols-12 col-span-12 p-1 ">
            <div className="col-span-2" />
            <label
              htmlFor="sananaalorder"
              className="col-span-1 font-medium text-gray-900"
            >
              تمد من فرعية{" "}
            </label>
            <input
              type="text"
              id="sananaalorder"
              className="block col-span-1 p-1 ml-1 text-sm text-center text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
              required
            />
            <p className="col-span-1 "> القيادة </p>

            <div className="col-span-1" />
            <label
              htmlFor="sananaalorder"
              className="col-span-1 font-medium text-gray-900"
            >
              تمد من وظيفة{" "}
            </label>
            <input
              type="text"
              id="sananaalorder"
              className="block col-span-1 p-1 ml-1 text-sm text-center text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
              required
            />
          </div>
          <div className="grid grid-cols-12 col-span-12 p-1 ">
            <label
              htmlFor="sananaalorder"
              className="col-span-1 font-medium text-gray-900"
            >
              نوع الشغل{" "}
            </label>
            <select
              // defaultValue={values.MIL_NO_FLAG ?? "N"}
              // value={values.MIL_NO_FLAG ?? "N"}
              onChange={(ele) => {
                handleChange(ele);
              }}
              name="MIL_NO_FLAG"
              id="momayez"
              className="col-span-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
            >
              <option value="N"> لا يوجد </option>
              <option value="R">احتياط</option>
              <option value="A">مكلف</option>
              <option value="S">عامل/فنى</option>
            </select>
            <div className="col-span-2" />
            <label
              htmlFor="sananaalorder"
              className="col-span-2 font-medium text-gray-900"
            >
              طريقة شغل الوظيفة{" "}
            </label>
            <input
              type="text"
              id="sananaalorder"
              className="block col-span-3 p-1 ml-1 text-sm text-center text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
              required
            />
          </div>
          <div className="grid grid-cols-12 col-span-12 p-1 ">
            <div className="col-span-3" />
            <button
              type="button"
              className="h-full col-span-1 p-1 px-5 text-xs font-medium text-center text-green-700 border border-green-700 rounded-lg outline-none hover:text-white hover:bg-green-800 hover:border-green-200 "
            >
              {" "}
              سجل جديد{" "}
            </button>
            <div className="col-span-1" />
            <button
              type="button"
              className="h-full col-span-1 p-1 px-5 text-xs font-medium text-center text-green-700 border border-green-700 rounded-lg outline-none hover:text-white hover:bg-green-800 hover:border-green-200 "
            >
              {" "}
              حفظ{" "}
            </button>
            <div className="col-span-1" />
            <button
              type="button"
              className="h-full col-span-1 p-1 px-5 text-xs font-medium text-center text-green-700 border border-green-700 rounded-lg outline-none hover:text-white hover:bg-green-800 hover:border-green-200 "
            >
              {" "}
              حذف{" "}
            </button>
          </div>
        </div>
      </div>
      <div
        className="grid grid-cols-12 col-span-12 tab-content"
        style={{ display: activeTab === "مؤهلات وظيفه" ? "block" : "none" }}
      >
        <div className="grid grid-cols-12 col-span-12 p-1 ">
          <div className="grid grid-cols-12 col-span-12 p-1 ">
            <select
              name="MIL_NO_FLAG"
              id="momayez"
              className="col-span-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
            >
              <option value="N"> </option>
              <option value="R">احتياط</option>
              <option value="A">مكلف</option>
              <option value="S">عامل/فنى</option>
            </select>
          </div>
          <div className="grid grid-cols-12 col-span-12 p-1 ">
            <select
              name="MIL_NO_FLAG"
              id="momayez"
              className="col-span-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
            >
              <option value="N"> </option>
              <option value="R">احتياط</option>
              <option value="A">مكلف</option>
              <option value="S">عامل/فنى</option>
            </select>
          </div>
          <div className="grid grid-cols-12 col-span-12 p-1 ">
            <select
              name="MIL_NO_FLAG"
              id="momayez"
              className="col-span-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
            >
              <option value="N"> </option>
              <option value="R">احتياط</option>
              <option value="A">مكلف</option>
              <option value="S">عامل/فنى</option>
            </select>
          </div>
          <div className="grid grid-cols-12 col-span-12 p-1 ">
            <select
              name="MIL_NO_FLAG"
              id="momayez"
              className="col-span-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
            >
              <option value="N">شرف</option>
              <option value="R">احتياط</option>
              <option value="A">مكلف</option>
              <option value="S">عامل/فنى</option>
            </select>
          </div>
          <div className="grid grid-cols-12 col-span-12 p-1 ">
            <select
              name="MIL_NO_FLAG"
              id="momayez"
              className="col-span-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
            >
              <option value="N">شرف</option>
              <option value="R">احتياط</option>
              <option value="A">مكلف</option>
              <option value="S">عامل/فنى</option>
            </select>
          </div>
          <div className="grid grid-cols-12 col-span-12 p-1 ">
            <div className="col-span-4" />
            <button
              type="button"
              className="h-full col-span-1 p-1 px-5 text-xs font-medium text-center text-green-700 border border-green-700 rounded-lg outline-none hover:text-white hover:bg-green-800 hover:border-green-200 "
            >
              {" "}
              حفظ{" "}
            </button>
            <div className="col-span-1" />
            <button
              type="button"
              className="h-full col-span-1 p-1 px-5 text-xs font-medium text-center text-green-700 border border-green-700 rounded-lg outline-none hover:text-white hover:bg-green-800 hover:border-green-200 "
            >
              {" "}
              حذف{" "}
            </button>
          </div>
        </div>
      </div>
      <div
        className="grid grid-cols-12 col-span-12 tab-content"
        style={{ display: activeTab === "الوحدات الفعليه" ? "block" : "none" }}
      >
        <div className="grid grid-cols-12 col-span-12 p-1 ">
          <div className="grid grid-cols-12 col-span-12 p-1 ">
            <table className="col-span-12 text-gray-500 auto">
              <thead className="text-lg font-bold text-right text-gray-700 bg-gray-100">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    الاسم
                  </th>
                  <th scope="col" className="px-6 py-3">
                    الاسم المختصر
                  </th>
                  <th scope="col" className="px-6 py-3">
                    تعليمات
                  </th>
                  <th scope="col" className="px-6 py-3">
                    الإنشاء
                  </th>
                  <th scope="col" className="px-6 py-3">
                    تعليمات
                  </th>
                  <th scope="col" className="px-6 py-3">
                    الإلغاء
                  </th>
                </tr>
              </thead>
              <tbody>{}</tbody>
            </table>
          </div>
          <div className="grid grid-cols-12 col-span-12 p-1 ">
            <div className="col-span-3" />
            <button
              type="button"
              className="h-full col-span-1 p-1 px-5 text-xs font-medium text-center text-green-700 border border-green-700 rounded-lg outline-none hover:text-white hover:bg-green-800 hover:border-green-200 "
            >
              {" "}
              سجل جديد{" "}
            </button>
            <div className="col-span-1" />
            <button
              type="button"
              className="h-full col-span-1 p-1 px-5 text-xs font-medium text-center text-green-700 border border-green-700 rounded-lg outline-none hover:text-white hover:bg-green-800 hover:border-green-200 "
            >
              {" "}
              حفظ{" "}
            </button>
            <div className="col-span-1" />
            <button
              type="button"
              className="h-full col-span-1 p-1 px-5 text-xs font-medium text-center text-green-700 border border-green-700 rounded-lg outline-none hover:text-white hover:bg-green-800 hover:border-green-200 "
            >
              {" "}
              حذف{" "}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Edkhal12;
