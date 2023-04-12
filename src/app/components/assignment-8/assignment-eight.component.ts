import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-assignment-eight',
  templateUrl: './assignment-eight.component.html',
  styleUrls: ['./assignment-eight.component.scss'],
})
export class AssignmentEightComponent implements OnInit {
  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {}
}
