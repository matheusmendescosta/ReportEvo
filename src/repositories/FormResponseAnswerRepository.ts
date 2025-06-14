import { FormResponseAnswer, Prisma } from "@prisma/client";

export interface FormResponseAnswerRepository {
  create(
    data: Prisma.FormResponseAnswerCreateInput
  ): Promise<FormResponseAnswer>;
}
