import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { LoginPageComponent } from './login-page/login-page.component'
import { SiteLayoutComponent } from './shared/components/site-layout/site-layout.component'
import { AuthGuard } from './shared/services/authGuard.service'

//import { VendorListComponent } from './vendor-list/vendor-list.component'

// Define routes
const routes: Routes = [
    {
        path: '',
        component: SiteLayoutComponent,
        children: [
            { path: '', redirectTo: '/login', pathMatch: 'full' },
            { path: 'login', component: LoginPageComponent },
        ],
    },

    {
        path: '',
        component: SiteLayoutComponent,
        canActivate: [AuthGuard],
        children: [
            // { path: 'vendors', component: VendorListComponent },
        ],
    },
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
