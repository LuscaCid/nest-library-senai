import { Injectable } from "@nestjs/common";
import { Student } from "schemas/student.entity";

@Injectable()
export class StudentService 
{
    constructor() {}

    /**
     * @summary Resgate dos alunos de forma paginada
     * @param page 
     * @param limit 
     */
    async getStudents (page : number, limit : number ) 
    {  
        const data = await fetch("localhost:4000/alunos")
    }
    /**
     * @summary Adiciona alunos ao document json
     * @param student 
     */
    async addStudent (student : Student) 
    {
        //rota para adicionar student no json
        const response = await fetch("addStudent");
    }

    async deleteStudent (studentId : number) 
    {
        //rota para delecao de um aluno pelo seu id
        await fetch("");
    }
}