import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-assignment-four',
  templateUrl: './assignment-four.component.html',
  styleUrls: ['./assignment-four.component.scss'],
})
export class AssignmentFourComponent implements OnInit {
  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {}
}
