import { Component, OnInit } from '@angular/core';
// import { format } from 'date-fns';
import { Router } from '@angular/router';
// import { ItemService } from 'app/services/item.service';  // Assumes a service for fetching items
// import { AuthService } from 'app/services/auth.service'; // Assumes a service for authentication
import { UserApiService } from 'app/services/users-api.service';
import { LoaderService } from 'app/services/loader.service';

@Component({
  selector: 'app-repairs',
  templateUrl: './repairs.component.html',
})
export class RepairsComponent implements OnInit {
  items: any[] = [];
  repairsRetrieved = false;
  todaysDate: string;
  isLoggedIn: boolean;

  constructor(
    private userApiService: UserApiService,
    private loaderService: LoaderService,
    private router: Router
  ) {
    this.todaysDate = new Date().toLocaleDateString();
    this.isLoggedIn = this.userApiService.adminIsLoggedIn();
  }

  ngOnInit(): void {
    this.getItems();
  }

  async getItems() {
    this.loaderService.showLoader();  // Display loading state
    try {
      const response = await this.apiService.getTodaysItems();
      this.items = response.data.items;
    } catch (error) {
      console.error(error);
      this.apiService.setSnackbarMsg(error.message);  // Display error message
    } finally {
      this.loaderService.hideLoader;  // Hide loading state
      this.repairsRetrieved = true;
    }
  }

  addItemPressed() {
    this.router.navigate(['add-edit-repair'], { state: { item: new Item() } });
  }

  itemPressed(item: any) {
    if (!this.isLoggedIn) return;
    this.router.navigate(['add-edit-repair'], { state: { item } });
  }
}
