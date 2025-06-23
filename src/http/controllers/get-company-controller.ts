import { PrismaCompanyRepository } from "@/repositories/prisma/prisma-company-repository";
import { GetCompanyService } from "@/services/get-company-service";
import { Request, Response } from "express";
import { z } from "zod";

const searchParamsSchema = z.object({ id: z.string() });

const GetCompanyController = async (request: Request, response: Response) => {
  try {
    const params = searchParamsSchema.parse(request.params);

    const getCompanyService = new GetCompanyService(
      new PrismaCompanyRepository()
    );
    const company = await getCompanyService.execute({ id: params.id });

    return response.status(200).json(company);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return response.status(400).json({ error: error.errors });
    }

    return response.status(400).json({ error: "Invalid request parameters" });
  }
};

export default GetCompanyController;
