import { Injectable } from '@nestjs/common';

@Injectable()
abstract class Transaction<Client = any> {
  abstract run<T>(fn: (client: Client) => Promise<T>): Promise<T>;
}

export { Transaction };
