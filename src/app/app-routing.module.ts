import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssignmentOneComponent } from './components/assignment-one/assignment-one.component';
import { AssignmentTwoComponent } from './components/assignment-two/assignment-two.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'assignment-1',
    pathMatch: 'full',
  },
  {
    path: 'assignment-1',
    component: AssignmentOneComponent,
  },
  {
    path: 'assignment-2',
    component: AssignmentTwoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
