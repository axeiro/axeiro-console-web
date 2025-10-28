import React, { useState } from 'react';
import { FaGoogle, FaGithub, FaApple, FaEye, FaEyeSlash, FaEnvelope, FaLock } from 'react-icons/fa';
import { SiGitlab } from 'react-icons/si';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import InfinityLoader from '../utils/InfinityLoader';
import { GoHome } from 'react-icons/go';
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // Implement your email/password login here
  const handleEmailLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      // Example (replace with your own):
      // const res = await axios.post(
      //   `${import.meta.env.VITE_AUTH_SERVICE_BASE_URL}/login`,
      //   formData,
      //   { withCredentials: true }
      // );
      // console.log(res?.data);
      // navigate('/dashboard');
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  // Use the same Google auth-code flow endpoint as registration
  const handleGoogleAuthResponse = async (authResult) => {
    try {
      if (authResult?.code) {
        const user = await axios.post(
          `${import.meta.env.VITE_AUTH_SERVICE_BASE_URL}/googleLogin`,
          { code: authResult.code },
          { withCredentials: true }
        );
        console.log(user);
        // navigate('/dashboard');
      }
    } catch (err) {
      console.log(err);
    }
  };

  const loginWithGoogle = useGoogleLogin({
    onSuccess: handleGoogleAuthResponse,
    onError: handleGoogleAuthResponse,
    flow: 'auth-code'
  });

  // Reuse the same GitHub OAuth URL pattern you used in Register
  const loginWithGitHub = () => {
    try {
      const authUrl = `https://github.com/login/oauth/authorize?client_id=${import.meta.env.VITE_GITHUB_CLIENT_ID}&redirect_uri=${import.meta.env.VITE_CLIENT_BASE_URL}/callback&scope=user`;
      window.location.href = authUrl;
    } catch (error) {
      console.log('Error during GitHub OAuth redirection:', error);
    }
  };

  // Reuse the same GitLab server route as in Register
  const gitlabLoginHref =
    `${(import.meta.env.VITE_AUTH_SERVICE_BASE_URL || '').replace(/\/$/, '')}/auth/gitlablogin` ||
    'http://localhost:3000/v1/auth/gitlablogin';

  // Apple Sign In initiation endpoint on your backend (same approach as Register)
  const loginWithApple = () => {
    try {
      const appleUrl = `${import.meta.env.VITE_AUTH_SERVICE_BASE_URL}/appleLogin`;
      window.location.href = appleUrl;
    } catch (error) {
      console.log('Error during Apple OAuth redirection:', error);
    }
  };

  return (
    <>
      {loading && (
        <div className="flex items-center justify-center min-w-screen fixed top-[50%] z-50">
          <InfinityLoader size={700} label="signing you in" />
        </div>
      )}

      <Link to="/" className="lg:absolute text-2xl text-white flex items-baseline px-5 gap-1">
        <GoHome />
      </Link>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={`max-w-[95%] lg:max-w-3xl mx-auto space-y-5 roboto-regular bg-[#0b0f19]/80 rounded-2xl shadow-[0_0_40px_#2b6bff40] hover:shadow-[0_0_40px_#2b6bff90] duration-100 backdrop-blur-lg w-full border border-blue-500 z-50 my-5 flex flex-col items-center ${loading && 'blur-[2px] overflow-hidden'}`}
      >
        <div className="w-fit lg:w-[70%] px-5 rounded-lg py-4 flex flex-col justify-center items-center">
          <div className="w-full flex flex-col justify-around">
            {/* Continue with email */}
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-700" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-slate-800 text-slate-400 px-2 rounded-2xl">Continue with email</span>
              </div>
            </div>

            {/* Email login form */}
            <form onSubmit={handleEmailLogin} className="space-y-4">
              {/* Email */}
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

              {/* Password */}
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
                    onClick={() => setShowPassword((s) => !s)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-50 transition-colors"
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-slate-50 font-semibold py-3 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 focus:ring-offset-slate-800"
              >
                Sign In
              </button>
            </form>

            {/* Divider */}
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-700" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-slate-800 text-slate-400 px-2 rounded-2xl">Or continue with</span>
              </div>
            </div>

            {/* Social logins */}
            <div className="flex flex-col gap-3">
              <button
                onClick={loginWithGoogle}
                className="w-full flex items-center justify-center gap-3 hover:bg-slate-700 text-slate-50 font-medium py-3 px-20 rounded-lg transition-colors duration-200 shadow-lg shadow-black border border-[#0f172b]"
              >
                <FaGoogle className="text-xl" />
                Continue with Google
              </button>

              <button
                onClick={loginWithGitHub}
                className="w-full flex items-center justify-center gap-3 hover:bg-slate-700 text-slate-50 font-medium py-3 px-20 rounded-lg transition-colors duration-200 shadow-lg shadow-black border border-[#0f172b]"
              >
                <FaGithub className="text-xl" />
                Continue with GitHub
              </button>

              <a
                href={gitlabLoginHref}
                className="w-full flex items-center justify-center gap-3 hover:bg-slate-700 text-slate-50 font-medium py-3 px-20 rounded-lg transition-colors duration-200 shadow-lg shadow-black border border-[#0f172b]"
              >
                <SiGitlab className="text-xl" />
                Continue with GitLab
              </a>

              <button
                onClick={loginWithApple}
                className="w-full flex items-center justify-center gap-3 hover:bg-slate-700 text-slate-50 font-medium py-3 px-20 rounded-lg transition-colors duration-200 shadow-lg shadow-black border border-[#0f172b]"
              >
                <FaApple className="text-xl" />
                Continue with Apple
              </button>
            </div>

            {/* Footer: link to Register */}
            <div className="text-slate-400 text-sm text-center mt-6">
              Don’t have an account?{' '}
              <Link to="/auth/register" className="text-indigo-500 hover:text-cyan-400 transition-colors">
                Create one
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Login;
