import {
    AfterViewInit,
    Component,
    ElementRef,
    EventEmitter,
    Input,
    OnDestroy,
    OnInit,
    Output,
    ViewChild,
} from '@angular/core'
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms'
import { SubsoilUser } from '../../interfaces'
import {
    MaterialInstance,
    MaterialService,
} from '../../services/Material.service'

@Component({
    selector: 'app-create-modal',
    templateUrl: './create-modal.component.html',
    styleUrls: ['./create-modal.component.scss'],
})
export class CreateModalComponent implements OnInit, AfterViewInit, OnDestroy {
    @ViewChild('modal') modalRef: ElementRef
    modal: MaterialInstance
    form: FormGroup
    fields: FormArray
    loadingModal = false
    @Input() id

    @Input() template
    @Input() service
    @Input() item: any
    @Output('onChangeEvent') onChange = new EventEmitter<SubsoilUser>()
    constructor() {}

    ngOnInit(): void {
        this.loadingModal = true
        this.fields = new FormArray([])
        this.form = new FormGroup({ fields: this.fields })
        for (let item of this.template.options) {
            const control = new FormControl(null, Validators.required)
            this.fields.push(control)
        }

        this.loadingModal = false
    }

    ngAfterViewInit() {
        this.modal = MaterialService.initModal(this.modalRef)
    }
    onAddItem() {
        this.modal.open()
        this.form.reset()
        MaterialService.updateTextInputs()
    }
    onEditItem() {
        this.modal.open()
        let list = []
        this.id = this.item.id

        for (let i = 0; i < this.template.options.length; i++) {
            list.push(this.item[this.template.options[i].name])
        }

        this.fields.patchValue(list)

        MaterialService.updateTextInputs()
    }
    onModalSubmit() {
        if (this.item) {
            for (let i = 0; i < this.template.options.length; i++) {
                this.item[
                    this.template.options[i].name
                ] = this.form.value.fields[i]
            }

            this.service.update(this.item).subscribe(
                (item) => {
                    MaterialService.toast('Updated')
                    this.onChange.emit(item)
                },
                (error) => MaterialService.toast(error.error.message)
            )
        } else {
            let data: any = {
                id: this.id,
            }
            for (let i = 0; i < this.template.options.length; i++) {
                data[this.template.options[i].name] = this.form.value.fields[i]
            }

            this.service.create(data).subscribe(
                (data) => {
                    MaterialService.toast('Created')
                    this.onChange.emit(data)
                },
                (error) => MaterialService.toast(error.error.message)
            )
        }

        this.modal.close()
    }
    onModalCancel() {
        this.modal.close()
    }
    ngOnDestroy() {
        this.modal.destroy()
    }
    onChangeField() {}
}
