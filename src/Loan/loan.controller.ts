import { Controller, Get, Param, Query } from "@nestjs/common";
import { LoanService } from "./loan.service";
import { ApiTags } from "@nestjs/swagger";
import { QueryDTO } from "src/Types/DefaultDTO";

@ApiTags("Emprestimos")
@Controller("emprestimo")
export class LoanController 
{
    constructor (
        private readonly loanService : LoanService
    ) 
    {}

    @Get("/todosEmprestimos")
    async getAllStudentsLoans(@Query() query : QueryDTO ) 
    {
        const data =await this.loanService.getLoans(query);
    }

    @Get("/emprestimosPorAluno/:id_aluno")
    async getAllStudentLoansByStudentId (@Param("id_aluno") id : number) 
    {
        const data = await this.loanService.getLoanByStudentId(id);
        return data;
    }

}