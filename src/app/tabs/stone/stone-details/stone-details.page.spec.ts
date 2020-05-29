import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StoneDetailsPage } from './stone-details.page';

describe('StoneDetailsPage', () => {
  let component: StoneDetailsPage;
  let fixture: ComponentFixture<StoneDetailsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoneDetailsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StoneDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
