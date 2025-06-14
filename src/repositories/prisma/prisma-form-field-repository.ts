import { Prisma, FormField } from "@prisma/client";
import { FormFieldRepository } from "../FormFieldRepository";
import { prisma } from "@/lib/prisma";

export class PrismaFormFieldRepository implements FormFieldRepository {
  create(data: Prisma.FormFieldCreateInput): Promise<FormField> {
    return prisma.formField.create({
      data,
    });
  }
}
