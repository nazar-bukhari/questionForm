import {Component, OnInit, ViewChild} from '@angular/core';
import {Bcs} from '../bcs';
import {NgControl} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {BcsService} from '../services/bcs.service';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-bcsform',
  templateUrl: './bcsform.component.html',
  styleUrls: ['./bcsform.component.css']
})
export class BcsformComponent implements OnInit {

  // @Directive({
  //   selector: '[disableControl]'
  // })
  @ViewChild('bcsForm') bcsForm;
  @ViewChild('update') update;
  @ViewChild('save') save;
  p = 1;
  questions: Bcs[];
  response: any;
  updateQuestionId: String;

  submitted = false;
  bcsQuestion = new Bcs('Who did what?', 'op1', 'op2', 'op3', 'op4', 2, 'NaN');
  questionCategory = [
    {value: 'bcs', viewValue: 'BCS'},
    {value: 'bank', viewValue: 'Bank'},
    {value: 'govt', viewValue: 'Govt'},
    {value: 'ssc', viewValue: 'SSC'},
    {value: 'hsc', viewValue: 'HSC'},
  ];


  constructor(private bcsService: BcsService, private http: HttpClient) {
  }

  ngOnInit() {
    this.getBcsQuestions();
  }

  onSubmit(bcsForm) {

    this.submitted = true;
    this.http
      .post('http://127.0.0.1:8888/questions/save', bcsForm.value)
      .subscribe(
        data => this.response = data,
        err => console.log(err),
      );
    this.bcsForm.reset();
  }

  getBcsQuestions() {
    this.bcsService.getBcsQuestions().subscribe(
      data => this.questions = data,
      (err: HttpErrorResponse) => {
        console.error(err);
      }
    );
  }

  updateBcsQuestion(bcsForm) {
    this.update.nativeElement.disabled = true;
    this.save.nativeElement.disabled = false;
    console.log('updateQuestionId: ', this.updateQuestionId);
    this.bcsService.updateQuestion(bcsForm, this.updateQuestionId)
      .subscribe(data => console.log('data: ', data),
        err => alert('Server Error.Data Not Saved')
      );
    location.reload();
    this.bcsForm.reset();
  }

  // https://stackoverflow.com/questions/35579302/angular2-update-form-control-value
  editQuestion(question) {
    this.updateQuestionId = question.id;
    this.bcsForm.controls['examQuestion'].setValue(question.question);
    this.bcsForm.controls['optionOne'].setValue(question.optionOne);
    this.bcsForm.controls['optionTwo'].setValue(question.optionTwo);
    this.bcsForm.controls['optionThree'].setValue(question.optionThree);
    this.bcsForm.controls['optionFour'].setValue(question.optionFour);
    this.bcsForm.controls['rightAnswer'].setValue(question.rightAnswer);
    this.bcsForm.controls['remark'].setValue(question.remark);
    this.update.nativeElement.disabled = false;
    this.save.nativeElement.disabled = true;
  }

  removeQuestion(id) {
    this.bcsService.removeQuestion(id)
      .subscribe(data => console.log('data: ', data),
        err => alert('Server Error.Data Not deleted'));
    location.reload();
  }

}

