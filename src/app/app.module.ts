/**
 * Modules
 */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { LOADING_BAR_CONFIG } from '@ngx-loading-bar/core';

/**
 * Components
 */
import { AppComponent } from './app.component';
import { MainComponent } from './pages/main/main.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { UserComponent } from './pages/user/user.component';
import { RoleComponent } from './pages/role/role.component';
import { ScrollComponent } from './components/scroll/scroll.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { ScrollQueryComponent } from './components/scroll-query/scroll-query.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NotFoundComponent,
    NavbarComponent,
    FooterComponent,
    UserComponent,
    RoleComponent,
    ScrollComponent,
    ScrollQueryComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    BrowserAnimationsModule,
    NgbModule,
    NgbCollapseModule,
    NgbPaginationModule,
    LoadingBarHttpClientModule,
    ToastrModule.forRoot({
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    }),
    InfiniteScrollModule
  ],
  providers: [
    { provide: NavbarComponent },
    { provide: LOADING_BAR_CONFIG, useValue: { latencyThreshold: 100 } },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
