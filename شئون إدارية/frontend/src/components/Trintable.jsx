function Trintable({code,unit_name,tashkel}) {
    const vs_taskel=tashkel==="تشكيل"?"ليست تشكيل":"تشكيل"
    return (
        <>
        <tr className="bg-white">
        <td className=" py-3 px-6">{code}</td>
        <td className="py-3 px-6 ">{unit_name}</td>
        <td className="py-3 px-6 ">
          <select
            id="gehetelsodor"
            className="bg-gray-50 border w-fit h-8   border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 "
          >
            <option selected value={`${tashkel}`}> {tashkel}</option>
            <option value={`${vs_taskel}`}>{vs_taskel}</option>
          </select>
        </td>
      </tr>
      </>
    );
}

export default Trintable;