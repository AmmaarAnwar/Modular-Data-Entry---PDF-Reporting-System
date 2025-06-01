import axios from "axios";
import { useEffect, useState } from "react";
function PopUp1(props) {
    const [hide, setHide] = useState(true);
    window.onkeydown = (event) => {
        if (event.keyCode == 27)
            setHide(true)
    }
    const formatDateForDisplay = (dateString) => {
        if (!dateString) return "";
        const date = new Date(dateString);
        return date.toLocaleDateString('en-CA'); // Format: yyyy-MM-dd
    };
    const [pop1Values, Setpop1Values] = useState({})
    const handleChange = (ele) => {
        const name = ele.target.name
        const value = ele.target.value
        Setpop1Values((values) => ({
            ...values,
            [name]: value
        }))
    }
    // useEffect(() => {
    //     console.log(pop1Values)
    // }, [pop1Values])


    const RANKS = pop1Values.RANKS
    return (
        <>

            <button
                onClick={async () => {
                    setHide(!hide);
                    Setpop1Values({ "RANKS": props.SecondInputs.RANKS, ...props.Data, warning: false, msg: "" })
                }}
                className=" text-sm block text-black font-medium rounded-lg w-full  my-1 text-center outline-0 " type="button">
                بيانات التعيين بالخدمة  </button>
            <div className={`${hide && "hidden"}  z-[1] bg-gray-500/50  left-0 top-0 overflow-y-auto  flex fixed z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] h-full`}>
                <div className="relative p-4 w-full max-w-fit max-h-full z-[2] ">
                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 bg-blue-700 ">
                            <h3 className="text-xl font-semibold text-gray-900 text-white ">
                                بيانات التعيين بالخدمة                        </h3>

                            <button type="button"
                                onClick={() => {
                                    setHide(!hide);
                                }} className="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="authentication-modal">
                                <svg className="w-3 h-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                </svg>
                            </button>
                        </div>
                        {
                            pop1Values.warning && (
                                <div class="flex items-center p-1 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                                    <svg class="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                                    </svg>
                                    <span class="sr-only"></span>
                                    <span class="font-medium">هذه رسالة تحذير</span>
                                    &nbsp;
                                    &#160;
                                    {pop1Values.msg}
                                    &nbsp;
                                    &#160;
                                    <div className="flex">
                                        <button onClick={async () => {
                                            // setFree()
                                            Setpop1Values((values) => ({
                                                ...pop1Values,
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
                            <label htmlFor="t3yyen_date" className="col-span-2   block m-2 text-sm font-medium text-gray-900 dark:text-white">تاريخ التعيين </label>
                            <input name="t3yyen_date" type="date" 
                            value={formatDateForDisplay(pop1Values.DATE0)}
                             id="t3yyen_date" className="w-full col-span-4 bg-gray-50  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" />
                            <label htmlFor="rotba" className="col-span-2   block m-2 text-sm font-medium text-gray-900 dark:text-white">الرتبة المعين بها   </label>
                            <div className="col-span-4 flex justify-around items-center ">
                                <input
                                    value={pop1Values.F_RANK_NO}
                                    onChange={(ele) => {
                                        handleChange(ele)
                                        if (ele.target.value == "")
                                            pop1Values.F_Rank = ""
                                        else {
                                            const result = RANKS.filter(e => e.NO == ele.target.value)
                                            pop1Values.F_Rank = result[0]?.NAME ?? ""
                                        }
                                    }}
                                    name="F_RANK_NO"
                                    type="text"
                                    id="rotba1"
                                    className="w-[20%] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5 "
                                    required
                                />
                                <input name="rotba2" readOnly value={pop1Values.F_Rank}
                                    onChange={(ele) => {
                                        handleChange(ele)
                                    }}
                                    id="rotba2" className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="" />
                            </div>
                            <label htmlFor="nashra_no" className="col-span-2   block m-2 text-sm font-medium text-gray-900 dark:text-white">رقم النشرة</label>
                            <input name="nashra_no" id="nashra_no"
                             value={pop1Values.HIRE_BUL_NO}
                             onChange={(ele) => {
                                handleChange(ele)}}
                             className="col-span-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="رقم النشرة " />
                            <label htmlFor="sanf_elnashra" className="col-span-2   block m-2 text-sm font-medium text-gray-900 dark:text-white">صنف النشرة</label>
                            <input name="sanf_elnashra" id="sanf_elnashra" 
                            value={pop1Values.HIRE_BUL_YEAR}
                            onChange={(ele) => {handleChange(ele)}}
                             className="col-span-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="صنف النشرة " />
                        </div>
                        <div className="flex justify-end m-4 p-2 mt-0">
                            <button
                                onClick={async () => {
                                    // setHide(!hide);
                                    try {
                                        const response = await axios.post(`http://30.30.30.53:3000/edkhal/edkhal1/popup1`, {
                                            "MIL_NO": `${props.Data.MIL_NO}`,
                                            "MIL_NO_FLAG": `${props.Data.MIL_NO_FLAG}`,
                                            "DATE0": document.getElementById('t3yyen_date').value,
                                            "RANK_NO": document.getElementById('rotba1').value,
                                            "HIRE_BUL_NO": document.getElementById('nashra_no').value,
                                            "HIRE_BUL_YEAR": document.getElementById('sanf_elnashra').value
                                        });
                                        if (response.data.msg) {
                                            Setpop1Values((pop1Values) => ({
                                                ...pop1Values,
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
                                            Setpop1Values({
                                                ...pop1Values,
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
export default PopUp1;








