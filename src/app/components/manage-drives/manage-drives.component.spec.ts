import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageDrivesComponent } from './manage-drives.component';

describe('ManageDrivesComponent', () => {
  let component: ManageDrivesComponent;
  let fixture: ComponentFixture<ManageDrivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageDrivesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageDrivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
