import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  protected urlBase: string;

  constructor(protected httpClient: any, protected router: any) {
    this.urlBase = '';
  }
  private getResponse(http: any) {
    return new Promise((resolve: any, reject: any) => {
      http.subscribe((res) => {
        resolve(res);
      }, (error: any) => {
        switch (error.status) {
          case 400:
            reject('La información enviada no es correcta');
            break;
          case 401:
            reject('Las credenciales no son correctas');
            break;
          case 404:
            reject('No se encontraron datos');
            break;
          case 500:
            reject('El servicio por el momento no esta disponible');
            break;
        }
      });
    });
  }

  protected get(url: string): Promise<any>{
    return this.getResponse(this.httpClient.get(`${this.urlBase}${url}`));
  }
}
