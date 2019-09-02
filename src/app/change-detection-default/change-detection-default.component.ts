import { Component, OnInit, Input, OnChanges, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-change-detection-default',
  templateUrl: './change-detection-default.component.html',
  styleUrls: ['./change-detection-default.component.sass'],
})
export class ChangeDetectionDefaultComponent implements OnInit, OnChanges {
  @Input() integer: number;
  counter = 0;

  ngOnChanges() {
    this.counter += this.integer;
  }
  ngOnInit() {
    this.timer();
  }

  timer(): void {
    setInterval(() => {
      this.counter ++;
    }, 1000);
  }
}
