import { useState, useEffect } from "react";

const Tqareer6 = () => {
  const [services, setServices] = useState([]);
  const [seniorityLists, setSeniorityLists] = useState([]);
  const [formData, setFormData] = useState({
    unit: "",
    sen_list: "",
    ser_end_date: "",
    sen_no1: null,
    sen_no2: null,
  });
  const [officerData, setOfficerData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Format the LAST_REP date
  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-CA"); // ISO 8601 format
  };

  // Fetching the services and seniority lists from the API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://30.30.30.53:3000/reports/co_efficiency_report/"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setServices(data.services);
        setSeniorityLists(data.SENIORITY_LISTS);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Convert form data to query parameters
    const queryParams = new URLSearchParams({
      unit: formData.unit,
      sen_list: formData.sen_list,
      sen_no1: formData.sen_no1 || "", // Use empty string if not provided
      sen_no2: formData.sen_no2 || "", // Use empty string if not provided
      ser_end_date: formData.ser_end_date, // Ensure this is in the format YYYY-MM-DD
    }).toString();

    try {
      const response = await fetch(
        `http://30.30.30.53:3000/reports/efficiency_report/?${queryParams}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch officer data");
      }

      const data = await response.json();
      setOfficerData(data.data);
      setIsModalOpen(true); // Open modal when data is fetched
    } catch (error) {
      console.error("Error fetching officer data:", error);
    }
  };

  // Close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsModalOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="border-2 border-gray-400 my-[5px] rounded-xl">
          <div className="flex justify-start my-[5px]">
            {/* Seniority List Datalist */}
            <div className="flex justify-start m-1 align-middle">
              <label
                htmlFor="sen_list"
                className="mx-2 font-medium text-gray-900"
              >
                hg;
              </label>
              <input
                list="seniorityLists"
                name="sen_list"
                id="sen_list"
                className="text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                onChange={handleInputChange}
              />
              <datalist id="seniorityLists">
                {seniorityLists.map((list, index) => (
                  <option key={index} value={list.NO}>
                    {list.NAME}
                  </option>
                ))}
              </datalist>
            </div>

            {/* Other input fields */}
            <div className="flex justify-start m-1 align-middle">
              <label
                htmlFor="sen_no1"
                className="mx-2 font-medium text-gray-900"
              >
                من
              </label>
              <input
                name="sen_no1"
                type="number"
                id="sen_no1"
                className="block w-20 p-1 ml-1 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                onChange={handleInputChange}
                required
              />
              <label
                htmlFor="sen_no2"
                className="mx-2 font-medium text-gray-900"
              >
                الى
              </label>
              <input
                name="sen_no2"
                type="number"
                id="sen_no2"
                className="block p-1 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                onChange={handleInputChange}
                required
              />
              <label
                htmlFor="ser_end_date"
                className="mx-2 font-medium text-gray-900"
              >
                التاريخ
              </label>
              <input
                name="ser_end_date"
                type="date"
                id="ser_end_date"
                className="block p-1 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                onChange={handleInputChange}
                required
              />
            </div>

            {/* Services Datalist */}
            <div className="flex justify-start m-1 align-middle">
              <input
                list="services"
                name="unit"
                placeholder="خدمات"
                id="unit"
                className="text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                onChange={handleInputChange}
              />
              <datalist id="services">
                {services.map((service, index) => (
                  <option key={index} value={service.SD_NAME1}>
                    {service.SD_NAME1}
                  </option>
                ))}
              </datalist>
            </div>
          </div>
          <div className="justify-center pt-2 text-center">
            <button
              type="submit"
              className="px-4 py-3 mb-4 text-lg font-medium text-center text-green-700 border border-green-700 rounded-lg hover:text-white hover:bg-green-800 hover:border-green-200"
            >
              بحث
            </button>
          </div>
        </div>
      </form>

      {/* Modal for Officer Data */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-600 bg-opacity-50">
          <div className="relative w-full p-6 bg-white rounded-lg shadow-lg max-w-7xl">
            <button
              type="button"
              onClick={closeModal}
              className="absolute inline-flex items-center justify-center w-8 h-8 text-sm text-gray-400 bg-transparent rounded-lg top-2 right-2 hover:bg-gray-200 hover:text-gray-900"
            >
              <svg
                className="w-3 h-3"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
            </button>
            <div className="relative">
              {/* Watermark */}
              <img
                src="/she3ar.png"
                alt="Watermark"
                className="absolute inset-0 z-10 object-cover pr-96 opacity-30"
                style={{ pointerEvents: "none" }}
              />
              <table className="z-20 w-full bg-white border border-gray-300">
                <thead>
                  <tr className="w-full bg-gray-100 border-b">
                    <th className="p-2 px-4 py-2 text-center border">ت </th>
                    <th className="p-2 px-4 py-2 text-center border">ت </th>
                    <th className="p-2 px-4 py-2 text-center border"></th>
                    <th className="p-2 px-4 py-2 text-center border">الاسم</th>
                    <th className="p-2 px-4 py-2 text-center border">
                      الوظيفة
                    </th>
                    <th className="p-2 px-4 py-2 text-center border">
                      تاريخ اخر تقرير
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {officerData.map((officer, index) => (
                    <tr key={index} className="border-b">
                      <td className="p-2 px-4 py-2 border">{officer.SEN_NO}</td>
                      <td className="p-2 px-4 py-2 border">{officer.MIL_NO}</td>
                      <td className="p-2 px-4 py-2 border">
                        {officer.OFF_NAME}
                      </td>
                      <td className="p-2 px-4 py-2 border">{officer.RNK}</td>
                      <td className="p-2 px-4 py-2 border">{officer.SRV}</td>
                      <td className="p-2 px-4 py-2 border">
                        {officer.LAST_REP
                          ? formatDate(officer.LAST_REP)
                          : "N/A"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Tqareer6;
