import { useState, useEffect } from "react";
import axios from "axios";
function PopUp10(props) {
    const [selectedValueForDegree, setSelectedValueForDegree] = useState("N"); // State variable for the selected value
    const [hide, setHide] = useState(true);
    const [pop10Values, setPop10Values] = useState({
        E_SERV_REASON_NO_BEF_AWDA: "",
        E_SERV_REASON_NAME_BEF_AWDA: "",
        DATE0_AWDA: "",
        DECISION_NO_AWDA: "",
        DECISION_DATE_AWDA: "",
        BUL_NO_AWDA: "",
        BUL_YEAR_AWDA: "",
        END_SERV_DATE_AWDA: "",
        END_SERV_DATE_BEF_AWDA: "",
        E_SERV_REASON_NO_AWDA: "",
        E_SERV_REASON_NAME_AWDA: "",
        BUL_NO_BEF_AWDA: "",
        BUL_YEAR_BEF_AWDA: "",
        NOTES_AWDA: "",
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
        setPop10Values((values) => ({
            ...values,
            [name]: value,
        }));
    };


    const reasonNames = props.SecondInputs.reasonNames ?? [];
    useEffect(() => {
        if (props.Data) {
            setPop10Values({
                MIL_NO: props.Data.MIL_NO,
                MIL_NO_FLAG: props.Data.MIL_NO_FLAG,
                E_SERV_REASON_NO_BEF_AWDA: props.Data.E_SERV_REASON_NO_BEF_AWDA || "",
                E_SERV_REASON_NAME_BEF_AWDA: props.Data.E_SERV_REASON_NAME_BEF_AWDA || "",
                DATE0_AWDA: props.Data.DATE0_AWDA || "",
                DECISION_NO_AWDA: props.Data.DECISION_NO_AWDA || "",
                DECISION_DATE_AWDA: props.Data.DECISION_DATE_AWDA || "",
                BUL_NO_AWDA: props.Data.BUL_NO_AWDA || "",
                BUL_YEAR_AWDA: props.Data.BUL_YEAR_AWDA || "",
                END_SERV_DATE_AWDA: props.Data.END_SERV_DATE_AWDA || "",
                END_SERV_DATE_BEF_AWDA: props.Data.END_SERV_DATE_BEF_AWDA || "",
                E_SERV_REASON_NO_AWDA: props.Data.E_SERV_REASON_NO_AWDA || "",
                E_SERV_REASON_NAME_AWDA: props.Data.E_SERV_REASON_NAME_AWDA || "",
                BUL_NO_BEF_AWDA: props.Data.BUL_NO_BEF_AWDA || "",
                BUL_YEAR_BEF_AWDA: props.Data.BUL_YEAR_BEF_AWDA || "",
                NOTES_AWDA: props.Data.NOTES_AWDA || "",
            });
        }
    }, [props.Data]);

    return (
        <>
            <button
                onClick={async () => {
                    setHide(!hide);
                    setPop10Values({
                        ...props.SecondInputs,
                        "reasonNames": props.SecondInputs.reasonNames,
                        ...props.Data,
                    });
                }}
                data-modal-target="authentication-modal" data-modal-toggle="authentication-modal" className="text-sm block text-black font-medium rounded-lg w-full  my-1 text-center outline-0 " type="button">
                العودة للخدمة
            </button>
            <div id="authentication-modal" tabIndex="5" aria-hidden="true" className={`${hide && "hidden"} z-[1] bg-gray-500/50  left-0 top-0 overflow-y-auto  flex fixed z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] h-full`}>
                <div className="relative p-4 w-full max-w-fit max-h-full z-[2] ">
                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 bg-blue-700">
                            <h3 className="text-xl font-semibold text-gray-900 text-white">
                                العودة للخدمة
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
                        {pop10Values.warning && (
                            <div class="flex items-center p-1 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                                <svg class="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                                </svg>
                                <span class="sr-only"></span>
                                <span class="font-medium">هذه رسالة تحذير</span>
                                &nbsp;
                                &#160;
                                {pop10Values.msg}
                                &nbsp;
                                &#160;
                                <div className="flex">
                                    <button onClick={async () => {
                                        // setFree()
                                        setPop10Values((values) => ({
                                            ...pop10Values,
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
                        <div className="p-4 md:p-5 grid grid-cols-5 gap-2">
                            <label htmlFor="END_SERV_DATE_BEF_AWDA" className=" min-w-fit  col-span-1  block m-2 text-sm font-medium text-gray-900 dark:text-white">  تاريخ الإنهاء الأول للخدمة   </label>
                            <div className="col-span-4 flex justify-around items-center ">

                                <input name="END_SERV_DATE_BEF_AWDA" type="date"
                                    defaultValue={pop10Values.END_SERV_DATE_BEF_AWDA ? parseDate(pop10Values.END_SERV_DATE_BEF_AWDA).toLocaleDateString('en-CA') : ""}
                                    onChange={handleChange}
                                    id="END_SERV_DATE_BEF_AWDA"
                                    className="w-full col-span-4 bg-gray-50  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="تاريخ التعيين" />

                                <label htmlFor="E_SERV_REASON_NO_BEF_AWDA" className=" min-w-fit  block m-2 text-sm font-medium text-gray-900 dark:text-white">   سبب الإحالة الأول   </label>
                                <div className=" flex justify-around items-center ">

                                    <input name="E_SERV_REASON_NO_BEF_AWDA"
                                        defaultValue={pop10Values.E_SERV_REASON_NO_BEF_AWDA}
                                        onChange={(ele) => {
                                            handleChange(ele);
                                            if (ele.target.value === "")
                                                setPop10Values((values) => ({ ...values, E_SERV_REASON_NAME_BEF_AWDA: "" }));
                                            else {
                                                const result = reasonNames.filter(e => e.NO == ele.target.value)
                                                setPop10Values((values) => ({ ...values, E_SERV_REASON_NAME_BEF_AWDA: result[0]?.NAME || " " }));
                                            }
                                        }} id="E_SERV_REASON_NO_BEF_AWDA"
                                        className="w-[20%] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="" />

                                    <input name="E_SERV_REASON_NAME_BEF_AWDA"
                                        readOnly
                                        defaultValue={pop10Values.E_SERV_REASON_NAME_BEF_AWDA}
                                        id="E_SERV_REASON_NAME_BEF_AWDA"
                                        className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="" />

                                </div>
                            </div>


                            <label htmlFor="DATE0_AWDA" className="col-span-1 min-w-fit  block m-2 text-sm font-medium text-gray-900 dark:text-white">  تاريخ العودة    </label>
                            <div className="col-span-4 flex justify-around items-center ">

                                <input name="DATE0_AWDA" type="date"
                                    defaultValue={pop10Values.DATE0_AWDA ? parseDate(pop10Values.DATE0_AWDA).toLocaleDateString('en-CA') : ""}
                                    onChange={handleChange}
                                    className="w-full col-span-4 bg-gray-50  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="تاريخ التعيين" />

                                <label htmlFor="DECISION_NO_AWDA" className="min-w-fit   block m-2 text-sm font-medium text-gray-900 dark:text-white">  رقم القرار الجمهورى    </label>
                                <input name="DECISION_NO_AWDA"
                                    defaultValue={pop10Values.DECISION_NO_AWDA}
                                    onChange={handleChange}
                                    id="DECISION_NO_AWDA"
                                    className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="" />

                                <label htmlFor="DECISION_DATE_AWDA" className="min-w-fit    block m-2 text-sm font-medium text-gray-900 dark:text-white">  تاريخ القرار الجمهورى    </label>
                                <input name="DECISION_DATE_AWDA"
                                    defaultValue={pop10Values.DECISION_DATE_AWDA}
                                    onChange={handleChange} id="DECISION_DATE_AWDA"
                                    className="w-full col-span-4 bg-gray-50  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="تاريخ التعيين" />

                            </div>
                            <label htmlFor="BUL_NO_AWDA" className="col-span-1 min-w-fit  block m-2 text-sm font-medium text-gray-900 dark:text-white">  رقم النشرة للعودة    </label>
                            <div className="col-span-4 flex justify-around items-center ">
                                <input name="BUL_NO_AWDA"
                                    defaultValue={pop10Values.BUL_NO_AWDA}
                                    onChange={handleChange}
                                    id="BUL_NO_AWDA"
                                    className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="" />

                                <label htmlFor="BUL_YEAR_AWDA" className="min-w-fit  block m-2 text-sm font-medium text-gray-900 dark:text-white">  سنة النشرة للعودة    </label>
                                <input name="BUL_YEAR_AWDA"
                                    defaultValue={pop10Values.BUL_YEAR_AWDA}
                                    onChange={handleChange}
                                    id="BUL_YEAR_AWDA"
                                    className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="" />
                            </div>


                            <label htmlFor="END_SERV_DATE_AWDA" className="col-span-1 min-w-fit  block m-2 text-sm font-medium text-gray-900 dark:text-white">  تاريخ نهاية الخدمة    </label>
                            <div className="col-span-4 flex justify-around items-center ">
                                <input name="END_SERV_DATE_AWDA" type="date"
                                    defaultValue={pop10Values.END_SERV_DATE_AWDA ? parseDate(pop10Values.END_SERV_DATE_AWDA).toLocaleDateString('en-CA') : ""}
                                    onChange={handleChange} id="END_SERV_DATE_AWDA"
                                    className="w-full col-span-4 bg-gray-50  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="تاريخ التعيين" />

                                <label htmlFor="E_SERV_REASON_NO_AWDA" className=" min-w-fit block m-2 text-sm font-medium text-gray-900 dark:text-white">  سبب الإحالة    </label>
                                <div className="flex justify-around items-center ">
                                    <input name="E_SERV_REASON_NO_AWDA"
                                        defaultValue={pop10Values.E_SERV_REASON_NO_AWDA}
                                        onChange={(ele) => {
                                            handleChange(ele);
                                            if (ele.target.value === "")
                                                setPop10Values((values) => ({ ...values, E_SERV_REASON_NAME_AWDA: "" }));
                                            else {
                                                const result = reasonNames.filter(e => e.NO == ele.target.value)
                                                setPop10Values((values) => ({ ...values, E_SERV_REASON_NAME_AWDA: result[0]?.NAME || " " }));
                                            }
                                        }} id="E_SERV_REASON_NO_AWDA"
                                        className="w-[20%] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="" />

                                    <input name="E_SERV_REASON_NAME_AWDA"
                                        readOnly
                                        defaultValue={pop10Values.E_SERV_REASON_NAME_AWDA}
                                        id="E_SERV_REASON_NAME_AWDA"
                                        className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="" />
                                </div>
                            </div>

                            <label htmlFor="BUL_NO_BEF_AWDA" className="col-span-1 min-w-fit  block m-2 text-sm font-medium text-gray-900 dark:text-white">  رقم نشرة الإحالة    </label>
                            <div className="col-span-4 flex justify-around items-center ">
                                <input name="BUL_NO_BEF_AWDA" defaultValue={pop10Values.BUL_NO_BEF_AWDA}
                                    onChange={handleChange}
                                    id="BUL_NO_BEF_AWDA" className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="" />
                                <label htmlFor="BUL_YEAR_BEF_AWDA" className="col-span-2 min-w-fit  block m-2 text-sm font-medium text-gray-900 dark:text-white">  سنة نشرة الإحالة    </label>
                                <input name="BUL_YEAR_BEF_AWDA"
                                    defaultValue={pop10Values.BUL_YEAR_BEF_AWDA}
                                    onChange={handleChange}
                                    id="BUL_YEAR_BEF_AWDA" className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="" />
                            </div>
                            <label htmlFor="NOTES_AWDA" className="col-span-1  min-w-fit block m-2 text-sm font-medium text-gray-900 dark:text-white"> سبب الإعادة للخدمة    </label>
                            <input name="NOTES_AWDA" id="NOTES_AWDA"
                                defaultValue={pop10Values.NOTES_AWDA}
                                onChange={handleChange}
                                className="col-span-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="  " />
                        </div>

                        <div className="flex justify-end m-4 p-2 mt-0">
                            <button
                                onClick={async () => {
                                    try {
                                        const response = await axios.post(`http://30.30.30.53:3000/edkhal/edkhal1/popup10`,
                                            {
                                                MIL_NO: pop10Values.MIL_NO,
                                                MIL_NO_FLAG: pop10Values.MIL_NO_FLAG,
                                                E_SERV_REASON_NO_BEF: pop10Values.E_SERV_REASON_NO_BEF_AWDA,
                                                DATE0: pop10Values.DATE0_AWDA,
                                                DECISION_NO: pop10Values.DECISION_NO_AWDA,
                                                DECISION_DATE: pop10Values.DECISION_DATE_AWDA,
                                                BUL_NO: pop10Values.BUL_NO_AWDA,
                                                BUL_YEAR: pop10Values.BUL_YEAR_AWDA,
                                                END_SERV_DATE: pop10Values.END_SERV_DATE_AWDA,
                                                END_SERV_DATE_BEF: pop10Values.END_SERV_DATE_BEF_AWDA,
                                                E_SERV_REASON_NO: pop10Values.E_SERV_REASON_NO_AWDA,
                                                BUL_NO_BEF: pop10Values.BUL_NO_BEF_AWDA,
                                                BUL_YEAR_BEF: pop10Values.BUL_YEAR_BEF_AWDA,
                                                NOTES: pop10Values.NOTES_AWDA,
                                            });
                                        if (response.data.msg) {
                                            setPop10Values((pop10Values) => ({
                                                ...pop10Values,
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
                                            setPop10Values({
                                                ...pop10Values,
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
export default PopUp10;
