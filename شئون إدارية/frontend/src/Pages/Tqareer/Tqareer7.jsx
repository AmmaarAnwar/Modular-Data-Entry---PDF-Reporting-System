import React, { useState } from 'react';
import axios from 'axios';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

function Taqreer7() {
  const [data, setData] = useState(null);
  const [showPdfButton, setShowPdfButton] = useState(false);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://30.30.30.53:3000/reports/off_img_count');
      setData(response.data.data);
      setShowPdfButton(true);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const generatePDF = async () => {
    const element = document.getElementById('tables-container');

    // Convert the HTML tables to canvas using html2canvas
    const canvas = await html2canvas(element);

    // Convert the canvas to an image
    const imgData = canvas.toDataURL('image/png');

    // Create a new jsPDF instance
    const pdf = new jsPDF();

    // Add the image of the tables to the PDF
    pdf.addImage(imgData, 'PNG', 15, 30, 180, 160); // Adjusted dimensions to fit the page

    // Add footer with date and time
    const currentDate = new Date().toLocaleString();
    pdf.setFontSize(10);
    pdf.text(`${currentDate}`, 200, 290, null, null, "right");

    // Define the PDF file name with the current date
    const fileName = `تقرير حصر الصور ${new Date().toLocaleDateString('ar-EG')}.pdf`;

    const watermarkImage = await new Promise((resolve) => {
      const img = new Image();
      img.src = '/.png';
      img.onload = () => {
        resolve(img);
      };
    });

    // Set the watermark size and position
    const imgWidth = 150; // Customize the width
    const imgHeight = 150; // Customize the height
    const posX = (pdf.internal.pageSize.getWidth() - imgWidth) / 2; // Centered horizontally
    const posY = (pdf.internal.pageSize.getHeight() - imgHeight) / 2; // Centered vertically

    // pdf.addImage(imgData, 'PNG', 15, 30, 180, 0); // Adjusted dimensions to fit the page
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

      <button onClick={fetchData}
        type="button" className="px-6 py-3 mb-4 text-lg font-medium text-center text-green-700 border border-green-700 rounded-lg hover:text-white hover:bg-green-800 hover:border-green-200">
        تحميل التقرير
      </button>

      {data && (
        <div id="tables-container" className="direction-rtl text-center border-2 border-gray-400 mt-2 rounded-lg h[200px] py-6">
          <div className="flex items-center justify-between pl-1 pr-5 m-2 border-gray-400 rounded-xl">

            <div>
              <p className="text-xl font-bold underline underline-offset-4">
                حصر الصور
              </p>
            </div>
            <div>
              <img className="h-[100px] w-[130px] " src="she3ar.png" alt="شعار المدفعية" />
            </div>
          </div>
          <h1 className="py-4 mb-4 text-2xl font-bold">تقرير حصر الصور</h1>

          {/* Table */}
          <table className="w-4/5 mx-auto border border-collapse border-black">
            <thead>
              <tr>
                <th className="px-4 py-2 border border-black">مسلسل</th>
                <th className="px-4 py-2 border border-black">الرقم </th>
                <th className="px-4 py-2 border border-black">رقم </th>
                <th className="px-4 py-2 border border-black">الاسم</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index}>
                  <td className="px-4 py-2 border border-black">{index + 1}</td>
                  <td className="px-4 py-2 border border-black">{item.MIL_NO}</td>
                  <td className="px-4 py-2 border border-black">{item.SENIORITY_NO}</td>
                  <td className="px-4 py-2 border border-black">{item.NAME}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {showPdfButton && (
        <button onClick={generatePDF}
          type="button" className="px-6 py-3 mb-4 text-lg font-medium text-center text-green-700 border border-green-700 rounded-lg hover:text-white hover:bg-green-800 hover:border-green-200">
          تصدير PDF
        </button>
      )}
    </div>
  );
}

export default Taqreer7;
