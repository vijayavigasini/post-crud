import { Component,OnInit } from '@angular/core';
import { ActivatedRoute,Route,Params, Router } from '@angular/router';
// import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { datamodel } from '../register/model';
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
public dataid!:number;
public employee!:datamodel;
constructor(private activatedroute:ActivatedRoute,private router:Router,private api:ApiService){}
ngOnInit(): void {

  this.activatedroute.paramMap.subscribe((param:Params)=>{
    this.dataid=param['get']("id");
    //console.log("data id is",this.dataid)
  })
this.api.fetchdata(this.dataid).subscribe((data:datamodel)=>{
    this.employee=data;
})
}
update(){
  this.api.updateemployee(this.employee,this.dataid).subscribe((res:datamodel)=>{
    this.router.navigate(["/"]);
})
 }
 
}
