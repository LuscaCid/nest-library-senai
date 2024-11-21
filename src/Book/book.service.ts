import { Injectable } from "@nestjs/common";
import { Book } from "schemas/book.entity";
import { QueryDTO } from "src/Types/DefaultDTO";

@Injectable()
export class BookService 
{
    constructor () {}


    async getBooks (query : QueryDTO) 
    {}

    async addOne (book : Book) 
    {
        //rota do jsonserver
        const response = await fetch("");
    }
}
