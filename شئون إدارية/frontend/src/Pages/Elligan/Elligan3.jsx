import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Elligan3() {
    const [officers, setOfficers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get('http://30.30.30.53:3000/lgan/zapetellgan/');
                if (response.data.data) {
                    setOfficers(response.data.data);
                } else {
                    setOfficers([]);
                }
            } catch (err) {
                setError('Error fetching data');
            } finally {
                setLoading(false);
            }
        }

        fetchData();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <>
            <div className="text-center pb-3 font-black text-gray-900 text-4xl dark:text-white">
                <p>سجل الضباط</p>
            </div>
            <div className="col-span-12 grid grid-cols-12">
                <table className="col-span-12 w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 text-center">
                    <thead className="text-xs text-gray-900 uppercase dark:text-gray-400">
                        <tr>
                            <th scope="col" className="border border-black px-4 py-2">رقم الاقدمية</th>
                            <th scope="col" className="border border-black px-4 py-2"></th>
                            <th scope="col" className="border border-black px-4 py-2"></th>
                            <th scope="col" className="border border-black px-4 py-2">المميز</th>
                            <th scope="col" className="border border-black px-4 py-2">الرتبة</th>
                            <th scope="col" className="border border-black px-4 py-2">الاسم</th>
                            <th scope="col" className="border border-black px-4 py-2">البند</th>
                            <th scope="col" className="border border-black px-4 py-2"></th>
                            <th scope="col" className="border border-black px-4 py-2">الترتيب</th>
                        </tr>
                    </thead>
                    <tbody>
                        {officers.map((officer, index) => (
                            <tr key={index}>
                                <td className="border border-black px-4 py-2">{officer.SENIORITY_NO}</td>
                                <td className="border border-black px-4 py-2">{officer.SENIORITY_SERIAL}</td>
                                <td className="border border-black px-4 py-2">{officer.SENIORIT_LIST}</td>
                                <td className="border border-black px-4 py-2">{officer.FLAG}</td>
                                <td className="border border-black px-4 py-2">{officer.RANK_NAME}</td>
                                <td className="border border-black px-4 py-2">{officer.NAME}</td>
                                <td className="border border-black px-4 py-2">{officer.ITEM_NO}</td>
                                <td className="border border-black px-4 py-2">{officer.ITEM_NAME}</td>
                                <td className="border border-black px-4 py-2">{officer.OFF_ORD}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default Elligan3;
