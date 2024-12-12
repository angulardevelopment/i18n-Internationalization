import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultilingualComponent } from './multilingual.component';

describe('MultilingualComponent', () => {
  let component: MultilingualComponent;
  let fixture: ComponentFixture<MultilingualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MultilingualComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultilingualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
