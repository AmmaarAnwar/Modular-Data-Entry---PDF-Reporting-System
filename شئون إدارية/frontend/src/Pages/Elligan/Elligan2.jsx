import { useState, useEffect } from "react";
import axios from "axios";
function Elligan2() {

    let postObject = { "data": [{ "NO": null, "NAME": null, "FLAG":null ,"ORD": null }] };
    const [values, setValues] = useState(postObject)
    let myData = [...values.data ?? ""]
    async function fetchLegan2() {
        setValues(postObject)
        const response = await axios.get(`http://30.30.30.53:3000/lgan/pnodellgan`);
        setValues((values) => ({
            "data": [...response.data.data]
        }))
        console.log(response);
    }
    useEffect(() => {
        fetchLegan2();
    }, [])

    return (
        <>
            <div className="text-center pb-3 font-black text-gray-900 text-4xl dark:text-white">
                <p>بنود اللجنة</p>
            </div>
            <div className="col-span-12 grid grid-cols-12 border-2 border-gray-400 my-[5px] rounded-xl">
                <table class=" col-span-12 w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-900 uppercase dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-6 py-3 text-center">
                                Item No
                            </th>
                            <th scope="col" class="px-6 py-3 text-center">
                                Item Name
                            </th>
                            <th scope="col" class="px-6 py-3 text-center">
                                Flag
                            </th>
                            <th scope="col" class="px-6 py-3 text-center">
                                Item Ord
                            </th>

                        </tr>
                    </thead>
                    <tbody >
                        {
                            myData.map((e, index) => (
                                <tr class={index % 2 === 0 ? 'bg-gray-200' : 'bg-white'} key={index}>
                                    <td class="px-6 py-4 text-center">
                                        {e.NO}
                                    </td>
                                    <td class="px-6 py-4 text-center">
                                        {e.NAME}
                                    </td>
                                    <td class="px-6 py-4 text-center">
                                        {e.FLAG}
                                    </td>
                                    <td class="px-6 py-4 text-center">
                                        {e.ORD}
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>



            </div>
        </>
    );
}

export default Elligan2;
