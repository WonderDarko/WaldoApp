import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { HttpClientService } from '../http-client.service';

@Injectable({
  providedIn: 'root'
})
export class StarshipService  extends HttpClientService{

  private obj = new BehaviorSubject<any[]>([]);
  public $starships = this.obj.asObservable();

  constructor(httpClient: HttpClient, router: Router) { 
    super(httpClient, router);
  }

  public getStarships(url: any) : Promise <any>{
    return this.get(url);
  }

  public setStarship(starship: any){
    this.obj.next(starship);
  }
}
