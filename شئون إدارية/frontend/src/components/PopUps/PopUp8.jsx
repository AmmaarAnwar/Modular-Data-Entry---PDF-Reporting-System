import { useState, useEffect } from "react";
import axios from "axios";

function PopUp8(props) {
    const [hide, setHide] = useState(true);
    const [myData, setMyData] = useState([]);
    const [editIndex, setEditIndex] = useState(null);
    const [newlyAddedIndices, setNewlyAddedIndices] = useState([]);
    const [msg, setMsg] = useState({
        warning:false,
        msg:""
    });
    let inputDataDefault = {
        SENIORITY_LIST: "",
        NO: "",
        SERIAL: "",
        DATE0: "",
        BUL_NO: "",
        BUL_YEAR: "",
        NOTE: ""
    };
    const [inputData, setInputData] = useState(inputDataDefault);

    useEffect(() => {
        if (props.Data.SENIORITY) {
            setMyData([...props.Data.SENIORITY]);
        }
    }, [props.Data.SENIORITY]);

    useEffect(() => {
        if (!isEmpty(inputData)) {
            setMyData([...myData, { ...inputData }]);
            setNewlyAddedIndices([...newlyAddedIndices, myData.length]);
        }
    }, [inputData]);

    const isEmpty = (obj) => {
        return Object.keys(obj).every(key => obj[key] === "");
    };

    const handleEdit = async () => {
        try {
            const response = await axios.post(
                "http://30.30.30.53:3000/edkhal/edkhal1/popup8",
                {
                    MIL_NO: props.Data.MIL_NO,
                    MIL_NO_FLAG: props.Data.MIL_NO_FLAG,
                    SENIORITYs: myData,
                }
            );
            if (response.data.msg) {
                setMsg((msg) => ({
                    ...msg,
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
                setMsg({
                  warning: true,
                  msg: allInOneMessage
                });
              }
        }
    };

    const handleInputChange = (e, index) => {
        const { name, value } = e.target;
        const updatedData = [...myData];
        updatedData[index] = { ...updatedData[index], [name]: value };
        setMyData(updatedData);
    };

    const addInputRow = () => {
        setMyData([...myData, { ...inputData }]);
        setNewlyAddedIndices([...newlyAddedIndices, myData.length]);
        setInputData(inputDataDefault);
    };

    const startEditing = (index) => {
        setEditIndex(index);
    };

    const stopEditing = () => {
        setEditIndex(null);
    };

    const deleteRow = (index) => {
        const updatedMyData = myData.filter((_, i) => i !== index);
        setMyData(updatedMyData);
        const updatedIndices = newlyAddedIndices.filter((idx) => idx !== index);
        setNewlyAddedIndices(updatedIndices);
    };

    const formatDateForDisplay = (dateString) => {
        if (!dateString) return "";
        const date = new Date(dateString);
        return date.toLocaleDateString('en-CA'); // Format: yyyy-MM-dd
    };

    return (
        <>
            <button
                onClick={() => setHide(!hide)}
                data-modal-target="authentication-modal"
                data-modal-toggle="authentication-modal"
                className="text-sm block text-black font-medium rounded-lg w-full my-1 text-center outline-0"
                type="button"
            >
                تعديل الأقدمية
            </button>
            <div
                id="authentication-modal"
                tabIndex="5"
                aria-hidden="true"
                className={`${hide && "hidden"} z-[1] bg-gray-500/50 left-0 top-0 overflow-y-auto flex fixed z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] h-full`}
            >
                <div className="relative p-4 w-full max-w-fit max-h-full">
                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 bg-blue-700">
                            <h3 className="text-xl font-semibold text-gray-900 text-white">
                                تحديد الأقدمية
                            </h3>
                            <button
                                type="button"
                                onClick={() => setHide(!hide)}
                                className="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                data-modal-hide="authentication-modal"
                            >
                                <svg
                                    className="w-3 h-3"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 14 14"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                    />
                                </svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                        </div>
                        {msg.warning && (
                            <div class="flex items-center p-1 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                                <svg class="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                                </svg>
                                <span class="sr-only"></span>
                                <span class="font-medium">هذه رسالة تحذير</span>
                                &nbsp;
                                &#160;
                                {msg.msg}
                                &nbsp;
                                &#160;
                                <div className="flex">
                                    <button onClick={async () => {
                                        // setFree()
                                        setMsg((msg) => ({
                                            ...msg,
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
                        <div className="relative overflow-x-auto overflow-y-auto z-[2]">
                        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                <thead className="text-xs text-gray-900 uppercase dark:text-gray-400">
                                    <tr>
                                        <th scope="col" className="px-6 py-3">الكادر</th>
                                        <th scope="col" className="px-6 py-3">رقم الأقدمية</th>
                                        <th scope="col" className="px-6 py-3">المكرر</th>
                                        <th scope="col" className="px-6 py-3">تاريخ الأقدمية</th>
                                        <th scope="col" className="px-6 py-3">رقم النشرة</th>
                                        <th scope="col" className="px-6 py-3">سنة النشرة</th>
                                        <th scope="col" className="px-6 py-3">ملاحظات</th>
                                        <th scope="col" className="px-6 py-3">تعديل</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {myData.map((e, index) => (
                                        <tr
                                        className={index % 2 === 0 ? "bg-gray-200 border p-1 border-gray-300 rounded-lg " : "bg-white border p-1 border-gray-300  rounded-lg "}
                                        key={index}
                                    >
                                            <td className="px-6 py-4 text-center">
                                                {editIndex === index ? (
                                                    <input
                                                        className="bg-gray-50 border p-1 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block"
                                                        type="text"
                                                        name="SENIORITY_LIST"
                                                        value={e.SENIORITY_LIST}
                                                        onChange={(event) => handleInputChange(event, index)}
                                                    />
                                                ) : (
                                                    e.SENIORITY_LIST
                                                )}
                                            </td>
                                            <td className="px-6 py-4 text-center">
                                                {editIndex === index ? (
                                                    <input
                                                        className="bg-gray-50 border p-1 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block"
                                                        type="text"
                                                        name="NO"
                                                        value={e.NO}
                                                        onChange={(event) => handleInputChange(event, index)}
                                                    />
                                                ) : (
                                                    e.NO
                                                )}
                                            </td>
                                            <td className="px-6 py-4 text-center">
                                                {editIndex === index ? (
                                                    <input
                                                        className="bg-gray-50 border p-1 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block"
                                                        type="text"
                                                        name="SERIAL"
                                                        value={e.SERIAL}
                                                        onChange={(event) => handleInputChange(event, index)}
                                                    />
                                                ) : (
                                                    e.SERIAL
                                                )}
                                            </td>
                                            <td className="px-6 py-4 text-center">
                                                {editIndex === index ? (
                                                    <input
                                                        className="bg-gray-50 border p-1 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block"
                                                        type="date"
                                                        name="DATE0"
                                                        value={e.DATE0 ? formatDateForDisplay(e.DATE0) : ""}
                                                        onChange={(event) => handleInputChange(event, index)}
                                                    />
                                                ) : (
                                                    formatDateForDisplay(e.DATE0)
                                                )}
                                            </td>
                                            <td className="px-6 py-4 text-center">
                                                {editIndex === index ? (
                                                    <input
                                                        className="bg-gray-50 border p-1 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block"
                                                        type="text"
                                                        name="BUL_NO"
                                                        value={e.BUL_NO}
                                                        onChange={(event) => handleInputChange(event, index)}
                                                    />
                                                ) : (
                                                    e.BUL_NO
                                                )}
                                            </td>
                                            <td className="px-6 py-4 text-center">
                                                {editIndex === index ? (
                                                    <input
                                                        className="bg-gray-50 border p-1 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block"
                                                        type="text"
                                                        name="BUL_YEAR"
                                                        value={e.BUL_YEAR}
                                                        onChange={(event) => handleInputChange(event, index)}
                                                    />
                                                ) : (
                                                    e.BUL_YEAR
                                                )}
                                            </td>
                                            <td className="px-6 py-4 text-center">
                                                {editIndex === index ? (
                                                    <input
                                                        className="bg-gray-50 border p-1 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block"
                                                        type="text"
                                                        name="NOTE"
                                                        value={e.NOTE}
                                                        onChange={(event) => handleInputChange(event, index)}
                                                    />
                                                ) : (
                                                    e.NOTE
                                                )}
                                            </td>
                                            <td className="px-6 py-4 text-center">
                                                {editIndex === index ? (
                                                    <button
                                                    className="text-sm block text-black font-medium rounded-lg my-1 text-center outline-0 bg-sky-500 hover:bg-blue-800 hover:text-white"
                                                    onClick={stopEditing}
                                                    >
                                                        حفظ
                                                    </button>
                                                ) : (
                                                    <button
                                                    className="flex text-sm block text-black font-medium rounded-lg my-1 text-center outline-0 bg-sky-500 hover:bg-blue-800 hover:text-white"
                                                    onClick={() => startEditing(index)}
                                                    >
                                                        تعديل
                                                    </button>
                                                )}
                                                <button
                                                        className="flex text-sm block text-black font-medium rounded-lg m-2 my-1 text-center outline-0 bg-red-500 hover:bg-red-800 hover:text-white"
                                                        onClick={() => deleteRow(index)}
                                                >
                                                    حذف
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className="flex justify-end m-4 p-2 mt-0">
                            <button
                                onClick={addInputRow}
                                className="mt-2 w-fit right text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            >
                                إضافة صف جديد
                            </button>
                            <button
                                onClick={handleEdit}
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

export default PopUp8;
