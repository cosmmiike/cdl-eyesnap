import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ComparisonComponent } from './comparison/comparison.component';
import { InfluencersComponent } from './influencers/influencers.component';
import { TrendsComponent } from './trends/trends.component';
import { CompetitorsComponent } from './competitors/competitors.component';
import { ReportsComponent } from './reports/reports.component';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'dashboard/:id', component: DashboardComponent },
  { path: 'comparison', component: ComparisonComponent },
  { path: 'influencers', component: InfluencersComponent },
  { path: 'trends', component: TrendsComponent },
  { path: 'competitors', component: CompetitorsComponent },
  { path: 'reports', component: ReportsComponent },
  { path: 'settings', component: SettingsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
export const routingComponents = [HomeComponent, ProductsComponent, DashboardComponent, ComparisonComponent, InfluencersComponent, TrendsComponent, CompetitorsComponent, ReportsComponent, SettingsComponent]
