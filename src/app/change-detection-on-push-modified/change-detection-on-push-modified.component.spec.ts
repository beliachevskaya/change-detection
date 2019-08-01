import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeDetectionOnPushModifiedComponent } from './change-detection-on-push-modified.component';

describe('ChangeDetectionOnPushModifiedComponent', () => {
  let component: ChangeDetectionOnPushModifiedComponent;
  let fixture: ComponentFixture<ChangeDetectionOnPushModifiedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeDetectionOnPushModifiedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeDetectionOnPushModifiedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
