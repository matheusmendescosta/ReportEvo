import { FormResponseAnswerRepository } from "@/repositories/FormResponseAnswerRepository";
import { FormResponseAnswer } from "@prisma/client";

interface CreateFormResponseAnswerRequest {
  responseId: number;
  fieldId: number;
  value?: string | null;
}

interface CreateFormResponseAnswerResponse {
  formResponseAnswer: FormResponseAnswer;
}

export class CreateFormResponseAnswer {
  constructor(
    private formResponseAnswerRepository: FormResponseAnswerRepository
  ) {}

  async execute({
    responseId,
    fieldId,
    value,
  }: CreateFormResponseAnswerRequest): Promise<CreateFormResponseAnswerResponse> {
    const formResponseAnswer = await this.formResponseAnswerRepository.create({
      response: { connect: { id: responseId } },
      field: { connect: { id: fieldId } },
      value,
    });

    return { formResponseAnswer };
  }
}
