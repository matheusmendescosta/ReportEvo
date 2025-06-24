import { FormRepository } from "@/repositories/FormRepository";
import { Form } from "@prisma/client";

interface GetFormServiceRequest {
  id: string;
}

interface GetFormServiceResponse {
  form: Form | null;
}

export class GetFormService {
  constructor(private formRepository: FormRepository) {}

  async execute({
    id,
  }: GetFormServiceRequest): Promise<GetFormServiceResponse> {
    const form = await this.formRepository.findById(id);

    if (!form) {
      throw new Error("Form not found");
    }

    return {
      form,
    };
  }
}
