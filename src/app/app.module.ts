import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {RouterOutlet} from '@angular/router';
import {AppRoutingModule} from "./app.routing.module";
import {HttpClientModule} from "@angular/common/http";
import {NavbarComponent} from "./components/navbar/navbar.component";
import {FooterComponent} from "./components/footer/footer.component";
import {DnsComponent} from "./components/dns/dns.component";
import {DnsListComponent} from "./views/dnsList/dnsList.component";
import {MapComponent} from "./components/map/map.component";
import {SearchbarComponent} from "./components/searchbar/searchbar.component";
import {HomeComponent} from "./views/home/home.component";
// import { LeafletModule } from '@asymmetrik/ngx-leaflet';
// import {LoadingComponent} from "./components/loading/loading.component";
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    SearchbarComponent,
    DnsComponent,
    DnsListComponent,
    MapComponent,
    // LoadingComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterOutlet,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
