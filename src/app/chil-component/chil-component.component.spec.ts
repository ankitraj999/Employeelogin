import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChilComponentComponent } from './chil-component.component';

describe('ChilComponentComponent', () => {
  let component: ChilComponentComponent;
  let fixture: ComponentFixture<ChilComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChilComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChilComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
