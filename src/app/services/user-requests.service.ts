import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root',
})
export class UserRequestsService {
    private apiUrl = environment.API_URL; // Base URL for API, stored in environment file

    constructor(private http: HttpClient) {}

    // Login method
    login(email: string, password: string): Observable<any> {
        const url = `${this.apiUrl}/login`;
        return this.http.post(url, { email, password });
    }

    // Register a new user
    register(userData: any): Observable<any> {
        const url = `${this.apiUrl}/register`;
        return this.http.post(url, userData);
    }

    // Fetch user details
    getUserDetails(userId: string): Observable<any> {
        const url = `${this.apiUrl}/users/${userId}`;
        return this.http.get(url);
    }

    // Update user profile
    updateUserProfile(userId: string, updateData: any): Observable<any> {
        const url = `${this.apiUrl}/users/${userId}`;
        return this.http.put(url, updateData);
    }

    // Additional user-related methods as needed
}
