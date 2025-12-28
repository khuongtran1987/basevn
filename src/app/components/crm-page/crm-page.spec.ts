import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrmPage } from './crm-page';

describe('CrmPage', () => {
  let component: CrmPage;
  let fixture: ComponentFixture<CrmPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrmPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrmPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
