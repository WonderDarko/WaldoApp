import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TemHumPage } from './tem-hum.page';

describe('TemHumPage', () => {
  let component: TemHumPage;
  let fixture: ComponentFixture<TemHumPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemHumPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TemHumPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
