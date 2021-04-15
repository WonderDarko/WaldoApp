import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StarWarsPage } from './star-wars.page';

describe('StarWarsPage', () => {
  let component: StarWarsPage;
  let fixture: ComponentFixture<StarWarsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StarWarsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StarWarsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
