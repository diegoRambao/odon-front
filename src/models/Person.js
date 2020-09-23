import { Gender } from './Gender'
import { TypeDocument } from './TypeDocument'

export class Person{
    id;
    name;
    surname;
    secondSurname;
    email;
    numberPhone;
    imgUrl;
    gender;
    documentNumber;
    typeDocument;
    constructor(){
        this.name = '';
        this.surname = '';
        this.secondSurname = '';
        this.email = '';
        this.numberPhone = '';
        this.imgUrl = '';
        this.gender = new Gender();
        this.documentNumber = '';
        this.typeDocument = new TypeDocument();
    }
}