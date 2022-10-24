
import axios from "axios";
import jwt_decode from 'jwt-decode';
import cookie from "./Cookie";

const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    withCredentials: true
});

api.interceptors.request.use(function (config) {
    // 요청이 전달되기 전에 작업 수행
    const accessToken = sessionStorage.getItem('token');
    config.headers['Content-Type'] = 'application/json; charset=utf-8';
    config.headers['Authorization'] = 'Bearer ' + accessToken;
    return config;
}, function (error) {
    // 요청 오류가 있는 작업 수행
    console.log(error);
    return Promise.reject(error);
});

api.interceptors.response.use(function (response) {
    // 2xx 범위에 있는 상태 코드는 이 함수를 트리거 합니다.
    // 응답 데이터가 있는 작업 수행
    return response;
}, function (e) {
    // 2xx 외의 범위에 있는 상태 코드는 이 함수를 트리거 합니다.
    // 응답 오류가 있는 작업 수행
    console.log(e);
    if (e && e.response && e.response.status && e.response.status == 401) {
        console.log("Access Token Expired");
        return api.post('/login/oauth2/refresh')
                    .then(resp => {
                        const accessToken = resp.data.accessToken;
                        const refreshToken = resp.data.refreshToken;
                        const decodedRefreshToken = jwt_decode(refreshToken);
                        sessionStorage.setItem('token', accessToken);
                        cookie.setCookie('refreshToken', refreshToken, {
                            expires: new Date(decodedRefreshToken.exp * 1000)
                        });
                        e.config.headers.Authorization = 'Bearer ' + accessToken;
                        return api.request(e.config);
                    })
    } else if (e && e.response && e.response.status && e.response.status == 1001) {
        console.log("Session Expired");
        sessionStorage.removeItem('token');
        cookie.setCookie('refreshToken', '', {
            expires: -1
        });
        window.location.reload();
    }
    return Promise.reject(e);
});

export default api;
