import { NgModule } from '@angular/core';
import { BrowserModule, HammerModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HerosectionComponent } from './components/herosection/herosection.component';
import { AboutComponent } from './components/about/about.component';
import { SignupComponent } from './components/signup/signup.component';
import { ConnectComponent } from './components/connect/connect.component';
import { CreateComponent } from './components/create/create.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule, Routes } from '@angular/router';
import { CouroselComponent } from './courosel/courosel.component';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './components/search/search.component';
import { AllBlogsComponent } from './components/all-blogs/all-blogs.component';
import { FooterComponent } from './components/footer/footer.component';


const appRoute: Routes = [
  { path: "", component: HerosectionComponent },
  { path: "about", component: AboutComponent },
  { path: "create", component: CreateComponent },
  { path: "connect", component: ConnectComponent },
  { path: "signup", component: SignupComponent },
  { path: "search", component: AllBlogsComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HerosectionComponent,
    AboutComponent,
    SignupComponent,
    ConnectComponent,
    CreateComponent,
    SearchComponent,
    AllBlogsComponent,
    FooterComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule, MatToolbarModule, MatButtonModule, MatIconModule,
    RouterModule.forRoot(appRoute), MatCardModule, CouroselComponent, HammerModule, FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
