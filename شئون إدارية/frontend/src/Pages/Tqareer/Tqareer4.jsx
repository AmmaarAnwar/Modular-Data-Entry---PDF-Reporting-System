import React, { useState } from 'react';
import axios from 'axios';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

function Tqareer4() {
    const [unitNo, setUnitNo] = useState('');
    const [dateIn, setDateIn] = useState('');
    const [errorMsg, setErrorMsg] = useState('');
    const [officersData, setOfficersData] = useState(null);

    const handleSubmit = async () => {
        const unitNoNumeric = Number(unitNo);  // Convert to a number

        if (!unitNoNumeric || !dateIn) {
            setErrorMsg('الرجاء إدخال جميع الحقول');
            return;
        }

        try {
            const response = await axios.get(
                `http://30.30.30.53:3000/reports/unit_and_followed_officers/`,
                {
                    params: { unit_no: unitNoNumeric, date_in: dateIn },
                }
            );

            setOfficersData(response.data);
            setErrorMsg('');
        } catch (error) {
            setErrorMsg('فشل الاتصال بالخادم');
            setOfficersData(null);
        }
    };

    const generatePDF = async () => {
        const pdf = new jsPDF();
        const watermarkImage = await new Promise((resolve) => {
            const img = new Image();
            img.src = '/she3ar.png';
            img.onload = () => {
                resolve(img);
            };
        });

        const pageWidth = pdf.internal.pageSize.width;
        const pageHeight = pdf.internal.pageSize.height;
        const marginX = 15;
        const marginY = 15;

        const rowsPerPage = 22;  // Adjust based on the number of rows that fit per page
        let currentPage = 0;
        let rowCount = 0;

        // Add watermark to each page
        const addWatermark = () => {
            pdf.setGState(new pdf.GState({ opacity: 0.2 }));
            pdf.addImage(watermarkImage, 'PNG', (pageWidth - 150) / 2, (pageHeight - 150) / 2, 150, 150);
            pdf.setGState(new pdf.GState({ opacity: 1 }));
        };

        // Split data and add to PDF with pagination
        for (let start = 0; start < officersData.data.length; start += rowsPerPage) {
            if (currentPage > 0) {
                pdf.addPage();
            }

            const chunk = officersData.data.slice(start, start + rowsPerPage);

            const container = document.createElement('div');
            container.innerHTML = `

                <table style="border-collapse: collapse; width: 100%;">
                <thead>
                    <tr>
                        <th style="border: 1px solid #000; padding: 8px;">مسلسل</th>
                        <th style="border: 1px solid #000; padding: 8px;">الاقدمية</th>
                        <th style="border: 1px solid #000; padding: 8px;"></th>
                        <th style="border: 1px solid #000; padding: 8px;"></th>
                        <th style="border: 1px solid #000; padding: 8px;">الاسم</th>
                        <th style="border: 1px solid #000; padding: 8px;"></th>
                        <th style="border: 1px solid #000; padding: 8px;">الوظيفة الحالية</th>
                        <th style="border: 1px solid #000; padding: 8px;">ت.الشغل</th>
                        <th style="border: 1px solid #000; padding: 8px;">ت.الشغل</th>
                        <th style="border: 1px solid #000; padding: 8px;">ت.</th>
                        <th style="border: 1px solid #000; padding: 8px;">ت.الميلاد</th>
                        <th style="border: 1px solid #000; padding: 8px;">ت.الميلاد</th>
                        <th style="border: 1px solid #000; padding: 8px;">ملاحظات</th>
                    </tr>
                </thead>
                <tbody>
                    ${chunk.map((officer, index) =>
                `<tr>
                            <td style="border: 1px solid #000; padding: 8px;">${index + 1}</td>
                            <td style="border: 1px solid #000; padding: 8px;">${officer.SENIORITY_NAME}</td>
                            <td style="border: 1px solid #000; padding: 8px;">${officer.RANK_NAME}</td>
                            <td style="border: 1px solid #000; padding: 8px;">${officer.JOB_DUR}</td>
                            <td style="border: 1px solid #000; padding: 8px;">${officer.OFFICER_NAME}</td>
                            <td style="border: 1px solid #000; padding: 8px;">${officer.CORP_NAME}</td>
                            <td style="border: 1px solid #000; padding: 8px;">${officer.SRV_NAME}</td>
                            <td style="border: 1px solid #000; padding: 8px;">${new Date(officer.EXECUTION_DATE).toLocaleDateString()}</td>
                            <td style="border: 1px solid #000; padding: 8px;">${officer.RNK_DUR}</td>
                            <td style="border: 1px solid #000; padding: 8px;">${new Date(officer.PROM_DATE).toLocaleDateString()}</td>
                            <td style="border: 1px solid #000; padding: 8px;">${new Date(officer.BERTH_DATE).toLocaleDateString()}</td>
                            <td style="border: 1px solid #000; padding: 8px;">${officer.AGE}</td>
                            <td style="border: 1px solid #000; padding: 8px;"></td>
                        </tr>`
            ).join('')}
                </tbody>
            </table>
            
            `;

            document.body.appendChild(container);

            const canvas = await html2canvas(container);
            const imgData = canvas.toDataURL('image/png');
            const imgWidth = pageWidth - 2 * marginX;
            const imgHeight = (canvas.height * imgWidth) / canvas.width;

            pdf.addImage(imgData, 'PNG', marginX, marginY, imgWidth, imgHeight);
            document.body.removeChild(container);

            const currentDate = new Date().toLocaleString();
            pdf.setFontSize(10);
            pdf.text(currentDate, pageWidth - marginX, pageHeight - marginY, null, null, 'right');

            currentPage++;
            rowCount += chunk.length;

        }
        addWatermark();

        const pdfBlob = pdf.output('blob');
        const url = URL.createObjectURL(pdfBlob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `تقرير_وحدة_الوحدات_التابعة_${new Date().toLocaleDateString()}.pdf`;
        link.click();
        URL.revokeObjectURL(url);
    };

    return (
        <div className="text-right">
            <div className="flex justify-start align-middle m-1 justify-center text-center pt-20 direction-rtl text-center border-2 border-gray-400 mt-2 rounded-lg h[200px] py-6">
                <label className="mx-2 font-medium text-gray-900">الوحدة</label>
                <input
                    type="number"
                    value={unitNo}
                    onChange={(e) => setUnitNo(e.target.value)}
                    className="block p-1 text-sm text-gray-900 border border-gray-300 rounded-lg mil_no bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="رقم الوحدة"
                />
                <label className="mx-2 font-medium text-gray-900">التاريخ</label>
                <input
                    type="date"
                    value={dateIn}
                    onChange={(e) => setDateIn(e.target.value)}
                    className="block p-1 text-sm text-gray-900 border border-gray-300 rounded-lg mil_no bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="تاريخ"
                />
            </div>

            <div className="justify-center pt-20 text-center">
                {errorMsg && <p className="text-red-600">{errorMsg}</p>}
                <button
                    type="button"
                    onClick={handleSubmit}
                    className="px-6 py-3 mb-4 text-lg font-medium text-center text-green-700 border border-green-700 rounded-lg hover:text-white hover:bg-green-800 hover:border-green-200"
                >
                    تحميل
                </button>
            </div>

            {officersData && (
                <div>
                    <h3 className="mb-4 text-lg font-bold text-center">{officersData.title}</h3>

                    <table className="w-full text-center border border-collapse border-gray-500 table-auto">
                        <thead>
                            <tr className="bg-gray-200">
                                <th className="p-2 border border-gray-500">مسلسل</th>
                                <th className="p-2 border border-gray-500">الاقدمية</th>
                                <th className="p-2 border border-gray-500"></th>
                                <th className="p-2 border border-gray-500"></th>
                                <th className="p-2 border border-gray-500">الاسم</th>
                                <th className="p-2 border border-gray-500"></th>
                                <th className="p-2 border border-gray-500">الوظيفة الحالية</th>
                                <th className="p-2 border border-gray-500">ت.الشغل</th>
                                <th className="p-2 border border-gray-500">ت.الشغل</th>
                                <th className="p-2 border border-gray-500">ت.</th>
                                <th className="p-2 border border-gray-500">ت.الميلاد</th>
                                <th className="p-2 border border-gray-500">ت.الميلاد</th>
                                <th className="p-2 border border-gray-500">ملاحظات</th>
                            </tr>
                        </thead>
                        <tbody>
                            {officersData.data.map((officer, index) => (
                                <tr key={index} className="text-center">
                                    <td className="p-2 border border-gray-500">{index + 1}</td>
                                    <td className="p-2 border border-gray-500">{officer.SENIORITY_NAME}</td>
                                    <td className="p-2 border border-gray-500">{officer.RANK_NAME}</td>
                                    <td className="p-2 border border-gray-500">{officer.JOB_DUR}</td>
                                    <td className="p-2 border border-gray-500">{officer.OFFICER_NAME}</td>
                                    <td className="p-2 border border-gray-500">{officer.CORP_NAME}</td>
                                    <td className="p-2 border border-gray-500">{officer.SRV_NAME}</td>
                                    <td className="p-2 border border-gray-500">{new Date(officer.EXECUTION_DATE).toLocaleDateString()}</td>
                                    <td className="p-2 border border-gray-500">{officer.RNK_DUR}</td>
                                    <td className="p-2 border border-gray-500">{new Date(officer.PROM_DATE).toLocaleDateString()}</td>
                                    <td className="p-2 border border-gray-500">{new Date(officer.BERTH_DATE).toLocaleDateString()}</td>
                                    <td className="p-2 border border-gray-500">{officer.AGE}</td>
                                    <td className="p-2 border border-gray-500">-</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className='text-center'>
                        <button
                            type="button"
                            onClick={generatePDF}
                            className="px-6 py-3 mb-4 text-lg font-medium text-center text-green-700 border border-green-700 rounded-lg hover:text-white hover:bg-green-800 hover:border-green-200">

                            تنزيل PDF
                        </button>
                    </div>
                </div>

            )}
        </div>
    );
}

export default Tqareer4;
