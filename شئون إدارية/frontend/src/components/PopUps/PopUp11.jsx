import axios from "axios";
import { useState, useEffect } from "react";
function PopUp11(props) {
    const [hide, setHide] = useState(true);
    const [pop11Values, setPop11Values] = useState({
        MIL_NO: "",
        MIL_NO_FLAG: "",
        COMM_DATE_FROM_TAS: "",
        COMM_DATE_TO_TAS: "",
        APP_START_DATE_TAS: "",
        APP_END_DATE_TAS: "",
        APPROVAL_SUMMARY_TAS: "",
        APPROVAL_TYPE_TAS: "",
        BUL_NO_TAS: "",
        BUL_YEAR_TAS: "",
        warning: false,
        msg: ""
    });

    window.onkeydown = (event) => {
        if (event.keyCode === 27) setHide(true);
    };

    const parseDate = (dateString) => {
        const date = new Date(dateString);
        return isNaN(date) ? new Date() : date;
    };

    const handleChange = (ele) => {
        const name = ele.target.name;
        const value = ele.target.value;
        setPop11Values((values) => ({
            ...values,
            [name]: value,
        }));
    };
    useEffect(() => {
        if (props.Data) {
            setPop11Values({
                MIL_NO: props.Data.MIL_NO || "",
                MIL_NO_FLAG: props.Data.MIL_NO_FLAG || "",
                COMM_DATE_FROM_TAS: props.Data.COMM_DATE_FROM_TAS || "",
                COMM_DATE_TO_TAS: props.Data.COMM_DATE_TO_TAS || "",
                APP_START_DATE_TAS: props.Data.APP_START_DATE_TAS || "",
                APP_END_DATE_TAS: props.Data.APP_END_DATE_TAS || "",
                APPROVAL_SUMMARY_TAS: props.Data.APPROVAL_SUMMARY_TAS || "",
                APPROVAL_TYPE_TAS: props.Data.APPROVAL_TYPE_TAS || "",
                BUL_NO_TAS: props.Data.BUL_NO_TAS || "",
                BUL_YEAR_TAS: props.Data.BUL_YEAR_TAS || "",
            });
        }
    }, [props.Data]);

    return (
        <>
            <button
                onClick={async () => {
                    setHide(!hide);
                }}
                data-modal-target="authentication-modal" data-modal-toggle="authentication-modal" className="text-sm block text-black font-medium rounded-lg w-full  my-1 text-center outline-0 " type="button">
                التصديقات
            </button>
            <div id="authentication-modal" tabIndex="5" aria-hidden="true" className={`${hide && "hidden"} z-[1] bg-gray-500/50  left-0 top-0 overflow-y-auto  flex fixed z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] h-full`}>
                <div className="relative p-4 w-full max-w-fit max-h-full z-[2] ">
                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 bg-blue-700">
                            <h3 className="text-xl font-semibold text-gray-900 text-white">
                                القرارات الخاصة بالضباط
                            </h3>
                            <button type="button"
                                onClick={() => {
                                    setHide(!hide);
                                }} className="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="authentication-modal">
                                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                </svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                        </div>
                        {pop11Values.warning && (
                            <div class="flex items-center p-1 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                                <svg class="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                                </svg>
                                <span class="sr-only"></span>
                                <span class="font-medium">هذه رسالة تحذير</span>
                                &nbsp;
                                &#160;
                                {pop11Values.msg}
                                &nbsp;
                                &#160;
                                <div className="flex">
                                    <button onClick={async () => {
                                        // setFree()
                                        setPop11Values((values) => ({
                                            ...pop11Values,
                                            warning: false,
                                            msg: ""
                                        }))
                                    }}
                                        type="button" className="text-blue-800 bg-transparent border border-blue-800 hover:bg-blue-900 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs px-3 py-1.5 text-center dark:hover:bg-blue-300 dark:border-blue-300 dark:text-blue-300 dark:hover:text-gray-800 dark:focus:ring-blue-800" data-dismiss-target="#alert-additional-content-4" aria-label="Close" >
                                        حسناً
                                    </button>
                                </div>
                            </div>
                        )}
                        <div className="p-4 md:p-5 ">
                            <div className="border-div">
                                <div>
                                    <label htmlFor="streat" className="  w-fit col-span-1 block m-2 text-sm font-medium text-gray-900">   تاريخ اللجنه  </label>
                                </div>
                                <div className=" flex justify-around items-center grid grid-cols-2 gap-2">

                                    <div className="col-span-1 flex items-center">
                                        <label className="mx-2" htmlFor="COMM_DATE_FROM_TAS">من </label>

                                        <input id="COMM_DATE_FROM_TAS" name="COMM_DATE_FROM_TAS" type="date"
                                            value={pop11Values.COMM_DATE_FROM_TAS ? parseDate(pop11Values.COMM_DATE_FROM_TAS).toLocaleDateString('en-CA') : ""}
                                            onChange={handleChange}
                                            className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="" />
                                    </div>
                                    <div className="col-span-1 flex items-center">
                                        <label className="mx-2" htmlFor="COMM_DATE_TO_TAS">الى </label>
                                        <input name="COMM_DATE_TO_TAS" type="date"
                                            value={pop11Values.COMM_DATE_TO_TAS ? parseDate(pop11Values.COMM_DATE_TO_TAS).toLocaleDateString('en-CA') : ""}
                                            onChange={handleChange}
                                            id="COMM_DATE_TO_TAS" className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="" />
                                    </div>
                                </div>
                            </div>
                            <div className="border-div">
                                <div>
                                    <label htmlFor="streat" className=" min-w-fit col-span-1 block m-2 text-sm font-medium text-gray-900">    بيان التصديق  </label>
                                </div>
                                <div className=" flex justify-around items-center grid grid-cols-2 gap-2">

                                    <div className="col-span-1 flex items-center">
                                        <label className="mx-2 min-w-fit" htmlFor="APP_START_DATE_TAS" >تاريخ بدأ</label>
                                        <input name="APP_START_DATE_TAS" type="date"
                                            value={pop11Values.APP_START_DATE_TAS ? parseDate(pop11Values.APP_START_DATE_TAS).toLocaleDateString('en-CA') : ""}
                                            onChange={handleChange}
                                            id="APP_START_DATE_TAS" className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="" />
                                    </div>
                                    <div className="col-span-1 flex items-center">
                                        <label className="mx-2 min-w-fit" htmlFor="APP_END_DATE_TAS">تاريخ النهاية</label>
                                        <input name="APP_END_DATE_TAS" type="date"
                                            value={pop11Values.APP_END_DATE_TAS ? parseDate(pop11Values.APP_END_DATE_TAS).toLocaleDateString('en-CA') : ""}
                                            onChange={handleChange}
                                            id="APP_END_DATE_TAS" className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="" />
                                    </div>
                                </div>
                            </div>
                            <div className="border-div">

                                <div>
                                    <label htmlFor="streat" className=" min-w-fit col-span-1 block m-2 text-sm font-medium text-gray-900 dark:text-white">    بيان النشرة  </label>
                                </div>
                                <div className=" flex justify-around items-center grid grid-cols-2 gap-2">

                                    <div className="col-span-1 flex items-center">
                                        <label className="mx-2 min-w-fit" htmlFor="BUL_NO_TAS"> رقم</label>
                                        <input name="BUL_NO_TAS"
                                            value={pop11Values.BUL_NO_TAS}
                                            onChange={handleChange}
                                            id="BUL_NO_TAS" className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="" />
                                    </div>
                                    <div className="col-span-1 flex items-center">
                                        <label className="mx-2 min-w-fit" htmlFor="BUL_YEAR_TAS">سنة</label>
                                        <input name="BUL_YEAR_TAS"
                                            value={pop11Values.BUL_YEAR_TAS}
                                            onChange={handleChange}
                                            id="BUL_YEAR_TAS" className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="" />
                                    </div>
                                </div>
                            </div>
                            <div className="border-div">

                                <div>
                                    <label htmlFor="streat" className=" min-w-fit col-span-1 block m-2 text-sm font-medium text-gray-900 dark:text-white">    بيان النشرة  </label>
                                </div>
                                <div className="  justify-around items-center grid grid-cols-2 gap-2">

                                    <div className="col-span-2 flex items-center">
                                        <label className="mx-2 min-w-fit" htmlFor="APPROVAL_TYPE_TAS"> نوع التصديق</label>
                                        <div className="col-span-4 w-full">
                                            <select
                                                value={pop11Values.APPROVAL_TYPE_TAS == null ? "7" : pop11Values.APPROVAL_TYPE_TAS}
                                                onChange={handleChange} name="APPROVAL_TYPE_TAS"
                                                id="APPROVAL_TYPE_TAS"
                                                className="w-full m-0 col-span-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white ">
                                                <option value="L">اجازة خاصة بدون راتب</option>
                                                <option value="C">استمرار بالخدمة</option>
                                                <option value="D">اعفاء بصفة مستديمة</option>
                                                <option value="U">تقرير عدم الصلاحية</option>
                                                <option value="R">رفض طلب الاستقالة </option>
                                                <option value="P">قرار جمهورى    </option>
                                                <option value="S">اجازة مرضية </option>
                                                <option value="7"></option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-span-2 flex items-center">
                                        <label className="mx-2 min-w-fit" htmlFor="APPROVAL_SUMMARY_TAS">ملخص التصديق</label>
                                        <input name="APPROVAL_SUMMARY_TAS"
                                            value={pop11Values.APPROVAL_SUMMARY_TAS}
                                            onChange={handleChange}
                                            id="APPROVAL_SUMMARY_TAS" className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="" />
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="flex justify-end m-4 p-2 mt-0">
                            <button
                                onClick={async () => {
                                    try {
                                        const response = await axios.post(`http://30.30.30.53:3000/edkhal/edkhal1/popup11`,
                                            {
                                                MIL_NO: pop11Values.MIL_NO,
                                                MIL_NO_FLAG: pop11Values.MIL_NO_FLAG,
                                                COMM_DATE_FROM: pop11Values.COMM_DATE_FROM_TAS,
                                                COMM_DATE_TO: pop11Values.COMM_DATE_TO_TAS,
                                                APP_START_DATE: pop11Values.APP_START_DATE_TAS,
                                                APP_END_DATE: pop11Values.APP_END_DATE_TAS,
                                                APPROVAL_SUMMARY: pop11Values.APPROVAL_SUMMARY_TAS,
                                                APPROVAL_TYPE: pop11Values.APPROVAL_TYPE_TAS,
                                                BUL_NO: pop11Values.BUL_NO_TAS,
                                                BUL_YEAR: pop11Values.BUL_YEAR_TAS,
                                            });
                                            if (response.data.msg) {
                                                setPop11Values((pop11Values) => ({
                                                  ...pop11Values,
                                                  warning: true,
                                                  msg: response.data.msg,
                                                }))
                                              }
                                    }catch (error) {
                                        if (error.response.data.errors != undefined) {
                                            const errorList = Object.keys(error.response.data.errors)
                                            let allInOneMessage = ""
                                            for (let index = 0; index < errorList.length; index++) {
                                              const element = errorList[index];
                                              allInOneMessage = allInOneMessage + error.response.data.errors[`${element}`] + "///"
                                            }
                                            setPop11Values({
                                              ...pop11Values,
                                              warning: true,
                                              msg: allInOneMessage
                                            });
                                          }
                                    }
                                }}
                                className="mt-2 w-fit right text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            >
                                تعديل
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default PopUp11;
