import { Component, OnInit, Input, OnChanges, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-change-detection-on-push',
  templateUrl: './change-detection-on-push.component.html',
  styleUrls: ['./change-detection-on-push.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChangeDetectionOnPushComponent implements OnInit, OnChanges {
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
