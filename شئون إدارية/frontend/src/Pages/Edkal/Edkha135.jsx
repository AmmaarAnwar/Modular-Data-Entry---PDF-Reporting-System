function Edkhal35() {
  return (
    <>
      <div className="text-center pb-3 font-black text-gray-900 text-4xl dark:text-white">
        <p>تعديل الرتبة من/إلى</p>
      </div>
      <div className="flex justify-start align-middle m-1">
        <label htmlFor="ٌRotba" className="mx-2 font-medium text-gray-900">
          من رقم
        </label>
        <input
          name="ٌRotba"
          // value={values.RANK_NAME}
          onChange={(ele) => {
            handleChange(ele)
          }}
          type="text"
          id="ٌRotba"
          className="mil_no bg-gray-50 border p-1 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  "
          placeholder=""
          required
        />
        <div className="flex justify-start align-middle m-1">
          <label htmlFor="selah" className="mx-2 font-medium text-gray-900">
            الى رقم
          </label>
          <input
            name="selah"
            // value={values.CORP_NAME}
            onChange={(ele) => {
              handleChange(ele)
            }}
            type="text"
            id="selah"
            className="mil_no bg-gray-50 border p-1 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  "
            placeholder=""
            required
          />
        </div>
      </div>
      <div className="flex justify-start align-middle m-1">
        <label htmlFor="ٌRotba" className="mx-2 font-medium text-gray-900">
          كود الرتبة
        </label>
        <input
          name="ٌRotba"
          // value={values.RANK_NAME}
          onChange={(ele) => {
            handleChange(ele)
          }}
          type="text"
          id="ٌRotba"
          className="mil_no bg-gray-50 border p-1 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  "
          placeholder=""
          required
        />
        <div className="flex justify-start align-middle m-1">
          <label htmlFor="selah" className="mx-2 font-medium text-gray-900">
            تاريخ الترقى
          </label>
          <input
            name="selah"
            // value={values.CORP_NAME}
            onChange={(ele) => {
              handleChange(ele)
            }}
            type="text"
            id="selah"
            className="mil_no bg-gray-50 border p-1 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  "
            placeholder=""
            required
          />
        </div>
      </div>
      <div className="flex justify-start align-middle m-1">
        <label htmlFor="ٌRotba" className="mx-2 font-medium text-gray-900">
          رقم النشرة
        </label>
        <input
          name="ٌRotba"
          // value={values.RANK_NAME}
          onChange={(ele) => {
            handleChange(ele)
          }}
          type="text"
          id="ٌRotba"
          className="mil_no bg-gray-50 border p-1 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  "
          placeholder=""
          required
        />
        <div className="flex justify-start align-middle m-1">
          <label htmlFor="selah" className="mx-2 font-medium text-gray-900">
            سنة النشرة
          </label>
          <input
            name="selah"
            // value={values.CORP_NAME}
            onChange={(ele) => {
              handleChange(ele)
            }}
            type="text"
            id="selah"
            className="mil_no bg-gray-50 border p-1 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  "
            placeholder=""
            required
          />
        </div>
      </div>
      {/* <div className="flex justify-start align-middle m-1">
        <label htmlFor="ٌRotba" className="mx-2 font-medium text-gray-900">
          تاريخ الترقى
        </label>
        <input
          name="ٌRotba"
          // value={values.RANK_NAME}
          onChange={(ele) => {
            handleChange(ele)
          }} 
          type="text"
          id="ٌRotba"
          className="mil_no bg-gray-50 border p-1 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  "
          placeholder=""
          required
        />
      </div> */}
    </>
  );
}
export default Edkhal35;
