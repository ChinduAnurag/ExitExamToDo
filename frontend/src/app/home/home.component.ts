import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router,private apiService:ApiService) { }

  items:any;
  ngOnInit(): void {
    this.getData();
  }

  getData(){
    this.apiService.getTodoList().subscribe(res=>{
      this.items=res;
    }
      )
  }

  deleteItem(id:any){
    this.apiService.deleteItem(id).subscribe(res=>{
      this.items=res;
    })
  }
  addnew(){
    console.log("addnewmember")
  this.router.navigate(["/addnewitem"])
  }

}
