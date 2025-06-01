import axios from "axios";
import { useEffect, useState } from "react";
import Edkhal1_menu from "../../components/Edkhal1_menu";
import Edkhal1_btn from "../../components/Edkhal1_btn";
function Edkhal1() {
  const [counter, setCounter] = useState(0);
  const [dataLength, setDataLength] = useState(0);
  const [data, setData] = useState([]);
  const [searched, setSearched] = useState(false)
  const officerCountNext = async () => {
    let newCounter = (counter + 1) % dataLength;
    if (dataLength == 0) {
      newCounter = 0
      document.getElementById("currant").innerHTML = `${0} من ${0}`;
    } else {
      setCounter(newCounter);
      document.getElementById("currant").innerHTML = `${newCounter + 1} من ${dataLength}`;
      if (dataLength != 1 && dataLength != 0) {
        setValues(postObject);
        await fetchData(data[newCounter][0], data[newCounter][1]);
      }
    }
  };
  const officerCountPrev = async () => {
    let newCounter = (counter - 1 + dataLength) % dataLength;
    if (dataLength == 0) {
      newCounter = 0
      document.getElementById("currant").innerHTML = `${0} من ${0}`;
    } else {
      setCounter(newCounter);
      document.getElementById("currant").innerHTML = `${newCounter + 1} من ${dataLength}`;
      if (dataLength != 1 && dataLength != 0) {
        setValues(postObject);
        await fetchData(data[newCounter][0], data[newCounter][1]);
      }
    }
  };
  const handleChangeDisabled = async (ele) => {
    const { name, value } = ele.target;
    setValues({
      ...values,
      [name]: value,
    });

    if (name === 'MAJOR_SPEC_NO') {
      setIsSecondInputDisabled(value.trim() === '');
      await getMinorData(value)
    }
  };
  const getMinorData = async (value) => {
    try {
      console.log(value);
      let response = await axios.post(`http://30.30.30.53:3000/edkhal/edkhal1.4`, {
        MAJOR_SPEC_NO: value
      });
      console.log(response);
    } catch (error) {
    }
  }
  const SearchBTN = async () => {
    setValues(postObject);
    try {
      const response2 = await axios.post(`http://30.30.30.53:3000/edkhal/edkhal1.2`, queryobj);
      if (response2.data.msg) {
        setValues((values) => ({
          ...values,
          warning: true,
          msg: response2.data.msg,
        }));
      }
      setData(response2.data.data.data);
      setDataLength(response2.data.data.dataLenght);
      document.getElementById("currant").innerHTML = `1 من ${response2.data.data.dataLenght}`;
      if (response2.data.data.dataLenght > 0) {
        await fetchData(response2.data.data.data[0][0], response2.data.data.data[0][1]);
      } else {
        setValues({
          ...values,
          warning: true,
          msg: "من فضلك فرغ اولا"
        });
      }
      setSearched(true)
    } catch (error) {
      console.log(error.response);
      if (error.response.data.msg) {
        setValues((values) => ({
          ...values,
          warning: true,
          msg: error.response.data.msg,
        }));
      }
    }

  };
  const fetchData = async (milNo, milNoFlag) => {
    const inputs = document.querySelectorAll("input");
    inputs.forEach(element => {
      element.value = null
    });
    Edkhal1_menu.props == postObject
    setselectedValueForGOVERNERATE_NO(" ")
    setselectedE_BATCH_TYPE(" ")
    setselected_MARITAL(" ")
    setValues(postObject);
    setQueryObj(queryObj);
    try {
      const response = await axios.get(`http://30.30.30.53:3000/edkhal/edkhal1?mil_no=${milNo}&mil_no_flag=${milNoFlag}`);
      console.log(response);
      if (response.data.errors != undefined) {
        const errorList = Object.keys(response.data.errors)
        let allInOneMessage = ""
        for (let index = 0; index < errorList.length; index++) {
          const element = errorList[index];
          allInOneMessage = allInOneMessage + response.data.errors[`${element}`] + "/n"
        }
        setValues({
          ...values,
          warning: true,
          msg: allInOneMessage
        });
      }
      setValues(response.data.data);
      setselectedValueForGOVERNERATE_NO(response.data.data.GOVERNERATE_NO);
      setselectedE_BATCH_TYPE(response.data.data.E_BATCH_TYPE);
      setselected_MARITAL(response.data.data.MARITAL_STATUS);

      // response.data["warning"] = +true
      // response.data["msg"] = `عدد الظباط هو` + ":   " + convertNumberToArabic(dataLength)


      if (response.data.msg) {
        setValues((values) => ({
          ...response.data.data,
          MIL_NO_FLAG_OLD: response.data.data.MIL_NO_FLAG,
          MIL_NO_OLD: response.data.data.MIL_NO,
          warning: true,
          msg: response.data.msg,
        }));
      } else {
        setValues((values) => ({
          ...response.data.data,
          MIL_NO_FLAG_OLD: response.data.data.MIL_NO_FLAG,
          MIL_NO_OLD: response.data.data.MIL_NO,
          warning: false,
          msg: response.data.msg,
        }));
      }
    } catch (error) {
      console.log(error.response);
      if (error.response.data.msg) {
        setValues((values) => ({
          ...values,
          warning: true,
          msg: error.response.data.msg,
        }));
      }
    }

  };
  let setFree = () => {
    const inputs = document.querySelectorAll("input");
    inputs.forEach(element => {
      element.value = null
    });
    Edkhal1_menu.props == postObject
    setselectedValueForGOVERNERATE_NO(" ")
    setselectedE_BATCH_TYPE(" ")
    setselected_MARITAL(" ")
    document.getElementById("currant").innerHTML = `${0} من ${0}`;
    setCounter(0);
    setDataLength(0);
    setValues(postObject);
    setQueryObj(queryObj);
    setSearched(false)

  }
  const handleKeyDown = (event) => {
    if (event.key === "F2") {
      officerCountPrev();
    }
    else if (event.key === "F1") {
      officerCountNext();
    }
  }
  const handleKeyDownon = (event) => {
    if (event.key === 'Enter') {
      if (dataLength == 0) {
        SearchBTN();
      } else {
        // setFree()
        if (values.warning == true) {
          setFree()
        } else {
          CreateBTN()
        }
      }

    }
  }
  let CreateBTN = async () => {
    try {
      const response = await axios.post(`http://30.30.30.53:3000/edkhal/edkhal1`, values);

      if (response.data.msg) {
        setValues((values) => ({
          ...values,
          warning: true,
          msg: response.data.msg,
        }))
      }
    } catch (error) {
      if (error.response.data.errors != undefined) {
        const errorList = Object.keys(error.response.data.errors)
        let allInOneMessage = ""
        for (let index = 0; index < errorList.length; index++) {
          const element = errorList[index];
          allInOneMessage = allInOneMessage + error.response.data.errors[`${element}`] + "\t"
        }
        console.log(error.response.data.errors);
        console.log(allInOneMessage);
        setValues({
          ...values,
          warning: true,
          msg: allInOneMessage
        });
      }
    }


  }
  let btn = (fn, name) => (
    <button onClick={() => fn()}
      type="button" className="text-green-700  hover:text-white border outline-none border-green-700 hover:bg-green-800  hover:border-green-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 ">
      {name}
    </button>
  )
  const [secondInputs, SetsecondInputs] = useState({});
  const [selectedValueForGOVERNERATE_NO, setselectedValueForGOVERNERATE_NO] = useState(" "); // State variable for the selected value
  const [selectedE_BATCH_TYPE, setselectedE_BATCH_TYPE] = useState(" "); // State variable for the selected value
  const [selected_MARITAL, setselected_MARITAL] = useState(" "); // State variable for the selected value
  async function fetchsecondInputs() {
    let response = await axios.get(`http://30.30.30.53:3000/edkhal/edkhal1/secondInputs`);
    let realData = response.data.data;
    SetsecondInputs(realData)
  }
  useEffect(() => {
    fetchsecondInputs();
  }, [])

  const handleChange = (ele) => {
    const name = ele.target.name
    let value = ele.target.value
    if (name == "BERTH_DATE" || name == "NCO_DATE") {
      value = value == null ? null : new Date(value).toLocaleDateString('en-CA')
    }
    if (value == " ") {
      value = null
    }
    if (value == "") {
      value = undefined
    }
    setQueryObj((queryobj) => ({
      ...queryobj,
      [name]: value
    }))
    setValues((values) => ({
      ...values,
      [name]: value
    }))

    // if(name=="SENIORITY_SERIAL"){
    //   if(value == 0 || value == null ){
    //     setQueryObj((queryobj) => ({
    //       ...queryobj,
    //       ["SENIORITY_SERIAL"]:0
    //     }))
    //     setValues((values) => ({
    //       ...values,
    //       ["SENIORITY_SERIAL"]: 0
    //     }))
    //   }
    // }
    //   if(value == "م"){
    //     setQueryObj((queryobj) => ({
    //       ...queryobj,
    //       ["SENIORITY_SERIAL"]: 1
    //     }))
    //     setValues((values) => ({
    //       ...values,
    //       ["SENIORITY_SERIAL"]: 1
    //     }))
    //   }else{
    //     setQueryObj((queryobj) => ({
    //     ...queryobj,
    //     ["SENIORITY_SERIAL"]: (parseInt(value.split("م")[0])+1)
    //   }))
    //   setValues((values) => ({
    //     ...values,
    //     ["SENIORITY_SERIAL"]: (parseInt(value.split("م")[0])+1)
    //   }))
    //   } 
  }
  const handleSelectChange_MARITAL = (ele) => {
    setselected_MARITAL(ele.target.value);
    const name = ele.target.name
    const value = ele.target.value
    setQueryObj((queryobj) => ({
      ...queryobj,
      [name]: value
    }))
    setValues((values) => ({
      ...values,
      [name]: value,
    }))
  };
  const handleSelectChange_E_BATCH_TYPE = (ele) => {
    setselectedE_BATCH_TYPE(ele.target.value);
    const name = ele.target.name
    const value = ele.target.value
    setQueryObj((queryobj) => ({
      ...queryobj,
      [name]: value
    }))
    setValues((values) => ({
      ...values,
      [name]: +value,
    }))
  };
  const handleSelectChange_GOVERNERATE_NO = (ele) => {
    setselectedValueForGOVERNERATE_NO(ele.target.value);
    const name = ele.target.name
    const value = ele.target.value
    setQueryObj((queryobj) => ({
      ...queryobj,
      [name]: value
    }))
    setValues((values) => ({
      ...values,
      [name]: +value,
    }))
  };
  const CLASS = secondInputs.CLASS
  const MAJOR = secondInputs.MAJOR
  const MINOR = secondInputs.MINOR
  const RANKS = secondInputs.RANKS
  const KADER = secondInputs.KADER
  const SELA7 = secondInputs.SELA7
  const UNITS = secondInputs.UNITS
  const ALNOW3IA = secondInputs.ALNOW3IA
  const BATCH_NAMES = secondInputs.BATCH_NAMES ?? []
  const City = secondInputs.City ?? []
  const MARITAL = secondInputs.MARITAL ?? []
  const MARITAL_list = MARITAL.map((e) => (
    <option key={e.STATUS} value={e.STATUS}>
      {e.NAME}
    </option>
  ));
  const City_list = [<option key={" "} value={" "}>{" "}</option>, ...City.map((e) => (
    <option key={e.NO} value={e.NO}>
      {e.NAME}
    </option>
  ))
  ];
  const BATCH_NAMES_list = BATCH_NAMES.map((e) => (
    <option key={e.TYPE} value={e.TYPE}>
      {e.NAME}
    </option>
  ));
  let postObject = { "MIL_NO": "", "MIL_NO_FLAG": " ", "MIL_NO_FLAG_OLD": " ", "MIL_NO_OLD": " ", "SENIORITY_NAME": null, "STATUS": " ", "NAME": null, "Rank": null, "SEC_EXAME_NO": null, "BERTH_DATE": null, "CIV_ID_CARD_NO": null, "NCO_DATE": null, "GOVERNORATE_NO": " ", "MAJOR_SPEC_NO": null, "MINOR_SPEC_NO": null, "CLASS_NO": null, "CATEGORY_NO": null, "RANK_NO": null, "SENIORIT_LIST": null, "SENIORITY_SERIAL": null, "SENIORITY_NO": null, "SUPPLIER_NO": null, "CORP_NO": null, "E_BATCH_TYPE": " ", "E_BATCH_NO": null, "BATCH_TYPE": null, "BATCH_NO": null, "MARITAL_STATUS": " ", "RELIGION": " ", "BLOOD_TYPE": null, "SPEC_STATUS": " ", "GENDER": " ", "PROMOTIONS": [{ "DATE0": null, "RANK_NO": null, "rank": null, "BUL_NO": null, "BUL_YEAR": null, "TYPE": null, }], "warning": false, "msg": "" };
  const [values, setValues] = useState(postObject)
  const [isSecondInputDisabled, setIsSecondInputDisabled] = useState(true);
  let queryObj = { "MIL_NO": undefined, "MIL_NO_FLAG": undefined, "SENIORITY_NAME": undefined, "STATUS": undefined, "NAME": undefined, "Rank": undefined, "SEC_EXAME_NO": undefined, "BERTH_DATE": undefined, "CIV_ID_CARD_NO": undefined, "NCO_DATE": undefined, "GOVERNORATE_NO": undefined, "MAJOR_SPEC_NO": undefined, "MINOR_SPEC_NO": undefined, "CLASS_NO": undefined, "CATEGORY_NO": undefined, "RANK_NO": undefined, "SENIORIT_LIST": undefined, "SENIORITY_SERIAL": undefined, "SENIORITY_NO": undefined, "SUPPLIER_NO": undefined, "CORP_NO": undefined, "E_BATCH_TYPE": undefined, "E_BATCH_NO": undefined, "BATCH_TYPE": undefined, "BATCH_NO": undefined, "MARITAL_STATUS": undefined, "RELIGION": undefined, "BLOOD_TYPE": undefined, "SPEC_STATUS": undefined, "GENDER": undefined };
  const [queryobj, setQueryObj] = useState(queryObj)
  const newLocal = "GOVERNORATE_NO";
  return (
    <>
      {
        values.warning && (
          <div class="flex items-center p-1 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
            <svg class="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
            </svg>
            <span class="sr-only"></span>
            <span class="font-medium">هذه رسالة تحذير</span>
            &nbsp;
            &#160;
            {values.msg}
            &nbsp;
            &#160;
            <div className="flex">
              <button onClick={async () => {
                setFree()
              }}
                type="button" className="text-blue-800 bg-transparent border border-blue-800 hover:bg-blue-900 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs px-3 py-1.5 text-center dark:hover:bg-blue-300 dark:border-blue-300 dark:text-blue-300 dark:hover:text-gray-800 dark:focus:ring-blue-800" data-dismiss-target="#alert-additional-content-4" aria-label="Close" >
                حسناً
              </button>
            </div>
          </div>
        )}
      <div className="text-4xl font-black text-center text-gray-900 dark:text-white">
        <p>بيانات الأساسية</p>
      </div>
      <Edkhal1_menu Data={values} SecondInputs={secondInputs} />
      <div className="h-full ">
        <div className="border-2 border-gray-400 my-[5px] rounded-xl">
          <div className="flex justify-start my-[5px] ">
            <div className="flex justify-start m-1 align-middle ">
              <label
                htmlFor="MIL_NO"
                className="mx-2 font-medium text-gray-900">
                تحقيق الشخصية
              </label>
              <input
                name="MIL_NO"
                value={values.MIL_NO}
                onChange={(ele) => handleChange(ele)}
                readOnly={searched}
                type="number"
                id="MIL_NO"
                className="block p-1 text-sm text-gray-900 border border-gray-300 rounded-lg mil_no bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
                placeholder="تحقيق الشخصية"
                required
                onKeyDown={handleKeyDownon}
                onKeyDownCapture={handleKeyDown}
              />
            </div>
            <div className="flex justify-start m-1 align-middle">
              <label htmlFor="momayez" className="mx-2 font-medium text-gray-900">
                المميز
              </label>
              {searched ? (
                <input
                  name="MIL_NO_FLAG"
                  value={values.MIL_NO_FLAG == "S" ? "عامل/فنى" : values.MIL_NO_FLAG == "N" ? "شرف" : values.MIL_NO_FLAG == "R" ? "احتياط" : values.MIL_NO_FLAG == "O" ? "مكلف" : values.MIL_NO_FLAG == "C" ? "طالب" : ""}
                  readOnly
                  type="text"
                  id="MIL_NO_FLAG"
                  className="block p-1 text-sm text-gray-900 border border-gray-300 rounded-lg  bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="المميز"
                  required
                  onKeyDown={handleKeyDownon}
                  onKeyDownCapture={handleKeyDown}
                />
              ) : (
                <select
                  defaultValue={values.MIL_NO_FLAG ?? " "}
                  value={values.MIL_NO_FLAG ?? "N"}
                  onChange={(ele) => handleChange(ele)}
                  readOnly={searched}
                  name="MIL_NO_FLAG"
                  id="momayez"
                  className="text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
                  onKeyDown={handleKeyDownon}
                  onKeyDownCapture={handleKeyDown}
                >
                  <option value=" "></option>
                  <option value="N">شرف</option>
                  <option value="R">احتياط</option>
                  <option value="O">مكلف</option>
                  <option value="C">طالب</option>
                  <option value="S">عامل/فنى</option>
                </select>
              )}


            </div>
            <div className="flex justify-start m-1 align-middle">
              <label htmlFor="rotba" className="mx-2 font-medium text-gray-900">
                الرتبة
              </label>
              <input
                onChange={(ele) => {
                  handleChange(ele)
                  if (ele.target.value == "")
                    document.getElementById("rotba-tabe3").value = ""
                  else {
                    const result = RANKS.filter(e => e.NO == ele.target.value)
                    document.getElementById("rotba-tabe3").value = result[0]?.NAME ?? ""
                  }
                }}
                value={values.RANK_NO}
                name="RANK_NO"
                type="text"
                id="rotba"
                className="block w-20 p-1 ml-1 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
                required
                onKeyDown={handleKeyDownon}
                onKeyDownCapture={handleKeyDown}
              />
              <input
                value={values.Rank}
                onChange={(ele) => handleChange(ele)}
                readOnly
                name="Rank"
                type="text"
                id="rotba-tabe3"
                className="block p-1 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
                required
                onKeyDown={handleKeyDownon}
                onKeyDownCapture={handleKeyDown}
              />
            </div>
            <div className="flex justify-start m-1 align-middle">
              <label
                htmlFor="khedmaorma3ash"
                className="mx-2 font-medium text-gray-900"
                onKeyDown={handleKeyDownon}
                onKeyDownCapture={handleKeyDown}
              >
                خدمة/معاش
              </label>
              <select
                defaultValue={values.STATUS ?? "1"}
                value={values.STATUS || " "}
                onChange={(ele) => handleChange(ele)}
                name="STATUS"
                id="khedmaorma3ash"
                className="text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
                onKeyDown={handleKeyDownon}
                onKeyDownCapture={handleKeyDown}
              >
                <option value=" "></option>
                <option value="1">
                  خدمة
                </option>
                <option value="2">معاش</option>
              </select>
            </div>
          </div>
          <div className="flex justify-start my-4">
            <div className="flex justify-start align-middle">
              <label htmlFor="cader" className="mx-2 font-medium text-gray-900">
                الكادر
              </label>
              <input
                value={values.SENIORIT_LIST}
                onChange={(ele) => {
                  handleChange(ele)
                  if (ele.target.value == "")
                    document.getElementById("cader-tabe3").value = ""
                  else {
                    const result = KADER.filter(e => e.NO == ele.target.value)
                    document.getElementById("cader-tabe3").value = result[0]?.NAME ?? ""
                  }
                }}
                name="SENIORIT_LIST"
                type="text"
                id="cader"
                className="block w-20 p-1 ml-1 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
                required
                onKeyDown={handleKeyDownon}
                onKeyDownCapture={handleKeyDown}
              />
              <input
                value={values.SENIORITY_LIST_NAME}
                name="SENIORIT_LIST_NAME"
                type="text"
                id="cader-tabe3"
                className="block p-1 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
                readOnly
                onKeyDown={handleKeyDownon}
                onKeyDownCapture={handleKeyDown}
              />
            </div>
            <div className="flex justify-start mr-5 align-middle">
              <label
                htmlFor="rakamakdamya"
                className="mx-2 font-medium text-gray-900">
                رقم الاقدمية
              </label>
              <input
                value={values.SENIORITY_NO}
                onChange={(ele) => handleChange(ele)}
                type="text"
                name="SENIORITY_NO"
                id="rakamakdamya"
                className="block w-20 p-1 ml-1 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
                required
                onKeyDown={handleKeyDownon}
                onKeyDownCapture={handleKeyDown}

              />
              <input
                value={values.SENIORITY_SERIAL}
                onChange={(ele) => handleChange(ele)}
                name="SENIORITY_SERIAL"
                type="text"
                id="rakamakdamya-tabe3"
                className="block w-20 p-1 ml-1 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
                required
                onKeyDown={handleKeyDownon}
                onKeyDownCapture={handleKeyDown}

              />
            </div>
            <div className="flex justify-start align-middle">
              <label htmlFor="feaa" className="mx-2 font-medium text-gray-900">
                الفئة
              </label>
              <input
                value={values.CLASS_NO}
                onChange={(ele) => {
                  handleChange(ele)
                  if (ele.target.value == "")
                    document.getElementById("feaa-tabe3").value = ""
                  else {
                    const result = CLASS.filter(e => e.NO == ele.target.value)
                    document.getElementById("feaa-tabe3").value = result[0]?.NAME ?? ""
                  }
                }}
                name="CLASS_NO"
                type="text"
                id="feaa"
                className="block w-20 p-1 ml-1 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
                required
                onKeyDown={handleKeyDownon}
                onKeyDownCapture={handleKeyDown}
              />
              <input
                value={values.CLASS_NAME}
                onChange={(ele) => handleChange(ele)}
                readOnly
                name="CLASS_NAME"
                type="text"
                id="feaa-tabe3"
                className="block p-1 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
                required
                onKeyDown={handleKeyDownon}
                onKeyDownCapture={handleKeyDown}
              />
            </div>
          </div>
        </div>
        <div className="border-2 border-gray-400 my-[5px] rounded-xl">
          <div className="flex justify-start my-[5px] ">
            <div className="flex justify-start m-1 align-middle">
              <label htmlFor="name" className="mx-2 font-medium text-gray-900">
                الاسم
              </label>
              <input
                value={values.NAME}
                onChange={(ele) => handleChange(ele)}
                name="NAME"
                type="text"
                id="name"
                className="bg-gray-50 border w-[500px]  p-1 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  "
                placeholder="الاسم"
                required
                onKeyDown={handleKeyDownon}
                onKeyDownCapture={handleKeyDown}
              />
            </div>
            <div className="flex justify-start m-1 align-middle">
              <label htmlFor="naw3ia" className="mx-2 font-medium text-gray-900">
                النوعية
              </label>
              <input
                value={values.CATEGORY_NO}
                onChange={(ele) => {
                  handleChange(ele)
                  if (ele.target.value == "")
                    document.getElementById("naw3ia-tabe3").value = ""
                  else {
                    const result = ALNOW3IA.filter(e => e.NO == ele.target.value)
                    document.getElementById("naw3ia-tabe3").value = result[0]?.NAME ?? ""
                  }
                }}
                name="CATEGORY_NO"
                type="text"
                id="naw3ia"
                className="block w-10 p-1 ml-1 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
                required
                onKeyDown={handleKeyDownon}
                onKeyDownCapture={handleKeyDown}
              />
              <input
                value={values.CATEGORY_NAME}
                readOnly
                name="CATEGORY_NAME"
                type="text"
                id="naw3ia-tabe3"
                className="block p-1 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
                onKeyDown={handleKeyDownon}
                onKeyDownCapture={handleKeyDown}
              />
            </div>
          </div>
          <div className="flex justify-start my-4">
            <div className="flex justify-start m-1 align-middle">
              <label htmlFor="selah" className="mx-2 font-medium text-gray-900">
                الوظيفه
              </label>
              <input
                value={values.CORP_NO}
                onChange={(ele) => {
                  handleChange(ele)
                  if (ele.target.value == "")
                    document.getElementById("selah-tabe3").value = ""
                  else {
                    const result = SELA7.filter(e => e.NO == ele.target.value)
                    document.getElementById("selah-tabe3").value = result[0]?.NAME ?? ""
                  }
                }}
                name="CORP_NO"
                type="text"
                id="selah"
                className="block w-20 p-1 ml-1 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
                required
                onKeyDown={handleKeyDownon}
                onKeyDownCapture={handleKeyDown}
              />
              <input
                value={values.CORP_NAME}
                onChange={(ele) => handleChange(ele)}
                readOnly
                name="CORP_NAME"
                type="text"
                id="selah-tabe3"
                className="block p-1 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
                required
                onKeyDown={handleKeyDownon}
                onKeyDownCapture={handleKeyDown}
              />
            </div>
            <div className="flex justify-start m-1 align-middle">
              <label
                htmlFor="BERTH_DATE"
                className="mx-2 font-medium text-gray-900">
                ت.ميلاد
              </label>
              <input
                value={values.BERTH_DATE && new Date(values.BERTH_DATE).toLocaleDateString('en-CA')}
                onChange={(ele) => handleChange(ele)}
                name="BERTH_DATE"
                type="date"
                id="BERTH_DATE"
                className="block p-1 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
                placeholder="تاريخ الميلاد"
                required
                onKeyDown={handleKeyDownon}
                onKeyDownCapture={handleKeyDown}
              />
            </div>
            <div className="flex justify-start m-1 align-middle">
              <label
                htmlFor="tkhsosra2esy"
                className="mx-2 font-medium text-gray-900">
                تخصص رئيسى
              </label>
              <input
                value={values.MAJOR_SPEC_NO}
                onChange={(ele) => {
                  handleChange(ele)
                  if (ele.target.value == "")
                    document.getElementById("tkhsosra2esy-tabe3").value = ""
                  else {
                    const result = MAJOR.filter(e => e.NO == ele.target.value)
                    document.getElementById("tkhsosra2esy-tabe3").value = result[0]?.NAME ?? ""
                  }


                }}
                name="MAJOR_SPEC_NO"
                type="text"
                id="tkhsosra2esy"
                className="block w-20 p-1 ml-1 text-sm text-center text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
                required
                onKeyDown={handleKeyDownon}
                onKeyDownCapture={handleKeyDown}
                onChangeCapture={handleChangeDisabled}

              />
              <input
                readOnly
                value={values.MAJOR_SPEC_NAME}
                onChange={(ele) => handleChange(ele)}
                name="MAJOR_SPEC_NAME"
                type="text"
                id="tkhsosra2esy-tabe3"
                className="block p-1 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
                required
                onKeyDown={handleKeyDownon}
                onKeyDownCapture={handleKeyDown}
              />
            </div>
          </div>
        </div>
        <div className="border-2 border-gray-400 my-[5px] rounded-xl">
          <div className="flex justify-start my-[5px] ">
            <div className="flex justify-start m-1 align-middle">
              <label htmlFor="id_num" className="mx-2 font-medium text-gray-900">
                الرقم القومى
              </label>
              <input
                value={values.CIV_ID_CARD_NO}
                onChange={(ele) => handleChange(ele)}
                name="CIV_ID_CARD_NO"
                type="text"
                id="id_num"
                className="block p-1 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 w-52 focus:ring-blue-500 focus:border-blue-500"
                placeholder="الرقم القومى"
                required
                onKeyDown={handleKeyDownon}
                onKeyDownCapture={handleKeyDown}
              />
            </div>
            <div className="flex justify-start m-1 align-middle">
              <label htmlFor="a3lataahel" className="mx-2 font-medium text-gray-900">
                أعلى تأهيل
              </label>
              <select
                defaultValue={values.SPEC_STATUS ?? " "}
                value={values.SPEC_STATUS ?? " "}
                onChange={(ele) => handleChange(ele)}
                name="SPEC_STATUS"
                id="a3lataahel"
                className="text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 w-fit focus:ring-blue-500 focus:border-blue-500 "
                onKeyDown={handleKeyDownon}
                onKeyDownCapture={handleKeyDown}
              >
                <option value="1">دكتوراه</option>
                <option value="2">زماله/عضوية</option>
                <option value="3">ماجيستير</option>
                <option value="4">دبلومة</option>
                <option value=" "> </option>
              </select>
            </div>
            <div className="flex justify-start m-1 align-middle">
              <label
                htmlFor="tkhsosdkeek"
                className="mx-2 font-medium text-gray-900">
                تخصص دقيق
              </label>
              <input
                value={values.MINOR_SPEC_NO}
                onChange={(ele) => {
                  handleChange(ele)
                  if (ele.target.value == "")
                    document.getElementById("tkhsosdkeek-tabe3").value = ""
                  else {
                    const result = MINOR.filter(e => e.NO == ele.target.value)
                    document.getElementById("tkhsosdkeek-tabe3").value = result[0]?.NAME ?? ""
                  }
                }}
                name="MINOR_SPEC_NO"
                type="text"
                id="tkhsosdkeek"
                className="block w-10 p-1 ml-1 text-sm text-center text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
                required
                onKeyDown={handleKeyDownon}
                onKeyDownCapture={handleKeyDown}
                disabled={isSecondInputDisabled}
              />
              <input
                readOnly
                value={values.MINOR_SPEC_NAME}
                onChange={(ele) => handleChange(ele)}
                name="MINOR_SPEC_NAME"
                type="text"
                id="tkhsosdkeek-tabe3"
                className="block p-1 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
                required
                onKeyDown={handleKeyDownon}
                onKeyDownCapture={handleKeyDown}
                disabled={isSecondInputDisabled} />
            </div>
          </div>
          <div className="flex justify-start my-4">
            <div className="flex justify-start m-1 align-middle">
              <label htmlFor="faculty" className="mx-2 font-medium text-gray-900">
                الكلية
              </label>
              <input
                // BATCH_TYPE
                value={values.BATCH_TYPE}
                onChange={(ele) => {
                  handleChange(ele)
                  if (ele.target.value == "")
                    document.getElementById("faculty_tabe3").value = ""
                  else {
                    const result = BATCH_NAMES.filter(e => e.TYPE == ele.target.value)
                    document.getElementById("faculty_tabe3").value = result[0]?.NAME ?? ""
                  }
                }}
                name="BATCH_TYPE"
                type="text"
                id="faculty"
                className="block w-20 p-1 ml-1 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
                required
                onKeyDown={handleKeyDownon}
                onKeyDownCapture={handleKeyDown}
              />
              <input
                readOnly
                value={values.COLLEGE_NAME}
                onChange={handleChange}
                name="COLLEGE_NAME"
                type="text"
                id="faculty_tabe3"
                className="block p-1 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
                required
                onKeyDown={handleKeyDownon}
                onKeyDownCapture={handleKeyDown}
              />
            </div>
            <div className="flex justify-start m-1 align-middle">
              <label
                htmlFor="dofaanumber"
                className="mx-2 font-medium text-gray-900">
                رقم الدفعة
              </label>
              <input
                value={values.BATCH_NO}
                name="BATCH_NO"
                onChange={(ele) => handleChange(ele)}
                type="text"
                id="dofaanumber"
                className="block p-1 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
                placeholder="رقم الدفعة"
                required
                onKeyDown={handleKeyDownon}
                onKeyDownCapture={handleKeyDown}
              />
            </div>
            <div className="flex justify-start m-1 align-middle">
              <label
                htmlFor="mokablafaculty"
                className="mx-2 font-medium text-gray-900">
                الكلية للدفعة المقابلة
              </label>
              <select value={values.E_BATCH_TYPE} onChange={(ele) => handleSelectChange_E_BATCH_TYPE(ele)}
                name="E_BATCH_TYPE"
                id="mokablafaculty"
                className="text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 w-fit focus:ring-blue-500 focus:border-blue-500 "
                onKeyDown={handleKeyDownon}
                onKeyDownCapture={handleKeyDown}
              >
                <option key={" "} value={" "}>{" "}</option>
                {BATCH_NAMES_list}
              </select>
            </div>
            <div className="flex justify-start m-1 align-middle">
              <label
                htmlFor="mokabladofaanumber"
                className="mx-2 font-medium text-gray-900">
                رقم الدفعة المقابلة
              </label>
              <input
                value={values.E_BATCH_NO}
                name="E_BATCH_NO"
                onChange={(ele) => handleChange(ele)}
                type="text"
                id="mokabladofaanumber"
                className="block p-1 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
                placeholder="رقم الدفعة المقابلة"
                required
                onChangeCapture={handleChangeDisabled}
                onKeyDown={handleKeyDownon}

              />
            </div>
          </div>
        </div>
        <div className="border-2 border-gray-400 my-[5px] rounded-xl">
          <div className="flex justify-start my-[5px] ">
            <div className="flex justify-start m-1 align-middle">
              <label htmlFor="type" className="mx-2 font-medium text-gray-900">
                النوع
              </label>
              <select
                defaultValue={values.GENDER ?? "M"}
                value={values.GENDER ?? "M"}
                onChange={(ele) => handleChange(ele)}
                name="GENDER"
                id="type"
                className="text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 w-fit focus:ring-blue-500 focus:border-blue-500 "
                onKeyDown={handleKeyDownon}
                onKeyDownCapture={handleKeyDown}
              >
                <option value=" "></option>
                <option value="M">
                  ذكر
                </option>
                <option value="F">انثى</option>
              </select>
            </div>
            <div className="flex justify-start m-1 align-middle">
              <label
                htmlFor="relation"
                className="mx-2 font-medium text-gray-900">
                حالة إجتماعية
              </label>
              <select value={values.MARITAL_STATUS} onChange={(ele) => handleSelectChange_MARITAL(ele)}
                name="MARITAL_STATUS"
                id="relation"
                className="text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 w-fit focus:ring-blue-500 focus:border-blue-500 "
                onKeyDown={handleKeyDownon}
                onKeyDownCapture={handleKeyDown}
              >
                <option key={" "} value={" "}>{" "}</option>
                {MARITAL_list}
              </select>
            </div>
            <div className="flex justify-start m-1 align-middle">
              <label
                htmlFor="religion"
                className="mx-2 font-medium text-gray-900"
              >
                الديانة
              </label>
              <select
                // defaultValue="M"
                defaultValue={values.RELIGION ?? "M"}
                value={values.RELIGION ?? "M"}
                onChange={(ele) => handleChange(ele)}
                name="RELIGION"
                id="religion"
                className="text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 w-fit focus:ring-blue-500 focus:border-blue-500 "
                onKeyDown={handleKeyDownon}
                onKeyDownCapture={handleKeyDown}
              >
                <option value=" "></option>
                <option value="M">
                  مسلم
                </option>
                <option value="C">مسيحى</option>
              </select>
            </div>
            <div className="flex justify-start m-1 align-middle">
              <label
                htmlFor="bloodfasela"
                className="mx-2 font-medium text-gray-900"
              >
                فصيلة الدم
              </label>
              <input
                value={values.BLOOD_TYPE}
                onChange={(ele) => handleChange(ele)}
                name="BLOOD_TYPE"
                type="text"
                id="bloodfasela"
                className="block w-20 p-1 text-sm text-center text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
                placeholder="_ _"
                required
                onKeyDown={handleKeyDownon}
                onKeyDownCapture={handleKeyDown}
              />
            </div>
            <div className="flex justify-start m-1 align-middle">
              <label htmlFor="GOVERNORATE_NO" className="mx-2 font-medium text-gray-900">
                محل الإقامة
              </label>
              <select
                value={values.GOVERNORATE_NO} onChange={(ele) => handleSelectChange_GOVERNERATE_NO(ele)}
                name={newLocal}
                id="GOVERNORATE_NO"
                className="text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 w-fit focus:ring-blue-500 focus:border-blue-500 "
                onKeyDown={handleKeyDownon}
                onKeyDownCapture={handleKeyDown}
              >
                {City_list}
              </select>
            </div>
          </div>
          <div className="flex justify-start my-4">
            <div className="flex justify-start m-1 align-middle">
              <label
                htmlFor="emdadgeha"
                className="mx-2 font-medium text-gray-900 ">
                جهة الإمداد
              </label>
              <input
                value={values.SUPPLIER_NO}
                onChange={(ele) => {
                  handleChange(ele)
                  if (ele.target.value == "")
                    document.getElementById("emdadgeha_tabe3").value = ""
                  else {
                    const result = UNITS.filter(e => e.NO == ele.target.value)
                    document.getElementById("emdadgeha_tabe3").value = result[0]?.NAME ?? ""
                  }
                }}
                name="SUPPLIER_NO"
                type="text"
                id="emdadgeha"
                className="block w-20 p-1 ml-1 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
                required
                onKeyDown={handleKeyDownon}
                onKeyDownCapture={handleKeyDown}
              />
              <input
                //  
                readOnly
                value={values.UNIT_NAME}
                onChange={(ele) => handleChange(ele)}
                name="UNIT_NAME"
                type="text"
                id="emdadgeha_tabe3"
                className="block p-1 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 w-60 focus:ring-blue-500 focus:border-blue-500 "
                required
                onKeyDown={handleKeyDownon}
                onKeyDownCapture={handleKeyDown}
              />
            </div>
            <div className="flex justify-start m-1 align-middle">
              <label
                htmlFor="graduatedate"
                className="mx-2 font-medium text-gray-900"
              >
                تاريخ التخرج
              </label>
              <input
                // NCO_DATE
                value={values.NCO_DATE && new Date(values.NCO_DATE).toLocaleDateString('en-CA')}
                onChange={(ele) => handleChange(ele)}
                name="NCO_DATE"
                type="date"
                id="graduatedate"
                className="block p-1 text-sm text-center text-gray-900 border border-gray-300 rounded-lg bg-gray-50 w-50 focus:ring-blue-500 focus:border-blue-500 "
                placeholder="تاريخ التخرج"
                required
                onKeyDown={handleKeyDownon}
                onKeyDownCapture={handleKeyDown}
              />
            </div>
          </div>
        </div>


        <div className="fixed bottom-0 z-50 grid w-full h-16 grid-cols-12 transform -translate-x-1/2 bg-white border-t border-gray-200  left-1/2 dark:bg-gray-700 dark:border-gray-600">
          <div className="flex grid items-center justify-between grid-cols-12 col-span-12 ">
            <div className="col-span-1" />

            <div className="flex items-center justify-between col-span-2 space-x-1">
              <Edkhal1_btn fn={SearchBTN} name="بحث" />
              <Edkhal1_btn fn={setFree} name="تفريغ" />
              <Edkhal1_btn fn={CreateBTN} name="حفظ" />
            </div>
            <div className="col-span-7" />
            <div className="col-span-1 flex items-center justify-between w-full bg-sky-100 text-gray-600 dark:text-gray-400 bg-gray-100 rounded-lg dark:bg-gray-600 max-w-[128px] mx-2">
              <button
                onClick={officerCountPrev}
                type="button"
                className="inline-flex items-center justify-center w-6 h-8 px-1 bg-sky-200 rounded-s-lg dark:bg-gray-600 hover:bg-sky-500 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-800"
              >
                <span className="font-bold text-black">-</span>
              </button>
              <span id="currant" className="flex-shrink-0 mx-1 text-sm font-medium space-x-0.5 rtl:space-x-reverse font-bold">
                {dataLength > 0 ? `${counter + 1} من ${dataLength}` : `0 من 0`}
              </span>
              <button
                onClick={officerCountNext}
                type="button"
                className="inline-flex items-center justify-center w-6 h-8 px-1 bg-sky-200 rounded-e-lg dark:bg-gray-600 hover:bg-sky-500 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-800">
                <span className="font-bold text-black">+</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Edkhal1;
