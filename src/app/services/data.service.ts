import { HttpClient } from '@angular/common/http';
import { Country, State } from 'country-state-city';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  public empDetails = {
    fname:'San',
    lname: 'Ryan',
    email: '',
    password: '',
    phone: '',
    address: '',
    age: '',
    education: '',
    country: '',
    state: '',
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
      this.empDetails.country= emp.country;
      this.empDetails.state= emp.state;
      this.empDetails.message= emp.message;
    }

    getEmpDetails() {
      return this.empDetails;
    }


    getCountryList() {
      return Country.getAllCountries();
    }
  
    getStatesAndCountry(counCode: string) {
      return State.getStatesOfCountry(counCode)
    }
  }

  




 
