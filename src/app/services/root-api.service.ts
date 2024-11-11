import { Injectable } from '@angular/core';
import { CapacitorHttp } from '@capacitor/core';
import { Api } from 'app/consts/api.consts';
import { ApiResponse } from 'app/types/types';

@Injectable({
    providedIn: 'root'
})
export class RootApiService {

    async checkHealth(): Promise<ApiResponse> {
        return await CapacitorHttp.get({
            url: Api.Root.HEALTH_CHECK,
        });
    }

}
