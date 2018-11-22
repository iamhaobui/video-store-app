import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoListAdminComponent } from './video-list-admin.component';

describe('VideoListAdminComponent', () => {
  let component: VideoListAdminComponent;
  let fixture: ComponentFixture<VideoListAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoListAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoListAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
