import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavComponent } from './nav.component';

describe('NavComponent', () => {
  let component: NavComponent;
  let fixture: ComponentFixture<NavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create two links', () => {
    let result = fixture.nativeElement.querySelectorAll('.navbar-brand');
    console.log(result)
    expect(result[0]).toBeDefined();
    expect(result[1]).toBeDefined();
  });

  it('check the innerhtml to see if the names are correct', () => {
    let result = fixture.nativeElement.querySelectorAll('.navbar-brand');
    console.log(result)
    expect(result[0].innerHTML).toEqual("Home");
    expect(result[1].innerHTML).toEqual("Favorites");
  });


});
