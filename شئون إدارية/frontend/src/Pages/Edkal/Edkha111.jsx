function Edkhal11() {
  return (
    <>
      <div className="pb-3 text-4xl font-black text-center text-gray-900 dark:text-white">
        <p>حاله صحية</p>
      </div>
      <div className="grid grid-cols-12 col-span-12 p-1 ">

        <div className="grid grid-cols-12 col-span-12 p-1 ">
          <div className="col-span-5"></div>
          <button type="button" className="h-full col-span-1 p-2 px-5 text-xs font-medium text-center text-green-700 border border-green-700 rounded-lg outline-none hover:text-white hover:bg-green-800 hover:border-green-200 ">قرارات الإصابة</button>
        </div>
        <div className="grid grid-cols-12 col-span-12 p-1 ">

          <label htmlFor="momayez" className="col-span-2 mx-2 font-medium text-gray-900">
            المميز ت ش
          </label>
          <select
            // defaultValue={values.MIL_NO_FLAG ?? "N"}
            // value={values.MIL_NO_FLAG ?? "N"}
            onChange={(ele) => {
              handleChange(ele)
            }}
            name="MIL_NO_FLAG"
            id="momayez"
            className="col-span-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
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
            className="col-span-2 font-medium text-gray-900"
          >
            تحقيق الشخصية                   </label>
          <input
            type="text"
            id="sananaalorder"
            className="block col-span-2 p-1 ml-1 text-sm text-center text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
            required
          />


          <div className="col-span-1"></div>
          <button type="button" className="h-full col-span-1 p-2 px-5 text-xs font-medium text-center text-green-700 border border-green-700 rounded-lg outline-none hover:text-white hover:bg-green-800 hover:border-green-200 ">خروج</button>
        </div>
        <div className="grid grid-cols-12 col-span-12 p-1 ">
          <label
            htmlFor="sananaalorder"
            className="col-span-2 font-medium text-gray-900"
          >
            رقم الاقدمية                  </label>
          <input
            type="text"
            id="sananaalorder"
            className="block col-span-2 p-1 ml-1 text-sm text-center text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
            required
          />
          <input
            type="text"
            id="sananaalorder"
            className="block col-span-2 p-1 ml-1 text-sm text-center text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
            required
          />
          <input
            type="text"
            id="sananaalorder"
            className="block col-span-2 p-1 ml-1 text-sm text-center text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
            required
          />
          <input
            type="text"
            id="sananaalorder"
            className="block col-span-2 p-1 ml-1 text-sm text-center text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
            required
          />

          <select
            // defaultValue={values.MIL_NO_FLAG ?? "N"}
            // value={values.MIL_NO_FLAG ?? "N"}
            onChange={(ele) => {
              handleChange(ele)
            }}
            name="MIL_NO_FLAG"
            id="momayez"
            className="col-span-1 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
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
            className="col-span-2 font-medium text-gray-900"
          >
            الفئة                  </label>
          <input
            type="text"
            id="sananaalorder"
            className="block col-span-2 p-1 ml-1 text-sm text-center text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
            required
          />
          <label
            htmlFor="sananaalorder"
            className="col-span-2 font-medium text-gray-900"
          >
            النوع                 </label>
          <input
            type="text"
            id="sananaalorder"
            className="block col-span-2 p-1 ml-1 text-sm text-center text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
            required
          />
          <label
            htmlFor="sananaalorder"
            className="col-span-2 font-medium text-gray-900"
          >
            ت.الالتحاق                 </label>
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
            الاسم                  </label>
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
            رقم التصديق                  </label>
          <input
            type="text"
            id="sananaalorder"
            className="block col-span-1 p-1 ml-1 text-sm text-center text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
            required
          />
          <label
            htmlFor="sananaalorder"
            className="col-span-2 font-medium text-gray-900"
          >
            سنة التصديق                  </label>
          <input
            type="text"
            id="sananaalorder"
            className="block col-span-1 p-1 ml-1 text-sm text-center text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
            required
          />
          <label
            htmlFor="sananaalorder"
            className="col-span-2 font-medium text-gray-900"
          >
            ت. التصديق                  </label>
          <input
            type="text"
            id="sananaalorder"
            className="block col-span-1 p-1 ml-1 text-sm text-center text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
            required
          />
          <label
            htmlFor="sananaalorder"
            className="col-span-2 font-medium text-gray-900"
          >
            سبب التصديق                  </label>
          <select
            // defaultValue={values.MIL_NO_FLAG ?? "N"}
            // value={values.MIL_NO_FLAG ?? "N"}
            onChange={(ele) => {
              handleChange(ele)
            }}
            name="MIL_NO_FLAG"
            id="momayez"
            className="col-span-1 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
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
            className="col-span-2 font-medium text-gray-900"
          >
            ت.العرض                 </label>
          <input
            type="text"
            id="sananaalorder"
            className="block col-span-1 p-1 ml-1 text-sm text-center text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
            required
          />
          <label
            htmlFor="sananaalorder"
            className="col-span-2 font-medium text-gray-900"
          >
            التشخيص                </label>
          <input
            type="text"
            id="sananaalorder"
            className="block col-span-1 p-1 ml-1 text-sm text-center text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
            required
          />
          <button type="button" className="h-full col-span-1 p-2 px-5 text-xs font-medium text-center text-green-700 border border-green-700 rounded-lg outline-none hover:text-white hover:bg-green-800 hover:border-green-200 ">الامراض</button>


        </div>
        <div className="grid grid-cols-12 col-span-12 p-1 ">


          <label
            htmlFor="sananaalorder"
            className="col-span-2 font-medium text-gray-900"
          >
            قرار اللجنة                </label>
          <select
            // defaultValue={values.MIL_NO_FLAG ?? "N"}
            // value={values.MIL_NO_FLAG ?? "N"}
            onChange={(ele) => {
              handleChange(ele)
            }}
            name="MIL_NO_FLAG"
            id="momayez"
            className="col-span-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
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
            className="col-span-2 font-medium text-gray-900"
          >
            قرار على الكسب               </label>
          <select
            // defaultValue={values.MIL_NO_FLAG ?? "N"}
            // value={values.MIL_NO_FLAG ?? "N"}
            onChange={(ele) => {
              handleChange(ele)
            }}
            name="MIL_NO_FLAG"
            id="momayez"
            className="col-span-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
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
            className="col-span-2 font-medium text-gray-900"
          >
            درجه العجز               </label>
          <select
            // defaultValue={values.MIL_NO_FLAG ?? "N"}
            // value={values.MIL_NO_FLAG ?? "N"}
            onChange={(ele) => {
              handleChange(ele)
            }}
            name="MIL_NO_FLAG"
            id="momayez"
            className="col-span-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
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
            className="col-span-2 font-medium text-gray-900"
          >
            رقم اللجنة                </label>
          <input
            type="text"
            id="sananaalorder"
            className="block col-span-1 p-1 ml-1 text-sm text-center text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
            required
          />
          <label
            htmlFor="sananaalorder"
            className="col-span-2 font-medium text-gray-900"
          >
            سنة اللجنة             </label>
          <input
            type="text"
            id="sananaalorder"
            className="block col-span-1 p-1 ml-1 text-sm text-center text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
            required
          />
          <label
            htmlFor="sananaalorder"
            className="col-span-2 font-medium text-gray-900"
          >
            ت.اللجنة              </label>
          <input
            type="text"
            id="sananaalorder"
            className="block col-span-1 p-1 ml-1 text-sm text-center text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
            required
          />
          <button type="button" className="h-full col-span-1 p-2 px-5 text-xs font-medium text-center text-green-700 border border-green-700 rounded-lg outline-none hover:text-white hover:bg-green-800 hover:border-green-200 ">إنشاء اللجنة </button>
          <div className="col-span-1" />
          <button type="button" className="h-full col-span-1 p-2 px-5 text-xs font-medium text-center text-green-700 border border-green-700 rounded-lg outline-none hover:text-white hover:bg-green-800 hover:border-green-200 "> قرار السببية</button>



        </div>
        <div className="grid grid-cols-12 col-span-12 p-1 ">


          <label
            htmlFor="sananaalorder"
            className="col-span-2 font-medium text-gray-900"
          >
            نوع اللجنة                </label>
          <select
            // defaultValue={values.MIL_NO_FLAG ?? "N"}
            // value={values.MIL_NO_FLAG ?? "N"}
            onChange={(ele) => {
              handleChange(ele)
            }}
            name="MIL_NO_FLAG"
            id="momayez"
            className="col-span-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
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
            className="col-span-2 font-medium text-gray-900"
          >
            مسلسل ال..... باللجنة               </label>
          <input
            type="text"
            id="sananaalorder"
            className="block col-span-2 p-1 ml-1 text-sm text-center text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
            required
          />
          <label
            htmlFor="sananaalorder"
            className="col-span-2 font-medium text-gray-900"
          >
            ت تسجيل لل.... س               </label>
          <input
            type="text"
            id="sananaalorder"
            className="block col-span-2 p-1 ml-1 text-sm text-center text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
            required
          />
        </div>
      </div>
    </>
  );
}
export default Edkhal11;
