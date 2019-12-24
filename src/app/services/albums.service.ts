import { Injectable } from "@angular/core";
//Importação da variável HttpClient para fazer chamadas assíncronas
import { HttpClient } from "@angular/common/http";

//Fazendo a importação das Classes
import { Album } from "../classes/Album";
import { Photo } from "../classes/Photo";
import { User } from "../classes/User";
@Injectable({
  providedIn: "root"
})
export class AlbumsService {
  //nessa variável _url vai conter a nossa api que vamos comsumir futuramente
  private _url: String = "https://jsonplaceholder.typicode.com";
  constructor(private http: HttpClient) {}
  getAlbums = () => this.http.get<Album[]>(`${this._url}/albums`).toPromise();
  getAlbum = albumId =>
    this.http.get<Album>(`${this._url}/albums?id=${albumId}`).toPromise();
  getUser = userId =>
    this.http.get<User>(`${this._url}/users?id=${userId}`).toPromise();
  getAlbumPhotos = albumId =>
    this.http
      .get<Photo[]>(`${this._url}/photos?albumId=${albumId}`)
      .toPromise();
}
