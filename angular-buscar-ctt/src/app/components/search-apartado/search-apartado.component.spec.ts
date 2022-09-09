import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchApartadoComponent } from './search-apartado.component';

describe('SearchApartadoComponent', () => {
  let component: SearchApartadoComponent;
  let fixture: ComponentFixture<SearchApartadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchApartadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchApartadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
