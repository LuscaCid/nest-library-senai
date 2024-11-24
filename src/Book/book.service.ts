import { Injectable } from "@nestjs/common";
import { Book } from "schemas/book.entity";
import { QueryDTO } from "src/Types/DefaultDTO";

@Injectable()
export class BookService 
{
    constructor () {}


    async getBooks (query : QueryDTO) 
    {
        try 
        {
            const data = await fetch("");
            return data;
        } catch (err : unknown)
        {
            return { error : err, statusCode : 500}
        }
    }

    async addOne (book : Book) 
    {
        //rota do jsonserver para adicao de livro
        const response = await fetch("");
    }

    async deleteBook (bookId : number) 
    {
        try 
        {
            //rota para delecao de livro
            await fetch("");
        } catch (err : unknown) 
        {}
    }

    async updateBook (book : Book) 
    {
        //rota para atualizacao de livros
        const response = await fetch("")
        return response;
    }
}
