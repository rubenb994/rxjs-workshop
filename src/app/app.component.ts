import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  lastAssignment = 10;
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
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        const pathAssignmentNumber = window.location.pathname.split('-');
        this.currentAssignment = parseInt(pathAssignmentNumber[1]) ?? 1;
      });
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
