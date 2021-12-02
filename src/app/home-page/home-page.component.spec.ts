import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router'
import { HomePageComponent } from './home-page.component';

describe('HomePageComponent', () => {
  let component: HomePageComponent;
  let fixture: ComponentFixture<HomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // this is a test case for RSVPing (interacting) with posts user story 
  it('testing RSVP', ()=>{
    expect(component.RSVP).toBe(window.alert("Successfully RSVPd for this event!"));
  })

  it('testing title', () =>{
    const data=fixture.nativeElement;
    expect(data.querySelector(".title").textConent).toContain("Global Fitness")
  })
});
