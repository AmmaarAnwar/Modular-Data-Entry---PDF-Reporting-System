import React, { useEffect, useState } from "react";
import axios from "axios";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

function Tqareer26() {
    const [officers, setOfficers] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 30;

    // Fetch data from the API
    useEffect(() => {
        const fetchOfficers = async () => {
            try {
                const response = await axios.get("http://30.30.30.53:3000/reports/mil_off_ser/");
                setOfficers(response.data.data); // Assuming data structure is {count: number, data: [...]}
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchOfficers();
    }, []);

    // Calculate the number of pages
    const totalPages = Math.ceil(officers.length / itemsPerPage);

    // Get the data for the current page
    const paginatedOfficers = officers.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    // Function to handle page changes
    const handlePageChange = (event) => {
        setCurrentPage(Number(event.target.value));
    };

    // Function to generate the PDF report
    const generatePDF = async () => {
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

    return (
        <div className="justify-center pt-20 text-center">
            <div id="table-container" className="direction-rtl text-center border-2 border-gray-400 mt-2 rounded-lg h[200px] py-6">
                <div className="flex items-center justify-between pl-1 pr-5 m-2 border-gray-400 rounded-xl">

                    <div>
                        <p className="text-xl font-bold underline underline-offset-4">
                             التمثيل  
                        </p>
                    </div>
                    <div>
                        <img className="h-[100px] w-[130px] " src="she3ar.png" alt="شعار المدفعية" />
                    </div>
                </div>
                <table className="w-4/5 mx-auto border border-collapse border-black">
                    <thead>
                        <tr>
                            <th className="px-4 py-2 border border-black">المسلسل</th>
                            <th className="px-4 py-2 border border-black"></th>
                            <th className="px-4 py-2 border border-black">تاريخ </th>
                            <th className="px-4 py-2 border border-black">اسم </th>
                            <th className="px-4 py-2 border border-black">الوحدة و الظيفة</th>
                            <th className="px-4 py-2 border border-black">الوظيفة</th>
                        </tr>
                    </thead>
                    <tbody>
                        {paginatedOfficers.map((officer, index) => (
                            <tr key={index}>
                                <td className="px-4 py-2 border border-black">
                                    {(currentPage - 1) * itemsPerPage + index + 1}
                                </td>
                                <td className="px-4 py-2 border border-black">{officer.SENIORITY_NAME}</td>
                                <td className="px-4 py-2 border border-black">{officer.RANK_NAME}</td>
                                <td className="px-4 py-2 border border-black">{(new Date(officer.EXECUTION_DATE)).toLocaleDateString('en-CA')}</td>
                                <td className="px-4 py-2 border border-black">{officer.OFFICER_NAME}</td>
                                <td className="px-4 py-2 border border-black">{officer.SRV_NAME}</td>
                                <td className="px-4 py-2 border border-black">{(new Date(officer.PRO_DATE)).toLocaleDateString('en-CA')}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Button to Export to PDF */}
            <button
                onClick={generatePDF}
                type="button"
                className="px-6 py-3 mt-4 text-lg font-medium text-center text-green-700 border border-green-700 rounded-lg hover:text-white hover:bg-green-800 hover:border-green-200"
            >
                تصدير PDF
            </button>
        </div>
    );
}

export default Tqareer26;
