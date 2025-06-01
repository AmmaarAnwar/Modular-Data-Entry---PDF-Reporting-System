import React, { useState } from 'react';
import axios from 'axios';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

function Tqareer17() {
    const [dateFrom, setDateFrom] = useState("");
    const [dateTo, setDateTo] = useState("");
    const [classIn, setClassIn] = useState("");
    const [officers, setOfficers] = useState([]);
    const [count, setCount] = useState(0);

    const handleSearch = async () => {
        try {
            const response = await axios.get("http://30.30.30.53:3000/reports/officers_trial/", {
                params: {
                    date_from: dateFrom,
                    date_to: dateTo,
                    class_in: classIn,
                },
            });

            setOfficers(response.data.data);
            setCount(response.data.count || 0);
        } catch (error) {
            console.error("Error fetching officers data:", error);
        }
    };

    const generatePDF = async () => {
        const pdf = new jsPDF();
        const watermarkImage = await new Promise((resolve) => {
            const img = new Image();
            img.src = '/.png';
            img.onload = () => resolve(img);
        });

        const pageWidth = pdf.internal.pageSize.width;
        const pageHeight = pdf.internal.pageSize.height;
        const marginX = 15;
        const marginY = 15;
        const rowsPerPage = 22;
        let currentPage = 0;

        const addWatermark = () => {
            pdf.setGState(new pdf.GState({ opacity: 0.2 }));
            pdf.addImage(watermarkImage, 'PNG', (pageWidth - 150) / 2, (pageHeight - 150) / 2, 150, 150);
            pdf.setGState(new pdf.GState({ opacity: 1 }));
        };

        for (let start = 0; start < officers.length; start += rowsPerPage) {
            if (currentPage > 0) {
                pdf.addPage();
                addWatermark();
            }

            const chunk = officers.slice(start, start + rowsPerPage);
            const container = document.createElement('div');
            container.innerHTML = `

                <table class="w-full border-collapse border border-black">
                    <thead>
                        <tr>
                            <th class="border border-black px-4 py-2">المسلسل</th>
                            <th class="border border-black px-4 py-2">الرقم العسكري</th>
                            <th class="border border-black px-4 py-2">الإسم</th>
                            <th class="border border-black px-4 py-2">الرتبة</th>
                            <th class="border border-black px-4 py-2">التفاصيل</th>
                            <th class="border border-black px-4 py-2">التاريخ</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${chunk.map((officer, index) => `
                            <tr>
                                <td class="border border-black px-4 py-2">${start + index + 1}</td>
                                <td class="border border-black px-4 py-2">${officer.MIL_NO}</td>
                                <td class="border border-black px-4 py-2">${officer.OFF_NAME}</td>
                                <td class="border border-black px-4 py-2">${officer.RNK}</td>
                                <td class="border border-black px-4 py-2">${officer.CASE_DETAIL}</td>
                                <td class="border border-black px-4 py-2">${new Date(officer.CASE_DATE).toLocaleDateString()}</td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            `;

            document.body.appendChild(container);
            const canvas = await html2canvas(container, { scale: 2 });
            const imgData = canvas.toDataURL('image/png');
            const imgWidth = pageWidth - 2 * marginX;
            const imgHeight = (canvas.height * imgWidth) / canvas.width;

            pdf.addImage(imgData, 'PNG', marginX, marginY, imgWidth, imgHeight);
            document.body.removeChild(container);

            const currentDate = new Date().toLocaleString();
            pdf.setFontSize(10);
            pdf.text(currentDate, pageWidth - marginX, pageHeight - marginY, null, null, 'right');

            currentPage++;
        }

        const pdfBlob = pdf.output('blob');
        const url = URL.createObjectURL(pdfBlob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `Report_${new Date().toLocaleDateString('ar-EG')}.pdf`;
        link.click();
        URL.revokeObjectURL(url);
    };

    return (
        <div className="border-2 border-gray-400 my-[5px] rounded-xl">
            <div className="flex justify-start my-[5px]">
                <div className="flex justify-start m-1 align-middle">
                    <label className="mx-2 font-medium text-gray-900">من التاريخ</label>
                    <input
                        type="date"
                        value={dateFrom}
                        onChange={(e) => setDateFrom(e.target.value)}
                        className="block p-1 text-sm text-gray-900 border border-gray-300 rounded-lg mil_no bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                    />

                    <label className="mx-2 font-medium text-gray-900">الى التاريخ</label>
                    <input
                        type="date"
                        value={dateTo}
                        onChange={(e) => setDateTo(e.target.value)}
                        className="block p-1 text-sm text-gray-900 border border-gray-300 rounded-lg mil_no bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                    />

                    <label className="mx-2 font-medium text-gray-900"></label>
                    <input
                        type="number"
                        value={classIn}
                        onChange={(e) => setClassIn(e.target.value)}
                        className="block p-1 text-sm text-gray-900 border border-gray-300 rounded-lg mil_no bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>
            </div>

            <div className="justify-center pt-2 text-center">
                <button
                    onClick={handleSearch}
                    type="button"
                    className="px-6 py-3 mb-4 text-lg font-medium text-center text-green-700 border border-green-700 rounded-lg hover:text-white hover:bg-green-800 hover:border-green-200"
                >
                    بحث
                </button>
            </div>

            <div id="result-table" className="py-6 mt-2 text-center border-2 border-gray-400 rounded-lg direction-rtl">

                {officers.length > 0 ? (
                    <table className="w-full border border-collapse border-black table-auto">
                        <thead>
                            <tr>
                                <th className="px-4 py-2 border border-black">المسلسل</th>
                                <th className="px-4 py-2 border border-black">الرقم العسكري</th>
                                <th className="px-4 py-2 border border-black">الإسم</th>
                                <th className="px-4 py-2 border border-black">الرتبة</th>
                                <th className="px-4 py-2 border border-black">التفاصيل</th>
                                <th className="px-4 py-2 border border-black">التاريخ</th>
                            </tr>
                        </thead>
                        <tbody>
                            {officers.map((officer, index) => (
                                <tr key={index}>
                                    <td className="px-4 py-2 border border-black">{index + 1}</td>
                                    <td className="px-4 py-2 border border-black">{officer.MIL_NO}</td>
                                    <td className="px-4 py-2 border border-black">{officer.OFF_NAME}</td>
                                    <td className="px-4 py-2 border border-black">{officer.RNK}</td>
                                    <td className="px-4 py-2 border border-black">{officer.CASE_DETAIL}</td>
                                    <td className="px-4 py-2 border border-black">{new Date(officer.CASE_DATE).toLocaleDateString()}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <div>لا توجد بيانات</div>
                )}
            </div>

            <div className="justify-center pt-2 text-center">
                <button
                    onClick={generatePDF}
                    type="button"
                    className="px-6 py-3 mb-4 text-lg font-medium text-center text-green-700 border border-green-700 rounded-lg hover:text-white hover:bg-green-800 hover:border-green-200"
                >
                    طباعة PDF
                </button>
            </div>
        </div>
    );
}

export default Tqareer17;
