import { CapacitorHttp, HttpOptions } from '@capacitor/core';
import { Preferences } from '@capacitor/preferences';
import { ApiResponse } from 'app/types/types';

export class Http {
    static async get(options: HttpOptions): Promise<ApiResponse> {
        const { value: token } = await Preferences.get({ key: 'authToken' }); // or use Capacitor Secure Storage for mobile

        return await CapacitorHttp.get({
            ...options,
            headers: {
                'Authorization': `Bearer ${token}`,
            }
        });
    }

    static async post(options: HttpOptions): Promise<ApiResponse> {
        const { value: token } = await Preferences.get({ key: 'authToken' }); // or use Capacitor Secure Storage for mobile

        return await CapacitorHttp.post({
            ...options,
            headers: {
                'Content-Type': 'application/json',
                'accept': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
        });
    }

    static async delete(options: HttpOptions): Promise<ApiResponse> {
        const { value: token } = await Preferences.get({ key: 'authToken' }); // or use Capacitor Secure Storage for mobile

        return await CapacitorHttp.delete({
            ...options,
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        });
    }
}