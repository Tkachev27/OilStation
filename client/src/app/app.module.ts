import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppComponent } from './app.component'
import { AppRoutingModule } from './app-routing.module'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'

import { SiteLayoutComponent } from './shared/components/site-layout/site-layout.component'

import { HomePageComponent } from './home-page/home-page.component'
import { SelectManagerComponent } from './shared/components/select-manager/select-manager.component'
import { LoaderComponent } from './shared/components/loader/loader.component'
import { CreateModalComponent } from './shared/components/create-modal/create-modal.component'

@NgModule({
    declarations: [
        AppComponent,
        SiteLayoutComponent,
        HomePageComponent,
        SelectManagerComponent,
        LoaderComponent,
        CreateModalComponent,
    ],
    imports: [
        AppRoutingModule,
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
