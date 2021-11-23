import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OurServicesComponent } from './components/our-services/our-services.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { GetAQuoteComponent } from './components/get-a-quote/get-a-quote.component';
import { ImageComponentComponent } from './components/image-component/image-component.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MobileHeaderComponent } from './components/mobile-header/mobile-header.component';
import { SideNavbarComponent } from './components/side-navbar/side-navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    OurServicesComponent,
    PortfolioComponent,
    AboutUsComponent,
    GetAQuoteComponent,
    ImageComponentComponent,
    HeaderComponent,
    FooterComponent,
    MobileHeaderComponent,
    SideNavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
