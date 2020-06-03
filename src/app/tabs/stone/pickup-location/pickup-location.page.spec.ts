import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PickupLocationPage } from './pickup-location.page';

describe('PickupLocationPage', () => {
  let component: PickupLocationPage;
  let fixture: ComponentFixture<PickupLocationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PickupLocationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PickupLocationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
