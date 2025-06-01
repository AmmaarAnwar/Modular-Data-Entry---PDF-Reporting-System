import React, { useState } from "react";
import axios from "axios";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

function Taqreer1() {
  const [data, setData] = useState(null);
  const [showPdfButton, setShowPdfButton] = useState(false);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "http://30.30.30.53:3000/reports/statusreport"
      );
      setData(response.data.data);
      setShowPdfButton(true);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const generatePDF = async () => {
    const element = document.getElementById("tables-container");

    // Convert the HTML tables to canvas using html2canvas
    const canvas = await html2canvas(element);

    // Convert the canvas to an image
    const imgData = canvas.toDataURL("image/png");

    // Create a new jsPDF instance
    const pdf = new jsPDF();

    // Add footer with date and time
    const currentDate = new Date().toLocaleString();
    pdf.setFontSize(10);
    pdf.text(currentDate, 200, 290, null, null, "right");

    // Define the PDF file name with the current date
    const fileName = `${new Date().toLocaleDateString(
      "ar-EG"
    )}.pdf`;

    // Add watermark in the background
    const watermarkImage = await new Promise((resolve) => {
      const img = new Image();
      img.src = "/.png";
      img.onload = () => {
        resolve(img);
      };
    });

    // Set the watermark size and position
    const imgWidth = 150; // Customize the width
    const imgHeight = 150; // Customize the height
    const posX = (pdf.internal.pageSize.getWidth() - imgWidth) / 2; // Centered horizontally
    const posY = (pdf.internal.pageSize.getHeight() - imgHeight) / 2; // Centered vertically

    pdf.addImage(imgData, "PNG", 15, 30, 180, 220); // Adjusted dimensions to fit the page
    pdf.setGState(new pdf.GState({ opacity: 0.2 })); // Set opacity to make the watermark semi-transparent
    pdf.addImage(watermarkImage, "PNG", posX, posY, imgWidth, imgHeight);
    pdf.setGState(new pdf.GState({ opacity: 2 }));

    // Save the PDF
    const pdfBlob = pdf.output("blob");
    const url = URL.createObjectURL(pdfBlob);
    const link = document.createElement("a");
    link.href = url;
    link.download = fileName;
    link.click();
    URL.revokeObjectURL(url); // Clean up
  };

  return (
    <div className="justify-center pt-20 text-center">
      <button
        onClick={fetchData}
        type="button"
        className="px-6 py-3 mb-4 text-lg font-medium text-center text-green-700 border border-green-700 rounded-lg hover:text-white hover:bg-green-800 hover:border-green-200"
      >
        تحميل التقرير
      </button>



      {showPdfButton && (
        <button
          onClick={generatePDF}
          type="button"
          className="px-6 py-3 mb-4 text-lg font-medium text-center text-green-700 border border-green-700 rounded-lg hover:text-white hover:bg-green-800 hover:border-green-200"
        >
          تصدير PDF
        </button>
      )}
    </div>
  );
}

export default Taqreer1;
