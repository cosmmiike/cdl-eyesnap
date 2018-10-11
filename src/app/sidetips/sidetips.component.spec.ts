import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidetipsComponent } from './sidetips.component';

describe('SidetipsComponent', () => {
  let component: SidetipsComponent;
  let fixture: ComponentFixture<SidetipsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidetipsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidetipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
