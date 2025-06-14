import { PrismaCompanyRepository } from "@/repositories/prisma/prisma-company-repository";
import { CreateCompanyService } from "@/services/create-company-service";
import { Request, Response } from "express";
import { z } from "zod";

const bodySchema = z.object({
  name: z.string(),
  cnpj: z.string().optional(),
});

export const CreateCompanyController = async (
  request: Request,
  response: Response
) => {
  try {
    const { name, cnpj } = bodySchema.parse(request.body);

    const createCompanyService = new CreateCompanyService(
      new PrismaCompanyRepository()
    );

    const { company } = await createCompanyService.execute({
      name,
      cnpj,
    });

    return response.status(201).json(company);
  } catch (error) {
    console.error("Error creating company:", error);
    return response.status(500).json({ message: "Internal Server Error" });
  }
};
