import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_DEPLOYMENT_SERVICE_BASE_URL,
  withCredentials: true,
});

/* ---------- GitHub ---------- */
export const getGithubRepos = () =>
  api.get("/internal/integrations/github/repos");

export const getRepoPackageJson = (repo) =>
  api.get(`/internal/integrations/github/repos/${repo}/package-json`);

/* ---------- Deploy ---------- */
export const startDeployment = (payload) =>
  api.post("/deploy", payload);