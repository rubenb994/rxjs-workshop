import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-assignment-seven',
  templateUrl: './assignment-seven.component.html',
  styleUrls: ['./assignment-seven.component.scss'],
})
export class AssignmentSevenComponent implements OnInit {
  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {}
}
