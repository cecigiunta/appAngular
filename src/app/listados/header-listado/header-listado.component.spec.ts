import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderListadoComponent } from './header-listado.component';

describe('HeaderListadoComponent', () => {
  let component: HeaderListadoComponent;
  let fixture: ComponentFixture<HeaderListadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderListadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
