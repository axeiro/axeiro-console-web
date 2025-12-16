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
import { useSelector } from "react-redux";
import Data from "../pages/Data.jsx";
import Console from "../pages/console/Console.jsx";
import Dashboard from "../pages/dashboard/Dashboard.jsx"
import Projects from "../pages/projects/Projects.jsx"
import NewApp from "../pages/new-app/NewApp.jsx";
import UsageAndBilling from "../pages/usage-billing/UsageAndBilling.jsx";
import Settings from "../pages/account-ettings/AccountSettings.jsx";
import Deployments from "../pages/deployments/Deployments.jsx";
import ProjectOverview from "../pages/projects/ProjectOverview.jsx";
import Logs from "../pages/Logs/Logs.jsx"
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
     
     {
      path:'/:user' ,
      element:<Console />,
      children:[
      {path:'dashboard' , element:<Dashboard />},
     {path:'projects' , element:<Projects />},
     {path:'deployments' , element:<Deployments />},
     {path:'UsageAndBilling' , element:<UsageAndBilling />},
     {path:'logs' , element:<Logs />},
     {path:'settings' , element:<Settings />},
     {path:'newapp' , element:<NewApp />},
     {path:':project-name/project-overview' , element:<ProjectOverview />},
      ]
    },
    


    //  {path:'/data' , element:<Data />},
     
])

export default router