import React, { useEffect } from 'react'
import { handleGitlabcallback } from '../APIs/auth'

const GitLabCallback = () => {
  useEffect(()=>{
    handleGitlabcallback()
  },[])
  return (
    <div>
      <h2>redirecting</h2>
    </div>
  )
}

export default GitLabCallback