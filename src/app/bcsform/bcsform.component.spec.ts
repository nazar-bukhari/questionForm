import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BcsformComponent } from './bcsform.component';

describe('BcsformComponent', () => {
  let component: BcsformComponent;
  let fixture: ComponentFixture<BcsformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BcsformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BcsformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
