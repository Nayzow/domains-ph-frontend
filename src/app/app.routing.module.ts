import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DnsComponent } from "./components/dns/dns.component";
import { DnsListComponent } from "./views/dnsList/dnsList.component";
import { HomeComponent } from "./views/home/home.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'dns', component: DnsListComponent },
  { path: 'dns/:name', component: DnsComponent },
  { path: 'map', component: DnsComponent },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
