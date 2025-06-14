import { Company, Prisma } from "@prisma/client";
import { CompanyRepository } from "../CompanyRepository";
import { prisma } from "@/lib/prisma";

export class PrismaCompanyRepository implements CompanyRepository {
  create(data: Prisma.CompanyCreateInput): Promise<Company> {
    return prisma.company.create({ data });
  }
}
