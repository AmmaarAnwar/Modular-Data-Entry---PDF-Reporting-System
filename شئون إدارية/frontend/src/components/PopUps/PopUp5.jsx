import axios from "axios";
import { useEffect, useState } from "react";
function PopUp5(props) {
    const [hide, setHide] = useState(true);
    window.onkeydown = (event) => {
        if (event.keyCode == 27)
            setHide(true)
    }
    const parseDate = (dateString) => {
        const date = new Date(dateString);
        return isNaN(date) ? new Date() : date;
    };
    const handleChange = (ele) => {
        const name = ele.target.name;
        const value = ele.target.value;
        setPop5Values((values) => ({
            ...values,
            [name]: value,
        }));
    };

    const handleChangeForSelectedValueForDegree = (ele) => {
        setSelectedValueForDegree(ele.target.value);
    };
    useEffect(() => {
        if (props.Data) {
            // document.getElementById('t3yyen_date') = props.Data.DATE0 || null
            // document.getElementById('rotba1') = props.Data.RANK_NO || ""
            // document.getElementById('streat') =  props.Data.STREAT_NAME || ""
            // document.getElementById('7ally') =  props.Data.STATUS || "G"
            // document.getElementById('nashra_no') =  props.Data.HIRE_BUL_NO || null
            // document.getElementById('sanf_elnashra') = props.Data.HIRE_BUL_YEAR || null
        }
    }, [props.Data]);
    const [pop5Values, setPop5Values] = useState({
        // props.Data.
        STREAT_NO: "",
        STREAT_NAME: "",
        GOVERNERATE_NO: "",
        GOVERNORATE_NAME: "",
        POLIC_SEC_NO: "",
        POLICE_SECTION_NAME: "",
        PHONE_CODE: "",
        PHONE: "",
        MOBILE_NO: "",
        A_STATUS: "#",
    });
    useEffect(() => {
        if (props.Data) {
            // setSelectedValueForDegree(props.Data.DEGREE || "N");
            setPop5Values({
                MIL_NO: props.Data.MIL_NO,
                MIL_NO_FLAG: props.Data.MIL_NO_FLAG,
                STREAT_NO: props.Data.STREAT_NO || "",
                STREAT_NAME: props.Data.STREAT_NAME || "",
                GOVERNERATE_NO: props.Data.GOVERNERATE_NO || "",
                GOVERNORATE_NAME: props.Data.GOVERNORATE_NAME || "",
                POLIC_SEC_NO: props.Data.POLIC_SEC_NO || "",
                POLICE_SECTION_NAME: props.Data.POLICE_SECTION_NAME || "",
                PHONE_CODE: props.Data.PHONE_CODE || "",
                PHONE: props.Data.PHONE || "",
                MOBILE_NO: props.Data.MOBILE_NO || "",
                STATUS: props.Data.A_STATUS || "#",
            });
        }
    }, [props.Data]);

    const policeStationNames = props.SecondInputs.policeStationNames ?? [];
    const City = props.SecondInputs.City ?? []

    return (
        <>
            <button
                onClick={async () => {
                    setHide(!hide);
                }}
                data-modal-target="authentication-modal" data-modal-toggle="authentication-modal" className="text-sm block text-black font-medium rounded-lg w-full  my-1 text-center outline-0 " type="button">
                بيانات  العنوان الحالى
            </button>
            <div id="authentication-modal" tabIndex="5" aria-hidden="true" className={`${hide && "hidden"} z-[1] bg-gray-500/50  left-0 top-0 overflow-y-auto  flex fixed z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] h-full`}>
                <div className="relative p-4 w-full max-w-fit max-h-full z-[2] ">
                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 bg-blue-700">
                            <h3 className="text-xl font-semibold text-gray-900 text-white">
                                بيانات  العنوان الحالى
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
                        {pop5Values.warning && (
                            <div class="flex items-center p-1 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                                <svg class="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                                </svg>
                                <span class="sr-only"></span>
                                <span class="font-medium">هذه رسالة تحذير</span>
                                &nbsp;
                                &#160;
                                {pop5Values.msg}
                                &nbsp;
                                &#160;
                                <div className="flex">
                                    <button onClick={async () => {
                                        // setFree()
                                        setPop5Values((values) => ({
                                            ...pop5Values,
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
                        <div className="p-4 md:p-5 grid grid-cols-6 gap-2">
                            <label htmlFor="home-num" className="col-span-2  min-w-fit block m-2 text-sm font-medium text-gray-900 dark:text-white">  رقم   </label>
                            <div className="col-span-4 flex justify-around items-center ">

                                <input name="STREAT_NO"
                                    defaultValue={pop5Values.STREAT_NO}
                                    onChange={(ele) => {
                                        handleChange(ele);
                                    }}
                                    id="home-num" className="w-[20%] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="" />
                                <label htmlFor="streat" className="col-span-2 min-w-fit  block m-2 text-sm font-medium text-gray-900 dark:text-white">  شارع   </label>

                                <input name="STREAT_NAME"
                                    defaultValue={pop5Values.STREAT_NAME}
                                    onChange={(ele) => {
                                        handleChange(ele);
                                    }}
                                    id="streat" className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="" />

                            </div>
                            <label htmlFor="mo7afza" className="col-span-2 min-w-fit  block m-2 text-sm font-medium text-gray-900 dark:text-white">  محافظة   </label>
                            <div className="col-span-4 flex justify-around items-center ">

                                <input name="GOVERNERATE_NO"
                                    defaultValue={pop5Values.GOVERNERATE_NO}
                                    onChange={(ele) => {
                                        handleChange(ele);
                                        if (ele.target.value === "")
                                            setPop5Values((values) => ({ ...values, GOVERNORATE_NAME: "" }));
                                        else {
                                            const result = City.filter(e => e.NO == ele.target.value)
                                            setPop5Values((values) => ({ ...values, GOVERNORATE_NAME: result[0]?.NAME || "هذه المحافظه غير موجوده" }));
                                        }
                                    }}
                                    id="mo7afza" className="w-[20%] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="" />

                                <input name="GOVERNORATE_NAME"
                                    value={pop5Values.GOVERNORATE_NAME}
                                    readOnly
                                    id="mo7afza2" className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="" />
                            </div>

                            <label htmlFor="kesm" className="col-span-2 min-w-fit  block m-2 text-sm font-medium text-gray-900 dark:text-white">  قسم   </label>
                            <div className="col-span-4 flex justify-around items-center ">

                                <input name="POLIC_SEC_NO"
                                    defaultValue={pop5Values.POLIC_SEC_NO}
                                    onChange={(ele) => {
                                        handleChange(ele);
                                        if (ele.target.value === "")
                                            setPop5Values((values) => ({ ...values, POLICE_SECTION_NAME: "" }));
                                        else {
                                            const result = policeStationNames.filter(e => e.NO == ele.target.value)
                                            setPop5Values((values) => ({ ...values, POLICE_SECTION_NAME: result[0]?.NAME || "هذا القسم غير موجود" }));
                                        }
                                    }}

                                    id="kesm"
                                    className="w-[20%] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="" />

                                <input name="POLICE_SECTION_NAME"
                                    value={pop5Values.POLICE_SECTION_NAME}
                                    readOnly
                                    id="kesm2"
                                    className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="" />

                            </div>
                            <label htmlFor="city-code" className="col-span-2 min-w-fit  block m-2 text-sm font-medium text-gray-900 dark:text-white">  كود المدينة   </label>
                            <div className="col-span-4 flex justify-around items-center ">

                                <input name="PHONE_CODE"
                                    defaultValue={pop5Values.PHONE_CODE}
                                    onChange={(ele) => {
                                        handleChange(ele);
                                    }}
                                    id="city-code" className="w-[20%] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="" />
                                <label htmlFor="mob-num" className="col-span-2 min-w-fit  block m-2 text-sm font-medium text-gray-900 dark:text-white">  رقم التليفون   </label>
                                <input name="PHONE"
                                    defaultValue={pop5Values.PHONE}
                                    onChange={(ele) => {
                                        handleChange(ele);
                                    }}
                                    id="mob-num" className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="" />

                            </div>
                            <label htmlFor="m7moul" className="col-span-2 min-w-fit  block m-2 text-sm font-medium text-gray-900 dark:text-white"> المحمول   </label>

                            <input name="MOBILE_NO"
                                id="m7moul"
                                defaultValue={pop5Values.MOBILE_NO}
                                onChange={(ele) => {
                                    handleChange(ele);
                                }}
                                className="col-span-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="  " />

                            <label htmlFor="7ally" className="col-span-2 min-w-fit  block m-2 text-sm font-medium text-gray-900 dark:text-white"> </label>

                            <div className="col-span-4 w-full">
                                <select
                                    defaultValue={(pop5Values.A_STATUS) || "#"}
                                    onChange={(ele) => {
                                        handleChange(ele);
                                    }}
                                    // value={props.Data.Degree ??"1"}
                                    name="STATUS"
                                    id="7ally"
                                    className="w-full m-0 col-span-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white ">
                                    <option value="C">حالى</option>
                                    <option value="P">سابق</option>
                                    <option value="#">غير محدد</option>
                                </select>
                            </div>
                        </div>
                        <div className="flex justify-end m-4 p-2 mt-0">
                            <button
                                onClick={async () => {
                                    // setHide(!hide);
                                    try {
                                        const response = await axios.post(`http://30.30.30.53:3000/edkhal/edkhal1/popup5`, {
                                            MIL_NO: pop5Values.MIL_NO,
                                            MIL_NO_FLAG: pop5Values.MIL_NO_FLAG,
                                            STREAT_NO: pop5Values.STREAT_NO,
                                            STREAT_NAME: pop5Values.STREAT_NAME,
                                            GOVERNERATE_NO: pop5Values.GOVERNERATE_NO,
                                            GOVERNORATE_NAME: pop5Values.GOVERNORATE_NAME,
                                            POLIC_SEC_NO: pop5Values.POLIC_SEC_NO,
                                            POLICE_SECTION_NAME: pop5Values.POLICE_SECTION_NAME,
                                            PHONE_CODE: pop5Values.PHONE_CODE,
                                            PHONE: pop5Values.PHONE,
                                            MOBILE_NO: pop5Values.MOBILE_NO,
                                            STATUS: pop5Values.A_STATUS || "#",
                                        });
                                        if (response.data.msg) {
                                            setPop5Values((pop5Values) => ({
                                              ...pop5Values,
                                              warning: true,
                                              msg: response.data.msg,
                                            }))
                                          }
                                    } catch (error) {
                                        if (error.response.data.errors != undefined) {
                                            const errorList = Object.keys(error.response.data.errors)
                                            let allInOneMessage = ""
                                            for (let index = 0; index < errorList.length; index++) {
                                                const element = errorList[index];
                                                allInOneMessage = allInOneMessage + error.response.data.errors[`${element}`] + "///"
                                            }
                                            setPop5Values({
                                                ...pop5Values,
                                                warning: true,
                                                msg: allInOneMessage
                                            });
                                        }
                                    }
                                }}
                                className="mt-2 w-fit right text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">تعديل</button>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}
export default PopUp5;
