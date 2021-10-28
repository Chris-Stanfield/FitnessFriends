import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DummyPostMngComponent } from './dummy-post-mng.component';

describe('DummyPostMngComponent', () => {
  let component: DummyPostMngComponent;
  let fixture: ComponentFixture<DummyPostMngComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DummyPostMngComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DummyPostMngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
