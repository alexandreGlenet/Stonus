import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StoneBagPage } from './stone-bag.page';

describe('StoneBagPage', () => {
  let component: StoneBagPage;
  let fixture: ComponentFixture<StoneBagPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoneBagPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StoneBagPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
