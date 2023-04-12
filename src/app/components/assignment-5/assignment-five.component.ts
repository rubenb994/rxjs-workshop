import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-assignment-five',
  templateUrl: './assignment-five.component.html',
  styleUrls: ['./assignment-five.component.scss'],
})
export class AssignmentFiveComponent implements OnInit {
  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {}
}
