import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { TaskRepository } from './task/task.repository';
import { UserRepository } from './user/user.repository';
import { Transaction } from './util/transaction';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly transaction: Transaction,
    private readonly userRepository: UserRepository,
    private readonly taskRepository: TaskRepository,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('sample')
  async test(): Promise<undefined> {
    await this.transaction.run(async (transaction) => {
      await this.userRepository.createUser(
        { name: new Date().toISOString() },
        transaction,
      );
      await this.taskRepository.createTask(
        { name: new Date().toISOString() },
        transaction,
      );
    });
  }
}
