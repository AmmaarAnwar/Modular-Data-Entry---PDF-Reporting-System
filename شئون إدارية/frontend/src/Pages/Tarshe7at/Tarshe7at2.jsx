import React, { useState } from 'react';
import axios from 'axios';

function Tarshe7at2() {
    const [milNo, setMilNo] = useState('');
    const [milno_Flag, setmilno_Flag] = useState('');
    const [data, setData] = useState(null);
    const [msg, setMsg] = useState('');

    const handleSearch = async () => {
        if (milNo === ''|| milno_Flag === '' ) {
            setMsg('من فضلك ضع الرقم ');
            setData(null)
            return;
        }
        if (milNo === '') {
            setMsg('من فضلك ضع المميز');
            setData(null)
            return;
        }

        try {
            const response = await axios.get(`http://30.30.30.53:3000/tarshe7at/edkhaleltarshe7at/?mil_no=${milNo}&mil_no_flag=${milno_Flag}`);
            if (response.data.data) {
                setData(response.data.data);
                setMsg('');
            } else {
                setData(null);
                setMsg(response.data.msg);
            }
        } catch (error) {
            setMsg('Error: ' + error.message);
        }
    };

    return (
        <>
            <div className="pb-3 text-4xl font-black text-center text-gray-900 dark:text-white">
                <p>تسجيل الترشيحات</p>
            </div>
            <div className="grid grid-cols-12 border-2 border-gray-400 rounded-xl">
                <div className="flex justify-start col-span-12 m-1 align-middle">
                    <label htmlFor="mil_no" className="mx-2 font-medium text-gray-900">
                        الرقم 
                    </label>
                    <input
                        name="mil_no"
                        type="text"
                        id="mil_no"
                        value={milNo}
                        onChange={(e) => setMilNo(e.target.value)}
                        className="block w-20 p-1 ml-1 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                        required
                    />
                    <div className="flex justify-start m-1 align-middle">
                        <label htmlFor="momayez" className="mx-2 font-medium text-gray-900">
                            المميز
                        </label>
                        <select
                            onChange={(e) => setmilno_Flag(e.target.value)}
                            className="text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
                        >
                            <option value=""></option>
                            <option value="N">شرف</option>
                            <option value="R">احتياط</option>
                            <option value="O">مكلف</option>
                            <option value="C">طالب</option>
                            <option value="S">عامل/فنى</option>
                        </select>
                    </div>
                    <div className="mx-1">
                        <button
                            onClick={handleSearch}
                            type="button"
                            className="text-green-700 hover:text-white border outline-none border-green-700 hover:bg-green-800 hover:border-green-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                            بحث
                        </button>
                    </div>
                </div>
            </div>
            {msg && <div className="mt-3 text-red-500">{msg}</div>}
            {data && (
                <div className="mt-5 text-center relative overflow-x-auto overflow-y-auto z-[2] mx-28 border-2 border-gray-400 mt-2 rounded-lg h[200px]">
                    <table className="min-w-full text-sm text-left text-center text-gray-500 bg-white rtl:text-right dark:text-gray-400">
                        <thead class="text-xs text-gray-900 uppercase dark:text-gray-400">
                            <tr>
                                <th className="py-2">الرقم </th>
                                <th className="py-2">الرتبة</th>
                                <th className="py-2">الاسم</th>
                                <th className="py-2">الترشيح</th>
                                <th className="py-2">اسم المشروع</th>
                                <th className="py-2">الرقم التسلسلي</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item, index) => (
                                <tr key={index}>
                                    <td className="py-2">{item.MIL_NO}</td>
                                    <td className="py-2">{item.RANK_NAME}</td>
                                    <td className="py-2">{item.NAME}</td>
                                    <td className="py-2">{item.PROJ_NAME}</td>
                                    <td className="py-2">{item.SENIORITY_SERIAL}</td>
                                    <td className="py-2">{item.PROJ}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

        </>
    );
}
export default Tarshe7at2;
