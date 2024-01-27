import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';

interface User {
  id: string;
  name: string;
}

@Injectable()
export class UserRepository {
  constructor(private prismaService: PrismaService) {}

  async createUser(
    data: { name: string },
    transaction: Prisma.TransactionClient = this.prismaService,
  ): Promise<User> {
    return transaction.user.create({ data });
  }
}
