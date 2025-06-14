import { PrismaFormRepository } from "@/repositories/prisma/prisma-form-repository";
import { CreateFormService } from "@/services/create-form-service";
import { Request, Response } from "express";
import { z } from "zod";

const bodySchema = z.object({
  name: z.string(),
  description: z.string(),
  userId: z.string(),
  companyId: z.string(),
});

export const CreateFormController = async (
  request: Request,
  response: Response
) => {
  try {
    const { name, description, userId, companyId } = bodySchema.parse(
      request.body
    );

    const createFormService = new CreateFormService(new PrismaFormRepository());

    const { form } = await createFormService.execute({
      name,
      description,
      userId,
      companyId,
    });

    return response.status(201).json(form);
  } catch (error) {
    console.error("Error creating form:", error);
    return response.status(500).json({ message: "Internal Server Error" });
  }
};
