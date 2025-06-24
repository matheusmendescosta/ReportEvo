import { FormRepository } from "@/repositories/FormRepository";
import { Form } from "@prisma/client";

interface GetFormsServicesRequest {
  page?: number;
  limit?: number;
}

interface GetFormsServicesResponse {
  forms: Form[];
}

export class GetFormsServices {
  constructor(private readonly formRepository: FormRepository) {}

  async getAllForms({
    page,
    limit,
  }: GetFormsServicesRequest): Promise<GetFormsServicesResponse> {
    const forms = await this.formRepository.list();

    return { forms };
  }
}
