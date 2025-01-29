import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GameMinI } from '../interfaces/gameMin.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  private urlApi = "http://localhost:8080";

  constructor(private http: HttpClient) {}

  public getMinGames(): Observable<GameMinI[]> {
    return this.http.get<GameMinI[]>(`${this.urlApi}/games`);
  }
}
