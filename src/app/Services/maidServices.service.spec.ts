/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MaidServicesService } from './maidServices.service';

describe('Service: MaidServices', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MaidServicesService]
    });
  });

  it('should ...', inject([MaidServicesService], (service: MaidServicesService) => {
    expect(service).toBeTruthy();
  }));
});
