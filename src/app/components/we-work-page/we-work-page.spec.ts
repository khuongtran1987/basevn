import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeWorkPage } from './we-work-page';

describe('WeWorkPage', () => {
  let component: WeWorkPage;
  let fixture: ComponentFixture<WeWorkPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeWorkPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeWorkPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
