import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './components/shared/layout/layout.component';
import { FastagComponent } from './components/fastag/fastag.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { GiftCardsComponent } from './components/gift-cards/gift-cards.component';
import { RechargeChartComponent } from './components/dashboard/recharge-chart/recharge-chart.component';
import { UtiltiyPaymentsComponent } from './components/utiltiy-payments/utiltiy-payments.component';
import { TopUpRequestHistoryComponent } from './components/reports/top-up-request-history/top-up-request-history.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'fastag', component: FastagComponent },
  { path: 'gift-cards', component: GiftCardsComponent },
  { path: 'recharge', component: RechargeChartComponent },
  { path: 'utility', component: UtiltiyPaymentsComponent },
  { path: 'top-up-history', component: TopUpRequestHistoryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
