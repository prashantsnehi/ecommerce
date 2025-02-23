import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { LayoutComponent } from './components/shared/layout/layout.component';
import { SidenavComponent } from './components/shared/sidenav/sidenav.component';
import { FastagComponent } from './components/fastag/fastag.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FastagDetailComponent } from './components/fastag/fastag-detail/fastag-detail.component';
import { AgCharts } from 'ag-charts-angular';
// Chart Options Type Interface
import { AgChartOptions } from 'ag-charts-community';
import { ChartsComponent } from './components/dashboard/charts/charts.component';
import { ElectricityChartComponent } from './components/dashboard/electricity-chart/electricity-chart.component';
import { RechargeChartComponent } from './components/dashboard/recharge-chart/recharge-chart.component';
import { TopupComponent } from './components/dashboard/topup/topup.component';
import { GiftCardsComponent } from './components/gift-cards/gift-cards.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LayoutComponent,
    SidenavComponent,
    FastagComponent,
    DashboardComponent,
    FastagDetailComponent,
    ChartsComponent,
    ElectricityChartComponent,
    RechargeChartComponent,
    TopupComponent,
    GiftCardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
