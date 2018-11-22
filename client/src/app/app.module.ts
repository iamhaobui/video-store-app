import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { VideoComponent } from './video/video.component';
import { ListsComponent } from './video/lists/lists.component';
import { ReserveComponent } from './video/reserve/reserve.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './admin/login/login.component';
import { UserListComponent } from './user/user-list/user-list.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    VideoComponent,
    ListsComponent,
    ReserveComponent,
    UserComponent,
    AdminComponent,
    LoginComponent,
    UserListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
