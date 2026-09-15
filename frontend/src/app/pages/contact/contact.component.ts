import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  private readonly formBuilder = inject(FormBuilder);

  contactForm = this.formBuilder.group({
    name: ['', Validators.required],

    email: [
      '',
      [
        Validators.required,
        Validators.email
      ]
    ],

    subject: [''],

    message: [
      '',
      [
        Validators.required,
        Validators.minLength(10)
      ]
    ]
  });

  onSubmit(): void {

    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    console.log(this.contactForm.value);
  }
}