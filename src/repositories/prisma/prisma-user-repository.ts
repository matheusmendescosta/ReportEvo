import { Prisma, User } from "@prisma/client";
import { UserRepository } from "../UserRepository";
import { prisma } from "@/lib/prisma";

export class PrismaUserRepository implements UserRepository {
  create(data: Prisma.UserCreateInput): Promise<User> {
    return prisma.user.create({ data });
  }
}
