import { PrismaCompanyRepository } from "@/repositories/prisma/prisma-company-repository";
import { GetCompaniesServices } from "@/services/get-companies-services";
import { Request, Response } from "express";
import { z } from "zod";

const searchParamsSchema = z.object({
  page: z.coerce.number().optional(),
  limit: z.coerce.number().optional(),
});

export const GetCompaniesController = async (
  request: Request,
  response: Response
) => {
  try {
    const { page, limit } = searchParamsSchema.parse(request.query);

    const getCompaniesService = new GetCompaniesServices(
      new PrismaCompanyRepository()
    );

    const companies = await getCompaniesService.getAllCompanies({
      page,
      limit,
    });
    console.log("Companies fetched:", companies);
    return response.status(200).json(companies);
  } catch (error) {
    return response.status(500).json({ error: "Internal Server Error" });
  }
};
