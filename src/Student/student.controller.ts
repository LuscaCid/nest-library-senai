import { Controller } from "@nestjs/common";

@Controller("student")
export class StudentController 
{
    constructor (
        private readonly studentService 
    ) 
    {}
}