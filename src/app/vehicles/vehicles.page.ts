import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../service/vehicle/vehicle.service';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.page.html',
  styleUrls: ['./vehicles.page.scss'],
})
export class VehiclesPage implements OnInit {

  public urls: any = [];
  public vehicles: any = [];
  constructor(private vehicleService: VehicleService) { }

  ngOnInit() {
  }

  ionViewDidEnter(){
    this.vehicleService.$vehicles.subscribe(data=>{
      console.log(data),
      this.urls = data;
    })
    this.init(this.urls)
  }

  async init(data: any){
    this.vehicles=[];
    await data.forEach(vehicle => {
      this.vehicleService.getVehicles(vehicle).then((resp)=>{
        this.vehicles.push(resp);
      });
    });
    console.log(this.vehicles);
  }

}
