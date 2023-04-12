import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-assignment-three',
  templateUrl: './assignment-three.component.html',
  styleUrls: ['./assignment-three.component.scss'],
})
export class AssignmentThreeComponent implements OnInit {
  searchFormControl: FormControl = new FormControl('');

  constructor() {}

  ngOnInit(): void {}
}
