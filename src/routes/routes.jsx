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
     return (
        <GoogleOAuthProvider clientId={`${import.meta.env.VITE_OAUTH_CLIENTID}`}>
            <Login />
        </GoogleOAuthProvider>
     )
  }


import { useEffect } from "react";
import Dashboard from "../pages/dashboard/Dashboard";

export function HomeRedirect() {
  useEffect(() => {
    window.location.replace("https://axeiro.com");
  }, []);

  return null; // no UI
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
     {path:'/user' , element:<Dashboard />},
])

export default router