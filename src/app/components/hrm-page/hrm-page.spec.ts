import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HrmPage } from './hrm-page';

describe('HrmPage', () => {
  let component: HrmPage;
  let fixture: ComponentFixture<HrmPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HrmPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HrmPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
