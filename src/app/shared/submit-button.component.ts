import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-submit-button',
    template: `<button [disabled]="loading">{{ label }}</button>`,
    standalone: true,
    imports: [CommonModule],
})
export class SubmitButtonComponent {
    @Input() label = 'Submit';
    @Input() loading = false;
}