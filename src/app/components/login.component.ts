import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { UserRequestsService } from 'app/services/user-requests.service';
import { SubmitButtonComponent } from 'app/shared/submit-button.component';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    standalone: true,
    imports: [ReactiveFormsModule, SubmitButtonComponent, MatFormFieldModule, MatInputModule, CommonModule],
})
export class LoginComponent {
    loginForm: FormGroup;
    loading = false;
    snackbarMsg = ''; // Placeholder for snackbar messages

    constructor(private fb: FormBuilder, private userRequests: UserRequestsService) {
        // Initialize the login form with email and password
        this.loginForm = this.fb.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required]]
        });
    }

    // Method to validate email format
    get emailIsValid(): boolean {
        const email = this.loginForm.get('email')?.value;
        const reg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        return reg.test(email);
    }

    // Method to handle login form submission
    onSubmit() {
        if (this.loginForm.valid) {
            this.loading = true;
            // this.userRequests.login(this.loginForm.value).subscribe(
            //     response => {
            //         this.loading = false;
            //         // Set auth token or handle success logic
            //     },
            //     error => {
            //         this.loading = false;
            //         this.snackbarMsg = 'Login failed. Please try again.';
            //     }
            // );
        }
    }
}
