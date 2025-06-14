import { CompanyRepository } from "@/repositories/CompanyRepository";
import { Company } from "@prisma/client";

interface CreateCompanyServiceRequest {
  name: string;
  cnpj?: string;
}

interface CreateCompanyServiceResponse {
  company: Company;
}

export class CreateCompanyService {
  constructor(private companyRepository: CompanyRepository) {}

  async execute({
    name,
    cnpj,
  }: CreateCompanyServiceRequest): Promise<CreateCompanyServiceResponse> {
    const company = await this.companyRepository.create({
      name,
      cnpj,
    });

    return { company };
  }
}
