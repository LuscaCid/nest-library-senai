import { Module } from '@nestjs/common';
import { StudentModule } from './Student/student.module';
import { LoanModule } from './Loan/loan.module';
import { BookModule } from './Book/book.module';

@Module({
  imports: [
    StudentModule,
    LoanModule,
    BookModule
  ],

})
export class AppModule {}
