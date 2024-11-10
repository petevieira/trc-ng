import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { AlertComponent } from 'app/partials/alert/alert.component';
import { LoaderComponent } from 'app/partials/loader/loader.component';
import { NavbarComponent } from 'app/partials/navbar/navbar.component';
// import { FooterComponent } from 'app/partials/footer/footer.component';
import axios from 'axios';
import { responseInterceptor, insertJwtCookieIntoRequestAuthorizationHeader
} from 'app/interceptors/axios-interceptors';
import { LoaderService } from 'app/services/loader.service';
import { AlertService } from 'app/services/alert.service';
import { Api } from 'app/consts/api.consts';
import { TranslateService } from '@ngx-translate/core';
import { FooterComponent } from './partials/footer.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [
        RouterOutlet, LoaderComponent,
        NavbarComponent, AlertComponent, HttpClientModule
    ],
    templateUrl: './app.component.html',
})
export class AppComponent {
    title = 'trc-ng';

    constructor(
        private alertService: AlertService,
        private loaderService: LoaderService,
        private translateService: TranslateService,
    ) {
        this.translateService.setDefaultLang('eng');
        // Initialize the app
        this.initializeApp();
    }

    async initializeApp() {
        // this.loaderService.showLoader();
        // try {
        // await this.authService.fetchAccessToken();
        // } catch (error: any) {
        // console.error(error.message);
        // this.alertService.showError('Access token fetch failed', error.message);
        // }
        // Set up axios interceptors
        axios.defaults.withCredentials = true;
        axios.defaults.baseURL = Api.API_ROOT;
        axios.defaults.headers.post['Content-Type'] = 'application/json';
        responseInterceptor();
        // insertJwtCookieIntoRequestAuthorizationHeader();
        // this.loaderService.hideLoader();
    }

}
