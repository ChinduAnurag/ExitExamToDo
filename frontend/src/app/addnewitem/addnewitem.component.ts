import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-addnewitem',
  templateUrl: './addnewitem.component.html',
  styleUrls: ['./addnewitem.component.css']
})
export class AddnewitemComponent implements OnInit {

  addnewform: any = new FormGroup({
    'description': new FormControl(''),
    'status': new FormControl('')
  })
  constructor(private api: ApiService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.api.addItem(this.addnewform.value).subscribe({
      complete: () => {
        alert('data saved successfully')
      }
    }
    )

  }

}
