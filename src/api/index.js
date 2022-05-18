const HOST = 'http://localhost:3001';

/**
 * @param {string} url
 * @param {'GET' | 'POST' | 'PUT' | 'DELETE'} method
 * @param {FormData} body
 * @return {Promise<any>}
 */
const request = async (url, method = 'GET', body = null) => {
  let token;
  if (localStorage.userInfo) {
    token = JSON.parse(localStorage.userInfo).token;
  }
  const result = await fetch(`${HOST}${url}`, {
    method,
    body,
    headers: {
      authorization: token,
    },
  });

  return await result.json();
};

/**
 * @param {FormData} body
 * @return {Promise<*>}
 */
export const registerUser = async (body) => {
  return await request('/register', 'POST', body);
};

/**
 * @param {FormData} body
 * @return {Promise<*>}
 */
export const loginUser = async (body) => {
  return await request('/login', 'POST', body);
};

export const getProjects = async () => {
  return await request('/projects');
};

export const createProject = async (body) => {
  return await request('/projects', 'POST', body);
};

export const deleteProject = async (id) => {
  return await request(`/projects/${id}`, 'DELETE');
};

export const editProject = async (id, body) => {
  return await request(`/projects/${id}`, 'PUT', body);
};
