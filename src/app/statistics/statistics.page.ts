import { Component, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';
import { FirebaseServiceService } from '../service/firebase/firebase-service.service';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.page.html',
  styleUrls: ['./statistics.page.scss'],
})
export class StatisticsPage implements OnInit {

  @ViewChild('barChart', {static: false}) barChart;
  bars: any;

  daysResp: [] = [];
  days: [] = [];
  
  constructor(private firebaseService: FirebaseServiceService) { 
    this.firebaseService.readDays().subscribe((res: any) => {
      this.daysResp = res;
      console.log('Primer resp' + this.daysResp)
      for (let index = 0; index < this.daysResp.length-3; index++) {
        this.days.push(this.daysResp[index]);
      }
    });
  }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.createBarChart(this.days);
  }



  async createBarChart(days: any){
    var data = days.map(function (x) {
      return x.tiempo;
    });
    var label = days.map(function (x) {
      return x.fecha;
    });
    this.bars = new Chart (this.barChart.nativeElement, {
      type: 'bar',
      data: {
          labels: label,
          datasets: [{
              label: 'Foco Livingroom',
              data: data,
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero: true
                  }
              }]
          }
      }
    })
  }
}
