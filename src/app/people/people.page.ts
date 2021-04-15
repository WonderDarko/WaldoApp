import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { FilmsService } from '../service/films/films.service';
import { StarWarsService } from '../service/star-wars/star-wars.service';
import { StarshipService } from '../service/starship/starship.service';
import { VehicleService } from '../service/vehicle/vehicle.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.page.html',
  styleUrls: ['./people.page.scss'],
})
export class PeoplePage implements OnInit {

  public person: any = {};
  public showSpinner = true;
  public personimage: string;

  constructor(private starWarsService: StarWarsService,
    private filmService: FilmsService,
    private vehicleService: VehicleService,
    private starshipService: StarshipService,
    public alertController: AlertController)
    { 
      this.init('1');
      this.personimage="../assets/personajes/1.png";
    }

  ngOnInit() {
    
  }

  getValue(event){
    console.log(event + "hijo");
  }

  init(event){
    this.starWarsService.getPersonById(event).then((res)=>{
      this.person = res;
      this.personimage= "../assets/personajes/"+ event + ".png";
      console.log(this.person);
      setTimeout(() => {
        this.showSpinner = false;
      }, 4000);
      this.filmService.setFilm(this.person.films);
      this.vehicleService.setVehicle(this.person.vehicles);
      this.starshipService.setStarship(this.person.starships);
      
    }).catch((error:any) =>{
      console.log(error);
      this.presentAlert(error);
    });
  }

  async presentAlert(msj: any) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Alerta',
      subHeader: 'No escribiste el dato correctamente',
      message: msj,
      buttons: ['OK']
    });

    await alert.present();
  }

}
