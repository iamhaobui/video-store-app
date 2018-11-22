import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { VideoComponent } from './video/video.component';
import { VideoListComponent } from './video/video-list/video-list.component';
import { ReserveComponent } from './video/reserve/reserve.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { VideoListAdminComponent } from './video/video-list-admin/video-list-admin.component';
import { AddNewComponent } from './video/add-new/add-new.component';
import { UpdateComponent } from './video/update/update.component';
import { NavigationComponent } from './navigation/navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    VideoComponent,
    VideoListComponent,
    ReserveComponent,
    UserComponent,
    AdminComponent,
    LoginComponent,
    UserListComponent,
    VideoListAdminComponent,
    AddNewComponent,
    UpdateComponent,
    NavigationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
