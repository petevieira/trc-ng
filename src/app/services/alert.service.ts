import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  private alert = new Subject<any>();
  public showAlert: Observable<any> = this.alert.asObservable();

  constructor() { }

  showSuccess(header: string, additionalText: string = '', autoCloseMs: number|null = null) {
    this.alert.next({ header, additionalText, alertType: 'success', autoCloseMs });
  }

  showError(header: string, additionalText: string = '', autoCloseMs: number|null = null) {
    this.alert.next({ header, additionalText, alertType: 'error', autoCloseMs });
  }

  showInfo(header: string, additionalText: string = '', autoCloseMs: number|null = null) {
    this.alert.next({ header, additionalText, alertType: 'info', autoCloseMs });
  }
}
