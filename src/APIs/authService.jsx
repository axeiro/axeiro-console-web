export const githubRepoConnectRedirect = () => {
  const clientId = import.meta.env.VITE_GITHUB_CLIENT_ID;

  const redirectUri =
    `${import.meta.env.VITE_AUTH_SERVICE_BASE_URL}/github/callback`;

  const state = 'repo';

  const url =
    `https://github.com/login/oauth/authorize` +
    `?client_id=${clientId}` +
    `&redirect_uri=${encodeURIComponent(redirectUri)}` +
    `&scope=repo` +
    `&state=${state}`;

  window.location.href = url;
};


export const gitlabOAuthRedirect = () => {
  const clientId = import.meta.env.VITE_GITLAB_CLIENT_ID;
  const redirectUri = `${window.location.origin}/auth/gitlab/callback`;

  const url = `https://gitlab.com/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code&scope=read_repository`;

  window.location.href = url;
};
