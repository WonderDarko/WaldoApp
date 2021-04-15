import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../service/pokemon/pokemon.service';
import { AlertController } from '@ionic/angular';

import { Chart } from 'chart.js';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;
  public pokemon: any = {};
  public showSpinner = true;
  public pokeimage: string;

  @ViewChild('barChart', {static: false}) barChart;
  bars: any;

  constructor(private activatedRoute: ActivatedRoute, 
              private pokemonService: PokemonService,
              public alertController: AlertController) 
  {
    this.init('pikachu');
    this.pokeimage="../assets/pokemones/pikachu.png";
  }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
  }

  ionViewDidEnter(){
    
  }

  getValue(event){
    console.log(event + "hijo");
  }

  init(event){
    this.pokemonService.getPokemonByName(event).then((res) => {
      this.pokemon = res;
      this.pokeimage= "../assets/pokemones/"+ event + ".png";
      console.log(this.pokemon);

      setTimeout(() => {
        this.showSpinner = false;
      }, 4000);
      this.createBarChart(this.pokemon.stats);
    }).catch((error:any) =>{
      console.log(error);
      this.presentAlert(error);
    });
  }

  async presentAlert(msj: any) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Alerta',
      subHeader: 'No escribiste el nombre correctamente',
      message: msj,
      buttons: ['OK']
    });

    await alert.present();
  }

  async createBarChart(stats: any){
    var data = stats.map(function (x) {
      return x.base_stat;
    });
    var label = stats.map(function (x) {
      return x.stat.name;
    });
    this.bars = new Chart (this.barChart.nativeElement, {
      type: 'bar',
      data: {
          labels: label,
          datasets: [{
              label: 'Estadisticas',
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
