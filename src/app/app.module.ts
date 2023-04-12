import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AssignmentOneComponent } from './components/assignment-one/assignment-one.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AssignmentTwoComponent } from './components/assignment-two/assignment-two.component';
import { AssignmentThreeComponent } from './components/assignment-three/assignment-three.component';
import { AssignmentFourComponent } from './components/assignment-four/assignment-four.component';
import { AssignmentFiveComponent } from './components/assignment-five/assignment-five.component';
import { AssignmentSixComponent } from './components/assignment-six/assignment-six.component';
import { AssignmentSevenComponent } from './components/assignment-seven/assignment-seven.component';
import { AssignmentEightComponent } from './components/assignment-eight/assignment-eight.component';

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
