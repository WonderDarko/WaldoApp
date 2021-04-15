import { Component, OnInit } from '@angular/core';
import { StarshipService } from '../service/starship/starship.service';

@Component({
  selector: 'app-starships',
  templateUrl: './starships.page.html',
  styleUrls: ['./starships.page.scss'],
})
export class StarshipsPage implements OnInit {

  public urls: any = [];
  public starShips: any = [];

  constructor( private starshipService: StarshipService) { }

  ngOnInit() {
  }

  ionViewDidEnter(){
    this.starshipService.$starships.subscribe(data=>{
      console.log(data),
      this.urls = data;
    })
    this.init(this.urls)
  }

  async init(data: any){
    this.starShips=[];
    await data.forEach(starship => {
      this.starshipService.getStarships(starship).then((resp)=>{
        this.starShips.push(resp);
      });
    });
    console.log(this.starShips);
  }

}
