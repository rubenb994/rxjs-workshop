import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssignmentOneComponent } from './components/assignment-1/assignment-one.component';
import { AssignmentTwoComponent } from './components/assignment-2/assignment-two.component';
import { AssignmentThreeComponent } from './components/assignment-3/assignment-three.component';
import { AssignmentFourComponent } from './components/assignment-4/assignment-four.component';
import { AssignmentFiveComponent } from './components/assignment-5/assignment-five.component';
import { AssignmentSixComponent } from './components/assignment-6/assignment-six.component';
import { AssignmentSevenComponent } from './components/assignment-7/assignment-seven.component';
import { AssignmentEightComponent } from './components/assignment-8/assignment-eight.component';
import { AssignmentNineComponent } from './components/assignment-9/assignment-nine.component';
import { AssignmentTenComponent } from './components/assignment-10/assignment-ten.component';

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
  {
    path: 'assignment-9',
    component: AssignmentNineComponent,
  },
  {
    path: 'assignment-10',
    component: AssignmentTenComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
