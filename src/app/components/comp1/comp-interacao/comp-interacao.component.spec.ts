import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompInteracaoComponent } from './comp-interacao.component';

describe('CompInteracaoComponent', () => {
  let component: CompInteracaoComponent;
  let fixture: ComponentFixture<CompInteracaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompInteracaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompInteracaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
