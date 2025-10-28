import React, { useState } from 'react';
import { FaGoogle, FaGithub, FaApple, FaEye, FaEyeSlash, FaEnvelope, FaLock, FaUser } from 'react-icons/fa';
import { SiGitlab } from 'react-icons/si';
import { handleGoogleCallback, registerWithGitHub, registerWithGitLab, registerWithGoogle, userRegistration } from '../APIs/auth';
import InfinityLoader from '../utils/InfinityLoader';
import { GoHome } from "react-icons/go";

import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import { RiLockPasswordFill } from "react-icons/ri";


import { GoogleOAuthProvider, useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';


const Register = () => {
  const Navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [loading , setLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)
   const user = await userRegistration(formData)
   console.log(user , 'secondary');
   setLoading(false)
   
  };
const responseGoog1e = async (authResu1t)=>{
try{

if(authResu1t.code){
  const user = await axios.post(`${import.meta.env.VITE_SERVER_BASE_URL}/googleLogin` , {code : authResu1t.code} , {withCredentials:true})
  console.log(user);
  
}

}catch(err){
console.log(err);

}
}


 const registerWithGitHub = () => {
  try {
    // Construct GitHub OAuth URL
    const authUrl = `https://github.com/login/oauth/authorize?client_id=${import.meta.env.VITE_GITHUB_CLIENT_ID}&redirect_uri=${import.meta.env.VITE_CLIENT_BASE_URL}/callback&scope=user`;

    // Redirect the user to GitHub OAuth URL
    window.location.href = authUrl;
    
  } catch (error) {
    console.log('Error during GitHub OAuth redirection:', error);
  }
};


const registerWithGitlab = () =>{
 const response = registerWithGitLab()
 console.log(response);
 
}


const handleSocialLogin = (provider) => {
 registerWithGitHub()
};

 const  registerWithGoogle = useGoogleLogin({
      onSuccess:responseGoog1e,
      onError:responseGoog1e,
      flow: ' auth-code'
    });

      
  return (
    <>
   {loading && 
     <div className="flex items-center justify-center min-w-screen  fixed top-[50%] z-50">
        <InfinityLoader size={700} label="submitting your data" />
      </div> 
   }
   <Link to={'/'} className=' lg:absolute text-2xl text-white flex items-baseline px-5 gap-1'>
    <GoHome  className=''/>
   </Link>
   <div className=" absolute -right-[87%] button button-2 p-0.5 rounded-4xl cursor-pointer w-30.5">
          
            <Link to="/auth/login">
              <button className=" bg-black text-white border-gray-700 rounded-4xl px-6 py-2 border-2 cursor-pointer w-full">
                Login
              </button>
            </Link>
          
        </div>
    <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
      className={`max-w-[95%] lg:max-w-3xl  mx-auto  space-y-5 roboto-regular   bg-[#0b0f19]/80  rounded-2xl shadow-[0_0_40px_#2b6bff40] hover:shadow-[0_0_40px_#2b6bff90]  duration-100 backdrop-blur-lg  w-full border border-blue-500 z-50 my-5 flex flex-col items-center ${loading && 'blur-[2px] overflow-hidden'}`}
    >
     

        {/* Main Card */}
        <div className={` w-fit lg:w-[70%] px-5 rounded-lg  py-4 flex flex-col justify-center items-center`}>
         
          <div className=' w-full flex flex-col  justify-around '>
            <div className="relative my-6 ">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-700"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className= " bg-slate-800 text-slate-400 px-2 rounded-2xl">Continue with email</span>
            </div>
          </div>
          {/* Registration Form */}
          <form onSubmit={handleSubmit} className="space-y-4 grid lg:grid-cols-2 lg:gap-5 ">
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-50 mb-2 lg:hidden">
                Full Name
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaUser className="text-slate-400" />
                </div>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-3 bg-slate-900 border border-slate-700 text-slate-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent transition-all"
                  placeholder="John Doe"
                  required
                />
              </div>
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-50 mb-2 lg:hidden">
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaEnvelope className="text-slate-400" />
                </div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-3 bg-slate-900 border border-slate-700 text-slate-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent transition-all"
                  placeholder="john@example.com"
                  required
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-slate-50 mb-2 lg:hidden">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaLock className="text-slate-400" />
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full pl-10 pr-12 py-3 bg-slate-900 border border-slate-700 text-slate-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent transition-all"
                  placeholder="••••••••"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-50 transition-colors"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>

            {/* Confirm Password Field */}
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-slate-50 mb-2 lg:hidden">
                Confirm Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaLock className="text-slate-400" />
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-3 bg-slate-900 border border-slate-700 text-slate-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent transition-all"
                  placeholder="••••••••"
                  required
                />
              </div>
            </div>
              {/* Terms and Conditions */}
            <div className="flex   col-span-full">
              <input
                type="checkbox"
                id="terms"
                className="mt-1 h-4 w-4 text-indigo-600 focus:ring-indigo-600 border-slate-700 rounded bg-slate-900"
                required
              />
              <label htmlFor="terms" className="ml-2 text-sm text-slate-400">
                I agree to the{' '}
                <a href="#" className="text-indigo-600 hover:text-cyan-500 transition-colors">
                  Terms and Conditions
                </a>{' '}
                and{' '}
                <a href="#" className="text-indigo-600 hover:text-cyan-500 transition-colors">
                  Privacy Policy
                </a>
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className=" col-span-full w-[100%] bg-indigo-600 hover:bg-indigo-700 text-slate-50 font-semibold py-3  lg:px-30   rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 focus:ring-offset-slate-800"
            >
              Create Account
            </button>
          </form>

          {/* Divider */}
          <div className="relative my-6 ">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-700"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className= " bg-slate-800 text-slate-400 px-2 rounded-2xl">Or continue with </span>
            </div>
          </div>

           {/* Social Login Buttons */}
            <div className=" flex flex-col gap-3">
               
                {/* <h2 className=' text-xl text-white uppercase text-center font-bold'>axeiro welcomes you!</h2> */}
               
            <button
              onClick={registerWithGoogle}
              className="w-full flex items-center justify-center gap-3  hover:bg-slate-700 text-slate-50 font-medium py-3  lg:px-30 px-20  rounded-lg transition-colors duration-200 shadow-lg shadow-black border border-[#0f172b]"
            >
              <FaGoogle className="text-xl" />
              Continue with Google
            </button>
            
            <button
              onClick={() => handleSocialLogin('GitHub')}
              className="w-full flex items-center justify-center gap-3  hover:bg-slate-700 text-slate-50 font-medium py-3  lg:px-30 px-20  rounded-lg transition-colors duration-200 shadow-lg shadow-black border border-[#0f172b]"
            >
              <FaGithub className="text-xl" />
              Continue with GitHub
            </button>

            <a href='http://localhost:3000/v1/auth/gitlablogin'
              
              className="w-full flex items-center justify-center gap-3  hover:bg-slate-700 text-slate-50 font-medium py-3  lg:px-30 px-20  rounded-lg transition-colors duration-200 shadow-lg shadow-black border border-[#0f172b]"
            >
              <SiGitlab className="text-xl" />
              Continue with GitLab
            </a>

            <button
              onClick={() => handleSocialLogin('Apple')}
              className="w-full flex items-center justify-center gap-3  hover:bg-slate-700 text-slate-50 font-medium py-3  lg:px-30 px-20  rounded-lg transition-colors duration-200 shadow-lg shadow-black border border-[#0f172b]"
            >
              <FaApple className="text-xl" />
              Continue with Apple
            </button>
          </div>
          </div>
        </div>

        {/* Footer Text */}
        {/* <p className=" text-center text-xs text-slate-400">
          Protected by reCAPTCHA and subject to the axeiro{' '}
          <a href="#" className="text-indigo-600 hover:text-cyan-500 transition-colors">
            Privacy Policy
          </a>{' '}
          and{' '}
          <a href="#" className="text-indigo-600 hover:text-cyan-500 transition-colors">
            Terms of Service
          </a>
        </p> */}
      


    </motion.div>
    </>
  );
};

export default Register;