import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchDistritoComponent } from './search-distrito.component';

describe('SearchDistritoComponent', () => {
  let component: SearchDistritoComponent;
  let fixture: ComponentFixture<SearchDistritoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchDistritoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchDistritoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
