import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ServicesComponent } from './services/services.component';
import { PaymentsComponent } from './payments/payments.component';
import { ContactusComponent } from './contactus/contactus.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { NgImageSliderModule } from 'ng-image-slider';
import { AboutusComponent } from './aboutus/aboutus.component';
import { NgbdCarouselBasic } from './carousel-home/carousel-basic';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from '@angular/common/http';
import {map} from 'rxjs/operators';
import { FlexLayoutModule } from '@angular/flex-layout' ;
import { AgmCoreModule } from '@agm/core';
import { ProductCardComponent } from './product-card/product-card.component';
import { CctvPageComponent } from './cctv-page/cctv-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    ServicesComponent,
    PaymentsComponent,
    ContactusComponent,
    NavBarComponent,
    FooterComponent,
    AboutusComponent,
    NgbdCarouselBasic,
    ProductCardComponent,
    CctvPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    NgbModule,
    NgbModule.forRoot(),
    NgImageSliderModule,
    HttpClientModule,
    FlexLayoutModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDQIQi6H0KDy7vBQnphqOxS4Z4qQl0cpDc'
    })
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
