import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import 'rxjs/Rx';
@Injectable()
export class PersonService {

  constructor(private http:HttpClient) {

  }


    get() {
        return this.http.get<any>('http://dev.api.fooddocs.ee/testtask')
            .map(res => {
                return res;
            });
    }

}
