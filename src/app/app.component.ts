import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  lastAssignment = 11;
  currentAssignment = 1;
  private firstAssignment = 1;

  constructor(private router: Router) {}

  get previousDisabled(): boolean {
    return this.firstAssignment >= this.currentAssignment;
  }

  get nextDisabled(): boolean {
    return this.lastAssignment <= this.currentAssignment;
  }

  onClickPrevious(): void {
    this.currentAssignment--;
    this.router.navigate([`assignment-${this.currentAssignment}`]);
  }

  onClickNext(): void {
    this.currentAssignment++;
    this.router.navigate([`assignment-${this.currentAssignment}`]);
  }
}
