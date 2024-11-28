import { Injectable } from "@nestjs/common";
import { Book } from "schemas/book.entity";
import { api } from "src/ServerConfig/api";
import { QueryDTO } from "src/Types/DefaultDTO";

@Injectable()
export class BookService 
{
    constructor () {}
    async getBooks (query : QueryDTO) 
    {
        try 
        {
            const data = await api.get("");
            return data;
        } catch (err : unknown)
        {
            return { error : err, statusCode : 500}
        }
    }

    async addOne (book : Book) 
    {
        //rota do jsonserver para adicao de livro
        const response = await api.post("");
    }

    async deleteBook (bookId : number) 
    {
        try 
        {
            //rota para delecao de livro
            await api.delete("");
        } catch (err : unknown) 
        {}
    }

    async updateBook (book : Book) 
    {
        //rota para atualizacao de livros
        const response = await api.put("")
        return response;
    }
}
