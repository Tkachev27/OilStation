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
import { AuthLayoutComponent } from './shared/components/auth-layout/auth-layout.component'
import { RouterModule } from '@angular/router'

@NgModule({
    declarations: [
        AppComponent,
        SiteLayoutComponent,
        LoginPageComponent,
        RegisterPageComponent,
        AuthLayoutComponent,
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
