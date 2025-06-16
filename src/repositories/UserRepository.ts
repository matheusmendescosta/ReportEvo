import { Prisma, User } from "@prisma/client";

export interface UserRepository {
  create(data: Prisma.UserCreateInput): Promise<User>;
  findAll(page?: number, limit?: number): Promise<User[]>;
  findById(id: string): Promise<User | null>;
}
