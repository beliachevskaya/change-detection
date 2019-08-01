import { Component, OnInit, Input, OnChanges, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-change-detection-on-push-modified',
  templateUrl: './change-detection-on-push-modified.component.html',
  styleUrls: ['./change-detection-on-push-modified.component.sass']
})
export class ChangeDetectionOnPushModifiedComponent implements OnInit, OnChanges {
  @Input() integer: number;
  counter = 0;
  constructor(private changeDetector: ChangeDetectorRef) {
    setInterval(() => {
      this.counter++;
      this.changeDetector.detectChanges();
    }, 1000);
  }

  ngOnChanges() {
    this.counter += this.integer;
  }
  ngOnInit() {
  }

}
