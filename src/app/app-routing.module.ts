import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './components/shared/layout/layout.component';
import { FastagComponent } from './components/fastag/fastag.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { GiftCardsComponent } from './components/gift-cards/gift-cards.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'fastag', component: FastagComponent },
  { path: 'gift-cards', component: GiftCardsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
