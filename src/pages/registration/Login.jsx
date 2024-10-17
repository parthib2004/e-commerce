/* eslint-disable react/no-unescaped-entities */
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import myContext from "../../context/myContext";
import toast from "react-hot-toast";
import { signInWithEmailAndPassword } from "firebase/auth";
import { collection, onSnapshot, query, QuerySnapshot, where } from "firebase/firestore";
import { auth, fireDB } from "../../firebase/FirebaseConfig";
import Loader from "../../components/loader/Loader";

const Login = () => {
    const context = useContext(myContext)
    const {loading, setLoading} = context

    //navigate
    const navigate = useNavigate()
    

    //User Login State
    const [userLogin, setUserLogin] = useState({
        email: "",
        password: ""
    })

    //User Login Function
    const userLoginFunction = async () =>{
        //Validation
        if (userLogin.email === "" || userLogin.password === "") {
            return toast.error("All Fields are required")
        }


        setLoading(true)

        try {
            const users = await signInWithEmailAndPassword(auth, userLogin.email, userLogin.password)
            
            console.log(users)

            try {
                const q = query(
                    collection(fireDB, "user"),
                    where('uid', '==', users?.user?.uid)
                );
                
                const data = onSnapshot(q, (QuerySnapshot) => {
                    let user;
                    QuerySnapshot.forEach((doc) => user = doc.data());
                    localStorage.setItem("users", JSON.stringify(user));
                    setUserLogin({
                        email: "",
                        password: ""
                    });
                    toast.success("Login Successfully");
                    setLoading(false);
                    
                    // Log the entire user object for debugging
                    console.log("User Data:", user);
                
                    // Log the user role for debugging
                    console.log("User Role:", user.role);
                
                    // Check if user.role is defined and not null
                    if (user.role && user.role.trim().toLowerCase() === "user") {
                        navigate('/user-dashboard');
                    } else {
                        navigate('/admin-dashboard');
                    }
                });

                return () => data
            } catch (error) {
                console.log(error)
                setLoading(false)       
            }
        } catch (error) {
            console.log(error)  
            setLoading(false)    
        }
    }
    
    return (
        <div className='flex items-center justify-center h-screen'>
            {loading && <Loader/>}
            {/* Login Form  */}
            <div className="px-1 py-6 border border-pink-100 shadow-md login_Form bg-pink-50 lg:px-8 rounded-xl">

                {/* Top Heading  */}
                <div className="mb-5">
                    <h2 className='text-2xl font-bold text-center text-pink-500 '>
                        Login
                    </h2>
                </div>

                {/* Input Two  */}
                <div className="mb-3">
                    <input
                        type="email"
                        placeholder='Email Address'
                        value={userLogin.email}
                        onChange={(e) =>{
                            setUserLogin({
                                ...userLogin,
                                email: e.target.value
                            })
                        }}
                        className='px-2 py-2 placeholder-pink-200 border border-pink-200 rounded-md outline-none bg-pink-50 w-96'
                    />
                </div>

                {/* Input Three  */}
                <div className="mb-5">
                    <input
                        type="password"
                        placeholder='Password'
                        value={userLogin.password}
                        onChange={(e) =>{
                            setUserLogin({
                                ...userLogin,
                                password: e.target.value
                            })
                        }}
                        className='px-2 py-2 placeholder-pink-200 border border-pink-200 rounded-md outline-none bg-pink-50 w-96'
                    />
                </div>

                {/* Login Button  */}
                <div className="mb-5">
                    <button
                    onClick={userLoginFunction}
                        type='button'
                        className='w-full py-2 font-bold text-center text-white bg-pink-500 rounded-md hover:bg-pink-600 '
                    >
                        Login
                    </button>
                </div>

                <div>
                    <h2 className='text-black'>Don't Have an account <Link className='font-bold text-pink-500 ' to={'/signup'}>Signup</Link></h2>
                </div>

            </div>
        </div>
    );
}

export default Login;