import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, delay, map } from 'rxjs';
import { Pokemon, PokemonApiResult } from '../models/pokemon-api-result';
import { PokemonDetails } from '../models/pokemon-details';
import { MoveDetails } from '../models/pokemon-move-details';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  constructor(private httpClient: HttpClient) {}

  /**
   * Get all Pokemons as a successful request
   */
  getAll(): Observable<Pokemon[]> {
    return this.httpClient
      .get<PokemonApiResult>('https://pokeapi.co/api/v2/pokemon/')
      .pipe(
        delay(2000),
        map((result) => result.results)
      );
  }

  /**
   * Get all Pokemons as a failed request
   */
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

  /**
   * Get all Pokemon by name successful request
   */
  getByName(name: string): Observable<PokemonDetails> {
    return this.httpClient.get<PokemonDetails>(
      `https://pokeapi.co/api/v2/pokemon/${name}`
    );
  }

  /**
   * Get the details of a specific move
   * @param url The endpoint of the specific move to query.
   */
  getMoveDetails(url: string): Observable<MoveDetails> {
    return this.httpClient.get<MoveDetails>(url);
  }
}
