import React, { useEffect, useState } from 'react';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

function Tqareer10() {
    const [xx_s, setxx] = useState([]);
    const [yy_s, setyy] = useState([]);
    const [selected_xx, setSelected_xx] = useState('');
    const [selected_yy, setSelected_yy] = useState('');
    const [result, setResult] = useState(null);
    const [title, setTitle] = useState(''); // New state for title

    // Fetch data for dropdowns
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://30.30.30.53:3000/reports/qualification_co');
                const data = await response.json();
                setxx(data.xxList);
                setyy(data.yyList);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    // Handle search button click
    const handleSearch = async () => {
        try {
            const response = await fetch(
                `http://30.30.30.53:3000/reports/qualification/?xx=${selected_xx}&yy=${selected_yy}`
            );
            const data = await response.json();

            if (response.ok) {
                setResult(data.qual_officers); // Assuming qual_officers is the array you want to display
                setTitle(data.title); // Set the title from API response
            } else {
                console.error('Error:', data.msg);
                setResult(null);
            }
        } catch (error) {
            console.error('Error:', error);
            setResult(null);
        }
    };

    // Generate PDF from the result table
    const generatePDF = async () => {
        const element = document.getElementById('result-table');

        if (element) {
            const pdf = new jsPDF('p', 'mm', 'a4');
            const pageWidth = pdf.internal.pageSize.width;
            const pageHeight = pdf.internal.pageSize.height;
            const topMargin = 20; // Top margin
            const bottomMargin = 20; // Bottom margin
            const marginX = 15; // Left and right margin

            let yPosition = topMargin;

            // Function to add a new page if content overflows
            const addPageIfNeeded = (contentHeight) => {
                if (yPosition + contentHeight > pageHeight - bottomMargin) {
                    pdf.addPage();
                    yPosition = topMargin;
                }
            };

            // Process each section
            const sections = element.querySelectorAll('.my-4');

            for (let i = 0; i < sections.length; i++) {
                const section = sections[i];

                // Split the section into chunks of 30 rows
                const rows = section.querySelectorAll('tbody tr');
                const chunkSize = 30;
                for (let start = 0; start < rows.length; start += chunkSize) {
                    const chunk = Array.from(rows).slice(start, start + chunkSize);

                    // Create a temporary container for the chunk
                    const tempDiv = document.createElement('div');
                    tempDiv.classList.add('pdf-chunk');
                    const tableClone = section.cloneNode(true);
                    const tbody = tableClone.querySelector('tbody');
                    tbody.innerHTML = ''; // Clear existing rows
                    chunk.forEach(row => tbody.appendChild(row.cloneNode(true)));
                    tempDiv.appendChild(tableClone);
                    document.body.appendChild(tempDiv);

                    const canvas = await html2canvas(tempDiv, { scale: 2 });
                    const imgData = canvas.toDataURL('image/png');
                    const imgWidth = pageWidth - 2 * marginX;
                    const imgHeight = (canvas.height * imgWidth) / canvas.width;

                    // Adjust height calculation to include margins and space for content
                    addPageIfNeeded(imgHeight + topMargin + bottomMargin);

                    // Add the section image to the PDF
                    pdf.addImage(imgData, 'PNG', marginX, yPosition, imgWidth, imgHeight);
                    yPosition += imgHeight;

                    // Clean up temporary container
                    document.body.removeChild(tempDiv);

                    // Add watermark to this page
                    const watermarkImage = await new Promise((resolve) => {
                        const img = new Image();
                        img.src = '/.png';
                        img.onload = () => resolve(img);
                    });

                    const watermarkWidth = 150;
                    const watermarkHeight = 150;
                    const watermarkPosX = (pageWidth - watermarkWidth) / 2;
                    const watermarkPosY = (pageHeight - watermarkHeight) / 2;

                    pdf.setPage(pdf.internal.getNumberOfPages());
                    pdf.setGState(new pdf.GState({ opacity: 0.2 }));
                    pdf.addImage(watermarkImage, 'PNG', watermarkPosX, watermarkPosY, watermarkWidth, watermarkHeight);
                    pdf.setGState(new pdf.GState({ opacity: 1 }));
                }
            }

            // Add total count on the last page
            // const totalCountText = `${count}`;
            // pdf.text(totalCountText, marginX, yPosition + 10);

            // Save the PDF
            const pdfBlob = pdf.output('blob');
            const url = URL.createObjectURL(pdfBlob);
            const link = document.createElement('a');
            link.href = url;
            link.download = `حصر بالتأهيل ${new Date().toLocaleDateString('ar-EG')}.pdf`;
            link.click();
            URL.revokeObjectURL(url);
        }
    };

    return (
        <div>
            <div className="border-2 border-gray-400 my-[5px] rounded-xl">
                <div className="flex justify-start my-[5px]">
                    <div className="flex justify-start m-1 align-middle">
                        <label htmlFor="xx" className="mx-2 font-medium text-gray-900">xx</label>
                        <select
                            name="xx"
                            value={selected_xx}
                            onChange={(e) => setSelected_xx(e.target.value)}
                            className="text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                        >
                            <option value=" "></option>
                            {xx_s.map((xx, index) => (
                                <option key={index} value={xx}>
                                    {xx} {/* Display the value here */}
                                </option>
                            ))}
                        </select>

                        <label htmlFor="yy" className="mx-2 font-medium text-gray-900">yy</label>
                        <select
                            name="yy"
                            value={selected_yy}
                            onChange={(e) => setSelected_yy(e.target.value)}
                            className="text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                        >
                            <option value=" "></option>
                            {yy_s.map((yy, index) => (
                                <option key={index} value={yy}>
                                    {yy} {/* Display the value here */}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                {/* Search Button */}
                <div className="justify-center pt-2 text-center">
                    <button
                        type="button" onClick={handleSearch} className="px-6 py-3 mb-4 text-lg font-medium text-center text-green-700 border border-green-700 rounded-lg hover:text-white hover:bg-green-800 hover:border-green-200">
                        بحث
                    </button>
                </div>

                {/* Result Table */}
                {result && (
                    <div id="result-table" className="overflow-x-auto">
                        <h2 className="my-4 text-xl font-bold text-center">{title}</h2>
                        <table className="w-full border border-collapse border-gray-400 table-auto">
                            <thead>
                                <tr>
                                    <th className="px-4 py-2 border border-gray-300">م</th>
                                    <th className="px-4 py-2 border border-gray-300"></th>
                                    <th className="px-4 py-2 border border-gray-300"></th>
                                    <th className="px-4 py-2 border border-gray-300">ت.ش</th>
                                    <th className="px-4 py-2 border border-gray-300"></th>
                                    <th className="px-4 py-2 border border-gray-300"></th>
                                    <th className="px-4 py-2 border border-gray-300">تاريخ </th>
                                    <th className="px-4 py-2 border border-gray-300">اسم</th>
                                    <th className="px-4 py-2 border border-gray-300"> </th>
                                    <th className="px-4 py-2 border border-gray-300">سنة الحصول</th>
                                    <th className="px-4 py-2 border border-gray-300">دفاع</th>
                                    <th className="px-4 py-2 border border-gray-300">سنة الحصول</th>
                                    <th className="px-4 py-2 border border-gray-300"> </th>
                                    <th className="px-4 py-2 border border-gray-300">سنة الحصول</th>
                                    <th className="px-4 py-2 border border-gray-300">الوظيفة الحالية</th>
                                    <th className="px-4 py-2 border border-gray-300">ت.الشغل</th>
                                </tr>
                            </thead>
                            <tbody>
                                {result.map((officer, index) => (
                                    <tr key={index}>
                                        <td className="px-4 py-2 border border-gray-300">{officer.serial}</td>
                                        <td className="px-4 py-2 border border-gray-300">{officer.batch1}</td>
                                        <td className="px-4 py-2 border border-gray-300">{officer.batch2}</td>
                                        <td className="px-4 py-2 border border-gray-300">{officer.mil_no}</td>
                                        <td className="px-4 py-2 border border-gray-300">{officer.sen}</td>
                                        <td className="px-4 py-2 border border-gray-300">{officer.rank_name}</td>
                                        <td className="px-4 py-2 border border-gray-300">{new Date(officer.prom_date).toLocaleDateString()}</td>
                                        <td className="px-4 py-2 border border-gray-300">{officer.off_name}</td>
                                        <td className="px-4 py-2 border border-gray-300">{officer.harp_3lia1}</td>
                                        <td className="px-4 py-2 border border-gray-300">{officer.harp_3lia2}</td>
                                        <td className="px-4 py-2 border border-gray-300">{officer.dfa31}</td>
                                        <td className="px-4 py-2 border border-gray-300">{officer.dfa32}</td>
                                        <td className="px-4 py-2 border border-gray-300">{officer.arkan7rp1}</td>
                                        <td className="px-4 py-2 border border-gray-300">{officer.arkan7rp2}</td>
                                        <td className="px-4 py-2 border border-gray-300">{officer.srv}</td>
                                        <td className="px-4 py-2 border border-gray-300">{new Date(officer.exec_date).toLocaleDateString()}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                )}

                {/* PDF Button */}
                {result && (
                    <div className="justify-center pt-4 text-center">
                        <button onClick={generatePDF}
                            className="px-6 py-3 mb-4 text-lg font-medium text-center text-green-700 border border-green-700 rounded-lg hover:text-white hover:bg-green-800 hover:border-green-200">
                            تحميل PDF
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Tqareer10;
