import { Injectable } from '@angular/core';
import { Http } from 'app/services/http.service';
import { ApiResponse } from 'app/types/types';
import { Api } from 'app/consts/api.consts';

@Injectable({
    providedIn: 'root',
})
export class UserApiService {

    signInAdmin(email: string, password: string): Promise<ApiResponse> {
        console.debug("[signInAdmin] Email: ", email);
        return Http.post({
            url: Api.Users.SIGN_IN_ADMIN,
            data: { email, password },
        });
    }

    adminIsLoggedIn(): Promise<ApiResponse> {
        return Http.get({
            url: Api.Users.ADMIN_IS_SIGNED_IN,
        });
    }
}
