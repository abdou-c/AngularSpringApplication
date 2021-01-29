import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRecepteurComponent } from './list-recepteur.component';

describe('ListRecepteurComponent', () => {
  let component: ListRecepteurComponent;
  let fixture: ComponentFixture<ListRecepteurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListRecepteurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListRecepteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
