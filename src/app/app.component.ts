import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  lastAssignment = 11;
  currentAssignment = 1;
  private firstAssignment = 1;

  get previousDisabled(): boolean {
    return this.firstAssignment >= this.currentAssignment;
  }

  get nextDisabled(): boolean {
    return this.lastAssignment <= this.currentAssignment;
  }

  constructor(private router: Router) {}

  ngOnInit(): void {
    const pathAssignmentNumber = window.location.pathname.slice(-1);
    this.currentAssignment = parseInt(pathAssignmentNumber) ?? 1;
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
