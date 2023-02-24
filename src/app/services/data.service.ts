import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  public fname: any;
  public lname: any;
  public email: any;
  public password: any;
  public conpass: any;
  public phone: any;
  public address: any;
  public age: any;
  public education: any;
  public post: any;
  public country: any;
  public state: any;
  public area: any;
  public message: any;


  constructor(private http: HttpClient) { }
  addData(fname: any, lname: any, email: any, password: any, conpass: any, phone: any,
    address: any, age: any, education: any, post: any, country: any, state: any, area: any, message: any) {
      this.fname = fname;
      this.lname = lname;
      this.email = email;
      this.password = password;
      this.conpass = conpass;
      this.phone = phone;
      this.address = address;
      this.age = age;
      this.education = education;
      this.post = post;
      this.country = country;
      this.state = state;
      this.area = area;
      this.message = message;

  }


  getData(){
    let empDetails={
      fname:this.fname,
      lname:this.lname,
      email:this.email,
      password:this.password,
      conpass:this.conpass,
      phone:this.phone,
      address:this.address,
      age:this.age,
      education:this.education,
      post:this.post,
      country:this.country,
      state:this.state,
      area:this.area,
      message:this.message
      
    }
    return empDetails;
  }
}
