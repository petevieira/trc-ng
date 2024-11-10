import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { LoaderService } from '../../services/loader.service';

@Component({
  selector: 'app-loader',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './loader.component.html',
})
export class LoaderComponent {
  showLoader: boolean = false;

  constructor(private loaderService: LoaderService) {
    this.loaderService.loaderState.subscribe((state: boolean) => {
      this.showLoader = state;
    });
  }
}
