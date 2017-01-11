import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AdvancedComponentsApp } from './app.component';
import { SidebarItemComponent, SidebarComponent } from "./main/sidebar";
import { ObservableCmp, ObservableChangeDetectionSampleApp } from "./change-detection/observables";
import { OnPushCmp, DefaultCmp, OnPushChangeDetectionSampleApp } from "./change-detection/onpush";
import { TransclusionSampleApp, Message } from "./transclusion/transclusion";
import { IntroComponent } from "./main/intro_component";
import { HashLocationStrategy, LocationStrategy, CommonModule } from "@angular/common";
import { AppRoutesModule } from "./routes/app-routes.module";
import { HostSampleAppModule } from "./host/host";
import { HostSampleApp1Module } from "./host/steps/host_01";
import { HostSampleApp2Module } from "./host/steps/host_02";
import { HostSampleApp3Module } from "./host/steps/host_03";
import { HostSampleApp4Module } from "./host/steps/host_04";
import { StyleSampleAppModule } from "./styling/styling";
import { LifecycleSampleApp1Module } from "./lifecycle-hooks/lifecycle_01";
import { LifecycleSampleApp2Module } from "./lifecycle-hooks/lifecycle_02";
import { LifecycleSampleApp3Module } from "./lifecycle-hooks/lifecycle_03";
import { LifecycleSampleApp4Module } from "./lifecycle-hooks/lifecycle_04";
import { TabsSampleAppModule } from "./tabs/tabs";
import { ForTemplateSampleAppModule } from "./templates/for";
import { IfTemplateSampleAppModule } from "./templates/if";



@NgModule({
  declarations: [
    AdvancedComponentsApp,

    IntroComponent,
    TransclusionSampleApp,
    Message,
    OnPushChangeDetectionSampleApp,
    DefaultCmp,
    OnPushCmp,
    ObservableChangeDetectionSampleApp,
    ObservableCmp,
    SidebarComponent,
    SidebarItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CommonModule,

    AppRoutesModule,

    HostSampleAppModule,
    HostSampleApp1Module,
    HostSampleApp2Module,
    HostSampleApp3Module,
    HostSampleApp4Module,
    StyleSampleAppModule,
    LifecycleSampleApp1Module,
    LifecycleSampleApp2Module,
    LifecycleSampleApp3Module,
    LifecycleSampleApp4Module,
    TabsSampleAppModule,
    ForTemplateSampleAppModule,
    IfTemplateSampleAppModule,
  ],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AdvancedComponentsApp]
})
export class AppModule {
}
