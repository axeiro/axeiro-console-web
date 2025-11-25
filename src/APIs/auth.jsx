import axios from 'axios'

const auth = axios.create({
    baseURL:import.meta.env.VITE_AUTH_SERVICE_BASE_URL,
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true,
})


console.log(`backend auth and authorization base URL ${import.meta.env.VITE_AUTH_SERVICE_BASE_URL}`);

export const userRegistration = async(payload)=>{
try {
    const user = await auth.post('/registration' , payload)
    console.log(user);
    
    return user.data
} catch (error) {
    console.log(error);
    
}
}

// Step 1: Function to handle the Google OAuth login
export const registerWithGoogle = () => {
    console.log('call');
    
  try {
    // Construct the Google OAuth URL for authorization
    const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${import.meta.env.VITE_OAUTH_CLIENTID}&redirect_uri=${import.meta.env.VITE_CLIENT_BASE_URL}/callback&response_type=code&scope=profile email`;
    // Redirect the user to the Google OAuth URL for authorization
    window.location.href = authUrl; // This triggers the redirection to Google OAuth
  
  } catch (error) {
    console.log('Error during Google OAuth redirection:', error);
  }
};

// Step 2: Callback function to handle the response from Google
export const handleGoogleCallback = async () => {
  // Get the authorization code from the URL query string
  const urlParams = new URLSearchParams(window.location.search);
  const code = urlParams.get('code'); // 'code' will be in the URL query parameter

  if (!code) {
    console.error('No authorization code found in the URL');
    return;
  }

  try {
    // Send a POST request to the Google token endpoint to exchange the authorization code for an access token
    const tokenResponse = await axios.post('https://oauth2.googleapis.com/token', null, {
      params: {
        code: code, // The authorization code from the URL
        client_id: import.meta.env.VITE_OAUTH_CLIENTID,
        client_secret: import.meta.env.VITE_OAUTH_CLIENT_SECRET, // Securely stored in .env
        redirect_uri: `${import.meta.env.VITE_CLIENT_BASE_URL}/callback`, // Same as the one used above
        grant_type: 'authorization_code',
      },
    });

    console.log('Token response:', tokenResponse.data);
    // Use the access token for further API calls like fetching user info, etc.
  } catch (error) {
    console.log('Error fetching token from Google:', error);
  }
};

// Step 3: Function to handle social login and invoke Google OAuth


export const registerWithGitHub = () => {
  try {
    // Construct GitHub OAuth URL
    const authUrl = `https://github.com/login/oauth/authorize?client_id=${import.meta.env.VITE_GITHUB_CLIENT_ID}&redirect_uri=${encodeURIComponent(`${import.meta.env.VITE_CLIENT_BASE_URL}/callback`)}&scope=read:user,user:email
`;

    // Redirect the user to GitHub OAuth URL
    window.location.href = authUrl;
    
  } catch (error) {
    console.log('Error during GitHub OAuth redirection:', error);
  }
};

export const handleGitHubCallback = async () => {
  
  const urlParams = new URLSearchParams(window.location.search);
  const code = urlParams.get('code');
  console.log(code);
  
  if (!code) {
    console.error('No authorization code found in the URL');
    return;
  }
  try {
    const tokenResponse = await axios.post(`${import.meta.env.VITE_AUTH_SERVICE_BASE_URL}/github/token`, { code });

    console.log('GitHub token response:', tokenResponse.data);
    
  } catch (error) {
    console.log('Error during GitHub token exchange:', error);
  }
};


export const registerWithGitLab = async ()=>{
    try {
        const authUrl = await auth.get('gitlablogin')
        return authUrl
    } catch (error) {
        console.log(error);
        
    }
}

export const handleGitlabcallback = async()=>{
  try {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');
    console.log(code , 'urlParams' , urlParams);
    const response = await auth.post('/gitlab/callback' , {code} , {code})
    if(response.status === 202){
      window.location.href = 'http://localhost:5173/'
    }
    
  } catch (error) {
    console.log(error);
    
  }
}

export const handleLogin = async(formData)=>{
   try {
      const user = await auth.post('/login' , formData)
      console.log(user);
    return user
    } catch (err) {
      console.log(err);
    } finally {
      // setLoading(false);
    }
}