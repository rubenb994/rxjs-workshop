import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-assignment-ten',
  templateUrl: './assignment-ten.component.html',
  styleUrls: ['./assignment-ten.component.scss'],
})
export class AssignmentTenComponent implements OnInit {
  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {}
}
