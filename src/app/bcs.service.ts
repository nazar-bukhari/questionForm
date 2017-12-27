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

  getBcsQuestions(): Observable<Bcs[]> {
    return this.httpClient.get(this.bcsAllQuestionsUrl)
      .catch(this.handleErrorObservable);
  }

  private handleErrorObservable (error: Response | any) {
    console.error(error.message || error);
    return Observable.throw(error.message || error);
  }
}
