import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DomainComponent } from "./views/domain/domain.component";
import { DomainsComponent } from "./views/domains/domains.component";
import { HomeComponent } from "./views/home/home.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'domain', component: DomainsComponent },
  { path: 'domain/:domain', component: DomainComponent },
  { path: 'map', component: DomainComponent },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
