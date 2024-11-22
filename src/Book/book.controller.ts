import { Body, Controller, Get, Post, Query } from "@nestjs/common";
import { BookService } from "./book.service";
import { QueryDTO } from "src/Types/DefaultDTO";
import { Student } from "schemas/student.entity";
import { Book } from "schemas/book.entity";
import { ApiTags } from "@nestjs/swagger";

@ApiTags("Livros")
@Controller("book")
export class BookController 
{
    constructor(
        private readonly bookService : BookService
    ) {}

    @Get("/")
    async getBooks(@Query()query : QueryDTO) 
    {
        return await this.bookService.getBooks(query);
    }

    @Post("addOne")
    async addOne (@Body()book : Book) 
    {
        const response = await this.bookService.addOne(book);
        return {
            response,
            message:  "Livro criado com sucesso"
        }
    }
}