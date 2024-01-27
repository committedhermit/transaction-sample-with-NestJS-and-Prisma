import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';

interface Task {
  id: string;
  name: string;
}

@Injectable()
export class TaskRepository {
  constructor(private prismaService: PrismaService) {}

  async createTask(
    data: { name: string },
    transaction: Prisma.TransactionClient = this.prismaService,
  ): Promise<Task> {
    return transaction.task.create({ data });
  }
}
