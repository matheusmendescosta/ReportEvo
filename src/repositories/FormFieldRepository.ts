import { FormField, Prisma } from "@prisma/client";

export interface FormFieldRepository {
  create(data: Prisma.FormFieldCreateInput): Promise<FormField>;
}
