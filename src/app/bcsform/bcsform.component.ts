import {Component, OnInit} from '@angular/core';
import {Bcs} from '../bcs';
import {HttpClient} from '@angular/common/http';
import { BcsService } from '../bcs.service';

@Component({
  selector: 'app-bcsform',
  templateUrl: './bcsform.component.html',
  styleUrls: ['./bcsform.component.css']
})
export class BcsformComponent implements OnInit {

  errorMessage: string;
  private questions: Bcs[];

  submitted = false;
  bcsQuestion = new Bcs('Who did what?', 'op1', 'op2', 'op3', 'op4', 2, 'NaN');
  constructor(private bcsService: BcsService, private http: HttpClient) {}
  ngOnInit() {
    this.getBcsQuestions();
  }

  onSubmit(bcsForm) {
    this.submitted = true;
    // console.log(bcsForm.value);
    this.http
      .post('http://127.0.0.1:8888/questions/save', bcsForm.value)
      .subscribe(
        data => console.log('data: ', data),
        err => alert('Server Error.Data Not Saved')
      );
  }
  // getBcsQuestions() {
  //
  //   this.bcsService.getBcsQuestions()
  //     .subscribe(
  //       questions => this.questions = questions,
  //       error => console.log(error));
  // }
  getBcsQuestions() {
    this.bcsService.getBcsQuestions();
  }
}

