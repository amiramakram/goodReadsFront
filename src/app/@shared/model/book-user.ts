import { Book } from "./book";
import { User } from "./user";
export interface BookUser {
  id: string;
  rating: number;
  status: string;
  user: User
}
export interface Reviews {
  changeLike: ChangeLike
  _id: string
  comment: string
  like: boolean
  date: Date
  book: Book
  user: User
  id: number

}
////////////////////


export interface ChangeLike {
  like: boolean
  dateLike: string
}

