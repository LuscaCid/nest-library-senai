import { Injectable } from "@nestjs/common";
import { Student } from "schemas/student.entity";
import { QueryDTO } from "src/Types/DefaultDTO";

@Injectable()
export class StudentService 
{
    constructor() {}

    /**
     * @summary Resgate dos alunos de forma paginada
     * @param page 
     * @param limit 
     */
    async getStudents (query : QueryDTO) 
    {  
        const data = await fetch("localhost:4000/alunos")
        return data;
    }
    /**
     * @summary Adiciona alunos ao document json
     * @param student 
     */
    async addStudent (student : Student) 
    {
        //rota para adicionar student no json
        const response = await fetch("addStudent");
        return response;
    }

    async deleteStudent (studentId : number) 
    {
        //rota para delecao de um aluno pelo seu id
        await fetch("");
    }
    async updateStudent (student : Student) 
    {
        //ROTA PARA ATUALIZACAO DAS INFORMACOES REFERENTES AO ALUNO
        const response = await fetch('');
    }
}