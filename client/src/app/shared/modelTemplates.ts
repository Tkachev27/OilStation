export const SubsoilUserTemplate = {
    options: [
        { name: 'name', validators: ['text'] },
        { name: 'adress', validators: ['text'] },
    ],
    type: 'SubsoilUser',
}
export const FieldTemplate = {
    options: [
        { name: 'name', validators: ['text'] },
        { name: 'openDate', validators: ['date'] },
    ],
    type: 'Field',
}
export const WellTemplate = {
    options: [
        { name: 'code', validators: ['text'] },
        { name: 'depth', validators: ['number'] },
        { name: 'drillingDate', validators: ['date'] },
    ],
    type: 'Well',
}
export const ExtractionTemplate = {
    options: [
        { name: 'date', validators: ['date'] },
        { name: 'amount', validators: ['number'] },
    ],
    type: 'Extraction',
}
/*
1 список недропользоваателей по нажатию на 3 точки видно адрес 
есть кнопка выбрать и удалить

кнопка добавить


*/
