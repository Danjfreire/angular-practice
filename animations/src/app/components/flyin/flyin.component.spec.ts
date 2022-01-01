import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlyinComponent } from './flyin.component';

describe('FlyinComponent', () => {
  let component: FlyinComponent;
  let fixture: ComponentFixture<FlyinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlyinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlyinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
