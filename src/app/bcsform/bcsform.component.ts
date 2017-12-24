import {Component, OnInit} from '@angular/core';
import {Bcs} from '../bcs';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-bcsform',
  templateUrl: './bcsform.component.html',
  styleUrls: ['./bcsform.component.css']
})
export class BcsformComponent {

  constructor(private http: HttpClient) {
  }

  submitted = false;
  bcsQuestion = new Bcs('Who did what?', 'op1', 'op2', 'op3', 'op4', 2, 'NaN');

  onSubmit(bcsForm) {
    this.submitted = true;
    console.log(bcsForm.value);
    this.http
      .post('http://localhost:8888/questions/save', bcsForm.value)
      .subscribe();
  }

  get questionModel() {
    return JSON.stringify(this.bcsQuestion);
  }

  newQuestion() {
    console.log(JSON.stringify(this.bcsQuestion));
    const body = {name: 'Brad'};

    this.http
      .post('http://localhost:8888/questions/save', body)
      .subscribe();
  }

  // get questionModel(){
  //   return JSON.stringify(this.bcsQuestion);
  // }

}

