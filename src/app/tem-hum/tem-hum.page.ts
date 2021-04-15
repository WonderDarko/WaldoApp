import { Component, OnInit } from '@angular/core';
import { FirebaseServiceService } from '../service/firebase/firebase-service.service';
import { Gauge } from 'gaugeJS';
import { ViewChild } from '@angular/core';


@Component({
  selector: 'app-tem-hum',
  templateUrl: './tem-hum.page.html',
  styleUrls: ['./tem-hum.page.scss'],
})
export class TemHumPage implements OnInit {

  @ViewChild('gauge', { static: false }) gauge;
  @ViewChild('gaugeH', { static: false }) gaugeH;
  gau: any;
  gauH: any;
  temp = 0;
  hum = 0;

  constructor(private firebaseService: FirebaseServiceService) { }

  ngOnInit() {
    this.firebaseService.getTemperature().on('value', (snapshot) => {
      console.log('Temperatura: ' + snapshot.val());
      this.temp=snapshot.val();
    });
    this.firebaseService.getHumedity().on('value', (snapshot) => {
      console.log('Humedad: ' + snapshot.val());
      this.hum = snapshot.val();
    });
  }

  ionViewDidEnter() {
    this.startGauge()
  }

  startGauge() {
    var opts = {
      angle: 0.15, /// The span of the gauge arc
      lineWidth: 0.44, // The line thickness
      pointer: {
        length: 0.9, // Relative to gauge radius
        strokeWidth: 0.035 // The thickness
      },
      colorStart: '#6FADCF',   // Colors
      colorStop: '#8FC0DA',    // just experiment with them
      strokeColor: '#E0E0E0'   // to see which ones work best for you
    };
    this.gau = new Gauge(this.gauge.nativeElement).setOptions(opts); // create sexy gauge!
    this.gau.maxValue = 50; // set max gauge value
    this.gau.setMinValue(0);  // set min value
    this.firebaseService.getTemperature().on('value', (snapshot) => {
      this.gau.set(snapshot.val()); // set actual value
    });

    this.gauH = new Gauge(this.gaugeH.nativeElement).setOptions(opts); // create sexy gauge!
    this.gauH.maxValue = 100; // set max gauge value
    this.gauH.setMinValue(0);  // set min value
    this.firebaseService.getHumedity().on('value', (snapshot) => {
      this.gauH.set(snapshot.val()); // set actual value
    });

  }
}
