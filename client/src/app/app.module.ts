import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppComponent } from './app.component'
import { AppRoutingModule } from './app-routing.module'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { TokenInterceptor } from './shared/services/token.interceptor'
import { SiteLayoutComponent } from './shared/components/site-layout/site-layout.component'
import { RegisterPageComponent } from './register-page/register-page.component'
import { LoginPageComponent } from './login-page/login-page.component'
import { HomePageComponent } from './home-page/home-page.component';
import { SelectManagerComponent } from './shared/components/select-manager/select-manager.component';
import { LoaderComponent } from './shared/components/loader/loader.component';
import { CreateModalComponent } from './shared/components/create-modal/create-modal.component'

@NgModule({
    declarations: [
        AppComponent,
        SiteLayoutComponent,
        LoginPageComponent,
        RegisterPageComponent,
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
    providers: [
        { provide: HTTP_INTERCEPTORS, multi: true, useClass: TokenInterceptor },
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
