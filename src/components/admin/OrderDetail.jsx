const OrderDetail = () => {
    return (
        <div>
            <div>
                <div className="py-5">
                    {/* text  */}
                    <h1 className="text-xl font-bold text-pink-300 ">All Order</h1>
                </div>

                {/* table  */}
                <div className="w-full overflow-x-auto">
                    <table className="w-full text-left text-pink-400 border border-collapse border-pink-100 sm:border-separate" >
                        <tbody>
                            <tr>
                                <th scope="col" className="h-12 px-6 font-bold border-l border-pink-100 text-md first:border-l-0 text-slate-700 bg-slate-100 fontPara">
                                    S.No.
                                </th>

                                <th scope="col"
                                    className="h-12 px-6 font-bold border-l border-pink-100 text-md fontPara first:border-l-0 text-slate-700 bg-slate-100">
                                    Order Id
                                </th>

                                <th scope="col"
                                    className="h-12 px-6 font-bold border-l border-pink-100 text-md fontPara first:border-l-0 text-slate-700 bg-slate-100">
                                    Image
                                </th>

                                <th scope="col"
                                    className="h-12 px-6 font-bold border-l border-pink-100 text-md fontPara first:border-l-0 text-slate-700 bg-slate-100">
                                    Title
                                </th>

                                <th scope="col"
                                    className="h-12 px-6 font-bold border-l border-pink-100 text-md fontPara first:border-l-0 text-slate-700 bg-slate-100">
                                    Category
                                </th>

                                <th scope="col"
                                    className="h-12 px-6 font-bold border-l border-pink-100 text-md fontPara first:border-l-0 text-slate-700 bg-slate-100">
                                    Price
                                </th>

                                <th scope="col"
                                    className="h-12 px-6 font-bold border-l border-pink-100 text-md fontPara first:border-l-0 text-slate-700 bg-slate-100">
                                    Quantity
                                </th>

                                <th scope="col"
                                    className="h-12 px-6 font-bold border-l border-pink-100 text-md fontPara first:border-l-0 text-slate-700 bg-slate-100">
                                    Total Price
                                </th>

                                <th scope="col"
                                    className="h-12 px-6 font-bold border-l border-pink-100 text-md fontPara first:border-l-0 text-slate-700 bg-slate-100">
                                    Status
                                </th>

                                <th scope="col"
                                    className="h-12 px-6 font-bold border-l border-pink-100 text-md fontPara first:border-l-0 text-slate-700 bg-slate-100">
                                    Name
                                </th>

                                <th scope="col"
                                    className="h-12 px-6 font-bold border-l border-pink-100 text-md fontPara first:border-l-0 text-slate-700 bg-slate-100">
                                    Address
                                </th>

                                <th scope="col"
                                    className="h-12 px-6 font-bold border-l border-pink-100 text-md fontPara first:border-l-0 text-slate-700 bg-slate-100">
                                    Pincode
                                </th>

                                <th scope="col"
                                    className="h-12 px-6 font-bold border-l border-pink-100 text-md fontPara first:border-l-0 text-slate-700 bg-slate-100">
                                    Phone Number
                                </th>

                                <th scope="col"
                                    className="h-12 px-6 font-bold border-l border-pink-100 text-md fontPara first:border-l-0 text-slate-700 bg-slate-100">
                                    Email
                                </th>

                                <th scope="col"
                                    className="h-12 px-6 font-bold border-l border-pink-100 text-md fontPara first:border-l-0 text-slate-700 bg-slate-100">
                                    Date
                                </th>

                                <th scope="col"
                                    className="h-12 px-6 font-bold border-l border-pink-100 text-md fontPara first:border-l-0 text-slate-700 bg-slate-100">
                                    Action
                                </th>


                            </tr>
                            <tr className="text-pink-300">
                                <td className="h-12 px-6 transition duration-300 border-t border-l border-pink-100 text-md first:border-l-0 stroke-slate-500 text-slate-500 ">
                                    1.
                                </td>

                                <td className="h-12 px-6 transition duration-300 border-t border-l border-pink-100 text-md first:border-l-0 stroke-slate-500 text-slate-500 ">
                                    {'order Id'}
                                </td>

                                <td className="h-12 px-6 transition duration-300 border-t border-l border-pink-100 text-md first:border-l-0 stroke-slate-500 text-slate-500 first-letter:uppercase ">
                                    <img src="" alt="" />
                                </td>

                                <td className="h-12 px-6 transition duration-300 border-t border-l border-pink-100 text-md first:border-l-0 stroke-slate-500 text-slate-500 first-letter:uppercase ">
                                    {'title'}
                                </td>

                                <td className="h-12 px-6 transition duration-300 border-t border-l border-pink-100 text-md first:border-l-0 stroke-slate-500 text-slate-500 first-letter:uppercase ">
                                    {'category'}
                                </td>

                                <td className="h-12 px-6 transition duration-300 border-t border-l border-pink-100 text-md first:border-l-0 stroke-slate-500 text-slate-500 first-letter:uppercase ">
                                    ₹ {'price'}
                                </td>

                                <td className="h-12 px-6 transition duration-300 border-t border-l border-pink-100 text-md first:border-l-0 stroke-slate-500 text-slate-500 first-letter:uppercase ">
                                    {'quantity'}
                                </td>

                                <td className="h-12 px-6 transition duration-300 border-t border-l border-pink-100 text-md first:border-l-0 stroke-slate-500 text-slate-500 first-letter:uppercase ">
                                    ₹ {'total price'}
                                </td>

                                <td className="h-12 px-6 transition duration-300 border-t border-l border-pink-100 text-md first:border-l-0 stroke-slate-500 text-slate-500 first-letter:uppercase ">
                                    {'status'}
                                </td>

                                <td className="h-12 px-6 transition duration-300 border-t border-l border-pink-100 text-md first:border-l-0 stroke-slate-500 text-slate-500 first-letter:uppercase ">
                                    {'name'}
                                </td>

                                <td className="h-12 px-6 transition duration-300 border-t border-l border-pink-100 text-md first:border-l-0 stroke-slate-500 text-slate-500 first-letter:uppercase ">
                                    {'address'}
                                </td>

                                <td className="h-12 px-6 transition duration-300 border-t border-l border-pink-100 text-md first:border-l-0 stroke-slate-500 text-slate-500 first-letter:uppercase ">
                                    {'pincode'}
                                </td>

                                <td className="h-12 px-6 transition duration-300 border-t border-l border-pink-100 text-md first:border-l-0 stroke-slate-500 text-slate-500 first-letter:uppercase ">
                                    {'phone Number'}
                                </td>

                                <td className="h-12 px-6 transition duration-300 border-t border-l border-pink-100 text-md first:border-l-0 stroke-slate-500 text-slate-500 first-letter:uppercase ">
                                    {'email'}
                                </td>

                                <td className="h-12 px-6 transition duration-300 border-t border-l border-pink-100 text-md first:border-l-0 stroke-slate-500 text-slate-500 first-letter:uppercase ">
                                    {'date'}
                                </td>

                                <td className="h-12 px-6 text-red-500 transition duration-300 border-t border-l border-pink-100 cursor-pointer text-md first:border-l-0 stroke-slate-500 text-slate-500 ">
                                    Delete
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default OrderDetail;