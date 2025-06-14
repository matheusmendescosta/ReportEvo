import { FormResponse, Prisma } from "@prisma/client";

export interface FormResponseRepository {
  create(data: Prisma.FormResponseCreateInput): Promise<FormResponse>;
}
