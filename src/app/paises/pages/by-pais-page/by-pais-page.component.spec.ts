import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ByPaisPageComponent } from './by-pais-page.component';

describe('ByPaisPageComponent', () => {
  let component: ByPaisPageComponent;
  let fixture: ComponentFixture<ByPaisPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ByPaisPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ByPaisPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
