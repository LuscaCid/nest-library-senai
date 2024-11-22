import { Injectable } from "@nestjs/common";
import { QueryDTO } from "src/Types/DefaultDTO";

@Injectable()
export class LoanService 
{
    async getLoans (queryDTO : QueryDTO) 
    {
        //rota para resgatar os emprestimos
        const loansData = await fetch("");
    }
}