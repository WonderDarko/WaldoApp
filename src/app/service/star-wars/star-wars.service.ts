import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { HttpClientService } from '../http-client.service';

@Injectable({
  providedIn: 'root'
})
export class StarWarsService extends HttpClientService{

  private endpoint: any;

  constructor(httpClient: HttpClient, router: Router) {
    super(httpClient, router);
    this.urlBase = environment.endpointSW.api;
    this.endpoint = environment.endpointSW.person;
  }

  public getPersonById (id: any): Promise <any>{
    const url: string = this.endpoint.id;
    return this.get(url.replace('_id_', id));;
  }
  
}
