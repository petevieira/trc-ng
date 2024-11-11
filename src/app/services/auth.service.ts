import { Injectable } from '@angular/core';
import { Preferences } from '@capacitor/preferences';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    private tokenKey = 'authToken';
    private loggedIn = new BehaviorSubject<boolean>(false);
    isLoggedIn$ = this.loggedIn.asObservable();

    constructor(private router: Router) {}

    async setAuthToken(token: string) {
        await Preferences.set({ key: this.tokenKey, value: token });
    }

    async getAuthToken(): Promise<string | null> {
        const { value } = await Preferences.get({ key: this.tokenKey });
        return value;
    }

    async isLoggedIn(): Promise<boolean> {
        const token = await this.getAuthToken();
        return !!token;
    }

    async logout() {
        await Preferences.remove({ key: this.tokenKey });
        this.router.navigate(['/login']);
    }

    setLoggedIn() {
        this.loggedIn.next(true);
    }
}
