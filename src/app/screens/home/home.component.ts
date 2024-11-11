import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RootApiService } from 'app/services/root-api.service';
import { ApiResponse } from 'app/types/types';
import { AlertService } from 'app/services/alert.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    standalone: true,
})
export class HomeComponent {
    constructor(
        private router: Router,
        private rootApi: RootApiService,
        private alertService: AlertService,
    ) {}

    ngOnInit() {
        this.checkServerHealth();
    }

    async checkServerHealth() {
        try {
            const response: ApiResponse = await this.rootApi.checkHealth()
            if (!response.data.status) {
                console.error('Server health check failed: ', response);
                this.alertService.showError('Server health check failed');
                return;
            } else {
                console.log('Server health check successful', response);
                this.alertService.showSuccess('Server health check successful');
            }
        } catch (error) {
            console.error('Error checking server health: ', error);
        }
    }

}
