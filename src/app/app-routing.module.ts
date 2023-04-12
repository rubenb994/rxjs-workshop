import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssignmentOneComponent } from './components/assignment-one/assignment-one.component';
import { AssignmentTwoComponent } from './components/assignment-two/assignment-two.component';
import { AssignmentThreeComponent } from './components/assignment-three/assignment-three.component';
import { AssignmentFourComponent } from './components/assignment-four/assignment-four.component';
import { AssignmentFiveComponent } from './components/assignment-five/assignment-five.component';
import { AssignmentSixComponent } from './components/assignment-six/assignment-six.component';
import { AssignmentSevenComponent } from './components/assignment-seven/assignment-seven.component';
import { AssignmentEightComponent } from './components/assignment-eight/assignment-eight.component';

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
  {
    path: 'assignment-3',
    component: AssignmentThreeComponent,
  },
  {
    path: 'assignment-4',
    component: AssignmentFourComponent,
  },
  {
    path: 'assignment-5',
    component: AssignmentFiveComponent,
  },
  {
    path: 'assignment-6',
    component: AssignmentSixComponent,
  },
  {
    path: 'assignment-7',
    component: AssignmentSevenComponent,
  },
  {
    path: 'assignment-8',
    component: AssignmentEightComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
