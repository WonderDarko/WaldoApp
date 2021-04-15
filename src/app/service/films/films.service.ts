import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { HttpClientService } from '../http-client.service';

@Injectable({
  providedIn: 'root'
})
export class FilmsService  extends HttpClientService{

  private obj = new BehaviorSubject<any[]>([]);
  public $films = this.obj.asObservable();

  constructor(httpClient: HttpClient, router: Router) {
    super(httpClient, router);
  }

  public getFilms(url: any) : Promise <any>{
    return this.get(url);
  }

  public setFilm(films: any){
    this.obj.next(films);
  }
}
