import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-submit-button',
    templateUrl: './submit-button.component.html',
    standalone: true,
    imports: [CommonModule],
})
export class SubmitButtonComponent {
    @Input() label = 'Submit';
    @Input() loading = false;
    @Output() click = new EventEmitter();

    handleClick() {
        this.click.emit();
    }
}