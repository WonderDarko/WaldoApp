import { Component, OnInit } from '@angular/core';
import { FilmsService } from '../service/films/films.service';

@Component({
  selector: 'app-films',
  templateUrl: './films.page.html',
  styleUrls: ['./films.page.scss'],
})
export class FilmsPage implements OnInit {
  public urls: any = [];
  public films: any = [];

  constructor(private filmService: FilmsService) { }

  ngOnInit() {
  }

  ionViewDidEnter(){
    this.filmService.$films.subscribe(data=>{
      console.log(data),
      this.urls = data;
    })
    this.init(this.urls)
  }

  async init(data: any){
    this.films=[];
    await data.forEach(film => {
      this.filmService.getFilms(film).then((resp)=>{
        this.films.push(resp);
      });
    });
    console.log(this.films);
  }
}
