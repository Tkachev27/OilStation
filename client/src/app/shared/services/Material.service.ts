import { ElementRef } from '@angular/core'
import M from 'materialize-css'

export interface MaterialInstance {
    open?(): void
    close?(): void
    destroy?(): void
}

export interface MaterialDatepicker extends MaterialInstance {
    date?: Date
}

export class MaterialService {
    static toast(message: string) {
        M.toast({ html: message })
    }

    static initSelect(ref: ElementRef): MaterialInstance {
        return M.FormSelect.init(ref.nativeElement)
    }

    static updateTextInputs() {
        M.updateTextFields()
    }

    static initModal(ref: ElementRef): MaterialInstance {
        return M.Modal.init(ref.nativeElement)
    }
}
