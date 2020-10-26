import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { SpotifyService } from '../../services/spotify.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent {

  loading: boolean;

  newSongs: any[] = [];

  error : boolean;
  msgError: string;

  constructor( private spotify: SpotifyService) {

    this.loading = true;
    this.error=false;

    this.spotify.getNewReleases()
    .subscribe((data: any) => {
      console.log(data);
      this.newSongs = data;
    }, (err)=> {
      this.error=true;
      console.log(err);
      this.msgError= err.error.error.message;
    });

    this.loading = false;

  }


}
