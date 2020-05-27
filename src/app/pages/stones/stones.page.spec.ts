import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StonesPage } from './stones.page';

describe('StonesPage', () => {
  let component: StonesPage;
  let fixture: ComponentFixture<StonesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StonesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StonesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
