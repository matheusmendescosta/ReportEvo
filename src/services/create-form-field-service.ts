import { FormFieldRepository } from "@/repositories/FormFieldRepository";
import { FieldType, FormField } from "@prisma/client";

interface CreateFormFieldRequest {
  formId: string;
  label: string;
  type: FieldType;
  isRequired: boolean;
  options?: Record<string, any>;
  order: number;
}

interface CreateFormFieldResponse {
  formField: FormField;
}

export class CreateFormFieldService {
  constructor(private formFieldRepository: FormFieldRepository) {}

  async execute({
    formId,
    label,
    type,
    isRequired,
    options,
    order,
  }: CreateFormFieldRequest): Promise<CreateFormFieldResponse> {
    const formField = await this.formFieldRepository.create({
      form: { connect: { id: formId } },
      label,
      type,
      isRequired,
      options,
      order,
    });

    return { formField };
  }
}
