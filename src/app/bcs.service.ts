import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Bcs} from './bcs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Observable} from 'rxjs/Observable';
import {Response} from '@angular/http';

@Injectable()
export class BcsService {

  private readonly bcsAllQuestionsUrl = 'http://localhost:8888/getAllQuestions';

  constructor(private httpClient: HttpClient) { }


  // getBcsQuestions() {
  //   return this.httpClient.get('http://127.0.0.1:8888/getAllQuestions')
  //     .map((res: Response) => res.json());
  // }
  // getBcsQuestions() {
  //   return this.httpClient.get('http://127.0.0.1:8888/getAllQuestions')
  //     .map((res: Response) => res.json())
  //     .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  // }
  getBcsQuestions() {
    console.log('get called....', this.bcsAllQuestionsUrl);
    return this.httpClient.get(this.bcsAllQuestionsUrl)
      .subscribe(data => console.log(data));
  }

}
