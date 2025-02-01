import { Book } from './book';
export interface Author {
    ID :Number;
    _id:string,
    photo:string;
    firstName:string;
    lastName:string;
    dateOfBirth:string;
    book:Book;
}

