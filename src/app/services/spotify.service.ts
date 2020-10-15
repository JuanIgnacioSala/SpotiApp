import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log('Spotify service listo');
   }

getNewReleases(){ 

  const headers = new HttpHeaders({
    'Authorization':'Bearer BQCoDobnBysOC01UFeAyZEtpW_3cKi1ebAtfY-lOAfuZIuAShU7g4qJvdExoCcUhtbHXIdd0hLiRwZEyx5c'
  })

  return this.http.get('https://api.spotify.com/v1/browse/new-releases?country=AR&limit=20', {headers})
  .pipe( map( data =>{
    return data['albums'].items;
  }))
} 


getArtist(termino: string){
  const headers = new HttpHeaders({
    'Authorization':'Bearer BQCoDobnBysOC01UFeAyZEtpW_3cKi1ebAtfY-lOAfuZIuAShU7g4qJvdExoCcUhtbHXIdd0hLiRwZEyx5c'
  })

  return this.http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist&market=AR&limit=10`, {headers});
}
}




