import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Bcs} from "./bcs";
import {Observable} from "rxjs";
import {Response} from "@angular/http";

@Injectable()
export class BcsService {

  constructor(private http: HttpClient) { }

  private bcsAllQuestionsUrl = 'http://localhost:8888/getAllQuestions';

  getBcsQuestions(){
    return this.http.get(this.bcsAllQuestionsUrl)
      .map((res:Response) => <Bcs[]>res.json())
      .catch(this.handleError);
  }

  private handleError(error: Response){
      console.error(error);
      return Observable.throw(error.json().error() || 'Server Error');
  }

}
