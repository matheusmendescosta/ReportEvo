import { FormResponseRepository } from "@/repositories/FormResponseRepository";
import { FormResponse } from "@prisma/client";

interface CreateFormResponseServiceRequest {
  formId: number;
  clientId: number | null;
  submittedAt: Date;
}
interface CreateFormResponseServiceResponse {
  formResponse: FormResponse;
}

export class CreateFormResponseService {
  constructor(private formResponseRepository: FormResponseRepository) {}

  async execute({
    formId,
    clientId,
    submittedAt,
  }: CreateFormResponseServiceRequest): Promise<CreateFormResponseServiceResponse> {
    const formResponse = await this.formResponseRepository.create({
      form: { connect: { id: formId } },
      clientId,
      submittedAt,
    });

    return { formResponse };
  }
}
