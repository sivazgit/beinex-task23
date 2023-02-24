import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  public empDetails!:any;

  constructor(private ds:DataService){
    this.empDetails=this.ds.getData();
    console.log(this.empDetails);
  
  }
 

}
