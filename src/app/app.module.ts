import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AssignmentOneComponent } from './components/assignment-1/assignment-one.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AssignmentTwoComponent } from './components/assignment-2/assignment-two.component';
import { AssignmentThreeComponent } from './components/assignment-3/assignment-three.component';
import { AssignmentFourComponent } from './components/assignment-4/assignment-four.component';
import { AssignmentFiveComponent } from './components/assignment-5/assignment-five.component';
import { AssignmentSixComponent } from './components/assignment-6/assignment-six.component';
import { AssignmentSevenComponent } from './components/assignment-7/assignment-seven.component';
import { AssignmentEightComponent } from './components/assignment-8/assignment-eight.component';

@NgModule({
  declarations: [
    AppComponent,
    AssignmentOneComponent,
    AssignmentTwoComponent,
    AssignmentThreeComponent,
    AssignmentFourComponent,
    AssignmentFiveComponent,
    AssignmentSixComponent,
    AssignmentSevenComponent,
    AssignmentEightComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
