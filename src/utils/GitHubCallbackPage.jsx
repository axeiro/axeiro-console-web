import React, { useEffect } from 'react'
import { handleGitHubCallback } from '../APIs/auth';

const GitHubCallbackPage = () => {
     useEffect(() => {
    handleGitHubCallback();
  }, []); 
  return (
    <div className=' text-white'> 
    <h1>Logging in with GitHub...</h1>
      <p>Please wait while we process your login...</p>
    </div>
  )
}

export default GitHubCallbackPage