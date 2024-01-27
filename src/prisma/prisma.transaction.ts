import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { Transaction } from '../util/transaction';
import { PrismaService } from './prisma.service';

@Injectable()
export class PrismaTransaction
  implements Transaction<Prisma.TransactionClient>
{
  constructor(private readonly prisma: PrismaService) {}

  async run<T>(
    fn: (client: Prisma.TransactionClient) => Promise<T>,
  ): Promise<T> {
    return this.prisma.$transaction(async (client) => {
      return await fn(client);
    });
  }
}
