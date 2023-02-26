import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  empForm!: FormGroup;
  public countries!: any;
  public states!: any;
  public code!: any;

  constructor(private fb: FormBuilder, private ds: DataService, private router: Router) {
    this.countries = this.ds.getCountryList();
    console.log(this.countries);
    
  }
  ngOnInit(): void {

    this.empForm = this.fb.group({
      fname: ['San', [Validators.required]],
      lname: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern]],
      password: ['', [Validators.required, Validators.pattern]],
      conpass: ['', [Validators.required]],
      phone: ['', [Validators.required, Validators.pattern]],
      address: ['', [Validators.required]],
      age: ['', [Validators.required]],
      education: ['', [Validators.required]],
      post: ['', [Validators.required]],
      country: ['', [Validators.required]],
      state: ['', [Validators.required]],
      area: ['', [Validators.required]],
      message: ['', [Validators.required]]


    });

    this.empForm.get('country')?.valueChanges.subscribe((country: any) => {

      for (let country of this.countries) {
        if (country.name === this.empForm.get('country')?.value) {
          this.code = country.isoCode;

        }
      }
      if (this.empForm.get('country')?.value) {
        this.states = this.ds.getStatesCountry(this.code);
      }
    });

  }




  onSubmit() {
    if (this.empForm.valid) {
      if (this.empForm.value.password === this.empForm.value.conpass) {
        let emp = {
          fname: this.empForm.value.fname,
          lname: this.empForm.value.lname,
          email: this.empForm.value.email,
          password: this.empForm.value.password,
          conpass: this.empForm.value.conpass,
          phone: this.empForm.value.phone,
          address: this.empForm.value.address,
          age: this.empForm.value.age,
          education: this.empForm.value.education,
          post: this.empForm.value.post,
          country: this.empForm.value.country,
          state: this.empForm.value.state,
          area: this.empForm.value.area,
          message: this.empForm.value.message


        }
        this.ds.addEmpDetails(emp);
        // console.log(emp);
        this.router.navigateByUrl('/dashboard');

      }
    }
  }
}






