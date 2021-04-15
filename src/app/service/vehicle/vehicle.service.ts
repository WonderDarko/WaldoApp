import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { HttpClientService } from '../http-client.service';

@Injectable({
  providedIn: 'root'
})
export class VehicleService extends HttpClientService{

  private obj = new BehaviorSubject<any[]>([]);
  public $vehicles = this.obj.asObservable();

  constructor(httpClient: HttpClient, router: Router) { 
    super(httpClient, router);
  }

  public getVehicles(url: any) : Promise <any>{
    return this.get(url);
  }

  public setVehicle(vehicles: any){
    this.obj.next(vehicles);
  }
}
