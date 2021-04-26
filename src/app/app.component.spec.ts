import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {

  let app: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });
  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
    fixture.autoDetectChanges();
});
    
  it('should create the app', () => {
    
    expect(app).toBeTruthy();
  });

  it(`should have as title 'myapp'`, () => {
    expect(app.title).toEqual('myapp');
  });

  it('dogList should not be empty', () => {
    expect(app.dogList.length).toBeGreaterThan(0);
  });
});
