import axios from 'axios';
import store from '../store/store';
// import { refreshTokenAction, updateAccessTokenAction } from 'your-redux-actions-path';

const baseURL = process.env.REACT_APP_BASE_URL;

const api = axios.create({
  baseURL: baseURL,
});


// Adding token for every request
api.interceptors.request.use(
  (config) => {
    const accessToken = store.getState().user.token;
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// // Handling 401 and 403 errors
// api.interceptors.response.use(
//   (response) => response,
//   async (error) => {
//     const originalRequest = error.config;
//     if (error.response && (error.response.status === 401 || error.response.status === 403)) {
//       const refreshToken = store.getState().auth.refreshToken;
//       // Make a call to your refresh token endpoint
//       try {
//         const response = await axios.post('http://your-api-base-url.com/api/v1/refreshtoken', {
//           refreshToken,
//         });
//         const newAccessToken = response.data.accessToken;
//         // Update the access token in the Redux store
//         store.dispatch(updateAccessTokenAction(newAccessToken));
//         // Retry the original request with the new access token
//         originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
//         return api(originalRequest);
//       } catch (refreshError) {
//         // Handle refresh token failure (e.g., logout user, redirect to login)
//         // You might want to dispatch an action to handle this in your Redux store
//         // store.dispatch(logoutAction());
//         // Redirect to login page or show an error message
//         console.error('Refresh token request failed', refreshError);
//         // You might throw an error here to stop the original request from proceeding
//         return Promise.reject(refreshError);
//       }
//     }
//     return Promise.reject(error);
//   }
// );

export default api;
