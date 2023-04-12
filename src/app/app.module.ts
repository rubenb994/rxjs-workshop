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

@NgModule({
  declarations: [
    AppComponent,
    AssignmentOneComponent,
    AssignmentTwoComponent,
    AssignmentThreeComponent,
    AssignmentFourComponent,
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
