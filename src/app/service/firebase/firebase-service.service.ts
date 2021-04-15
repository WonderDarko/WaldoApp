import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class FirebaseServiceService {

  constructor(private firebase: AngularFireDatabase) { }

  updateLight(status: any) {
    return this.firebase.object('/Casa/foco1').update(({ estado: status }));
  }

  getStatus() {
    return this.firebase.database.ref('/Casa/foco1').child('estado');
  }

  readDays() {
    return this.firebase.list('Casa/foco1').valueChanges();
  }

  updateInicio(time: any) {
    return this.firebase.object('/Casa/foco1').update(({ prendido: time }));
  }
  updateFin(time: any) {
    return this.firebase.object('/Casa/foco1').update(({ apagado: time }));
  }

  createDay(id, tiempo, currentDate) {
    return this.firebase.object('/Casa/foco1/' + id).update({
      tiempo: tiempo,
      fecha: currentDate

    });
  }

  getDate(id) {
    return this.firebase.database.ref('/Casa/foco1/' + id).child('fecha');
  }

  getInicio() {
    return this.firebase.database.ref('/Casa/foco1').child('prendido');
  }
  getFin() {
    return this.firebase.database.ref('/Casa/foco1').child('apagado');
  }

  getHours(id) {
    return this.firebase.database.ref('/Casa/foco1/' + id).child('tiempo');
  }

  updateHours(id, tiempo) {
    return this.firebase.object('/Casa/foco1/' + id).update(({
      tiempo: tiempo
    }));
  }

  getTemperature(){
    return this.firebase.database.ref('/Casa').child('temperatura');
  }

  getHumedity(){
    return this.firebase.database.ref('/Casa').child('humedad');
  }

}
