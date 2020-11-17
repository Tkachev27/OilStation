export interface Message {
    message: string
}
export interface User {
    email: string
    password: string
    admin: Boolean
}
export interface SubsoilUser {
    _id?: string
    name?: string
    adress?: string
    // userId?: string
}

export interface Field {
    _id?: string
    name: string
    openDate: Date
    subsoilUserId: string
}
export interface Well {
    _id?: string
    code: string
    depth: number
    drillingDate: Date
    fieldId: string
}
export interface Extraction {
    _id?: string
    date: Date
    amount: number
    wellId: string
}
