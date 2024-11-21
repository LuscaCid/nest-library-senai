import { Injectable } from "@nestjs/common";

@Injectable()
export class StudentService 
{
    constructor() {}

    async getStudents (page : number, limit : number ) 
    {  
        const data = await fetch("localhost:4000/alunos")
    }
}