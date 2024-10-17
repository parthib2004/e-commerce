import { useContext, useEffect } from "react";
import { useNavigate } from "react-router";
import myContext from "../../context/myContext";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { addToCart, deleteFromCart } from "../../redux/cartSlice";


const HomePageProductCard = () => {
    const navigate = useNavigate();

    const context = useContext(myContext);
    const { getAllProduct } = context;

    const cartItems = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const addCart = (item) => {
        // console.log(item)
        dispatch(addToCart(item));
        toast.success("Add to cart")
    }

    const deleteCart = (item) => {
        dispatch(deleteFromCart(item));
        toast.success("Delete cart")
    }

    // console.log(cartItems)

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems])


    return (
        <div className="mt-10">
            {/* Heading  */}
            <div className="">
                <h1 className="mb-5 text-2xl font-semibold text-center ">Bestselling Products</h1>
            </div>

            {/* main  */}
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-5 mx-auto">
                    <div className="flex flex-wrap -m-4">
                        {getAllProduct.slice(0, 8).map((item, index) => {
                            const { id, title, price, productImageUrl } = item
                            return (
                                <div key={index} className="w-full p-4 md:w-1/4">
                                    <div className="h-full overflow-hidden border border-gray-300 shadow-md cursor-pointer rounded-xl">
                                        <img
                                            onClick={() => navigate(`/productinfo/${id}`)}
                                            className="w-full lg:h-80 h-96"
                                            src={productImageUrl}
                                            alt="blog"
                                        />
                                        <div className="p-6">
                                            <h2 className="mb-1 text-xs font-medium tracking-widest text-gray-400 title-font">
                                                E-bharat
                                            </h2>
                                            <h1 className="mb-3 text-lg font-medium text-gray-900 title-font">
                                                {title.substring(0, 25)}
                                            </h1>
                                            <h1 className="mb-3 text-lg font-medium text-gray-900 title-font">
                                                ₹{price}
                                            </h1>

                                            <div
                                                className="flex justify-center ">
                                                {cartItems.some((p)=> p.id === item.id) 
                                                
                                                ?
                                                <button
                                                    onClick={() => deleteCart(item)}
                                                    className=" bg-red-700 hover:bg-pink-600 w-full text-white py-[4px] rounded-lg font-bold">
                                                    Delete To Cart
                                                </button>

                                                : 

                                                <button
                                                    onClick={() => addCart(item)}
                                                    className=" bg-pink-500 hover:bg-pink-600 w-full text-white py-[4px] rounded-lg font-bold">
                                                    Add To Cart
                                                </button>
                                            }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default HomePageProductCard;