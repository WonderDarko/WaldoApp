import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseServiceService } from '../service/firebase/firebase-service.service';

@Component({
  selector: 'app-lights',
  templateUrl: './lights.page.html',
  styleUrls: ['./lights.page.scss'],
})
export class LightsPage implements OnInit {
  livingroom: any;
  ruta = '/statistics';
  days: [] = [];
  countID: number;

  constructor(private firebaseService: FirebaseServiceService, private router: Router) {
    this.firebaseService.getStatus().once('value', (snapshot) => {
      console.log(snapshot.val());
      if (snapshot.val() == "on") {
        this.livingroom = true;
      } else {
        this.livingroom = false;
      }
    });
    this.readDays();
  }

  ngOnInit() {

  }

  public readDays() {
    this.firebaseService.readDays().subscribe((res: any) => {
      this.days = res;
      this.countID = this.days.length - 3;
    });
  }

  printValue(value) {
    console.log(value);
  }

  updateStatus() {
    const value = this.livingroom ? 'on' : 'off';
    this.firebaseService.updateLight(value).then((resp) => {
    }).catch((error) => {
      console.log('error' + error);
    });
    if (value == "on") {
      this.firebaseService.updateInicio(Date.now()).then((res) => {
      }).catch((error) => {
        console.log('error ' + error)
      });
    } else {
      this.firebaseService.updateFin(Date.now()).then((res) => {
        this.firebaseService.getDate(this.days.length - 4).once('value', (snapshot) => {
          if (snapshot.val() != this.getDateNow()) {
            this.firebaseService.createDay(this.countID, 0, this.getDateNow());
            this.updateIds();
            console.log("se ha creado");
          }
          this.getOperations();
        });
      }).catch((error) => {
        console.log('error ' + error)
      });

    }
  }

  updateIds() {
    this.countID = this.days.length - 3;
  }

  getOperations() {
    var fin;
    var inicio;
    this.firebaseService.getInicio().once('value', (snapshot) => {
      inicio = snapshot.val();
    });
    this.firebaseService.getFin().once('value', (snapshot) => {
      fin = snapshot.val();
      this.firebaseService.getHours(this.days.length - 4).once('value', (snapshot) =>{
        this.firebaseService.updateHours(this.days.length - 4, snapshot.val() + (fin - inicio)/3600000);
      });
    });
  }

  getStatistics() {
    this.router.navigate([this.ruta]);
  }

  getDateNow() {
    const tiempoTranscurrido = Date.now();
    const hoy = new Date(tiempoTranscurrido);
    var valor = hoy.toLocaleDateString();
    return valor;
  }
}
