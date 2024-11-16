import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyLibrary9789374509Component } from './my-library-9789374509.component';

describe('MyLibrary9789374509Component', () => {
  let component: MyLibrary9789374509Component;
  let fixture: ComponentFixture<MyLibrary9789374509Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyLibrary9789374509Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyLibrary9789374509Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
