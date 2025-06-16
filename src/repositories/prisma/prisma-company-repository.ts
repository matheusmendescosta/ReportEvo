import { Company, Prisma } from "@prisma/client";
import { CompanyRepository } from "../CompanyRepository";
import { prisma } from "@/lib/prisma";

export class PrismaCompanyRepository implements CompanyRepository {
  findAll(page?: number, limit?: number): Promise<Company[]> {
    const companies = prisma.company.findMany({
      skip: page && limit ? (page - 1) * limit : undefined,
      take: limit,
    });
    return companies;
  }

  findById(id: string): Promise<Company | null> {
    return prisma.company.findUnique({
      where: { id },
    });
  }
  
  create(data: Prisma.CompanyCreateInput): Promise<Company> {
    return prisma.company.create({ data });
  }
}
