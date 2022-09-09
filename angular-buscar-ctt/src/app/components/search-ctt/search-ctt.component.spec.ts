import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SearchCttComponent } from './search-ctt.component';

describe('SearchCttComponent', () => {
  let component: SearchCttComponent;
  let fixture: ComponentFixture<SearchCttComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchCttComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchCttComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
