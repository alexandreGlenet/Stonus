import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StonePage } from './stone.page';

describe('StonePage', () => {
  let component: StonePage;
  let fixture: ComponentFixture<StonePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StonePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StonePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
