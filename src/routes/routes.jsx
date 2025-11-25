import { createBrowserRouter } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { Navigate } from "react-router-dom";

import App from "../App";
import Register from "../pages/Register";
import GitHubCallbackPage from '../utils/GitHubCallbackPage'
import GitLabCallback from "../utils/GitLabCallback";
import Login from "../pages/Login";
  const GoogleleAuthWrapper = () =>{
     return (
        <GoogleOAuthProvider clientId={`${import.meta.env.VITE_OAUTH_CLIENTID}`}>
            <Register />
        </GoogleOAuthProvider>
     )
  }
  const GoogleleAuthWrapperLogin = () =>{
    const user = useSelector((state) => state.account);

  useEffect(() => {
    if (user.id) {
      window.location.replace(`/${user.name}`);
    }
  }, [user.id, user.name]);

  if (user.id) return null; // Prevent rendering the login page while redirecting
     return (
        <GoogleOAuthProvider clientId={`${import.meta.env.VITE_OAUTH_CLIENTID}`}>
            <Login />
        </GoogleOAuthProvider>
     )
  }


import { useEffect } from "react";
import Dashboard from "../pages/dashboard/Dashboard.jsx";
import { useSelector } from "react-redux";
import Data from "../pages/Data.jsx";

export function HomeRedirect() {
   const user = useSelector((state)=> state.account)
  useEffect(() => {
    window.location.replace(user.id ? `/${user.name}` : "https://axeiro.com");
  }, []);

  return null;
}


const router = createBrowserRouter ([
    {
        path:'/' ,
        element: <HomeRedirect />,
    },
     {path:'/auth/register' , element:<GoogleleAuthWrapper />},
     {path:'/auth/login' , element:<GoogleleAuthWrapperLogin />},
     {path:'/callback' , element:<GitHubCallbackPage />},
     {path:'/gitlab/callback' , element:<GitLabCallback />},
     {path:'/:user' , element:<Dashboard />},
     {path:'/data' , element:<Data />},
])

export default router