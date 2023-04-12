import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-assignment-four',
  templateUrl: './assignment-four.component.html',
  styleUrls: ['./assignment-four.component.scss'],
})
export class AssignmentFourComponent implements OnInit {
  pokemonNamesWhoCanLearnFirstMoveOfBulbasaur$: Observable<string[]>;

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {}
}
