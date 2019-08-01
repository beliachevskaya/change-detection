import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements  OnInit {
  integer = 0;

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    this.integer = form.value.number;
  }
}
