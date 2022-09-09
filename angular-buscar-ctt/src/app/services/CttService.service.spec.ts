/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CttService } from './CttService.service';

describe('Service: CttService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CttService]
    });
  });

  it('should ...', inject([CttService], (service: CttService) => {
    expect(service).toBeTruthy();
  }));
});
