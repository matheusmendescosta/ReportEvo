import { CompanyRepository } from "@/repositories/CompanyRepository";
import { PrismaCompanyRepository } from "@/repositories/prisma/prisma-company-repository";
import { Company } from "@prisma/client";

interface GetCompanyServiceRequest {
  id: string;
}

interface GetCompanyServiceResponse {
  company: Company | null;
}

export class GetCompanyService {
  constructor(private companyRepository: CompanyRepository) {}

  async execute({
    id,
  }: GetCompanyServiceRequest): Promise<GetCompanyServiceResponse> {
    const company = await this.companyRepository.findById(id);

    if (!company) {
      throw new Error("Company not found");
    }

    return {
      company,
    };
  }
}
