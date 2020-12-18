import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivrosPageComponent } from './livros-page.component';

describe('LivrosPageComponent', () => {
  let component: LivrosPageComponent;
  let fixture: ComponentFixture<LivrosPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LivrosPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LivrosPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
