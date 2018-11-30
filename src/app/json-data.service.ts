import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class JsonDataService {
  public animeData:any;
  constructor(public http:HttpClient) { }

  getJsonData()
  {
    this.http.get('assets/anime.json').subscribe((data:any)=>{ this.animeData = data; console.log(this.animeData)});  
  }
}
