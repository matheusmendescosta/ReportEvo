import { Form, Prisma } from "@prisma/client";

export interface FormRepository {
  create(data: Prisma.FormCreateInput): Promise<Form>;
}
