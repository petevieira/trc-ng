import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputComponent } from 'app/shared/input/input.component';
import { UserApiService } from 'app/services/users-api.service';
import { SubmitButtonComponent } from 'app/shared/submit-button/submit-button.component';
import { Consts } from 'app/consts/app.consts';
import { ApiResponse } from 'app/types/types';
import { AlertService } from 'app/services/alert.service';
import { Router } from '@angular/router';
import { AuthService } from 'app/services/auth.service';
import { LoaderService } from 'app/services/loader.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    standalone: true,
    imports: [ReactiveFormsModule, SubmitButtonComponent, CommonModule, InputComponent],
})
export class LoginComponent {
    form: FormGroup = new FormGroup({
        email: new FormControl(
            '',
            [
                Validators.required,
                Validators.pattern(Consts.EMAIL_REGEX),
                Validators.maxLength(128),
            ]
        ),
        password: new FormControl(
            '',
            [
                Validators.required,
                Validators.maxLength(64),
            ]
        ),
    });
    loading = false;
    emailErrorMsg: string = '';
    passwordErrorMsg: string = '';
    submitAttempted: boolean = false;

    constructor(
        private authService: AuthService,
        private alertService: AlertService,
        private userApi: UserApiService,
        private loaderService: LoaderService,
        private router: Router,
    ) { }

    get email() {
        return this.form.get('email');
    }

    get password() {
        return this.form.get('password');
    }

    // Method to handle login form submission
    async logInClicked() {
        if (this.form.valid) {
            this.loaderService.showLoader();
            try {
                const response: ApiResponse = await this.userApi.signInAdmin(this.email?.getRawValue(), this.password?.getRawValue());
                if (!response.data.status) {
                    console.error("Login failed: ", response);
                    this.alertService.showError("Login failed", response.data.msg);
                } else {
                    this.alertService.showSuccess("Login successful", response.data.msg);
                    try {
                        await this.authService.setAuthToken(response.data.data.token);
                        this.authService.setLoggedIn();
                        this.router.navigate(['repairs']);
                    } catch (error) {
                        console.error("Error saving token: ", error);
                        this.alertService.showError("Error saving token");
                    }
                }
            } catch (error) {
                console.error("Error logging in: ", error);
                this.alertService.showError("Error logging in");
            } finally {
                this.loaderService.hideLoader();
            }
        }
    }

    onInputChange() {
        this.submitAttempted = false;
    }
}
