import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { FormGroup, FormControlName, ReactiveFormsModule, NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
    selector: 'app-input',
    standalone: true,
    imports: [ReactiveFormsModule],
    templateUrl: './input.component.html',
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => InputComponent),
            multi: true,
        },
    ],
})
export class InputComponent implements ControlValueAccessor {
    @Input('parentFormGroup') parentFormGroup: FormGroup = new FormGroup({});
    @Input('formControlName') formControlName: string = '';
    @Input('label') label: string = '';
    @Input('type') type: string = 'text';
    @Input('name') name: string = '';
    @Input('autocomplete') autocomplete: string = 'off';
    @Input('errorMessage') errorMessage: string = '';

    writeValue(obj: any): void {
        // this.parentFormGroup.controls[this.formControlName].setValue(obj);
    }

    registerOnChange(fn: any): void {
        // this.parentFormGroup.controls[this.formControlName].valueChanges.subscribe(fn);
    }

    registerOnTouched(fn: any): void {
        // this.parentFormGroup.controls[this.formControlName].valueChanges.subscribe(fn);
    }

    setDisabledState?(isDisabled: boolean): void {
        // if (isDisabled) {
        //   this.parentFormGroup.controls[this.formControlName].disable();
        // } else {
        //   this.parentFormGroup.controls[this.formControlName].enable();
        // }
    }
}
