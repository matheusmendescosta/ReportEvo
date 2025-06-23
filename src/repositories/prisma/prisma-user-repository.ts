import { Prisma, User } from "@prisma/client";
import { UserRepository } from "../UserRepository";
import { prisma } from "@/lib/prisma";

export class PrismaUserRepository implements UserRepository {
  findAll(page?: number, limit?: number): Promise<User[]> {
    throw new Error("Method not implemented.");
  }
  findById(id: string): Promise<User | null> {
    throw new Error("Method not implemented.");
  }
  create(data: Prisma.UserCreateInput): Promise<User> {
    return prisma.user.create({ data });
  }
}
