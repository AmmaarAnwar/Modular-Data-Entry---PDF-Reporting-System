import React, { useState, useEffect } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

function Tqareer12() {
  const [dates, setDates] = useState([]);
  const [degrees, setDegrees] = useState([]);
  const [selectedStartDate, setSelectedStartDate] = useState('');
  const [selectedEndDate, setSelectedEndDate] = useState('');
  const [selectedDegree, setSelectedDegree] = useState('');
  const [result, setResult] = useState(null);
  const [count, setCount] = useState(0);

  // Fetch data for dropdowns
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://30.30.30.53:3000/reports/co_officers_degree/');
        const data = await response.json();
        setDates(data.dates);
        setDegrees(data.Degrees);
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
        `http://30.30.30.53:3000/reports/officers_degree/?degree=${selectedDegree}&date1=${selectedStartDate}&date2=${selectedEndDate}`
      );
      const data = await response.json();

      if (response.ok) {
        setResult(data.data.data);
        setCount(data.data.count);
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
      link.download = `حصر_بتقارير _الفرق_${new Date().toLocaleDateString('ar-EG')}.pdf`;
      link.click();
      URL.revokeObjectURL(url);
    }
  };
  





  return (
    <div>
      <div className="border-2 border-gray-400 my-[5px] rounded-xl">
        <div className="flex justify-start my-[5px]">
          <div className="flex justify-start m-1 align-middle">
            {/* Date and Degree Selectors */}
            <label htmlFor="ser_start_date" className="mx-2 font-medium text-gray-900">من التاريخ</label>
            <select name="ser_start_date" value={selectedStartDate} onChange={(e) => setSelectedStartDate(e.target.value)} className="text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 ">
              <option value=" "></option>
              {dates.map((date, index) => (
                <option key={index} value={(new Date(date.END_DATE)).toLocaleDateString('en-CA')}>
                  {(new Date(date.END_DATE)).toLocaleDateString('en-CA')}
                </option>
              ))}
            </select>
            <label htmlFor="ser_end_date" className="mx-2 font-medium text-gray-900">الى التاريخ</label>
            <select name="ser_end_date" value={selectedEndDate} onChange={(e) => setSelectedEndDate(e.target.value)} className="text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 ">
              <option value=" "></option>
              {dates.map((date, index) => (
                <option key={index} value={(new Date(date.END_DATE)).toLocaleDateString('en-CA')}>
                  {(new Date(date.END_DATE)).toLocaleDateString('en-CA')}
                </option>
              ))}
            </select>

            <label htmlFor="degree" className="mx-2 font-medium text-gray-900">درجة</label>
            <select name="degree" value={selectedDegree} onChange={(e) => setSelectedDegree(e.target.value)} className="text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 ">
              <option value=" "></option>
              {degrees.map((degree, index) => (
                <option key={index} value={degree.NO}>
                  {degree.NO}
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
        <div id="result-table">
          {result && (
            <div >
              {Object.keys(result).map((key, index) => (
                <div key={index} className="my-4">
                  <h2 className="px-4 py-2 text-lg font-bold underline border underline-offset-4">{key}</h2>
                  <table className="min-w-full border border-collapse border-gray-400 table-auto">
                    <thead>
                      <tr>
                        <th className="px-4 py-2 border">م</th>
                        <th className="px-4 py-2 border">رقم </th>
                        <th className="px-4 py-2 border">رقم </th>
                        <th className="px-4 py-2 border"></th>
                        <th className="px-4 py-2 border">الرتية</th>
                        <th className="px-4 py-2 border">اسم </th>
                      </tr>
                    </thead>
                    <tbody>
                      {result[key].officers.map((officer, officerIndex) => (
                        <tr key={officerIndex}>
                          <td className="px-4 py-2 border">{officerIndex + 1}</td>
                          <td className="px-4 py-2 border">{officer.MIL_NO}</td>
                          <td className="px-4 py-2 border">{officer.SENIORITY_NO}</td>
                          <td className="px-4 py-2 border">{officer.UNIT_NAME}</td>
                          <td className="px-4 py-2 border">{officer.RANK_NAME}</td>
                          <td className="px-4 py-2 border">{officer.OFF_NAME}</td>
                        </tr>
                      ))}
                    </tbody>
                    <tfoot>
                      <tr>
                        <td colSpan="6" className="px-4 py-2 text-right border">
                          العدد: {result[key].count}
                        </td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              ))}
            </div>
          )}
          {result && (
            <div className="px-4 py-2 text-right border">
              الاجمالي: {count}
            </div>
          )}
        </div>


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

export default Tqareer12;
