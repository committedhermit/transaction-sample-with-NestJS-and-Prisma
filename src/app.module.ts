import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
import { PrismaTransaction } from './prisma/prisma.transaction';
import { TaskRepository } from './task/task.repository';
import { UserRepository } from './user/user.repository';
import { Transaction } from './util/transaction';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    AppService,
    { provide: Transaction, useClass: PrismaTransaction },
    PrismaService,
    UserRepository,
    TaskRepository,
  ],
})
export class AppModule {}
