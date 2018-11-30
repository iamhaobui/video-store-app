import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { FlashMessagesModule} from 'angular2-flash-messages';
import { HttpModule} from '@angular/http';
import { FormsModule} from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';

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

import { AuthService} from './services/auth.service';
import { VideoService} from './services/video.service';
import { AuthGuard} from './guards/auth.guard';

const appRoutes = [
  { path: '', component: HomeComponent},
  { path: 'admin/login', component: LoginComponent,},
  { path: 'reserve', component: ReserveComponent },
  { path: 'admin/videos', component: VideoListAdminComponent, canActivate:[AuthGuard] },
  { path: 'admin/videos/update/:id', component: UpdateComponent, canActivate:[AuthGuard] },
  { path: 'admin/videos/add', component: AddNewComponent, canActivate:[AuthGuard] },
  { path: 'admin/videos/reserve', component: ReserveComponent, canActivate:[AuthGuard] },
  { path: 'admin/customers', component: UserComponent, canActivate:[AuthGuard] },
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
    FlashMessagesModule.forRoot(),
    HttpModule, 
    FormsModule, 
    HttpClientModule
  ],
  providers: [AuthService, AuthGuard, VideoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
