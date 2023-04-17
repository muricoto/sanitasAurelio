import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PicsumPhotosComponent } from './picsum-photos.component';
import { FilterPipe } from '../../pipes/filter.pipe';
import { NgxPaginationModule } from 'ngx-pagination';

describe('PicsumPhotosComponent', () => {
  let component: PicsumPhotosComponent;
  let fixture: ComponentFixture<PicsumPhotosComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PicsumPhotosComponent, FilterPipe ],
      imports: [IonicModule.forRoot(), NgxPaginationModule]
    }).compileComponents();

    fixture = TestBed.createComponent(PicsumPhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create the component correctly', () => {
    expect(component).toBeTruthy();
  });

  it('should create an array of image with its corresponding attributes', () => {
    component.jsonCreator();
    expect(component.imageSrc[0].hasOwnProperty('id')).toBeTrue();
    expect(component.imageSrc[0].hasOwnProperty('photo')).toBeTrue();
    expect(component.imageSrc[0].hasOwnProperty('text')).toBeTrue();
  });

});
 