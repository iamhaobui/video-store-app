import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { VideoListComponent } from './video/video-list/video-list.component';
import { ReserveComponent } from './video/reserve/reserve.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { VideoListAdminComponent } from './video/video-list-admin/video-list-admin.component';
import { AddNewComponent } from './video/add-new/add-new.component';
import { UpdateComponent } from './video/update/update.component';
import { HomeComponent } from './home/home.component';

const appRoutes = [
  { path: '', component: HomeComponent},
  { path: 'admin/login', component: LoginComponent },
  { path: 'reserve', component: ReserveComponent },
  { path: 'admin/videos', component: VideoListAdminComponent },
  { path: 'admin/videos/update', component: UpdateComponent },
  { path: 'admin/videos/add', component: AddNewComponent },
  { path: 'admin/videos/reserve', component: ReserveComponent },
  { path: 'admin/customers', component: UserComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    // VideoComponent,
    VideoListComponent,
    ReserveComponent,
    UserComponent,
    LoginComponent,
    UserListComponent,
    VideoListAdminComponent,
    AddNewComponent,
    UpdateComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
