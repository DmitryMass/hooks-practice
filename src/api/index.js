const HOST = 'http://localhost:3001';

/**
 * @param {string} url
 * @param {'GET' | 'POST' | 'PUT' | 'DELETE'} method
 * @param {FormData} body
 * @return {Promise<any>}
 */
const request = async (url, method = 'GET', body = null) => {
  const result = await fetch(`${HOST}${url}`, {
    method,
    body,
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
