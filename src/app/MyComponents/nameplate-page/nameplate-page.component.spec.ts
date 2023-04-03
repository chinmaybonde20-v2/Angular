import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NameplatePageComponent } from './nameplate-page.component';

describe('NameplatePageComponent', () => {
  let component: NameplatePageComponent;
  let fixture: ComponentFixture<NameplatePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NameplatePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NameplatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
