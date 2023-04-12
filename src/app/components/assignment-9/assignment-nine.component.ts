import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-assignment-nine',
  templateUrl: './assignment-nine.component.html',
  styleUrls: ['./assignment-nine.component.scss'],
})
export class AssignmentNineComponent implements OnInit {
  searchFormControl: FormControl = new FormControl('');

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {}
}
