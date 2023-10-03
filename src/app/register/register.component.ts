// register.component.ts
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { datamodel } from './model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  data: undefined | datamodel[];
  submitemp!: FormGroup;

  constructor(private fb: FormBuilder, private api: ApiService) {}

  ngOnInit() {
    this.submitemp = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      city: ['', [Validators.required]],
      pincode: ['', [Validators.required]],
      phonenumber: ['', [Validators.required]],
    });

    this.getemployee();
  }

  addemployee(data: any) {
    this.api.addpeople(data).subscribe(() => {
      this.submitemp.reset();
      this.getemployee();
    });
  }

  getemployee() {
    this.api.getpeople().subscribe((res) => {
      this.data = res;
    });
  }

  deleteEmployee(id: number) {
    this.api.deletepeople(id).subscribe(() => {
      this.getemployee();
    });
    this.getemployee();
  }
}
