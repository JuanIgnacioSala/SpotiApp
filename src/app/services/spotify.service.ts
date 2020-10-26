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

   getQuery(query:string){
     const url = `https://api.spotify.com/v1/${ query }`;

     const headers = new HttpHeaders({
      'Authorization': 'Bearer BQAQzMJhJujF7AUxdEaPbMxtcnk4JksmJiDn88wwtilEiiefNTEyhUpW71Diw0zKi7-S65ZEcGhdcpcIjVU'
    });
     return this.http.get(url, {headers})
   }


getNewReleases(){

  return this.getQuery('browse/new-releases?country=AR&limit=20')
  .pipe( map( data => data['albums'].items));

  
}



getArtists(termino: string){

  return this.getQuery(`search?q=${termino}&type=artist&market=AR&limit=10`)
    .pipe( map( data => data['artists'].items));

}
getArtist(id: string){

  return this.getQuery(`artists/${id}`)
    //.pipe( map( data => data['artists'].items));

}

getTopTracks(id: string){

  return this.getQuery(`artists/${id}/top-tracks?country=AR`)
    .pipe( map( data => data['tracks']));

}
}




