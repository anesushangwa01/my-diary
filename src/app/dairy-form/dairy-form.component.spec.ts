import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DairyFormComponent } from './dairy-form.component';

describe('DairyFormComponent', () => {
  let component: DairyFormComponent;
  let fixture: ComponentFixture<DairyFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DairyFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DairyFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
