import { Component, OnInit } from '@angular/core'
import { SubsoilUser } from '../shared/interfaces'
import { SubsoilUserTemplate } from '../shared/modelTemplates'
import { SubsoilUserService } from '../shared/services/subsoilUser.service'

@Component({
    selector: 'app-home-page',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
    subsoilUsers: Array<SubsoilUser> = [
        {
            _id: 'id1',
            name: 'name1',
            adress: 'adress1',
        },
        {
            _id: 'id2',
            name: 'name2',
            adress: 'adress2',
        },
        {
            _id: 'id3',
            name: 'name3',
            adress: 'adress3',
        },
    ]
    subsoilUserTemplate = SubsoilUserTemplate
    selectedSubsoilUser: SubsoilUser = {}
    userId = ''

    constructor(private subsoilUserService: SubsoilUserService) {}

    ngOnInit(): void {}
    updateSelectedUser(user: SubsoilUser) {
        this.selectedSubsoilUser = user
        console.log(this.selectedSubsoilUser)
    }
    updateUsers(user: SubsoilUser) {
        console.log(user)
    }
    deleteSelectedUser(user: SubsoilUser) {
        console.log(user)
    }
}
