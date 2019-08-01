import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { ChangeDetectionDefaultComponent } from './change-detection-default/change-detection-default.component';
import { ChangeDetectionOnPushComponent } from './change-detection-on-push/change-detection-on-push.component';
import { ChangeDetectionOnPushModifiedComponent } from './change-detection-on-push-modified/change-detection-on-push-modified.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    ChangeDetectionDefaultComponent,
    ChangeDetectionOnPushComponent,
    ChangeDetectionOnPushModifiedComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
