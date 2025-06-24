import { PrismaCompanyRepository } from "@/repositories/prisma/prisma-company-repository";
import { PrismaFormRepository } from "@/repositories/prisma/prisma-form-repository";
import { GetCompaniesServices } from "@/services/get-companies-services";
import { GetFormService } from "@/services/get-form-service";
import { GetFormsServices } from "@/services/get-forms-service";
import { Request, Response } from "express";
import { z } from "zod";

const searchParamsSchema = z.object({
  page: z.coerce.number().optional(),
  limit: z.coerce.number().optional(),
});

export const GetFormsController = async (
  request: Request,
  response: Response
) => {
  try {
    const { page, limit } = searchParamsSchema.parse(request.query);

    const getFormService = new GetFormsServices(new PrismaFormRepository());

    const form = await getFormService.getAllForms({
      page,
      limit,
    });
    return response.status(200).json(form);
  } catch (error) {
    return response.status(500).json({ error: "Internal Server Error" });
  }
};
