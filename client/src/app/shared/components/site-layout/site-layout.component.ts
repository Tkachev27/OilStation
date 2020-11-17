import { Component, AfterViewInit, OnInit, ViewChild } from '@angular/core'
import { AuthService } from '../../services/auth.service'
import { Router } from '@angular/router'

@Component({
    selector: 'app-site-layout',
    templateUrl: './site-layout.component.html',
    styleUrls: ['./site-layout.component.scss'],
})
export class SiteLayoutComponent implements OnInit, AfterViewInit {
    links = [
        { url: '/home', name: 'Home' },

        // { url: '/warehouse', name: 'Products' },
        // { url: '/shopOrders', name: 'Orders' },
        // { url: '/about', name: 'About' },
        // { url: '/login', name: 'Log In' },
        // { url: '/login', name: 'Registeration' },
    ]

    @ViewChild('demoModal') input

    constructor(private auth: AuthService, private router: Router) {}
    ngAfterViewInit(): void {}

    ngOnInit(): void {}

    onPageChange(url: string) {}

    logout(event: Event) {
        event.preventDefault()
        this.auth.logout()
        this.router.navigate(['/login'])
    }
}
