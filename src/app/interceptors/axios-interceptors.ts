import axios, { AxiosRequestConfig } from 'axios';

const insertJwtCookieIntoRequestAuthorizationHeader = () => {
    axios.interceptors.request.use(async (request) => {
        try {
            const accessToken = await getJwtFromHttpOnlyCookie();
            console.log("header cookie accessToken: ", accessToken)
            if (accessToken) {
                request.headers.Authorization = `Bearer ${accessToken}`;
            }

            return request;
        } catch (error) {
            console.error(error);
            return request;
        }
    });
}

// const insertCsrfTokenIntoRequestHeader = () => {
//     axios.interceptors.request.use(async (request) => {
//         try {
//             const csrfToken = await getCsrfTokenFromHttpOnlyCookie();

//             if (csrfToken) {
//                 request.headers['X-CSRF-TOKEN'] = csrfToken;
//             }
//             return request;
//         } catch (error) {
//             console.error(error);
//             return request;
//         }
//     });
// }

const getJwtFromHttpOnlyCookie = () => {
    return new Promise((resolve, reject) => {
        const cookies = document.cookie.split(';');
        console.log("cookies: ", cookies);
        const accessTokenCookie = cookies.find(cookie => cookie.trim().startsWith('accessToken='));
        if (!accessTokenCookie) {
            reject(null);
        }

        const jwt = accessTokenCookie?.split('=')[1];
        console.log("accessToken", jwt);
        resolve(jwt);
    });
}

const responseInterceptor = () => {
    // Handle expired token or 401 Unauthorized error
    axios.interceptors.response.use(
        (response) => {
        // If response is valid, return it to final destination
        return response.data;
        }, error => {
            if (typeof error.response === 'undefined') {
                return Promise.reject(error);
            } else {
                // If there's an error, remove the auth if unauthorized
                // and return to the sign-in page.
                let res = error.response;
                if (res.status === 401 && res.config && !res.config.__isRetryRequest) {
                    // await AsyncStorage.storeAuth('');
                    // setAuthToken(null);
                    // setIsLoggedIn(false);
                    // navigation.navigate('Volunteer Login');
                    return Promise.reject(error);
                } else {
                    if (error.response?.data?.msg) {
                        return Promise.reject({
                            code: error.code,
                            name: error.name,
                            message: error.response.data.msg,
                            });
                    } else {
                        return Promise.reject(error);
                    }
                }
            }
        }
    );
}

export {
    insertJwtCookieIntoRequestAuthorizationHeader,
    responseInterceptor
}