import { createBrowserRouter } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";

import App from "../App";
import Register from "../pages/Register";
import User from "../pages/User";
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



const router = createBrowserRouter ([
    {
        path:'/' ,
        element:<App />,
        children:[
            {path:'/' , element:<User />},
        ]
    },
     {path:'/auth/register' , element:<GoogleleAuthWrapper />},
     {path:'/auth/login' , element:<GoogleleAuthWrapperLogin />},
     {path:'/callback' , element:<GitHubCallbackPage />},
     {path:'/gitlab/callback' , element:<GitLabCallback />},
])

export default router