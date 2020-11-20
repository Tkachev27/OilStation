import { Component, OnInit } from '@angular/core'
import { Extraction, Field, SubsoilUser, Well } from '../shared/interfaces'
import {
    ExtractionTemplate,
    FieldTemplate,
    SubsoilUserTemplate,
    WellTemplate,
} from '../shared/modelTemplates'
import { ExtractionService } from '../shared/services/extraction.service'
import { FieldService } from '../shared/services/field.service'
import { MaterialService } from '../shared/services/Material.service'
import { SubsoilUserService } from '../shared/services/subsoilUser.service'
import { WellService } from '../shared/services/well.service'

@Component({
    selector: 'app-home-page',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
    subsoilUsers: Array<SubsoilUser> = []
    subsoilUserTemplate = SubsoilUserTemplate
    selectedSubsoilUser: SubsoilUser = {}
    userId = ''

    fields: Array<Field> = []
    fieldTemplate = FieldTemplate
    selectedField: Field = {}
    subsoilUserId = ''

    wells: Array<Well> = []
    wellTemplate = WellTemplate
    selectedWell: Well = {}
    fielId = ''

    extractions: Array<Extraction> = []
    extractionsShow: Array<Extraction> = []
    extractionTemplate = ExtractionTemplate
    selectedExtraction: Extraction = {}
    extractionsLoaded = false
    wellId = ''
    startDate
    endDate
    loading = false
    constructor(
        public subsoilUserService: SubsoilUserService,
        public fieldService: FieldService,
        public wellService: WellService,
        public extractionService: ExtractionService
    ) {}

    async ngOnInit() {
        this.loading = true
        let subsoilUserPromise = new Promise<Array<SubsoilUser>>(
            (resolve, reject) => {
                this.subsoilUserService.fetch().subscribe(
                    (subsoilUsers) => {
                        resolve(subsoilUsers)
                    },
                    (error) =>
                        reject(MaterialService.toast(error.error.message))
                )
            }
        )
        this.subsoilUsers = await subsoilUserPromise

        this.loading = false
    }
    updateSelectedUser(user: SubsoilUser) {
        this.fields = []
        this.wells = []
        this.extractions = []
        this.extractionsShow = []

        this.subsoilUserId = ''
        this.fielId = ''
        this.wellId = ''

        this.selectedField = {}
        this.selectedWell = {}
        this.selectedExtraction = {}

        this.selectedSubsoilUser = user
        this.subsoilUserId = this.selectedSubsoilUser._id
        this.fieldService.fetch(user._id).subscribe((fields) => {
            this.fields = fields
        })
    }
    updateUsers(user: SubsoilUser) {
        this.subsoilUsers.push(user)
    }
    deleteSelectedUser(user: SubsoilUser) {
        this.subsoilUserService.delete(user).subscribe((message) => {
            MaterialService.toast(message.message)
            if (message.message == 'Subsoil User delated.') {
                this.subsoilUsers.splice(
                    this.subsoilUsers.findIndex((p) => p._id == user._id),
                    1
                )
            }
        })
    }
    updateSelectedField(field: Field) {
        this.wells = []
        this.extractions = []
        this.extractionsShow = []

        this.fielId = ''
        this.wellId = ''

        this.selectedField = {}
        this.selectedWell = {}
        this.selectedExtraction = {}

        this.selectedField = field

        this.fielId = this.selectedField._id
        this.wellService.fetch(field._id).subscribe((wells) => {
            this.wells = wells
        })
    }
    updateFields(field: Field) {
        this.fields.push(field)
    }
    deleteSelectedField(field: Field) {
        this.fieldService.delete(field).subscribe((message) => {
            MaterialService.toast(message.message)
            if (message.message == 'Field delated.') {
                this.fields.splice(
                    this.fields.findIndex((p) => p._id == field._id),
                    1
                )
            }
        })
    }

    updateSelectedWell(well: Well) {
        this.extractions = []
        this.extractionsShow = []

        this.wellId = ''

        this.selectedWell = {}
        this.selectedExtraction = {}
        this.endDate = null
        this.startDate = null

        this.selectedWell = well
        this.extractionsLoaded = false

        this.wellId = this.selectedWell._id
    }
    onLoadExtraction() {
        this.extractionService
            .fetch(this.selectedWell._id, this.startDate, this.endDate)
            .subscribe((extractions) => {
                this.extractions = extractions
                for (let item of extractions) {
                    this.extractionsShow.push(item)
                }
                this.extractionsLoaded = true
            })
    }
    updateWells(well: Well) {
        this.wells.push(well)
    }
    deleteSelectedWell(well: Well) {
        this.wellService.delete(well).subscribe((message) => {
            MaterialService.toast(message.message)
            if (message.message == 'Well delated.') {
                this.wells.splice(
                    this.wells.findIndex((p) => p._id == well._id),
                    1
                )
            }
        })
    }

    updateSelectedExtraction(extraction: Extraction) {}
    updateExtractions(extraction: Extraction) {
        this.extractions.push(extraction)
        this.extractionsShow.push(extraction)
    }
    deleteSelectedExtraction(extraction: Extraction) {
        this.extractionService.delete(extraction).subscribe((message) => {
            MaterialService.toast(message.message)
            this.extractions.splice(
                this.extractions.findIndex((p) => p._id == extraction._id),
                1
            )
            this.extractionsShow.splice(
                this.extractionsShow.findIndex((p) => p._id == extraction._id),
                1
            )
        })
    }
    onChangeFilterDate() {
        this.extractionsShow = []

        if (this.startDate && !this.endDate) {
            for (let extraction of this.extractions) {
                if (extraction.date >= this.startDate) {
                    this.extractionsShow.push(extraction)
                }
            }
        }
        if (!this.startDate && this.endDate) {
            for (let extraction of this.extractions) {
                if (extraction.date <= this.endDate) {
                    this.extractionsShow.push(extraction)
                }
            }
        }
        if (this.startDate && this.endDate && this.startDate <= this.endDate) {
            for (let extraction of this.extractions) {
                if (
                    extraction.date <= this.endDate &&
                    extraction.date >= this.startDate
                ) {
                    this.extractionsShow.push(extraction)
                }
            }
        }
        if (!this.startDate && !this.endDate) {
            for (let extraction of this.extractions) {
                this.extractionsShow.push(extraction)
            }
        }
    }
}
