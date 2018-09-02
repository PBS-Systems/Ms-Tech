import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CctvPageComponent } from './cctv-page.component';

describe('CctvPageComponent', () => {
  let component: CctvPageComponent;
  let fixture: ComponentFixture<CctvPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CctvPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CctvPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
