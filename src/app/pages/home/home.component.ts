import { Component } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  empForm:any = FormGroup;

  constructor(private fb:FormBuilder, private ds:DataService, private router:Router){}
ngOnInit(): void{

  this.empForm =  this.fb.group({
    fname: ['San', Validators.required],
   lname: ['',[Validators.required]],
   email:['',Validators.required],
    password:['',Validators.required],
    conpass:['',Validators.required],
    phone:['',Validators.required],
    address:['',Validators.required],
    age:['',Validators.required],
    education:['',Validators.required],
    post:['',Validators.required],
    country:['',Validators.required],
    state:['',Validators.required],
    area:['',Validators.required],
    message:['',Validators.required]




  });
}

saveData(){
  if(this.empForm.valid){
    let fname = this.empForm.value.fname;
    let lname = this.empForm.value.lname;
    let email = this.empForm.value.email;
    let password = this.empForm.value.password;
    let conpass = this.empForm.value.conpass;
    let phone = this.empForm.value.phone;
    let address = this.empForm.value.address;
    let age = this.empForm.value.age;
    let education = this.empForm.value.education;
    let post = this.empForm.value.post;
    let country = this.empForm.value.country;
    let state = this.empForm.value.state;
    let area = this.empForm.value.area;
    let message = this.empForm.value.message;
    this.ds.addData(fname,lname,email,password,conpass,phone,address,age,education,post,country,state,area,message);
    this.router.navigateByUrl('dashboard');

  }


}
}
