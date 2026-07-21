import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAccountPage } from './create-account-page';

describe('CreateAccountPage', () => {
  let component: CreateAccountPage;
  let fixture: ComponentFixture<CreateAccountPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateAccountPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateAccountPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
