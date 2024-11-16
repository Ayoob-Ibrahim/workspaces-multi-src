import { TestBed } from '@angular/core/testing';

import { MyLibrary9789374509Service } from './my-library-9789374509.service';

describe('MyLibrary9789374509Service', () => {
  let service: MyLibrary9789374509Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyLibrary9789374509Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
