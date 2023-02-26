import { HttpClient } from '@angular/common/http';
import { Country, State } from 'country-state-city';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  public empDetails = {
    fname:'San',
    lname: '',
    email: '',
    password: '',
    phone: '',
    address: '',
    age: '',
    post:'',
    education: '',
    country: '',
    state: '',
    area:'',
    message: ''
  }



  constructor(private http: HttpClient) { }


  addEmpDetails(emp: any) {
      this.empDetails.fname = emp.fname;
      this.empDetails.lname = emp.lname;
      this.empDetails.email = emp.email;
      this.empDetails.password = emp.password;
      this.empDetails.phone = emp.phone;
      this.empDetails.address= emp.address;
      this.empDetails.age= emp.age;
      this.empDetails.education= emp.education;
      this.empDetails.post= emp.post;
      this.empDetails.country= emp.country;
      this.empDetails.state= emp.state;
      this.empDetails.area = emp.area;
      this.empDetails.message= emp.message;
    }

    getEmpDetails() {
      return this.empDetails;
    }


    getCountryList() {
      return Country.getAllCountries();
      
    }
  
    getStatesCountry(code: any) {
      return State.getStatesOfCountry(code)
    }
  }

  




 
