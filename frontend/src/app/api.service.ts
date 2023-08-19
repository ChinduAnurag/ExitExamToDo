import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiUrl:String = 'http://localhost:8525/api'

  constructor(private http :HttpClient) { }

  //to fetch all data list
getTodoList(){
  return this.http.get(`${this.apiUrl}/todolist`)
}

// to delete item
deleteItem(id:any){
  return this.http.delete(`${this.apiUrl}/todo/${id}`)
}

// to add new Item 

addItem(data:any){
  return this.http.post(`${this.apiUrl}/todo`, data)

}





}
