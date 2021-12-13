import { useContext, useState } from "react"
import { useLocation } from "react-router";
import { AuthContext } from "../context/AuthContext";
import {useNavigate} from 'react-router';
import { Link } from "react-router-dom";


const Form = ({action}) => {
    const  location = useLocation();

    let from  = location.state?.from?.pathname || "/";

    console.log(from);

    const navigate = useNavigate();
    const {register,login} = useContext(AuthContext);
    const [form,setForm] = useState({
        email:'',
        password:''
    });


    const handleSubmit = (e) =>{
        e.preventDefault();
        if(action === 'Signup'){
            register(form);
            navigate('/');
        } else{
            login(form);
            navigate(from, { replace: true });
        }
    }

    const handleChange = (e)=>{
        setForm({...form,[e.target.name]:e.target.value})
    }
    return (
        <form className="w-1/2 p-16 shadow-xl mx-auto mt-20" onSubmit={handleSubmit}>
            <h2 className="font-semibold text-center mt-4 text-xl">{action}</h2>
            <div className="mt-12">
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <div className="mt-1">
                <input className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500" type="email" value={form.email} name="email" onChange={handleChange} placeholder="email" />
                </div>
            </div>

            <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <div className="mt-1">
            <input type="password" className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500" value={form.password} name="password" onChange={handleChange} placeholder="password"/>
            </div>
            </div>
           
            <button className="w-3/5 mx-auto mt-8 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" type="submit">{action}</button>
            {action === 'Login'  && <Link to='/signup' className="text-blue-500 ml-3 underline">new here?create Account</Link>}
            {action === 'Signup' && <Link to='/login' className="text-blue-500 ml-3 underline">have Account?login</Link>}
        </form>
    )
}

export default Form
