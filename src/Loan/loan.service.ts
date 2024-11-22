import { Injectable } from "@nestjs/common";
import { Loan } from "schemas/Loan.entity";
import { QueryDTO } from "src/Types/DefaultDTO";

@Injectable()
export class LoanService 
{
    async getLoans (queryDTO : QueryDTO) 
    {
        //rota para resgatar os emprestimos
        const loanData = await fetch("");
    }

    async getLoanByStudentId (studentId : number) 
    {
        //retorno de informacao mais refinado. retornar os emprestimos do aluno
        const data = await fetch("");
        return data;
    }

    /**
     * @summary editar a tabela de um para muitos, onde vai conter as informacoes do emprestimo, metodo pode editar a relacao das informacoes dentro desta colecao
     * @param newLoanData 
     * @returns 
     */
    async updateLoan (newLoanData : Loan) 
    {
        const updadted = await fetch("");
        return updadted 
    }

    /**
     * @summary Adiciona um novo emprestimo para um aluno
     * @created 
     */
    async addLoan (loan : Loan) 
    {
        //rota para adiicionar um emprestimo
        const data = await fetch("");
    }

    async deleteLoan (loanId : number) 
    {
        //rota para delecao de emprestimo
        const data = await fetch("");
        return data;
    }
    
}