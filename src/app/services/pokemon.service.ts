import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, delay, map } from 'rxjs';
import { Pokemon, PokemonApiResult } from '../models/pokemon-api-result';
import { PokemonDetails } from '../models/pokemon-details';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<Pokemon[]> {
    return this.httpClient
      .get<PokemonApiResult>('https://pokeapi.co/api/v2/pokemon/')
      .pipe(
        delay(2000),
        map((result) => result.results)
      );
  }

  getAllWithError(): Observable<PokemonApiResult> {
    return this.httpClient
      .get<PokemonApiResult>('https://pokeapi.co/api/v2/pokemon/')
      .pipe(
        delay(2000),
        map((result) => result.results),
        map(() => {
          throw new Error('Something went wrong while querying the API');
        })
      );
  }

  getByName(name: string): Observable<PokemonDetails> {
    return this.httpClient.get<PokemonDetails>(
      `https://pokeapi.co/api/v2/pokemon/${name}`
    );
  }
}
