import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseWork } from './base-work';

describe('BaseWork', () => {
  let component: BaseWork;
  let fixture: ComponentFixture<BaseWork>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BaseWork]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BaseWork);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
