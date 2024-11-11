import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter, map, mergeMap } from 'rxjs/operators';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { AuthService } from 'app/services/auth.service';
import { AlertService } from 'app/services/alert.service';

@Component({
    selector: 'app-bottom-tabs',
    standalone: true,
    imports: [TranslateModule, RouterModule, CommonModule],
    templateUrl: './bottom-tabs.component.html',
})
export class BottomTabsComponent {
    activeTab = 'home';
    isLoggedIn: boolean = false;

    constructor(
        private router: Router,
        private alertService: AlertService,
        private authService: AuthService,
        private activatedRoute: ActivatedRoute
    ) {
        this.authService.isLoggedIn$.subscribe(isLoggedIn => {
            this.isLoggedIn = isLoggedIn;
        });
    }

    ngOnInit(): void {
        // Listen for navigation end events and retrieve the title from the route data
        this.router.events.pipe(
            filter(event => event instanceof NavigationEnd),
            map(() => this.activatedRoute),
            map(route => {
                while (route.firstChild) {
                    route = route.firstChild;
                }
                return route;
            }),
            mergeMap(route => route.data)
        ).subscribe(data => {
            const pageTitle = data['title']; // Set a default title if none is provided
            switch (pageTitle) {
                case 'Home':
                    this.activeTab = 'home';
                    break;
                case 'Repairs':
                    this.activeTab = 'about';
                    break;
                case 'Volunteers':
                    this.activeTab = 'contact';
                    break;
                default:
                    this.activeTab = '';
                    break;
            }
        });
    }

    async handledLoginStatus() {
        try {
            this.isLoggedIn = await this.authService.isLoggedIn();
        } catch (error) {
            console.error('Error checking login status: ', error);
            this.alertService.showError('Error checking login status');
        }
    }
}
