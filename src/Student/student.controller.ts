import { Body, Controller, Delete, Get, Param, Put, Query } from "@nestjs/common";
import { StudentService } from "./student.service";
import { QueryDTO } from "src/Types/DefaultDTO";
import { ApiTags } from "@nestjs/swagger";
import { Student } from "schemas/student.entity";

@ApiTags("Alunos")
@Controller("student")
export class StudentController 
{
    constructor (
        private readonly studentService : StudentService
    ) 
    {}

    @Get("/")
    async getStudents (@Query() queryDTO : QueryDTO) 
    {
        const data = await this.studentService.getStudents(queryDTO);
        return data;
    }

    @Delete("delete/:id_aluno")
    async deleteStudentById (@Param("id_aluno") id: number) 
    {
        const response = await this.studentService.deleteStudent(id)
        return response;
    }

    @Put("/")
    async editStudent (@Body() student : Student) 
    {
        const response = await this.studentService.updateStudent(student)
    }
}