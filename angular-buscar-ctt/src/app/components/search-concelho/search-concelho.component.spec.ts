import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SearchConcelhoComponent } from './search-concelho.component';

describe('SearchConcelhoComponent', () => {
  let component: SearchConcelhoComponent;
  let fixture: ComponentFixture<SearchConcelhoComponent>;

  beforeEach(waitForAsync(() => {
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
