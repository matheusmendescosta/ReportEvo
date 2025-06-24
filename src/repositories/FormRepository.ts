import { Form, Prisma } from "@prisma/client";

export interface FormRepository {
  create(data: Prisma.FormCreateInput): Promise<Form>;
  findById(id: string): Promise<Form | null>;
  list(): Promise<Form[]>;
}
