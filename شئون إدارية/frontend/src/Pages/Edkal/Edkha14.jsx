import { useState } from "react";

function Edkhal4() {
  const [activeTab, setActiveTab] = useState('');
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  return (
    <>
          <div className="pb-3 text-4xl font-black text-center text-gray-900 dark:text-white">
        <p>أوامر النقل</p>
      </div>
      <div className="border-2 border-gray-400 my-[5px] rounded-xl p-6">
        <p className="mb-5 text-lg font-bold underline">بيانات امر النقل </p>
        <div className="mr-7">
          <div className="grid m-1 lg:grid-cols-7 md:grid-cols-6 sm:grid-cols-4 md:grid ">
            <label htmlFor="naalordertype" className="mx-2 font-medium text-gray-900">
              نوع أمر النقل
            </label>
            <select
              id="naalordertype"
              className="text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 w-fit focus:ring-blue-500 focus:border-blue-500 "
            >
              <option selected value="فردية">
                فردية
              </option>
              <option value="؟؟">؟؟؟</option>
              <option value="؟؟">؟؟؟</option>
              <option value="؟؟">؟؟؟</option>
              <option value="؟؟">؟؟؟</option>
              <option value="؟؟">؟؟؟</option>
            </select>

          </div>
          <div className="grid m-1 lg:grid-cols-7 md:grid-cols-6 sm:grid-cols-4 md:grid ">
            <label htmlFor="gehetelsodor" className="mx-2 font-medium text-gray-900">
              جهة صدور أمر النقل
            </label>
            <select
              id="gehetelsodor"
              className="text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 w-fit focus:ring-blue-500 focus:border-blue-500 "
            >

              <option value="؟؟">؟؟؟</option>
              <option value="؟؟">؟؟؟</option>
              <option value="؟؟">؟؟؟</option>
              <option value="؟؟">؟؟؟</option>
              <option value="؟؟">؟؟؟</option>
            </select>
          </div>

          <div className="grid m-1 lg:grid-cols-7 md:grid-cols-6 sm:grid-cols-4 md:grid ">
            <label
              htmlFor="sananaalorder"
              className="mx-2 font-medium text-gray-900"
            >
              رقم/سنة أمر النقل
            </label>
            <input
              type="text"
              id="sananaalorder"
              className="block p-1 ml-1 text-sm text-center text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
              required
            />
            <input
              type="text"
              id="sananaalorder-tabe3"
              className="block p-1 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
              required
            />
          </div>
          <div className="grid m-1 lg:grid-cols-7 md:grid-cols-6 sm:grid-cols-4 md:grid ">
            <label
              htmlFor="naalorderdate"
              className="mx-2 font-medium text-gray-900"
            >
              تاريخ صدور امر النقل
            </label>
            <input
              type="date"
              id="naalorderdate"
              className="block p-1 ml-1 text-sm text-center text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
              required
            />
          </div>




        </div>
        <div className="flex grid justify-center grid-cols-12 col-span-12 align-middle border-2 border-gray-400 rounded-xl ">
          <ul className="flex grid justify-center grid-cols-12 col-span-12 -mb-px align-middle" id="tabs">

            <li className="col-span-3 text-center me-2">
              <a
                href="#"
                className={`tab-link inline-block p-4 border-b-2 border-transparent rounded-lg hover/edit:translate-x-0.5 hover/edit:bg-blue-100 ${activeTab === 'نقل الوحدة' ? 'inline-block text-white bg-blue-600 rounded-lg active' : ''
                  }`}
                onClick={() => handleTabClick('نقل الوحدة')}
              >
                نقل الوحدة
              </a>
            </li>
            <li className="col-span-3 text-center me-2">
              <a
                href="#"
                className={`tab-link inline-block p-4 border-b-2 border-transparent rounded-lg hover/edit:translate-x-0.5 hover/edit:bg-blue-100 ${activeTab === 'عودة للسلاح' ? 'inline-block text-white bg-blue-600 rounded-lg active' : ''
                  }`}
                onClick={() => handleTabClick('عودة ')}
              >
                عودة 
              </a>
            </li>
            <li className="col-span-3 text-center me-2">
              <a
                href="#"
                className={`tab-link inline-block p-4 border-b-2 border-transparent rounded-lg hover/edit:translate-x-0.5 hover/edit:bg-blue-100 ${activeTab === 'تمثيل ' ? 'inline-block text-white bg-blue-600 rounded-lg active' : ''
                  }`}
                onClick={() => handleTabClick('تمثيل ')}
              >
                تمثيل 
              </a>
            </li>
            <li className="col-span-3 text-center me-2">
              <a
                href="#"
                className={`tab-link inline-block p-4 border-b-2 border-transparent rounded-lg hover/edit:translate-x-0.5 hover/edit:bg-blue-100 ${activeTab === 'أعارة' ? 'inline-block text-white bg-blue-600 rounded-lg active' : ''
                  }`}
                onClick={() => handleTabClick('أعارة')}
              >
                أعارة
              </a>
            </li>
          </ul>
        </div>
        <div className="grid grid-cols-12 col-span-12 tab-content" style={{ display: activeTab === 'نقل الوحدة'? 'block' : 'none' }}>
        <div className="grid grid-cols-12 col-span-12 p-1 ">
                  <div className="grid grid-cols-12 col-span-12 p-1 ">
                    <label htmlFor="momayez" className="mx-2 font-medium text-gray-900">
                      الكادر
                    </label>
                    <select

                      name="MIL_NO_FLAG"
                      id="momayez"
                      className="text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
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
                      اقدمية               </label>
                    <input
                      type="text"
                      id="sananaalorder"
                      className="block col-span-2 p-1 ml-1 text-sm text-center text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
                      required
                    />
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
                      ت ش               </label>
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
                      className="col-span-1 font-medium text-gray-900"
                    >
                      ت ش               </label>
                    <input
                      type="text"
                      id="sananaalorder"
                      className="block col-span-2 p-1 ml-1 text-sm text-center text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
                      required
                    />
                    <label
                      htmlFor="sananaalorder"
                      className="col-span-1 font-medium text-gray-900"
                    >
                      الاسم              </label>
                    <input
                      type="text"
                      id="sananaalorder"
                      className="block col-span-6 p-1 ml-1 text-sm text-center text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
                      required
                    />
                    <label htmlFor="momayez" className="mx-2 font-medium text-gray-900">
                      المميز
                    </label>
                    <select

                      name="MIL_NO_FLAG"
                      id="momayez"
                      className="text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
                    >

                      <option value="N">شرف</option>
                      <option value="R">احتياط</option>
                      <option value="A">مكلف</option>
                      <option value="S">
                        عامل/فنى
                      </option>
                    </select>
                  </div>
                  <div className="grid grid-cols-12 col-span-12 p-1 ">
                    <label
                      htmlFor="sananaalorder"
                      className="col-span-1 font-medium text-gray-900"
                    >
                      المكان              </label>
                    <input
                      type="text"
                      id="sananaalorder"
                      className="block col-span-5 p-1 ml-1 text-sm text-center text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
                      required
                    />

                  </div>
                  <div className="grid grid-cols-12 col-span-12 p-1 ">
                    <label
                      htmlFor="sananaalorder"
                      className="col-span-1 font-medium text-gray-900"
                    >
                      الوحدة              </label>
                    <input
                      type="text"
                      id="sananaalorder"
                      className="block col-span-5 p-1 ml-1 text-sm text-center text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
                      required
                    />

                  </div>
                  <div className="grid grid-cols-12 col-span-12 p-1 ">
                    <div className="col-span-3" />
                    <button type="button" className="h-full col-span-2 p-2 px-5 text-xs font-medium text-center text-green-700 border border-green-700 rounded-lg outline-none hover:text-white hover:bg-green-800 hover:border-green-200 "> إستعلام</button>
                    <div className="col-span-1" />
                    <button type="button" className="h-full col-span-2 p-2 px-5 text-xs font-medium text-center text-green-700 border border-green-700 rounded-lg outline-none hover:text-white hover:bg-green-800 hover:border-green-200 ">  إستعلام جديد</button>
                  </div>
                  <div className="grid grid-cols-12 col-span-12 p-1 ">
                    <label
                      htmlFor="sananaalorder"
                      className="col-span-1 font-medium text-gray-900"
                    >
                      تاريخ التنفيذ              </label>
                    <input
                      type="text"
                      id="sananaalorder"
                      className="block col-span-2 p-1 ml-1 text-sm text-center text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
                      required
                    />
                  </div>
                  <div className="grid grid-cols-12 col-span-12 p-1 ">
                    <button type="button" className="h-full col-span-2 p-2 px-5 text-xs font-medium text-center text-green-700 border border-green-700 rounded-lg outline-none hover:text-white hover:bg-green-800 hover:border-green-200 "> الوحدة الفعلية</button>
                    <div className="col-span-1" />
                    <input
                      type="text"
                      id="sananaalorder"
                      className="block col-span-9 p-1 ml-1 text-sm text-center text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
                      required
                    />

                  </div>
                  <div className="grid grid-cols-12 col-span-12 p-1 ">
                    <button type="button" className="h-full col-span-2 p-2 px-5 text-xs font-medium text-center text-green-700 border border-green-700 rounded-lg outline-none hover:text-white hover:bg-green-800 hover:border-green-200 "> الوحدة الفرعية</button>
                    <div className="col-span-1" />
                    <input
                      type="text"
                      id="sananaalorder"
                      className="block col-span-9 p-1 ml-1 text-sm text-center text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
                      required
                    />

                  </div>
                  <div className="grid grid-cols-12 col-span-12 p-1 ">
                    <button type="button" className="h-full col-span-2 p-2 px-5 text-xs font-medium text-center text-green-700 border border-green-700 rounded-lg outline-none hover:text-white hover:bg-green-800 hover:border-green-200 "> الوظيفة </button>
                    <div className="col-span-1" />
                    <input
                      type="text"
                      id="sananaalorder"
                      className="block col-span-9 p-1 ml-1 text-sm text-center text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
                      required
                    />

                  </div>
                  <div className="grid grid-cols-12 col-span-12 p-1 ">
                    <div className="col-span-1" />
                    <button type="button" className="h-full col-span-2 p-1 px-5 text-xs font-medium text-center text-green-700 border border-green-700 rounded-lg outline-none hover:text-white hover:bg-green-800 hover:border-green-200 "> حفظ </button>
                    <div className="col-span-1" />
                    <button type="button" className="h-full col-span-2 p-1 px-5 text-xs font-medium text-center text-green-700 border border-green-700 rounded-lg outline-none hover:text-white hover:bg-green-800 hover:border-green-200 "> تعديل </button>
                    <div className="col-span-1" />
                    <button type="button" className="h-full col-span-2 p-1 px-5 text-xs font-medium text-center text-green-700 border border-green-700 rounded-lg outline-none hover:text-white hover:bg-green-800 hover:border-green-200 "> حذف </button>
                    <div className="col-span-1" />
                    <button type="button" className="h-full col-span-2 p-1 px-5 text-xs font-medium text-center text-green-700 border border-green-700 rounded-lg outline-none hover:text-white hover:bg-green-800 hover:border-green-200 "> خروج </button>


                  </div>

                </div>
        </div>
        <div className="grid grid-cols-12 col-span-12 tab-content" style={{ display: activeTab === 'عودة ' ? 'block' : 'none' }}>
        <div className="grid grid-cols-12 col-span-12 p-1 ">
        <div className="grid grid-cols-12 col-span-12 p-1 ">
          <label htmlFor="momayez" className="mx-2 font-medium text-gray-900">
            الكادر
          </label>
          <select

            name="MIL_NO_FLAG"
            id="momayez"
            className="text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
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
            اقدمية               </label>
          <input
            type="text"
            id="sananaalorder"
            className="block col-span-2 p-1 ml-1 text-sm text-center text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
            required
          />
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
            ت ش               </label>
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
            className="col-span-1 font-medium text-gray-900"
          >
            ت ش               </label>
          <input
            type="text"
            id="sananaalorder"
            className="block col-span-2 p-1 ml-1 text-sm text-center text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
            required
          />
          <label
            htmlFor="sananaalorder"
            className="col-span-1 font-medium text-gray-900"
          >
            الاسم              </label>
          <input
            type="text"
            id="sananaalorder"
            className="block col-span-6 p-1 ml-1 text-sm text-center text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
            required
          />
          <label htmlFor="momayez" className="mx-2 font-medium text-gray-900">
            المميز
          </label>
          <select

            name="MIL_NO_FLAG"
            id="momayez"
            className="text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
          >

            <option value="N">شرف</option>
            <option value="R">احتياط</option>
            <option value="A">مكلف</option>
            <option value="S">
              عامل/فنى
            </option>
          </select>
        </div>
        <div className="grid grid-cols-12 col-span-12 p-1 ">
          <label
            htmlFor="sananaalorder"
            className="col-span-1 font-medium text-gray-900"
          >
            المكن              </label>
          <input
            type="text"
            id="sananaalorder"
            className="block col-span-5 p-1 ml-1 text-sm text-center text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
            required
          />

        </div>
        <div className="grid grid-cols-12 col-span-12 p-1 ">
          <label
            htmlFor="sananaalorder"
            className="col-span-1 font-medium text-gray-900"
          >
            الوحدة              </label>
          <input
            type="text"
            id="sananaalorder"
            className="block col-span-5 p-1 ml-1 text-sm text-center text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
            required
          />

        </div>
        <div className="grid grid-cols-12 col-span-12 p-1 ">
          <div className="col-span-3" />
          <button type="button" className="h-full col-span-2 p-2 px-5 text-xs font-medium text-center text-green-700 border border-green-700 rounded-lg outline-none hover:text-white hover:bg-green-800 hover:border-green-200 "> إستعلام</button>
          <div className="col-span-1" />
          <button type="button" className="h-full col-span-2 p-2 px-5 text-xs font-medium text-center text-green-700 border border-green-700 rounded-lg outline-none hover:text-white hover:bg-green-800 hover:border-green-200 ">  إستعلام جديد</button>
        </div>
        <div className="grid grid-cols-12 col-span-12 p-1 ">
          <label
            htmlFor="sananaalorder"
            className="col-span-1 font-medium text-gray-900"
          >
            تاريخ التنفيذ              </label>
          <input
            type="text"
            id="sananaalorder"
            className="block col-span-2 p-1 ml-1 text-sm text-center text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
            required
          />
        </div>
        <div className="grid grid-cols-12 col-span-12 p-1 ">
          <button type="button" className="h-full col-span-2 p-2 px-5 text-xs font-medium text-center text-green-700 border border-green-700 rounded-lg outline-none hover:text-white hover:bg-green-800 hover:border-green-200 "> سبب العودة </button>
          <div className="col-span-1" />
          <input
            type="text"
            id="sananaalorder"
            className="block col-span-9 p-1 ml-1 text-sm text-center text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
            required
          />

        </div>
        <div className="grid grid-cols-12 col-span-12 p-1 ">
          <button type="button" className="h-full col-span-2 p-2 px-5 text-xs font-medium text-center text-green-700 border border-green-700 rounded-lg outline-none hover:text-white hover:bg-green-800 hover:border-green-200 "> الدولة </button>
          <div className="col-span-1" />
          <input
            type="text"
            id="sananaalorder"
            className="block col-span-9 p-1 ml-1 text-sm text-center text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
            required
          />

        </div>
        <div className="grid grid-cols-12 col-span-12 p-1 ">
          <button type="button" className="h-full col-span-2 p-2 px-5 text-xs font-medium text-center text-green-700 border border-green-700 rounded-lg outline-none hover:text-white hover:bg-green-800 hover:border-green-200 "> الوحدة </button>
          <div className="col-span-1" />
          <input
            type="text"
            id="sananaalorder"
            className="block col-span-9 p-1 ml-1 text-sm text-center text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
            required
          />

        </div>
        <div className="grid grid-cols-12 col-span-12 p-1 ">
          <div className="col-span-1" />
          <button type="button" className="h-full col-span-2 p-1 px-5 text-xs font-medium text-center text-green-700 border border-green-700 rounded-lg outline-none hover:text-white hover:bg-green-800 hover:border-green-200 "> حفظ </button>
          <div className="col-span-1" />
          <button type="button" className="h-full col-span-2 p-1 px-5 text-xs font-medium text-center text-green-700 border border-green-700 rounded-lg outline-none hover:text-white hover:bg-green-800 hover:border-green-200 "> تعديل </button>
          <div className="col-span-1" />
          <button type="button" className="h-full col-span-2 p-1 px-5 text-xs font-medium text-center text-green-700 border border-green-700 rounded-lg outline-none hover:text-white hover:bg-green-800 hover:border-green-200 "> حذف </button>
          <div className="col-span-1" />
          <button type="button" className="h-full col-span-2 p-1 px-5 text-xs font-medium text-center text-green-700 border border-green-700 rounded-lg outline-none hover:text-white hover:bg-green-800 hover:border-green-200 "> خروج </button>


        </div>

      </div>
        </div>
        <div className="grid grid-cols-12 col-span-12 tab-content" style={{ display: activeTab === 'تمثيل ' ? 'block' : 'none' }}>
        <div className="grid grid-cols-12 col-span-12 p-1 ">
        <div className="grid grid-cols-12 col-span-12 p-1 ">
          <label htmlFor="momayez" className="mx-2 font-medium text-gray-900">
            الكادر
          </label>
          <select

            name="MIL_NO_FLAG"
            id="momayez"
            className="text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
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
            اقدمية               </label>
          <input
            type="text"
            id="sananaalorder"
            className="block col-span-2 p-1 ml-1 text-sm text-center text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
            required
          />
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
            ت ش               </label>
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
            className="col-span-1 font-medium text-gray-900"
          >
            ت ش               </label>
          <input
            type="text"
            id="sananaalorder"
            className="block col-span-2 p-1 ml-1 text-sm text-center text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
            required
          />
          <label
            htmlFor="sananaalorder"
            className="col-span-1 font-medium text-gray-900"
          >
            الاسم              </label>
          <input
            type="text"
            id="sananaalorder"
            className="block col-span-6 p-1 ml-1 text-sm text-center text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
            required
          />
          <label htmlFor="momayez" className="mx-2 font-medium text-gray-900">
            المميز
          </label>
          <select

            name="MIL_NO_FLAG"
            id="momayez"
            className="text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
          >

            <option value="N">شرف</option>
            <option value="R">احتياط</option>
            <option value="A">مكلف</option>
            <option value="S">
              عامل/فنى
            </option>
          </select>
        </div>
        <div className="grid grid-cols-12 col-span-12 p-1 ">
          <label
            htmlFor="sananaalorder"
            className="col-span-1 font-medium text-gray-900"
          >
            المكان              </label>
          <input
            type="text"
            id="sananaalorder"
            className="block col-span-5 p-1 ml-1 text-sm text-center text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
            required
          />

        </div>
        <div className="grid grid-cols-12 col-span-12 p-1 ">
          <label
            htmlFor="sananaalorder"
            className="col-span-1 font-medium text-gray-900"
          >
            الوحدة              </label>
          <input
            type="text"
            id="sananaalorder"
            className="block col-span-5 p-1 ml-1 text-sm text-center text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
            required
          />

        </div>
        <div className="grid grid-cols-12 col-span-12 p-1 ">
          <div className="col-span-3" />
          <button type="button" className="h-full col-span-2 p-2 px-5 text-xs font-medium text-center text-green-700 border border-green-700 rounded-lg outline-none hover:text-white hover:bg-green-800 hover:border-green-200 "> إستعلام</button>
          <div className="col-span-1" />
          <button type="button" className="h-full col-span-2 p-2 px-5 text-xs font-medium text-center text-green-700 border border-green-700 rounded-lg outline-none hover:text-white hover:bg-green-800 hover:border-green-200 ">  إستعلام جديد</button>
        </div>
        <div className="grid grid-cols-12 col-span-12 p-1 ">
          <label
            htmlFor="sananaalorder"
            className="col-span-1 font-medium text-gray-900"
          >
            تاريخ التنفيذ              </label>
          <input
            type="text"
            id="sananaalorder"
            className="block col-span-2 p-1 ml-1 text-sm text-center text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
            required
          />
        </div>
        <div className="grid grid-cols-12 col-span-12 p-1 ">
          <button type="button" className="h-full col-span-2 p-2 px-5 text-xs font-medium text-center text-green-700 border border-green-700 rounded-lg outline-none hover:text-white hover:bg-green-800 hover:border-green-200 "> الجهة  </button>
          <div className="col-span-1" />
          <input
            type="text"
            id="sananaalorder"
            className="block col-span-9 p-1 ml-1 text-sm text-center text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
            required
          />

        </div>
        <div className="grid grid-cols-12 col-span-12 p-1 ">
          <button type="button" className="h-full col-span-2 p-2 px-5 text-xs font-medium text-center text-green-700 border border-green-700 rounded-lg outline-none hover:text-white hover:bg-green-800 hover:border-green-200 "> المدينة </button>
          <div className="col-span-1" />
          <input
            type="text"
            id="sananaalorder"
            className="block col-span-9 p-1 ml-1 text-sm text-center text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
            required
          />

        </div>
        <div className="grid grid-cols-12 col-span-12 p-1 ">
          <button type="button" className="h-full col-span-2 p-2 px-5 text-xs font-medium text-center text-green-700 border border-green-700 rounded-lg outline-none hover:text-white hover:bg-green-800 hover:border-green-200 "> الوظيفة </button>
          <div className="col-span-1" />
          <input
            type="text"
            id="sananaalorder"
            className="block col-span-9 p-1 ml-1 text-sm text-center text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
            required
          />

        </div>
        <div className="grid grid-cols-12 col-span-12 p-1 ">
          <div className="col-span-1" />
          <button type="button" className="h-full col-span-2 p-1 px-5 text-xs font-medium text-center text-green-700 border border-green-700 rounded-lg outline-none hover:text-white hover:bg-green-800 hover:border-green-200 "> حفظ </button>
          <div className="col-span-1" />
          <button type="button" className="h-full col-span-2 p-1 px-5 text-xs font-medium text-center text-green-700 border border-green-700 rounded-lg outline-none hover:text-white hover:bg-green-800 hover:border-green-200 "> تعديل </button>
          <div className="col-span-1" />
          <button type="button" className="h-full col-span-2 p-1 px-5 text-xs font-medium text-center text-green-700 border border-green-700 rounded-lg outline-none hover:text-white hover:bg-green-800 hover:border-green-200 "> حذف </button>
          <div className="col-span-1" />
          <button type="button" className="h-full col-span-2 p-1 px-5 text-xs font-medium text-center text-green-700 border border-green-700 rounded-lg outline-none hover:text-white hover:bg-green-800 hover:border-green-200 "> خروج </button>


        </div>

      </div>

        </div>
        <div className="grid grid-cols-12 col-span-12 tab-content" style={{ display: activeTab === 'أعارة' ? 'block' : 'none' }}>
        <div className="grid grid-cols-12 col-span-12 p-1 ">
        <div className="grid grid-cols-12 col-span-12 p-1 ">
          <label htmlFor="momayez" className="mx-2 font-medium text-gray-900">
            الكادر
          </label>
          <select

            name="MIL_NO_FLAG"
            id="momayez"
            className="text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
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
            اقدمية               </label>
          <input
            type="text"
            id="sananaalorder"
            className="block col-span-2 p-1 ml-1 text-sm text-center text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
            required
          />
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
            ت ش               </label>
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
            className="col-span-1 font-medium text-gray-900"
          >
            ت ش               </label>
          <input
            type="text"
            id="sananaalorder"
            className="block col-span-2 p-1 ml-1 text-sm text-center text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
            required
          />
          <label
            htmlFor="sananaalorder"
            className="col-span-1 font-medium text-gray-900"
          >
            الاسم              </label>
          <input
            type="text"
            id="sananaalorder"
            className="block col-span-6 p-1 ml-1 text-sm text-center text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
            required
          />
          <label htmlFor="momayez" className="mx-2 font-medium text-gray-900">
            المميز
          </label>
          <select

            name="MIL_NO_FLAG"
            id="momayez"
            className="text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
          >

            <option value="N">شرف</option>
            <option value="R">احتياط</option>
            <option value="A">مكلف</option>
            <option value="S">
              عامل/فنى
            </option>
          </select>
        </div>
        <div className="grid grid-cols-12 col-span-12 p-1 ">
          <label
            htmlFor="sananaalorder"
            className="col-span-1 font-medium text-gray-900"
          >
            المكان              </label>
          <input
            type="text"
            id="sananaalorder"
            className="block col-span-5 p-1 ml-1 text-sm text-center text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
            required
          />

        </div>
        <div className="grid grid-cols-12 col-span-12 p-1 ">
          <label
            htmlFor="sananaalorder"
            className="col-span-1 font-medium text-gray-900"
          >
            الوحدة              </label>
          <input
            type="text"
            id="sananaalorder"
            className="block col-span-5 p-1 ml-1 text-sm text-center text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
            required
          />

        </div>
        <div className="grid grid-cols-12 col-span-12 p-1 ">
          <div className="col-span-3" />
          <button type="button" className="h-full col-span-2 p-2 px-5 text-xs font-medium text-center text-green-700 border border-green-700 rounded-lg outline-none hover:text-white hover:bg-green-800 hover:border-green-200 "> إستعلام</button>
          <div className="col-span-1" />
          <button type="button" className="h-full col-span-2 p-2 px-5 text-xs font-medium text-center text-green-700 border border-green-700 rounded-lg outline-none hover:text-white hover:bg-green-800 hover:border-green-200 ">  إستعلام جديد</button>
        </div>
        <div className="grid grid-cols-12 col-span-12 p-1 ">
          <label
            htmlFor="sananaalorder"
            className="col-span-1 font-medium text-gray-900"
          >
            تاريخ التنفيذ              </label>
          <input
            type="text"
            id="sananaalorder"
            className="block col-span-2 p-1 ml-1 text-sm text-center text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
            required
          />
        </div>
        <div className="grid grid-cols-12 col-span-12 p-1 ">
          <button type="button" className="h-full col-span-2 p-2 px-5 text-xs font-medium text-center text-green-700 border border-green-700 rounded-lg outline-none hover:text-white hover:bg-green-800 hover:border-green-200 "> جهة الإعارة  </button>
          <div className="col-span-1" />
          <input
            type="text"
            id="sananaalorder"
            className="block col-span-9 p-1 ml-1 text-sm text-center text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
            required
          />

        </div>
        <div className="grid grid-cols-12 col-span-12 p-1 ">
          <button type="button" className="h-full col-span-2 p-2 px-5 text-xs font-medium text-center text-green-700 border border-green-700 rounded-lg outline-none hover:text-white hover:bg-green-800 hover:border-green-200 "> الدولة </button>
          <div className="col-span-1" />
          <input
            type="text"
            id="sananaalorder"
            className="block col-span-9 p-1 ml-1 text-sm text-center text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
            required
          />

        </div>
        <div className="grid grid-cols-12 col-span-12 p-1 ">
          <div className="col-span-1" />
          <button type="button" className="h-full col-span-2 p-1 px-5 text-xs font-medium text-center text-green-700 border border-green-700 rounded-lg outline-none hover:text-white hover:bg-green-800 hover:border-green-200 "> حفظ </button>
          <div className="col-span-1" />
          <button type="button" className="h-full col-span-2 p-1 px-5 text-xs font-medium text-center text-green-700 border border-green-700 rounded-lg outline-none hover:text-white hover:bg-green-800 hover:border-green-200 "> تعديل </button>
          <div className="col-span-1" />
          <button type="button" className="h-full col-span-2 p-1 px-5 text-xs font-medium text-center text-green-700 border border-green-700 rounded-lg outline-none hover:text-white hover:bg-green-800 hover:border-green-200 "> حذف </button>
          <div className="col-span-1" />
          <button type="button" className="h-full col-span-2 p-1 px-5 text-xs font-medium text-center text-green-700 border border-green-700 rounded-lg outline-none hover:text-white hover:bg-green-800 hover:border-green-200 "> خروج </button>


        </div>

      </div>
        </div>
      </div>
    </>
  );
}
export default Edkhal4;
