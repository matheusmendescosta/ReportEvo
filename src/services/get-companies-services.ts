import { CompanyRepository } from "@/repositories/CompanyRepository";
import { Company } from "@prisma/client";

interface GetCompaniesServicesRequest {
  page?: number;
  limit?: number;
}

interface GetCompaniesServicesResponse {
  companies: Company[];
}

export class GetCompaniesServices {
  constructor(private readonly companyRepository: CompanyRepository) {}

  async getAllCompanies({
    page,
    limit,
  }: GetCompaniesServicesRequest): Promise<GetCompaniesServicesResponse> {
    const companies = await this.companyRepository.findAll(page, limit);

    return { companies };
  }
}
