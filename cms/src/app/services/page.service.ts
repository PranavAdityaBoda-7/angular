import { Injectable } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {HttpClient} from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PageService {

  constructor(private http : HttpClient) { }

  public pagesBS = new BehaviorSubject<string>("");

getPages(){
  return this.http.get('http://localhost:3000/pages').pipe(map((response: any) => response.json()));
}
getPage(slug:any){
  return this.http.get('http://localhost:3000/pages'+slug).pipe(map((response: any) => response.json()));
}

}
