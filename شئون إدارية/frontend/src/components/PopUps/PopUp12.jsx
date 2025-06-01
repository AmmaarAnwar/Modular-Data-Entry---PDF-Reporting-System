import axios from "axios";
import { useState, useEffect } from "react";
function PopUp12(props) {
    const [hide, setHide] = useState(true);
    const [pop12Values, setPop12Values] = useState({
        FROM_RELGION_R: "",
        TO_RELGION_R: "",
        NEW_NAME_R: "",
        DOCUMENT_OFFICE_R: "",
        DOCUMENT_YEAR_R: "",
        DOCUMENT_NO_R: "",
        DATE0_R: "",
        NOTES_R: "",
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
        setPop12Values((values) => ({
            ...values,
            [name]: value,
        }));
    };



    useEffect(() => {
        if (props.Data) {
            setPop12Values({
                FROM_RELGION_R: props.Data.FROM_RELGION_R || "",
                TO_RELGION_R: props.Data.TO_RELGION_R || "",
                NEW_NAME_R: props.Data.NEW_NAME_R || "",
                DOCUMENT_OFFICE_R: props.Data.DOCUMENT_OFFICE_R || "",
                DOCUMENT_YEAR_R: props.Data.DOCUMENT_YEAR_R || "",
                DOCUMENT_NO_R: props.Data.DOCUMENT_NO_R || "",
                DATE0_R: props.Data.DATE0_R || "",
                NOTES_R: props.Data.NOTES_R || "",
                MIL_NO: props.Data.MIL_NO || "",
                MIL_NO_FLAG: props.Data.MIL_NO_FLAG || "",
            });
            console.log(props.Data.FROM_RELGION_R);
        }
    }, [props.Data]);

    const SCHOOLNAMES = props.SecondInputs.SCHOOLNAMES ?? [];
    const schoolTranningNames = props.SecondInputs.schoolTranningNames ?? [];
    const UniversityNames = props.SecondInputs.UniversityNames ?? [];
    const DegreeNames = props.SecondInputs.DegreeNames ?? [];

    const DegreeNamesList = DegreeNames.map((e) => (
        <option key={e.NO} value={e.NO}>
            {e.NAME}
        </option>
    ));
    return (
        <>
            <button
                onClick={async () => {
                    setHide(!hide);
                }}
                data-modal-target="authentication-modal" data-modal-toggle="authentication-modal" className="text-sm block text-black font-medium rounded-lg w-full  my-1 text-center outline-0 " type="button">
                تعديل الديانة
            </button>
            <div id="authentication-modal" tabIndex="5" aria-hidden="true" className={`${hide && "hidden"} z-[1] bg-gray-500/50  left-0 top-0 overflow-y-auto  flex fixed z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] h-full`}>
                <div className="relative p-4 w-full max-w-fit max-h-full z-[2] ">
                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 bg-blue-700">
                            <h3 className="text-xl font-semibold text-gray-900 text-white">
                                تعديل الديانة
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
                        {pop12Values.warning && (
                            <div class="flex items-center p-1 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                                <svg class="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                                </svg>
                                <span class="sr-only"></span>
                                <span class="font-medium">هذه رسالة تحذير</span>
                                &nbsp;
                                &#160;
                                {pop12Values.msg}
                                &nbsp;
                                &#160;
                                <div className="flex">
                                    <button onClick={async () => {
                                        // setFree()
                                        setPop12Values((values) => ({
                                            ...pop12Values,
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


                            <label htmlFor="DOCUMENT_OFFICE_R" className="col-span-2   block m-2 text-sm font-medium text-gray-900 dark:text-white"> مكتب التوثيق الصادر منه الشهادة   </label>
                            <input name="DOCUMENT_OFFICE_R" id="DOCUMENT_OFFICE_R"
                                value={pop12Values.DOCUMENT_OFFICE_R}
                                onChange={handleChange}
                                className="col-span-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="" />

                            <label htmlFor="DOCUMENT_NO_R" className="col-span-2 min-w-fit  block m-2 text-sm font-medium text-gray-900 dark:text-white">  رقم شهاده تغيير الديانة    </label>
                            <div className="col-span-4 flex justify-around items-center ">
                                <input name="DOCUMENT_NO_R"
                                    value={pop12Values.DOCUMENT_NO_R}
                                    onChange={handleChange}
                                    id="DOCUMENT_NO_R" className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="" />
                                <label htmlFor="DOCUMENT_YEAR_R" className="col-span-2 min-w-fit  block m-2 text-sm font-medium text-gray-900 dark:text-white">  سنة شهاده تغيير الديانة    </label>
                                <input name="DOCUMENT_YEAR_R"
                                    value={pop12Values.DOCUMENT_YEAR_R}
                                    onChange={handleChange}
                                    id="DOCUMENT_YEAR_R" className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="" />
                            </div>


                            <label htmlFor="FROM_RELGION_R" className="col-span-2  block m-2 text-sm font-medium text-gray-900 dark:text-white"> الديانة السابقة  </label>
                            <div className="col-span-4 flex justify-around items-center">
                                <select
                                    // defaultValue={ "N"}
                                    // value={props.Data.Degree ??"1"}
                                    value={pop12Values.FROM_RELGION_R == null || pop12Values.FROM_RELGION_R == "" ? "N" : pop12Values.FROM_RELGION_R}
                                    onChange={handleChange}
                                    name="FROM_RELGION_R"
                                    id="FROM_RELGION_R"
                                    className="w-full m-0 col-span-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white ">
                                    <option value="M">مسلم</option>
                                    <option value="C">مسيحي  </option>
                                    <option value="N"></option>
                                </select>
                                <label htmlFor="TO_RELGION_R" className="col-span-2  block m-2 text-sm font-medium text-gray-900 dark:text-white"> الديانة الجديدة    </label>
                                <div className="col-span-4 w-full">
                                    <select
                                        // defaultValue={(props.Data && props.Data.TO_RELGION_R) ?? "N"}
                                        value={pop12Values.TO_RELGION_R == null || pop12Values.TO_RELGION_R == "" ? "N" : pop12Values.TO_RELGION_R}
                                        onChange={handleChange}
                                        // value={props.Data.Degree ??"1"}
                                        name="TO_RELGION_R"
                                        id="TO_RELGION_R"
                                        className="w-full m-0 col-span-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white ">
                                        <option value="M">مسلم</option>
                                        <option value="C">مسيحي  </option>
                                        <option value="N"></option>
                                    </select>
                                </div>


                            </div>

                            <label htmlFor="DATE0_R" className="col-span-2 min-w-fit  block m-2 text-sm font-medium text-gray-900 dark:text-white">  تاريخ تغيير الديانة   </label>
                            <div className="col-span-4 flex justify-around items-center ">
                                <input name="DATE0_R" type="date"
                                    value={pop12Values.DATE0_R ? parseDate(pop12Values.DATE0_R).toLocaleDateString('en-CA') : ""}
                                    onChange={handleChange}
                                    id="DATE0_R" className="w-full col-span-4 bg-gray-50  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="تاريخ التعيين" />
                                <label htmlFor="NEW_NAME_R" className="col-span-2 min-w-fit  block m-2 text-sm font-medium text-gray-900 dark:text-white">  الاسم الجديد   </label>
                                <input name="NEW_NAME_R"
                                    value={pop12Values.NEW_NAME_R}
                                    onChange={handleChange}
                                    id="NEW_NAME_R" className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="" />
                            </div>
                            <label htmlFor="NOTES_R" className="col-span-2   block m-2 text-sm font-medium text-gray-900 dark:text-white"> ملاحظات   </label>
                            <input name="NOTES_R" id="NOTES_R"
                                value={pop12Values.NOTES_R}
                                onChange={handleChange}
                                className="col-span-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="ملاحظات  " />


                        </div>
                        <div className="flex justify-end m-4 p-2 mt-0">
                            <button
                                onClick={async () => {
                                    try {
                                        const response = await axios.post(`http://30.30.30.53:3000/edkhal/edkhal1/popup12`,
                                            {
                                                MIL_NO: pop12Values.MIL_NO,
                                                MIL_NO_FLAG: pop12Values.MIL_NO_FLAG,
                                                FROM_RELGION: pop12Values.FROM_RELGION_R,
                                                TO_RELGION: pop12Values.TO_RELGION_R,
                                                NEW_NAME: pop12Values.NEW_NAME_R,
                                                DOCUMENT_OFFICE: pop12Values.DOCUMENT_OFFICE_R,
                                                DOCUMENT_YEAR: pop12Values.DOCUMENT_YEAR_R,
                                                DOCUMENT_NO: pop12Values.DOCUMENT_NO_R,
                                                DATE0: pop12Values.DATE0_R,
                                                NOTES: pop12Values.NOTES_R,
                                            }

                                        );
                                        if (response.data.msg) {
                                            setPop12Values((pop12Values) => ({
                                                ...pop12Values,
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
                                            setPop12Values({
                                                ...pop12Values,
                                                warning: true,
                                                msg: allInOneMessage
                                            });
                                        }
                                    }

                                }}
                                className="mt-2 w-fit right text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">تعديل بدون تأثير</button>
                        </div>
                        <div className="flex justify-end m-4 p-2 mt-0">
                            <button
                                onClick={async () => {
                                    try {
                                        const response = await axios.post(`http://30.30.30.53:3000/edkhal/edkhal1/popup12?option=1`,
                                            {
                                                MIL_NO: pop12Values.MIL_NO,
                                                MIL_NO_FLAG: pop12Values.MIL_NO_FLAG,
                                                FROM_RELGION: pop12Values.FROM_RELGION_R,
                                                TO_RELGION: pop12Values.TO_RELGION_R,
                                                NEW_NAME: pop12Values.NEW_NAME_R,
                                                DOCUMENT_OFFICE: pop12Values.DOCUMENT_OFFICE_R,
                                                DOCUMENT_YEAR: pop12Values.DOCUMENT_YEAR_R,
                                                DOCUMENT_NO: pop12Values.DOCUMENT_NO_R,
                                                DATE0: pop12Values.DATE0_R,
                                                NOTES: pop12Values.NOTES_R,
                                            });
                                        if (response.data.msg) {
                                            setPop12Values((pop12Values) => ({
                                                ...pop12Values,
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
                                            setPop12Values({
                                                ...pop12Values,
                                                warning: true,
                                                msg: allInOneMessage
                                            });
                                        }
                                    }

                                }}
                                className="mt-2 w-fit right text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"> تعديل بتأثير</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default PopUp12;
