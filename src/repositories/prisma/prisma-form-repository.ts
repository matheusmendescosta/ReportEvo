import { prisma } from "@/lib/prisma";
import { Form, Prisma } from "@prisma/client";
import { FormRepository } from "../FormRepository";

export class PrismaFormRepository implements FormRepository {
  async list(): Promise<Form[]> {
    return await prisma.form.findMany();
  }

  async findById(id: string): Promise<Form | null> {
    return await prisma.form.findUnique({
      where: { id },
    });
  }

  async create(data: Prisma.FormCreateInput): Promise<Form> {
    return await prisma.form.create({ data });
  }
}
