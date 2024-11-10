import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    standalone: true,
})
export class HomeComponent {
    constructor(private router: Router) {}

    // Example method to navigate to another page
    navigateToAbout() {
        this.router.navigate(['/about']);
    }
}
