import { Link } from "react-router-dom";
import List from "./List";
import { useState } from "react";
function Slider() {
  const shashet_eled5ad = [
    "بيانات اساسية",
    "تعديل الفرق",
    "تعديل مدة الخدمة بالوحدات السابقة",
    "أوامر النقل",
    "تأهيل مدنى",
    "تقارير سرية",
    "وحدات",
    "تعديل عدد الصفحات (121 - كارت)",
    "بيان خدمة ",
    "تأهيل ",
    "حاله صحية",
    " وحدة",
    "تعديل عدد الصفحات (التقارير)",
    "تسجيل اللغة",
    "تعديل السفريات",
    "حاله إجتماعية",
    "ربط الوحدة بالوحدة الأم",
    "تعديل عدد الصفحات (أخرى)",
    "الأقارب",
    "البعثات",
    "نعديل العنوان",
    " وظيفة",
    "تعديل عدد الصفحات (العقوبات)",
    "أجازات مرضية",
    "تاريخ أمتحان الترقى",
    "عقوبات",
    " إعارة",
    "تعديل عدد الصفحات (حكم محكمه)",
    "اوزان",
    "امتحانات الترقى",
    "عقوبات احتياط",
    "مصاريف الجنازة",
    "تعديل عدد الصفحات (قرارات اتهام)",
    "تسجيل الأنواط من/إلى",
    "تعديل الرتبة من/إلى",
  ];
  const ellegan = ["عنوان اللجنة", "بنود اللجنة", "سجل ", "عرض اللجنة"];
  const altrshe7at = ["أكواد الترشيحات", "تسجيل الترشيحات"];
  const eltkarer = [
    "يومية عددية  خدمة - معاش",
    " خدمة بالوحدات أكثر من",
    "موجودات الوحدة",
    "موجودات وحدة ووحداتها التابعة",
    "مقترح النشرة",
    "حصر تقارير الكفأة",
    "حصر الصور",
    "حصر  المسيحيين",
    "حصر تقارير الكفاءه الكل",
    "حصر بالتأهيل",
    "حصر بالتخصص الدقيق",
    "حصر بتقدير الفرق",
    "تقرير  ",
    "طباعة كشف جيش",
    "طباعة كشف جيش A4",
    "طباعة حالة صحية",
    "طباعات محاكمات",
    " طباعة المحالين ",
    "طباعة جزاءات",
    "مرتب المسكنه عليها",
    "نسبة استكمال وحدة",
    "يومية بنسبة استكمال الوحدة إجمالى",
    "يومية نسبة استكمال الوحدة بالرتبة",
    "اقارب ",
    "اقارب   ",
    " التمثيل  بالخدمه",
    " التمثيل  خدمة سابقة",
  ];
  const [hide, sethide] = useState(false);
  return (
    <div
      className={`rtl bg-sky-500  text-white flex flex-col min-h-[100vh]  pt-3 pb-2  ease-in duration-300 ${
        hide ? "w-[50px]" : "w-[320px]"
      }`}
    >
      <button
        className="pr-2 font-bold cursor-pointer w-fit h-fit "
        onClick={() => {
          sethide(!hide);
        }}
      >
        <svg fill="currentColor" viewBox="0 0 16 16" height="30px" width="30px">
          <path
            fillRule="evenodd"
            d="M4.5 11.5A.5.5 0 015 11h10a.5.5 0 010 1H5a.5.5 0 01-.5-.5zm-2-4A.5.5 0 013 7h10a.5.5 0 010 1H3a.5.5 0 01-.5-.5zm-2-4A.5.5 0 011 3h10a.5.5 0 010 1H1a.5.5 0 01-.5-.5z"
          />
        </svg>
      </button>
      <div className={`${hide && "  hidden "}`}>
        <Link to={"/"}>
          {" "}
          <p className="px-4 cursor-pointer hover:bg-gray-400">
            لوحة التحكم
          </p>
        </Link>
        <List
          pagename="Edkhal"
          maintittle="شاشة الإدخال"
          listname="list1"
          array={shashet_eled5ad}
        ></List>
        <List
          pagename="Elligan"
          maintittle="اللجان"
          listname="list3"
          array={ellegan}
        ></List>
        <List
          pagename="Tarshe7at"
          maintittle="الترشيحات"
          listname="list4"
          array={altrshe7at}
        ></List>
        <List
          pagename="Tqareer"
          maintittle="التقارير"
          listname="list5"
          array={eltkarer}
        ></List>
      </div>
    </div>
  );
}
export default Slider;