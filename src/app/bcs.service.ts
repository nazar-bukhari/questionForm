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
  //   console.log('get called....', this.bcsAllQuestionsUrl);
  //   return this.httpClient.get(this.bcsAllQuestionsUrl)
  //     .subscribe(data => console.log(data));
  // }
  getBcsQuestions(): Observable<Bcs[]> {
    // console.log('get called....', this.httpClient.get(this.bcsAllQuestionsUrl));
    return this.httpClient.get(this.bcsAllQuestionsUrl)
      // .map(this.extractData)
      .catch(this.handleErrorObservable);
  }
  // private extractData(res: Response) {
  //   const body = res.json();
  //   console.log('body: ', body);
  //   return body;
  // } //https://stackoverflow.com/questions/46630893/angular-4-res-json-is-not-a-function
  private handleErrorObservable (error: Response | any) {
    console.error(error.message || error);
    return Observable.throw(error.message || error);
  }
}
