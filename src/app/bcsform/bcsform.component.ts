import { Component, OnInit } from '@angular/core';
import { Bcs } from '../bcs';

@Component({
  selector: 'app-bcsform',
  templateUrl: './bcsform.component.html',
  styleUrls: ['./bcsform.component.css']
})
export class BcsformComponent {

   bcsQuestion = new Bcs('Who did what?', 'op1', 'op2', 'op3', 'op4', 2 , 'NaN');
   submitted = false;
   onSubmit() {
     this.submitted = true;
   }
   get questionModel(){
     return JSON.stringify(this.bcsQuestion);
   }
   newQuestion() {
     this.bcsQuestion = new Bcs('New Question?', '', '', '', '', 2 , '');
   }
}
