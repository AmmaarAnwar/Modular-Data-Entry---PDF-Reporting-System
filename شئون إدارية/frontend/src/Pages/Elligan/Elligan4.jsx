import { useState, useRef, useEffect } from "react";

function Elligan4() {
  const [activePopup, setActivePopup] = useState(null);
  const [popupData, setPopupData] = useState(null); // To store API data for the popups
  const [loading, setLoading] = useState(false); // To manage loading state
  const [errorMessage, setErrorMessage] = useState(""); // For error handling

  const popup1Ref = useRef(null);
  const popup2Ref = useRef(null);
  const popup3Ref = useRef(null);
  const popup4Ref = useRef(null);
  const popup5Ref = useRef(null);
  const popup6Ref = useRef(null);

  // Fetch data from the API when a popup is opened
  const fetchDataForPopup = async (popupId) => {
    try {
      setLoading(true);
      setPopupData(null); // Clear previous data
      setErrorMessage(""); // Clear previous error

      const response = await fetch(
        `http://30.30.30.53:3000/lgan/3rdlgan?lganType=${popupId}`
      );
      const data = await response.json();

      if (response.status === 200) {
        setPopupData(data.data); // Store API data in state
      } else {
        setErrorMessage(data.msg || "Error fetching data");
      }
    } catch (error) {
      setErrorMessage("Failed to load data: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  const openPopup = (popupId) => {
    setActivePopup(popupId);
    fetchDataForPopup(popupId); // Fetch data when opening popup
  };

  const closePopup = () => {
    setActivePopup(null);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        popup1Ref.current &&
        !popup1Ref.current.contains(event.target) &&
        popup2Ref.current &&
        !popup2Ref.current.contains(event.target) &&
        popup3Ref.current &&
        !popup3Ref.current.contains(event.target) &&
        popup4Ref.current &&
        !popup4Ref.current.contains(event.target) &&
        popup5Ref.current &&
        !popup5Ref.current.contains(event.target) &&
        popup6Ref.current &&
        !popup6Ref.current.contains(event.target)
      ) {
        closePopup();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="pb-3 text-4xl font-black text-center text-gray-900 dark:text-white">
        <p>عرض اللجنة</p>
      </div>
      <div className="grid grid-cols-12 col-span-12 text-xl font-bold">
        <div className="col-span-12 text-center">
          <h1>اللجان الفرعية رقم </h1>
        </div>
        <div className="grid grid-cols-12 col-span-12 p-4">
          <button
            className="col-span-12 px-4 py-2 m-2 text-white bg-blue-500 rounded-lg"
            onClick={() => openPopup(1)}
          >
            العرض الخاص
          </button>
          <button
            className="col-span-12 px-4 py-2 m-2 text-white bg-blue-500 rounded-lg"
            onClick={() => openPopup(2)}
          >
            متقدم بإستقالتة
          </button>
          <button
            className="col-span-12 px-4 py-2 m-2 text-white bg-blue-500 rounded-lg"
            onClick={() => openPopup(3)}
          >
            تلتمس تولى وظائف
          </button>
          <button
            className="col-span-12 px-4 py-2 m-2 text-white bg-blue-500 rounded-lg"
            onClick={() => openPopup(4)}
          >
            بلتمس تغيير تخصص
          </button>
          <button
            className="col-span-12 px-4 py-2 m-2 text-white bg-blue-500 rounded-lg"
            onClick={() => openPopup(5)}
          >
            التماسات (صخية )
          </button>
          <button
            className="col-span-12 px-4 py-2 m-2 text-white bg-blue-500 rounded-lg"
            onClick={() => openPopup(6)}
          >
            مرشحين لتولى
          </button>

          {/* Popups */}
          {activePopup && (
            <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
              <div
                ref={popup1Ref}
                className="p-6 bg-white rounded-lg shadow-lg"
              >
                <div className="grid grid-cols-12 col-span-12 p-1">
                  <div className="grid grid-cols-12 col-span-12 p-1">
                    <div className="col-span-5" />
                    <p className="col-span-3">العرض اللجنة</p>
                  </div>

                  {/* Loading or Error */}
                  {loading && <p>Loading...</p>}
                  {errorMessage && (
                    <p className="text-red-500">{errorMessage}</p>
                  )}

                  {/* Table for popup data */}
                  {popupData && (
                    <div className="grid grid-cols-12 col-span-12 p-1 overflow-y-scroll h-96">
                      <table className="col-span-12 text-gray-500 auto">
                        <thead className="sticky top-0 text-lg font-bold text-right text-gray-700 bg-white bg-gray-100">
                          <tr>
                            <th className="px-6 py-3">الرتبة</th>
                            <th className="px-6 py-3">الاسم</th>
                            <th className="px-6 py-3">الرقم </th>
                            <th className="px-6 py-3">الرقم السري</th>
                          </tr>
                        </thead>
                        <tbody>
                          {popupData.map((officer, index) => (
                            <tr key={index}>
                              <td className="px-6 py-3">{officer.RANK_NAME}</td>
                              <td className="px-6 py-3">{officer.NAME}</td>
                              <td className="px-6 py-3">{officer.MIL_NO}</td>
                              <td className="px-6 py-3">
                                {officer.SENIORITY_NO}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}

                  <div className="grid grid-cols-12 col-span-12 p-1">
                    <div className="col-span-6" />
                    <button
                      className="px-4 py-2 mt-4 text-white bg-red-500 rounded"
                      onClick={closePopup}
                    >
                      خروج
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Elligan4;
