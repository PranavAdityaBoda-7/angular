import { PageService } from './services/page.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {HttpClient} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule , Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PagesComponent } from './components/pages/pages.component';


const appRoutes : Routes = [
  {path: ':page', component: PagesComponent},
  {path: '', component: PagesComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    PageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
