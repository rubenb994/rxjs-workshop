import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-assignment-six',
  templateUrl: './assignment-six.component.html',
  styleUrls: ['./assignment-six.component.scss'],
})
export class AssignmentSixComponent implements OnInit {
  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {}
}
