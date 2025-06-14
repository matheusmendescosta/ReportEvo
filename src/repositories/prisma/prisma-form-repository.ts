import { prisma } from "@/lib/prisma";
import { Form, Prisma } from "@prisma/client";
import { FormRepository } from "../FormRepository";

export class PrismaFormRepository implements FormRepository {
  async create(data: Prisma.FormCreateInput): Promise<Form> {
    return await prisma.form.create({ data });
  }
}
