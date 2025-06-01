import axios from "axios";
import { useState, useEffect } from "react";
function PopUp6(props) {
    const [hide, setHide] = useState(true);
    const [pop6Values, setPop6Values] = useState({
        BUL_NO: "",
        BUL_YEAR: "",
        DATE0: "",

    });

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
        let value = ele.target.value;
        if (name == "DATE0") {
            value = new Date(value).toLocaleDateString('en-CA')
        }
        setPop6Values((values) => ({
            ...values,
            [name]: value,
        }));
    };
    useEffect(() => {
        if (props.Data) {
            setPop6Values({
                BUL_YEAR: props.Data.BUL_YEAR_A7 || "",
                BUL_NO: props.Data.BUL_NO_A7 || "",
                DATE0: props.Data.DATE0_A7 || "",
                MIL_NO: props.Data.MIL_NO || "",
                MIL_NO_FLAG: props.Data.MIL_NO_FLAG || "",
                warning: false,
                msg: ""
            });
        }
    }, [props.Data]);
    return (
        <>
            <button
                onClick={async () => {
                    setHide(!hide);
                }}
                data-modal-target="authentication-modal" data-modal-toggle="authentication-modal" className="block w-full my-1 text-sm font-medium text-center text-black rounded-lg outline-0 " type="button">
                 ترقية
            </button>
            <div id="authentication-modal" tabIndex="5" aria-hidden="true" className={`${hide && "hidden"} z-[1] bg-gray-500/50  left-0 top-0 overflow-y-auto  flex fixed z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] h-full`}>
                <div className="relative p-4 w-full max-w-fit max-h-full z-[2] ">
                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        <div className="flex items-center justify-between p-4 bg-blue-700 border-b rounded-t md:p-5 dark:border-gray-600">
                            <h3 className="text-xl font-semibold text-white text-gray-900">
                                اركان حرب
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
                        {pop6Values.warning && (
                            <div class="flex items-center p-1 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                                <svg class="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                                </svg>
                                <span class="sr-only"></span>
                                <span class="font-medium">هذه رسالة تحذير</span>
                                &nbsp;
                                &#160;
                                {pop6Values.msg}
                                &nbsp;
                                &#160;
                                <div className="flex">
                                    <button onClick={async () => {
                                        // setFree()
                                        setPop6Values((values) => ({
                                            ...pop6Values,
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
                        <div className="grid grid-cols-6 gap-2 p-4 md:p-5">
                            <label htmlFor="h7sol_date" className="block col-span-2 m-2 text-sm font-medium text-gray-900 dark:text-white"> تاريخ الحصول   </label>
                            <input name="DATE0" type="date"
                                value={pop6Values.DATE0 ? parseDate(pop6Values.DATE0).toLocaleDateString('en-CA') : ""}
                                onChange={handleChange}
                                id="h7sol_date" className="w-full col-span-4 bg-gray-50  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" />

                            <label htmlFor="nashra_number" className="block col-span-2 m-2 text-sm font-medium text-gray-900 dark:text-white">رقم النشرة   </label>
                            <input name="BUL_NO"
                                id="nashra_number"
                                value={pop6Values.BUL_NO}
                                onChange={handleChange}
                                className="col-span-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="رقم النشرة " />

                            <label htmlFor="nashra__year" className="block col-span-2 m-2 text-sm font-medium text-gray-900 dark:text-white">سنه النشرة   </label>
                            <input name="BUL_YEAR"
                                id="nashra__year"
                                value={pop6Values.BUL_YEAR}
                                onChange={handleChange}
                                className="col-span-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="سنه النشرة " />
                        </div>

                        <div className="flex justify-end p-2 m-4 mt-0">
                            <button
                                onClick={async () => {
                                    try {
                                        const response = await axios.post(`http://30.30.30.53:3000/edkhal/edkhal1/popup6`, {
                                            BUL_YEAR: pop6Values.BUL_YEAR || "",
                                            BUL_NO: pop6Values.BUL_NO || "",
                                            DATE0:pop6Values.DATE0 || "",
                                            MIL_NO: pop6Values.MIL_NO || "",
                                            MIL_NO_FLAG: pop6Values.MIL_NO_FLAG || ""
                                        });
                                        if (response.data.msg) {
                                            setPop6Values((pop6Values) => ({
                                                ...pop6Values,
                                                warning: true,
                                                msg: response.data.msg,
                                            }))
                                        }
                                        console.log(response);
                                    } catch (error) {
                                        if (error.response.data.errors != undefined) {
                                            const errorList = Object.keys(error.response.data.errors)
                                            let allInOneMessage = ""
                                            for (let index = 0; index < errorList.length; index++) {
                                                const element = errorList[index];
                                                allInOneMessage = allInOneMessage + error.response.data.errors[`${element}`] + "///"
                                            }
                                            setPop6Values({
                                                ...pop6Values,
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
export default PopUp6;
