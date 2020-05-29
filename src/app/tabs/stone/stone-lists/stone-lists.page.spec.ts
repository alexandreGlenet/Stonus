import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StoneListsPage } from './stone-lists.page';

describe('StoneListsPage', () => {
  let component: StoneListsPage;
  let fixture: ComponentFixture<StoneListsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoneListsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StoneListsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
