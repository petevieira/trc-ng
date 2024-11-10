import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertService } from 'app/services/alert.service';

enum AlertType {
  Success = 'success',
  Error = 'error',
  Info = 'info'
}

@Component({
  selector: 'app-alert',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './alert.component.html',
})
export class AlertComponent {
  showAlert: boolean = false;
  header: string = '';
  additionalText: string = '';
  alertType: AlertType = AlertType.Info;
  alertSubscription: any;

  constructor(
    private alertService: AlertService,
  ) {
    this.alertSubscription = this.alertService.showAlert.subscribe(alert => {
      this.header = alert.header;
      this.additionalText = alert.additionalText;
      this.alertType = alert.alertType;
      this.showAlert = true;
      setTimeout(() => {
        this.showAlert = false;
      }, alert.autoCloseMs || 5000);
    });
  }

  get AlertType() {
    return AlertType;
  }

  closeAlert() {
    this.showAlert = false;
    this.header = '';
    this.additionalText = '';
    this.alertType = AlertType.Info;
  }
}
