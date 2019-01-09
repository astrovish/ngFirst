import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.scss"]
})
export class ContactComponent implements OnInit {
  contactFormGroup: FormGroup;
  submitted: Boolean = false;
  success: Boolean = false;

  constructor(private contactFormBuilder: FormBuilder) {
    this.contactFormGroup = this.contactFormBuilder.group({
      name: ["", Validators.required],
      message: ["", Validators.required]
    });
  }

  onSubmit() {
    this.submitted = true;

    if (this.contactFormGroup.invalid) {
      return;
    }

    this.success = true;
  }

  ngOnInit() {}
}
