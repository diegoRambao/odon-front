import { Person } from './Person'

export class User{
    id;
    password;
    typeUser ;
    person;
    constructor(){
        this.password= '';
        this.person = new Person();
        this.typeUser = 'P';
    }
}