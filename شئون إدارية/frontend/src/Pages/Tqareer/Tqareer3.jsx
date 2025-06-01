import React, { useState } from 'react';
import Edkhal1_btn from "../../components/Edkhal1_btn";
let setFree = () => {
    const inputs = document.querySelectorAll("input");
    inputs.forEach(element => {
      element.value = null
      element.inputs = null
    });
  }
const Tqareer3 = () => {
    const [scannerInput, setScannerInput] = useState('');  // State to capture QR code data from the scanner

    // Function to handle input changes from the scanner
    const handleInputChange = (e) => {
        setScannerInput(e.target.value);
    };

    // Split the scanner input into an array based on '#'
    const qrCodeArray = scannerInput.split('#');

    // Labels for each part of the QR code data
    const labels = [
        "رقم تحقيق الشخصية", 
        "Unit Code", 
        "رقم ", 
        "من تاريخ", 
        "إلى تاريخ", 
        "", 
        "الأسم", 
        "", 
        "الوظيفة", 
        "تاريخ شغل الوظيفة", 
        "الوحدة", 
        "الدورة",
        "ناتج ", 
        "الحالة الصحية", 
        "العقوبات",
        "المكافات", 
        "الطول", 
        "الوزن", 
        "المدة شهر", 
        "سنة", 
        "توقيع صح", 
        "المجموع", 
        "\\", 
        "\\", 
        "\\", 
        "تقييم الأداء", 
        "\\", 
        "\\", 
        "\\", 
        "\\", 
        "\\", 
        "المجموعة الرأى و التصديق", 
        "المجموعة الرأى و التصديق", 
        "المجموعة الرأى و التصديق", 
        "ملحوظة المباشر", 
        "\\", 
        "رقم تحقيق الشخصية", 
        "", 
        "أسم", 
        "وظيفة", 
        "ملحوظه  ", 
        "\\", 
        "\\", 
        "رقم تحقيق الشخصية", 
        "", 
        "أسم", 
        "وظيفة", 
        "المجموع", 
        "\\", 
        "\\", 
        "\\", 
        "\\", 
        // More labels corresponding to the remaining fields
    ];

    return (
        <div>
            <h1>QR Code Scanner</h1>
            <Edkhal1_btn fn={setFree} name="تفريغ" />


            {/* Input field where the user can scan or paste the QR code data */}
            <textarea
                placeholder="Scan or paste QR code data here"
                value={scannerInput}
                onChange={handleInputChange}
                rows={4}
                style={{ width: '100%', marginBottom: '10px' }}
            />

            {/* Display each split data in labeled input fields */}
            {qrCodeArray.map((item, index) => (
                <div key={index} style={{ marginBottom: '10px' , float:'right' }}>
                    <label style={{ fontWeight: 'bold', display: 'block', marginBottom: '5px' }}>
                        {labels[index] }
                    </label>
                    <input
                        className="block p-1 ml-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 w-l"
                        value={item}
                        readOnly
                    />
                </div>
            ))}
        </div>
    );
};

export default Tqareer3;
