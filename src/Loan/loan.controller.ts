import { Controller } from "@nestjs/common";
import { LoanService } from "./loan.service";

@Controller("emprestimo")
export class LoanController 
{
    constructor (
        private readonly loanService : LoanService
    ) 
    {}
}