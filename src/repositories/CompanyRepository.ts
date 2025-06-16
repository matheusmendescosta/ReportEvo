import { Company, Prisma } from "@prisma/client";

export interface CompanyRepository {
  create(data: Prisma.CompanyCreateInput): Promise<Company>;
  findAll(page?: number, limit?: number): Promise<Company[]>;
  findById(id: string): Promise<Company | null>;
}
