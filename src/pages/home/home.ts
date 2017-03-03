import { Component } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  photos: any[] = [];

  constructor(
    public http: Http
  ) {}

  ionViewDidLoad(){
    this.getPhotos();
  }

  private getPhotos(){
    this.http.get('https://jsonplaceholder.typicode.com/photos')
    .map(res => res.json())
    .subscribe(photos =>{
      this.photos = photos;
    })
  }

}
