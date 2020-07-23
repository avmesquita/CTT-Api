import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchConcelhoComponent } from './search-concelho.component';

describe('SearchConcelhoComponent', () => {
  let component: SearchConcelhoComponent;
  let fixture: ComponentFixture<SearchConcelhoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchConcelhoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchConcelhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
