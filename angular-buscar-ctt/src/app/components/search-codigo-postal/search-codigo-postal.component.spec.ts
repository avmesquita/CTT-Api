import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchCodigoPostalComponent } from './search-codigo-postal.component';

describe('SearchCodigoPostalComponent', () => {
  let component: SearchCodigoPostalComponent;
  let fixture: ComponentFixture<SearchCodigoPostalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchCodigoPostalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchCodigoPostalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
