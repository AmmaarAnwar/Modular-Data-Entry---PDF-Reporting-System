import React, { useEffect, useState } from "react";
import axios from "axios";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

function Tqareer24() {
    const [officers, setOfficers] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 30;

    useEffect(() => {
        const fetchOfficers = async () => {
            try {
                const response = await axios.get("http://30.30.30.53:3000/reports/off_rel/");
                setOfficers(response.data.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchOfficers();
    }, []);

    const totalPages = Math.ceil(officers.length / itemsPerPage);

    const paginatedOfficers = officers.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const handlePageChange = (event) => {
        setCurrentPage(Number(event.target.value));
    };

    const generateSinglePagePDF = async () => {
        const element = document.getElementById("table-container");
        const canvas = await html2canvas(element);
        const imgData = canvas.toDataURL("image/png");

        const pdf = new jsPDF();
        pdf.addImage(imgData, "PNG", 15, 30, 180, 160);

        const currentDate = new Date().toLocaleString();
        pdf.setFontSize(10);
        pdf.text(` ${currentDate}`, 200, 290, null, null, "right");

        const fileName = `${new Date().toLocaleDateString()}.pdf`;
        const watermarkImage = await new Promise((resolve) => {
            const img = new Image();
            img.src = '/she3ar.png';
            img.onload = () => {
                resolve(img);
            };
        });

        // Set the watermark size and position
        const imgWidth = 150; // Customize the width
        const imgHeight = 150; // Customize the height
        const posX = (pdf.internal.pageSize.getWidth() - imgWidth) / 2; // Centered horizontally
        const posY = (pdf.internal.pageSize.getHeight() - imgHeight) / 2; // Centered vertically

        pdf.addImage(imgData, 'PNG', 15, 30, 180, 220); // Adjusted dimensions to fit the page
        pdf.setGState(new pdf.GState({ opacity: 0.2 })); // Set opacity to make the watermark semi-transparent
        pdf.addImage(watermarkImage, 'PNG', posX, posY, imgWidth, imgHeight);
        pdf.setGState(new pdf.GState({ opacity: 2 }));

        const pdfBlob = pdf.output('blob');
        const url = URL.createObjectURL(pdfBlob);
        const newTab = window.open(url, '_blank');
        const link = document.createElement('a');
        link.href = url;
        link.download = fileName;
        link.click();
        URL.revokeObjectURL(url); // Clean up
    };

    const generateAllPagesPDF = async () => {
        const pdf = new jsPDF();
        let pageCount = 0;

        for (let page = 1; page <= totalPages; page++) {
            setCurrentPage(page);
            const element = document.getElementById("table-container");
            const canvas = await html2canvas(element);
            const imgData = canvas.toDataURL("image/png");

            if (page > 1) {
                pdf.addPage();
            }
            pdf.addImage(imgData, "PNG", 15, 30, 180, 250);
            pageCount++;
        }

        const currentDate = new Date().toLocaleString();
        pdf.setFontSize(10);
        pdf.text(` ${currentDate}`, 200, 290, null, null, "right");

        const fileName = `${new Date().toLocaleDateString()}.pdf`;
        const pdfBlob = pdf.output('blob');
        const url = URL.createObjectURL(pdfBlob);
        const newTab = window.open(url, '_blank');
        const link = document.createElement('a');
        link.href = url;
        link.download = fileName;
        link.click();
        URL.revokeObjectURL(url);
    };

    return (
        <div className="justify-center pt-20 text-center">
            <h2>عدد الصفح</h2>
            <div className="mb-4">
                <label htmlFor="pageSlider" className="mr-2">الصفحة : </label>
                <input
                    type="range"
                    id="pageSlider"
                    min="1"
                    max={totalPages}
                    value={currentPage}
                    onChange={handlePageChange}
                />
                <span> {currentPage} / {totalPages}</span>
            </div>

            <div id="table-container" className="direction-rtl text-center border-2 border-gray-400 mt-2 rounded-lg h[200px] py-6">

                <table className="w-4/5 mx-auto border border-collapse border-black">
                    <thead>
                        <tr>
                            <th className="px-4 py-2 border border-black">المسلسل</th>
                            <th className="px-4 py-2 border border-black">رقم </th>
                            <th className="px-4 py-2 border border-black">رقم </th>
                            <th className="px-4 py-2 border border-black"></th>
                            <th className="px-4 py-2 border border-black">اسم </th>
                            <th className="px-4 py-2 border border-black">اسم </th>
                            <th className="px-4 py-2 border border-black">درجة القرابة</th>
                            <th className="px-4 py-2 border border-black">الوظيفة</th>
                        </tr>
                    </thead>
                    <tbody>
                        {paginatedOfficers.map((officer, index) => (
                            <tr key={index}>
                                <td className="px-4 py-2 border border-black">
                                    {(currentPage - 1) * itemsPerPage + index + 1}
                                </td>
                                <td className="px-4 py-2 border border-black">{officer.MIL_NO}</td>
                                <td className="px-4 py-2 border border-black">{officer.SENIORITY_NAME}</td>
                                <td className="px-4 py-2 border border-black">{officer.RNK}</td>
                                <td className="px-4 py-2 border border-black">{officer.OFF_NAME}</td>
                                <td className="px-4 py-2 border border-black">{officer.REL_NAME}</td>
                                <td className="px-4 py-2 border border-black">{officer.REL_TYPE}</td>
                                <td className="px-4 py-2 border border-black">{officer.JOB}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <button
                onClick={generateSinglePagePDF}
                type="button"
                className="px-6 py-3 mt-4 text-lg font-medium text-center text-green-700 border border-green-700 rounded-lg hover:text-white hover:bg-green-800 hover:border-green-200"
            >
                تصدير PDF للصفحة الحالية
            </button>

            <button
                onClick={generateAllPagesPDF}
                type="button"
                className="px-6 py-3 mt-4 text-lg font-medium text-center text-blue-700 border border-blue-700 rounded-lg hover:text-white hover:bg-blue-800 hover:border-blue-200"
            >
                تصدير PDF لجميع الصفحات
            </button>
        </div>
    );
}

export default Tqareer24;
