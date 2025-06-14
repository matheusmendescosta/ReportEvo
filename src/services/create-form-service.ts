import { FormRepository } from "@/repositories/FormRepository";
import { Form } from "@prisma/client";

interface CreateFormServiceRequest {
  name: string;
  description: string | null;
  userId: string;
  companyId: string;
}

interface CreateFormServiceResponse {
  form: Form;
}

export class CreateFormService {
  constructor(private formRepository: FormRepository) {}

  async execute({
    name,
    description,
    companyId,
    userId,
  }: CreateFormServiceRequest): Promise<CreateFormServiceResponse> {
    const form = await this.formRepository.create({
      name,
      description,
      user: {
        connect: {
          id: userId,
        },
      },
      company: {
        connect: {
          id: companyId,
        },
      },
    });

    return { form };
  }
}
