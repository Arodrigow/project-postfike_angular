import { AuthInteceptorProvider } from './../interceptors/auth.interceptor';
import { AuthService } from './../services/auth.service';
import { PostService } from './../services/post.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { HeaderComponent } from './header/header.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostComponent } from './post-list/post/post.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FullPostComponent } from './post-list/post/full-post/full-post.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PostListComponent,
    PostComponent,
    LoginComponent,
    FooterComponent,
    PageNotFoundComponent,
    FullPostComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NoopAnimationsModule,
    HttpClientModule,
    MatDialogModule,
    NgxPaginationModule,
    MatButtonModule,
    MatGridListModule,
  ],
  providers: [
    PostService,
    AuthService,
    AuthInteceptorProvider
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
